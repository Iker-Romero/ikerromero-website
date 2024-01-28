import nodemailer from 'nodemailer'

import { EMAIL } from '../consts'

type Info = {
  response: string
}

export const sendMail = async (emailHTMLString: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: EMAIL,
    subject: '✅ New Lead Contact 📲',
    html: emailHTMLString
  }

  return new Promise<Info>((resolve, reject) =>
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve(info)
      }
    })
  )
}
