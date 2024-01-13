import connectMongoDB from '@/api/config/mongodb'
import Click from '@/api/models/Click'
import Contact from '@/api/models/Contact'
import Page from '@/api/models/Page'
import Section from '@/api/models/Section'
import Session from '@/api/models/Session'
import User from '@/api/models/User'
import { NextRequest, NextResponse } from 'next/server'

import { addCORSHeaders, expectedAuth } from './utils'

// Check for CORS preflight request
export const OPTIONS = () => {
  const response = NextResponse.json({ status: 204 })

  addCORSHeaders(response)

  return response
}

export const GET = async (request: NextRequest) => {
  try {
    // Check for valid authorization header
    const authHeader = request.headers.get('Authorization')

    if (authHeader !== expectedAuth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectMongoDB()

    const models = [User, Session, Page, Section, Click, Contact]

    const [users, sessions, pages, sections, clicks, contacts] =
      await Promise.all(models.map(model => model.find({})))

    const response = NextResponse.json(
      { users, sessions, pages, sections, clicks, contacts },
      { status: 200 }
    )
    addCORSHeaders(response)

    return response
  } catch (error) {
    console.error(error)

    const response = NextResponse.json({ error }, { status: 500 })
    addCORSHeaders(response)
    return response
  }
}
