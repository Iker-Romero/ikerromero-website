import Session from '@/api/models/Session'
import User from '@/api/models/User'
import { NextRequest, NextResponse } from 'next/server'

import { sendMail } from '../../../../services/mail'
import connectMongoDB from '../../config/mongodb'
import Contact from '../../models/Contact'

export const POST = async (request: NextRequest) => {
  try {
    const [body] = await Promise.all([request.json(), connectMongoDB()])

    const { data, emailHTMLString } = body
    const { pageId, sessionId, userId } = data

    const newContact = await Contact.create({
      ...data,
      page: pageId,
      session: sessionId,
      user: userId
    })
    console.log('New contact: ', newContact)

    User.findByIdAndUpdate(userId, {
      $push: { contactSubmissions: newContact._id }
    })

    Session.findByIdAndUpdate(sessionId, {
      $push: { contactSubmissions: newContact._id }
    })

    const info = await sendMail(emailHTMLString)
    console.log('Email sent: ', info.response)

    return NextResponse.json({ status: 200 })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ error }, { status: 500 })
  }
}
