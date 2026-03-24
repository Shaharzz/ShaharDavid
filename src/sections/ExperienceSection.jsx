const experience = [
  {
    company: 'Tech Company',
    role: 'Software Engineer',
    period: '2023 - Present',
    impact: 'Delivered production features across frontend and backend with CI/CD.'
  },
  {
    company: 'Startup Studio',
    role: 'Full-Stack Engineer',
    period: '2021 - 2023',
    impact: 'Built MVPs quickly and improved product stability through testing.'
  }
]

function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <h2>Experience</h2>
      <div className="grid">
        {experience.map((job) => (
          <article className="card" key={`${job.company}-${job.role}`}>
            <h3>
              {job.role} - {job.company}
            </h3>
            <p>{job.period}</p>
            <p>{job.impact}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection

