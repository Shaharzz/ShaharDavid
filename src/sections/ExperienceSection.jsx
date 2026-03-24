const experience = [
  {
    role: 'Math and Python Teaching Assistant',
    company: 'SCE College',
    period: '2023-Present',
    highlights: [
      'Teach Python and advanced mathematics courses including Calculus and Linear Algebra to preparatory and first-year students.',
      'Develop lessons, tutor, and support student achievement through strong analytical and problem-solving skills.'
    ]
  },
  {
    role: 'Hardware & Software Technician',
    company: 'Self-Employed',
    period: '2019-Present',
    highlights: [
      'Expert in diagnosing and repairing PC and mobile hardware, including microsoldering and board-level repairs.',
      'Optimized Android/iOS performance and provided on-site hardware upgrades to enhance device reliability.'
    ]
  },
  {
    role: 'IT & Database Lead',
    company: 'Shviro College',
    period: '2017-2018',
    highlights: [
      'Managed SQL & Access databases for Ministry of Education security projects and optimized cross-departmental IT infrastructure.'
    ]
  }
]

function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <h2>Work Experience</h2>
      <div className="grid">
        {experience.map((job) => (
          <article className="card" key={`${job.company}-${job.role}`}>
            <h3>{job.role}</h3>
            <p className="experience-company">{job.company}</p>
            <p className="experience-period">{job.period}</p>
            <ul className="experience-list">
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
