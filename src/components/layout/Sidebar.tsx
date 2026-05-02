import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export function Sidebar() {
  const { profile } = portfolioData;

  return (
    <div className="w-full lg:w-[380px] lg:fixed lg:top-8 lg:left-8 h-auto lg:h-[calc(100vh-4rem)] bg-white dark:bg-white text-black rounded-[32px] p-8 flex flex-col items-center shadow-xl">
      <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-[24px] overflow-hidden mb-6 bg-gradient-to-br from-orange-500 to-orange-700">
        {/* Decorative dashed circles placeholder */}
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full border-2 border-dashed border-white/30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full border-2 border-dashed border-white/30" />
        
        {/* Real image would go here. For now, a placeholder that looks like the silhouette */}
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-full h-full bg-black/40 mix-blend-overlay"></div>
        </div>
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
        <Link href={profile.social.dribbble} className="text-orange-500 hover:text-orange-600 transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm8.48 10c0-1.84-.61-3.55-1.64-4.91l-4.7 1.54c.75 1.59 1.34 3.32 1.76 5.14 1.48-.48 2.82-1.35 3.86-2.52 1.05 1.3 1.69 2.94 1.69 4.75h-1zm-9.48-8c1.84 0 3.55.61 4.91 1.64l-1.54 4.7c-1.59-.75-3.32-1.34-5.14-1.76.48-1.48 1.35-2.82 2.52-3.86-1.3-1.05-2.94-1.69-4.75-1.69v1zm-7 8c0 1.84.61 3.55 1.64 4.91l4.7-1.54c-.75-1.59-1.34-3.32-1.76-5.14-1.48.48-2.82 1.35-3.86 2.52C3.25 10.15 2.61 8.51 2.61 6.7h1zm9.48 8c-1.84 0-3.55-.61-4.91-1.64l1.54-4.7c1.59.75 3.32 1.34 5.14 1.76-.48 1.48-1.35 2.82-2.52 3.86 1.3 1.05 2.94 1.69 4.75 1.69v-1z"/></svg>
        </Link>
        <Link href={profile.social.twitter} className="text-orange-500 hover:text-orange-600 transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
        </Link>
        <Link href={profile.social.instagram} className="text-orange-500 hover:text-orange-600 transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </Link>
        <Link href={profile.social.youtube} className="text-orange-500 hover:text-orange-600 transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
        </Link>
      </div>
    </div>
  );
}
