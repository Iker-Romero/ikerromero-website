import nodemailer from 'nodemailer'

export const sendMail = async (text: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: 'ikersoftdev@gmail.com',
    subject: '✅ New Lead Contact 📲',
    text
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error)
    } else {
      console.log(`Email sent: ${info.response}`)
    }
  })
}
