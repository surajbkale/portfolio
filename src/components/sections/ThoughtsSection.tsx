import { ArrowUpRight } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export function ThoughtsSection() {
  const { thoughts } = portfolioData;

  return (
    <section className="py-20">
      <h2 className="text-6xl md:text-8xl font-bold mb-16 uppercase tracking-tighter leading-none">
        <span className="text-white block">Design</span>
        <span className="text-[#333333] block">Thoughts</span>
      </h2>

      <div className="flex flex-col gap-12">
        {thoughts.map((post) => (
          <a 
            key={post.id} 
            href="#"
            className="group block border-b border-white/10 pb-12 transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors max-w-xl">
                {post.title}
              </h3>
              <ArrowUpRight className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" />
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8 line-clamp-3">
              {post.summary}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
