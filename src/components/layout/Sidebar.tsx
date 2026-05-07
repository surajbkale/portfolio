import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export function Sidebar() {
  const { profile } = portfolioData;

  return (
    <div className="w-full lg:w-[380px] lg:sticky lg:top-8 h-auto lg:h-[calc(100vh-4rem)] bg-white dark:bg-white text-black rounded-[32px] p-8 flex flex-col items-center shadow-xl">
      <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-[24px] overflow-hidden mb-6 bg-gradient-to-br from-orange-500 to-orange-700">
        {/* Decorative dashed circles placeholder */}
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full border-2 border-dashed border-white/30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full border-2 border-dashed border-white/30" />
        
        {profile.imageUrl ? (
          <img src={profile.imageUrl} alt={profile.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-full h-full bg-black/40 mix-blend-overlay"></div>
          </div>
        )}
      </div>

      <h1 className="text-4xl font-bold mb-2 tracking-tight">{profile.name}</h1>
      
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white mb-6 mt-2 relative z-10">
        <Flame className="w-5 h-5 fill-current" />
      </div>

      <div className="relative text-center px-4 mb-10 w-full">
         <div className="absolute left-0 top-1/2 w-full h-[2px] border-t-2 border-dashed border-orange-200 -z-10 rounded-full"></div>
         <p className="text-gray-600 text-lg leading-relaxed bg-white inline-block px-4">{profile.bio}</p>
      </div>

      <div className="flex items-center gap-6 mt-auto">
        {profile.social.linkedin && (
          <Link href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </Link>
        )}
        {profile.social.github && (
          <Link href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </Link>
        )}
        {profile.social.twitter && (
          <Link href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </Link>
        )}
      </div>
    </div>
  );
}
