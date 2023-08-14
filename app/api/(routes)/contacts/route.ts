import { NextRequest, NextResponse } from 'next/server'

import { connectMongoDB } from '../../config/mongodb'
import Contact from '../../models/Contact'

export const POST = async (request: NextRequest) => {
  const [body] = await Promise.all([request.json(), connectMongoDB()])
  console.log('body', body)
  const newContact = await Contact.create(body)
  console.log('newContact', newContact)
  return NextResponse.json(newContact, { status: 200 })
}
