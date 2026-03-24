import ReactBitsPlaceholder from '../components/reactbits/ReactBitsPlaceholder'

const projects = [
  {
    title: 'Realtime Collaboration Platform',
    description: 'Built a multi-tenant app with presence, comments, and live updates.'
  },
  {
    title: 'Developer Analytics Dashboard',
    description: 'Created dashboarding flows for events, funnels, and performance metrics.'
  },
  {
    title: 'E-commerce Checkout Optimization',
    description: 'Reduced checkout drop-off by redesigning critical UX paths.'
  }
]

function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
      <ReactBitsPlaceholder
        componentName="Project Cards Grid"
        description="Suggested: replace this area with a reactbits.dev cards grid or hover-effect cards component."
      />
    </section>
  )
}

export default ProjectsSection

