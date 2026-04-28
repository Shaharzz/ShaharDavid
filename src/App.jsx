import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import EducationSection from './sections/EducationSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import ContactSection from './sections/ContactSection'
import FloatingLines from './components/reactbits/floating-lines/FloatingLines'
import BorderGlow from './components/reactbits/border-glow/BorderGlow'

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
        <BorderGlow
          className="section-glow"
          backgroundColor="#0b1220"
          fillOpacity={0.16}
          glowRadius={22}
          glowIntensity={0.72}
          edgeSensitivity={38}
        >
          <HeroSection />
        </BorderGlow>
        <BorderGlow
          className="section-glow"
          backgroundColor="#0b1220"
          fillOpacity={0.16}
          glowRadius={22}
          glowIntensity={0.72}
          edgeSensitivity={38}
        >
          <EducationSection />
        </BorderGlow>
        <BorderGlow
          className="section-glow"
          backgroundColor="#0b1220"
          fillOpacity={0.16}
          glowRadius={22}
          glowIntensity={0.72}
          edgeSensitivity={38}
        >
          <AboutSection />
        </BorderGlow>
        <BorderGlow
          className="section-glow"
          backgroundColor="#0b1220"
          fillOpacity={0.16}
          glowRadius={22}
          glowIntensity={0.72}
          edgeSensitivity={38}
        >
          <ProjectsSection />
        </BorderGlow>
        <BorderGlow
          className="section-glow"
          backgroundColor="#0b1220"
          fillOpacity={0.16}
          glowRadius={22}
          glowIntensity={0.72}
          edgeSensitivity={38}
        >
          <SkillsSection />
        </BorderGlow>
        <BorderGlow
          className="section-glow"
          backgroundColor="#0b1220"
          fillOpacity={0.16}
          glowRadius={22}
          glowIntensity={0.72}
          edgeSensitivity={38}
        >
          <ExperienceSection />
        </BorderGlow>
        <BorderGlow
          className="section-glow"
          backgroundColor="#0b1220"
          fillOpacity={0.16}
          glowRadius={22}
          glowIntensity={0.72}
          edgeSensitivity={38}
        >
          <ContactSection />
        </BorderGlow>
      </main>
    </div>
  )
}

export default App
