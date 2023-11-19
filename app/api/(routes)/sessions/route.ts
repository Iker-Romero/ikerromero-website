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
    const { ip, url: href } = request
    const userAgent = getUserAgent(request)

    const [body] = await Promise.all([request.json(), connectMongoDB()])

    const { siteLoadDate, sectionsData } = body
    let { userId } = body

    const geolocationResponse = await axios.get(
      // `https://api.ipgeolocation.io/ipgeo?apiKey=${IPGEOLOCATION_API_KEY}&ip=${ip}`
      `https://api.ipgeolocation.io/ipgeo?apiKey=${IPGEOLOCATION_API_KEY}&ip=86.127.230.229`
    )

    const sections = await Section.insertMany(sectionsData)

    const time = Date.now() - new Date(siteLoadDate).getTime()

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
      startDate: siteLoadDate,
      user: userId,
      userAgent,
      geolocation: geolocationResponse.data,
      pages: [page],
      time
    })

    await User.findByIdAndUpdate(userId, {
      sessions: [newSession]
    })

    return NextResponse.json({ userId }, { status: 200 })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ error }, { status: 500 })
  }
}
