import { NextRequest, NextResponse } from 'next/server'

import { sendMail } from '../../../../services/mail'
import connectMongoDB from '../../config/mongodb'
import Contact from '../../models/Contact'

export const POST = async (request: NextRequest) => {
  try {
    const [body] = await Promise.all([request.json(), connectMongoDB()])

    const { data, emailHTMLString } = body

    const newContact = await Contact.create({
      email: data.email,
      message: data.message,
      privacyPolicyAccepted: data.privacyPolicyAccepted
    })
    console.log('New contact: ', newContact)

    const info = await sendMail(emailHTMLString)
    console.log('Email sent: ', info.response)

    return NextResponse.json({ status: 200 })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ error }, { status: 500 })
  }
}
