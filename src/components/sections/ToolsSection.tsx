import portfolioData from "@/data/portfolio.json";

export function ToolsSection() {
  const { tools } = portfolioData;

  return (
    <section className="py-20">
      <h2 className="text-6xl md:text-8xl font-bold mb-16 uppercase tracking-tighter leading-none">
        <span className="text-white block">Premium</span>
        <span className="text-[#333333] block">Tools</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => {
          return (
            <div 
              key={tool.id} 
              className="flex items-center gap-6 p-6 rounded-[24px] bg-[#141414] border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="w-16 h-16 rounded-[16px] bg-white flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                {tool.image ? (
                  <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                )}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
                <p className="text-gray-400">{tool.category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
