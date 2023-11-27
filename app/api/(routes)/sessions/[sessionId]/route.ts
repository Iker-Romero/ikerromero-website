import connectMongoDB from 'api/config/mongodb'
import Session from 'api/models/Session'
import { NextRequest, NextResponse } from 'next/server'

type Params = { params: { sessionId: string } }

export const PATCH = async (
  request: NextRequest,
  { params: { sessionId } }: Params
) => {
  try {
    const [body] = await Promise.all([request.json(), connectMongoDB()])

    const { sessionStartDate } = body

    await Session.findByIdAndUpdate(sessionId, {
      time: Date.now() - new Date(sessionStartDate).getTime()
    })

    return NextResponse.json({ status: 200 })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ error }, { status: 500 })
  }
}
