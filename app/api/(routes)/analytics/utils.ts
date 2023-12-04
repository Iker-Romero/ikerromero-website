import { NextResponse } from 'next/server'

export const expectedAuth = `Basic ${Buffer.from(
  `${process.env.ADMIN_USERNAME}:${process.env.ADMIN_PASSWORD}`
).toString('base64')}`

export const addCORSHeaders = (response: NextResponse) => {
  response.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Authorization, Content-Type'
  )
}
