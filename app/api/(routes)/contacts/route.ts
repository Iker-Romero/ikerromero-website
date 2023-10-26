import { NextRequest, NextResponse } from 'next/server'

import { sendMail } from '../../../[locale]/service/mail'
import connectMongoDB from '../../config/mongodb'
import Contact from '../../models/Contact'

export const POST = async (request: NextRequest) => {
  try {
    const [body] = await Promise.all([request.json(), connectMongoDB()])

    const { data, emailHTMLString } = body
    console.log('emailHTMLString', emailHTMLString)

    const newContact = await Contact.create(data)
    console.log('New contact: ', newContact)

    const info = await sendMail(emailHTMLString)
    console.log('Email sent: ', info.response)

    return NextResponse.json(newContact, { status: 200 })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ error }, { status: 500 })
  }
}
