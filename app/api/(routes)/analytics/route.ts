import connectMongoDB from 'api/config/mongodb'
import Click from 'api/models/Click'
import Contact from 'api/models/Contact'
import Page from 'api/models/Page'
import Section from 'api/models/Section'
import Session from 'api/models/Session'
import User from 'api/models/User'
import { NextRequest, NextResponse } from 'next/server'

const expectedAuth = `Basic ${Buffer.from(
  `${process.env.ADMIN_USERNAME}:${process.env.ADMIN_PASSWORD}`
).toString('base64')}`

export const GET = async (request: NextRequest) => {
  try {
    const authHeader = request.headers.get('Authorization')

    if (authHeader !== expectedAuth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectMongoDB()

    const models = [User, Session, Page, Section, Click, Contact]

    const [users, sessions, pages, sections, clicks, contacts] =
      await Promise.all(models.map(model => model.find({})))

    return NextResponse.json(
      { users, sessions, pages, sections, clicks, contacts },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)

    return NextResponse.json({ error }, { status: 500 })
  }
}
