import { useState } from "react";
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
import { nav, quickSummary } from "./data/portfolio";

const NAV_IDS = nav.map((n) => n.id);

export default function App() {
  useScrollReveal();
  const active = useActiveSection(NAV_IDS);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen text-ink">
      <ParallaxBackground />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-16 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <Topbar />

      <div className="mx-auto flex max-w-[1500px] flex-col lg:flex-row">
        <Sidebar active={active} />

        <main id="main-content" tabIndex={-1} className="min-w-0 flex-1 px-4 pb-16 sm:px-6 lg:px-10">
          <HeroPanel />
          <section aria-label="Quick introduction" className="reveal my-6 border-y border-line py-5">
            <p className="max-w-5xl text-[15px] leading-relaxed text-ink-soft md:text-base">
              {quickSummary}
            </p>
          </section>
          <StatsRow />
          <AboutPanel />
          <ExperienceTimeline />
          <ProjectsPanel selectedSkill={selectedSkill} onClearSkill={() => setSelectedSkill(null)} />
          <SkillsMatrix selectedSkill={selectedSkill} onSelectSkill={setSelectedSkill} />
          <CertsEducation />
          <BuildingPanel />
          <ContactPanel />
        </main>
      </div>
    </div>
  );
}
