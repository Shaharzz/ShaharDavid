import ProfileCard from '../components/reactbits/profile-card/ProfileCard'

function AboutSection() {
  return (
    <section className="section" id="about">
      <h2>About</h2>
      <div className="about-layout">
        <p className="about-text">
          Computer Science graduate seeking a Cybersecurity Researcher and Detection
          Engineering role, offering strong algorithmic foundations and a math-heavy
          problem-solving approach. Proficient in Python, Java, and C# across Windows
          and Kali environments, with specialized experience in CTFs, reverse
          engineering, and network security using YARA and Suricata.
        </p>

        <div className="about-card-wrap">
          <ProfileCard
            name="Shahar"
            title="Cybersecurity Researcher"
            handle="shahar"
            status="Open to Work"
            contactText="Contact"
            avatarUrl="/images/profile-placeholder.svg"
            miniAvatarUrl="/images/profile-placeholder.svg"
            iconUrl=""
            grainUrl=""
            onContactClick={() => window.open('mailto:you@example.com', '_self')}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
