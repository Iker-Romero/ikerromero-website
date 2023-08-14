import { NextRequest, NextResponse } from 'next/server'

import connectMongoDB from '../../config/mongodb'
import Contact from '../../models/Contact'

export const POST = async (request: NextRequest) => {
  try {
    const [body] = await Promise.all([request.json(), connectMongoDB()])

    const newContact = await Contact.create(body)

    return NextResponse.json(newContact, { status: 200 })
  } catch (error) {
    console.error(error)
  }
}
