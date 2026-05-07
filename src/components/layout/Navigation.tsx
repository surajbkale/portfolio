"use client";

import { Home, Folder, Briefcase, Wrench, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, href: "/" },
    { icon: Briefcase, href: "#experience" },
    { icon: Folder, href: "#projects" },
    { icon: Wrench, href: "#tools" },
    { icon: Mail, href: "#contact" },
  ];

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#1c1c1c] border border-white/5 shadow-2xl backdrop-blur-md">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={index}
              href={item.href}
              className={`p-3 rounded-full transition-all duration-300 ${
                isActive 
                  ? "bg-[#2a2a2a] text-white" 
                  : "text-gray-400 hover:text-white hover:bg-[#2a2a2a]"
              }`}
            >
              <Icon className="w-5 h-5" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
