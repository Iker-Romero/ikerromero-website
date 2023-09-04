import Email from '../Email/Email'

export const toastOptions = {
  success: {
    title: 'Message Sent!',
    description:
      "Thank you for reaching out! I'll be in touch soon to discuss how we can collaborate.",
    duration: 8000
  },
  error: {
    title: 'Error',
    description: (
      <>
        We encountered an issue processing your request. Feel free to email me
        at <Email /> or try again later.
      </>
    ),
    duration: 12000
  }
}
