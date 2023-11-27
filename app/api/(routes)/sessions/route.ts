import connectMongoDB from 'api/config/mongodb'
import Page from 'api/models/Page'
import Section from 'api/models/Section'
import Session from 'api/models/Session'
import User from 'api/models/User'
import axios from 'axios'
import {
  NextRequest,
  NextResponse,
  userAgent as getUserAgent
} from 'next/server'

const { IPGEOLOCATION_API_KEY } = process.env

export const POST = async (request: NextRequest) => {
  try {
    const { ip } = request
    const href = request.headers.get('referer')

    const userAgent = getUserAgent(request)

    const [body] = await Promise.all([request.json(), connectMongoDB()])

    const { sessionStartDate, sections: sectionsData } = body
    let { userId } = body

    const geolocationResponse = await axios.get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${IPGEOLOCATION_API_KEY}&ip=${ip}`
    )

    const sections = await Section.insertMany(sectionsData)

    const time = Date.now() - new Date(sessionStartDate).getTime()

    const page = await Page.create({
      href,
      timeSinceSessionStart: 0,
      time,
      sections
    })

    if (!userId) {
      const newUser = await User.create({})

      userId = newUser._id
    }

    const newSession = await Session.create({
      startDate: sessionStartDate,
      user: userId,
      userAgent,
      geolocation: geolocationResponse.data,
      pages: [page],
      time
    })

    await User.findByIdAndUpdate(userId, {
      session: { $push: newSession._id }
    })

    return NextResponse.json(
      { userId, sessionId: newSession._id, pageId: page._id },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)

    return NextResponse.json({ error }, { status: 500 })
  }
}
