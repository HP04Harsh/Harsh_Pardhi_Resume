import { ParallaxBackground } from "./components/ParallaxBackground";
import { Topbar } from "./components/Topbar";
import { Sidebar } from "./components/Sidebar";
import { HeroPanel } from "./components/HeroPanel";
import { StatsRow } from "./components/StatsRow";
import { AboutPanel } from "./components/AboutPanel";
import { SkillsMatrix } from "./components/SkillsMatrix";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { ProjectsPanel } from "./components/ProjectsPanel";
import { CertsEducation } from "./components/CertsEducation";
import { ContactPanel } from "./components/ContactPanel";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useActiveSection } from "./hooks/useActiveSection";
import { nav } from "./data/portfolio";

const NAV_IDS = nav.map((n) => n.id);

export default function App() {
  useScrollReveal();
  const active = useActiveSection(NAV_IDS);

  return (
    <div className="relative min-h-screen text-ink">
      <ParallaxBackground />
      <Topbar />

      <div className="mx-auto flex max-w-[1500px]">
        <Sidebar active={active} />

        <main className="min-w-0 flex-1 px-4 pb-16 sm:px-6 lg:px-10">
          <HeroPanel />
          <StatsRow />
          <AboutPanel />
          <SkillsMatrix />
          <ExperienceTimeline />
          <ProjectsPanel />
          <CertsEducation />
          <ContactPanel />
        </main>
      </div>
    </div>
  );
}
