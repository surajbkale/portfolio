import { Sidebar } from "@/components/layout/Sidebar";
import { Navigation } from "@/components/layout/Navigation";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ThoughtsSection } from "@/components/sections/ThoughtsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-orange-500/30 selection:text-orange-500">
      <Navigation />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
          
          {/* Left Sidebar Space - on desktop this is a spacer for the fixed sidebar */}
          <div className="w-full lg:w-[380px] flex-shrink-0 pt-32 lg:pt-0">
            <Sidebar />
          </div>

          {/* Right Content Area */}
          <div className="flex-1 lg:pl-12 pt-8 lg:pt-32 pb-32 max-w-[900px]">
            <div className="space-y-32">
              <div id="experience">
                <ExperienceSection />
              </div>
              
              <div id="projects">
                <ProjectsSection />
              </div>

              <div id="tools">
                <ToolsSection />
              </div>

              <div id="blog">
                <ThoughtsSection />
              </div>

              <div id="contact">
                <ContactSection />
              </div>
            </div>
            
            <footer className="mt-32 border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
              <p>Made with ❤️ in Next.js & Tailwind CSS</p>
            </footer>
          </div>
          
        </div>
      </div>
    </main>
  );
}
