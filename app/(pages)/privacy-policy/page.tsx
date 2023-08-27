import Link from '@/components/Link/Link'
import ObjectList from '@/components/ObjectList/ObjectList'
import ownerInfo from 'utils/ownerInfo'

const PrivacyPolicy = () => {
  const { name, address, email } = ownerInfo

  const identification = [
    { key: 'Name', value: name },
    { key: 'Address', value: address },
    { key: 'Email', value: email, type: 'email' }
  ]

  return (
    <>
      <h1>Privacy Policy</h1>

      <h2>Identification of the Data Controller</h2>
      <ObjectList objects={identification} />

      <h2>Data Collection</h2>
      <p>
        When using my website, you might be asked to provide certain personal
        information to contact me. The data I collect is:
      </p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number (optional)</li>
        <li>Any message you wish to include when reaching out</li>
      </ul>

      <h2>Use of Data</h2>
      <p>I collect this data exclusively for:</p>
      <ul>
        <li>Responding to inquiries and/or requests.</li>
        <li>
          Directly communicating with you if you wish to hire my services.
        </li>
      </ul>

      <h2>Data Storage</h2>
      <p>
        To manage the information collected, I use MongoDB, which helps me
        securely store contact information. Additionally, to ensure I&apos;m
        aware of requests, I use Gmail and Nodemailer to send automated
        notifications to my professional email. I do not share your data with
        third parties beyond the mentioned tools, which are essential for the
        operation of my website.
      </p>

      <h2>Security</h2>
      <p>
        I am committed to ensuring that your information is secure. I
        continuously seek to implement and improve my security procedures to
        ensure the safety of the data I collect.
      </p>

      <h2>User Rights</h2>
      <p>
        In accordance with Spanish and European legislation, I grant you the
        rights of Access, Rectification, Cancellation, and Opposition (ARCO
        rights). If you wish to exercise these rights, you can email me at{' '}
        <Link href={`mailto:${email}`} variant="underlined">
          {email}
        </Link>
        . To ensure the authenticity of the request, you must do so from the
        email you initially used on my site.
      </p>

      <h2>Duration of Data Retention</h2>
      <p>
        I retain data indefinitely. However, you can request its removal at any
        time.
      </p>

      <h2>Changes to the Privacy Policy</h2>
      <p>
        I may update this Privacy Policy as needed. Any updates or changes will
        be posted on this page for your reference.
      </p>
    </>
  )
}

export default PrivacyPolicy
