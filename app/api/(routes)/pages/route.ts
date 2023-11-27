import connectMongoDB from 'api/config/mongodb'
import Page from 'api/models/Page'
import Section from 'api/models/Section'
import Session from 'api/models/Session'
import { ObjectId } from 'mongoose'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (request: NextRequest) => {
  try {
    const href = request.headers.get('referer')

    const [body] = await Promise.all([request.json(), connectMongoDB()])

    const { timeSinceSessionStart, sections: sectionsData, sessionId } = body

    const sections = await Section.insertMany(sectionsData)
    const sectionsIds = sections.map(({ _id }: { _id?: ObjectId }) => _id)

    const page = await Page.create({
      href,
      timeSinceSessionStart,
      time: 0,
      sections: sectionsIds
    })

    await Session.findByIdAndUpdate(sessionId, {
      $push: { pages: page._id }
    })

    return NextResponse.json({ pageId: page._id }, { status: 200 })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ error }, { status: 500 })
  }
}
