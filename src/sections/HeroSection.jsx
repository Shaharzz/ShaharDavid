import ReactBitsPlaceholder from '../components/reactbits/ReactBitsPlaceholder'

function HeroSection() {
  return (
    <section className="section" id="home">
      <p className="tag">Software Engineer</p>
      <h1>Hi, I build performant products for the web.</h1>
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

