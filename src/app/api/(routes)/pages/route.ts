import connectMongoDB from '@/api/config/mongodb'
import Page from '@/api/models/Page'
import Section from '@/api/models/Section'
import Session from '@/api/models/Session'
import { ObjectId } from 'mongoose'
import { NextRequest, NextResponse } from 'next/server'

import { SectionData } from '../../../../../globals'

export const POST = async (request: NextRequest) => {
  try {
    const URL = request.headers.get('referer')

    const [body] = await Promise.all([request.json(), connectMongoDB()])

    const { timeSinceSessionStart, sections: sectionsData, sessionId } = body

    const page = await Page.create({
      URL,
      timeSinceSessionStart,
      time: 0
    })

    const sections = await Section.insertMany(
      sectionsData.map((sectionData: SectionData) => ({
        ...sectionData,
        URL,
        page: page._id
      }))
    )
    const sectionsIds = sections.map(({ _id }: { _id?: ObjectId }) => _id)

    await Page.findByIdAndUpdate(page._id, {
      $set: { sections: sectionsIds }
    })

    await Session.findByIdAndUpdate(sessionId, {
      $push: { pages: page._id }
    })

    return NextResponse.json({ pageId: page._id.toString() }, { status: 200 })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ error }, { status: 500 })
  }
}
