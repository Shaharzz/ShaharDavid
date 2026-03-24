import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import ContactSection from './sections/ContactSection'
import FloatingLines from './components/reactbits/floating-lines/FloatingLines'

function App() {
  return (
    <div className="app-root">
      <div className="app-background" aria-hidden="true">
        <FloatingLines
          lineCount={[8, 6, 4]}
          lineDistance={[10, 8, 6]}
          linesGradient={['#38bdf8', '#7c3aed', '#ec4899']}
          parallaxStrength={0.18}
          animationSpeed={1.1}
        />
      </div>

      <main className="page-shell">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
