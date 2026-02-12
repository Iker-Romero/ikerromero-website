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

import { BASE_URL, HEX_ACCENT_GOLD, HEX_PRIMARY_MEDIUM, HEX_TEXT_LIGHT } from 'consts'

type Props = {
  email: string
  message: string
}

const LeadEmail = ({ email, message }: Props) => {
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
          backgroundColor: HEX_PRIMARY_MEDIUM,
          padding: '1rem',
          color: HEX_TEXT_LIGHT,
          borderRadius: '1rem'
        }}
      >
        <Heading as="h1" style={{ color: HEX_ACCENT_GOLD }}>
          New Lead
        </Heading>
        <Text style={{ color: HEX_TEXT_LIGHT }}>
          Potential client has contacted you through{' '}
          <Button
            href={BASE_URL}
            style={{
              textUnderlineOffset: '0.25rem',
              textDecoration: `underline ${HEX_TEXT_LIGHT} solid 0.125rem`
            }}
          >
            {BASE_URL.replace(/^https?:\/\//, '')}
          </Button>
          .
        </Text>
        <Heading as="h2" style={{ color: HEX_ACCENT_GOLD }}>
          Email:
        </Heading>
        <Text style={{ color: HEX_TEXT_LIGHT }}>{email}</Text>
        <Heading as="h2" style={{ color: HEX_ACCENT_GOLD }}>
          Message:
        </Heading>
        <Text style={{ color: HEX_TEXT_LIGHT }}>{message}</Text>
      </Body>
    </Html>
  )
}

export default LeadEmail
