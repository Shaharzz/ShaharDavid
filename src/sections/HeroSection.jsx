import DecryptedText from '../components/DecryptedText'
import ReactBitsPlaceholder from '../components/reactbits/ReactBitsPlaceholder'

function HeroSection() {
  return (
    <section className="section" id="home">
      <p className="tag">Software Engineer</p>
      <h1 className="hero-title">
        Hi, I&apos;m{' '}
        <DecryptedText
          text="Shahar David!!!!!!!"
          animateOn="view"
          sequential
          speed={45}
          maxIterations={14}
          className="hero-name"
          encryptedClassName="hero-name-encrypted"
        />
      </h1>
      <p>
        I design and ship full-stack applications with clean architecture, modern UX,
        and strong engineering quality.
      </p>
      <ReactBitsPlaceholder
        componentName="Animated Hero / CTA"
        description="Suggested: paste a hero, animated button, or text reveal component from reactbits.dev."
      />
    </section>
  )
}

export default HeroSection
