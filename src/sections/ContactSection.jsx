import ReactBitsPlaceholder from '../components/reactbits/ReactBitsPlaceholder'

function ContactSection() {
  return (
    <section className="section" id="contact">
      <h2>Contact</h2>
      <p>
        Let&apos;s build something impactful. Reach out at{' '}
        <a href="mailto:you@example.com">you@example.com</a>.
      </p>
      <ReactBitsPlaceholder
        componentName="Contact Form / CTA"
        description="Suggested: paste a reactbits.dev form, spotlight button, or magnetic CTA component."
      />
    </section>
  )
}

export default ContactSection
