import { ArrowUpRight } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section className="py-20 lg:pt-32">
      <h2 className="text-6xl md:text-8xl font-bold mb-16 uppercase tracking-tighter leading-none">
        <span className="text-white block">12 Years Of</span>
        <span className="text-[#333333] block">Experience</span>
      </h2>

      <div className="flex flex-col gap-12">
        {experience.map((item) => (
          <div key={item.id} className="group relative border-b border-white/10 pb-12 transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                {item.company}
              </h3>
              <ArrowUpRight className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" />
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-6">
              {item.role}
            </p>
            
            <span className="text-sm text-gray-500 tracking-wider">
              {item.duration}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
