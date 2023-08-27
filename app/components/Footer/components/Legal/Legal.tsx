import Link from '@/components/Link/Link'

import legalSections from './data'

const Legal = () => {
  return (
    <div>
      <h4>Legal</h4>
      <ul>
        {legalSections.map(({ name, link }) => (
          <li key={name}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Legal
