import DecryptedText from '../components/DecryptedText'

function HeroSection() {
  return (
    <section className="section" id="home">
      <div>
        <span className="tag">Software Engineer</span>
        <span className="tag">Cybersecurity Researcher</span>
        <span className="tag">Detection Engineering</span>
      </div>
      <h1 className="hero-title">
        Hi, I&apos;m{' '}
        <DecryptedText
          text="Shahar David"
          animateOn="view"
          sequential
          speed={85}
          maxIterations={14}
          className="hero-name"
          encryptedClassName="hero-name-encrypted"
        />
      </h1>
    </section>
  )
}

export default HeroSection
