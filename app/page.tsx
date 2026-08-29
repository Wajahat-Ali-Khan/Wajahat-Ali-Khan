import { Hero } from "@/components/Hero";
import { StickyNav } from "@/components/StickyNav";
import { ConsultingServices } from "@/components/ConsultingServices";
import { ProjectSpreads } from "@/components/ProjectSpread";
import { ConsultingProcess } from "@/components/ConsultingProcess";
import { SystemsProfile } from "@/components/SystemsProfile";
import { InfraSpecs } from "@/components/InfraSpecs";
import { Lectures } from "@/components/Lectures";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative z-10">
      <StickyNav />
      <Hero />
      <ConsultingServices />
      <ProjectSpreads />
      <ConsultingProcess />
      <SystemsProfile />
      <InfraSpecs />
      <Lectures />
      <Contact />
    </main>
  );
}
