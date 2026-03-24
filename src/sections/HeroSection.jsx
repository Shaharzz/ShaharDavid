import DecryptedText from '../components/DecryptedText'

function HeroSection() {
  return (
    <section className="section" id="home">
      <p className="tag">Software Engineer</p>
      <h1 className="hero-title">
        Hi, I&apos;m{' '}
        <DecryptedText
          text="Shahar David"
          animateOn="view"
          sequential
          speed={45}
          maxIterations={14}
          className="hero-name"
          encryptedClassName="hero-name-encrypted"
        />
      </h1>
    </section>
  )
}

export default HeroSection
