import { NextRequest, NextResponse } from 'next/server'

import { sendMail } from '../../../[locale]/service/mail'
import connectMongoDB from '../../config/mongodb'
import Contact from '../../models/Contact'

export const POST = async (request: NextRequest) => {
  try {
    const [body] = await Promise.all([request.json(), connectMongoDB()])

    const newContact = await Contact.create(body)

    if (newContact) {
      sendMail(
        'Potential client has contacted you trough ikerromero.com:\n\r' +
          JSON.stringify(body)
      )
    }

    return NextResponse.json(newContact, { status: 200 })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ error }, { status: 500 })
  }
}
