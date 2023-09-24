'use client'

import H1 from '@/components/H1/H1'
import Link from '@/components/Link/Link'

const NotFound404 = () => {
  return (
    <div>
      <H1>404</H1>
      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <br />
      <p>
        Go back to{' '}
        <Link href="/#" variant="underlined">
          homepage
        </Link>
        .
      </p>
    </div>
  )
}

export default NotFound404
