import Link from '../Link/Link'

const Email = () => {
  const email = 'ikersoftdev@gmail.com'

  return (
    <Link href={`mailto:${email}`} target="_blank" variant="underlined">
      {email}
    </Link>
  )
}

export default Email
