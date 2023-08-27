import Link from '@/components/Link/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { socialMedia } from './data'

const AboutMe = () => {
  return (
    <div>
      <h4>About me</h4>
      <div>
        {socialMedia.map(({ name, icon, link }) => (
          <Link key={name} href={link} target="_blank">
            {name}
            {icon && <FontAwesomeIcon {...{ icon }} />}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AboutMe
