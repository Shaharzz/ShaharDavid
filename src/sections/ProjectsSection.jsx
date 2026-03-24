const projects = [
  {
    title: 'Cyber Threat Detection in Email Traffic Using YARA and Suricata',
    githubUrl: 'https://github.com/Shaharzz/YARA-Project',
    bullets: [
      'Built a Python security tool leveraging YARA rules to detect and classify suspicious files and patterns for malware analysis and threat-hunting workflows.',
      'Automated rule execution and results parsing/reporting to produce repeatable, maintainable analysis with clear, actionable outputs.'
    ]
  },
  {
    title: 'SocketLink Client-Server (C++)',
    githubUrl: 'https://github.com/Shaharzz/client-server-cpp',
    bullets: [
      'Developed a C++ client-server networking application using socket-based communication, implementing a request/response workflow and connection lifecycle handling.',
      'Strengthened distributed-systems fundamentals by structuring clean client/server separation and adding robust message and error handling with practical debugging and testing of network interactions.'
    ]
  }
]

function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="grid projects-grid">
        {projects.map((project) => (
          <article className="card project-card" key={project.title}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <a
                className="project-link"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <ul className="project-list">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
