import connectMongoDB from 'api/config/mongodb'
import Click from 'api/models/Click'
import Page from 'api/models/Page'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (request: NextRequest) => {
  try {
    const [body] = await Promise.all([request.json(), connectMongoDB()])

    const { id, timeUntilEvent, pageId } = body

    const click = await Click.create({
      id,
      timeUntilEvent,
      page: pageId
    })

    await Page.findByIdAndUpdate(pageId, {
      $push: { clicks: click._id }
    })

    return NextResponse.json({ status: 200 })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ error }, { status: 500 })
  }
}
