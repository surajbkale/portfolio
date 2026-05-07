import { ArrowUpRight } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section className="py-20">
      <h2 className="text-6xl md:text-8xl font-bold mb-16 uppercase tracking-tighter leading-none">
        <span className="text-white block">Recent</span>
        <span className="text-[#333333] block">Projects</span>
      </h2>

      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.link}
            className="group flex flex-col md:flex-row items-start md:items-center gap-8 pb-12 border-b border-white/10 hover:border-white/20 transition-all"
          >
            {/* Image Placeholder */}
            <div className="w-full md:w-48 aspect-video rounded-[16px] bg-[#1a1a1a] flex items-center justify-center overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
               <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 mix-blend-overlay"></div>
               <div className="w-3/4 h-3/4 rounded-lg bg-[#2a2a2a] shadow-2xl transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500"></div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400">
                {project.category}
              </p>
            </div>

            <ArrowUpRight className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
          </a>
        ))}
      </div>
    </section>
  );
}
