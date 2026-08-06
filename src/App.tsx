import { ParallaxBackground } from "./components/ParallaxBackground";
import { Topbar } from "./components/Topbar";
import { Sidebar } from "./components/Sidebar";
import { HeroPanel } from "./components/HeroPanel";
import { StatsRow } from "./components/StatsRow";
import { AboutPanel } from "./components/AboutPanel";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { ProjectsPanel } from "./components/ProjectsPanel";
import { SkillsMatrix } from "./components/SkillsMatrix";
import { CertsEducation } from "./components/CertsEducation";
import { BuildingPanel } from "./components/BuildingPanel";
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
          <ExperienceTimeline />
          <ProjectsPanel />
          <SkillsMatrix />
          <CertsEducation />
          <BuildingPanel />
          <ContactPanel />
        </main>
      </div>
    </div>
  );
}
