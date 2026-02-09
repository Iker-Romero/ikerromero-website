'use client'

import {
  Body,
  Button,
  Font,
  Head,
  Heading,
  Html,
  Text
} from '@react-email/components'

import { BASE_URL } from 'consts'

type Props = {
  email: string
  message: string
}

const LeadEmail = ({ email, message }: Props) => {
  const primaryMedium = '#0e2a3a'
  const accentGold = '#daa658'
  const textColorLight = '#e6e6e6'

  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Exo"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=Exo:wght@400;500;600;700&display=swap',
            format: 'woff2'
          }}
          fontStyle="normal"
        />
      </Head>
      <Body
        style={{
          backgroundColor: primaryMedium,
          padding: '1rem',
          color: textColorLight,
          borderRadius: '1rem'
        }}
      >
        <Heading as="h1" style={{ color: accentGold }}>
          New Lead
        </Heading>
        <Text style={{ color: textColorLight }}>
          Potential client has contacted you through{' '}
          <Button
            href={BASE_URL}
            style={{
              textUnderlineOffset: '0.25rem',
              textDecoration: `underline ${textColorLight} solid 0.125rem`
            }}
          >
            {BASE_URL.replace(/^https?:\/\//, '')}
          </Button>
          .
        </Text>
        <Heading as="h2" style={{ color: accentGold }}>
          Email:
        </Heading>
        <Text style={{ color: textColorLight }}>{email}</Text>
        <Heading as="h2" style={{ color: accentGold }}>
          Message:
        </Heading>
        <Text style={{ color: textColorLight }}>{message}</Text>
      </Body>
    </Html>
  )
}

export default LeadEmail
