"use client";

import Link from "next/link";
import { Search, PenTool, Link2, ScanEye, Settings } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const tabs = [
    { id: "audit", name: "Website SEO", icon: "search_insights" },
    { id: "spy", name: "Competitor Analysis", icon: "compare_arrows" },
    { id: "content", name: "Keyword Research", icon: "key" },
    { id: "outreach", name: "Rank Tracking", icon: "show_chart" },
  ];

  return (
    <nav className="hidden md:flex flex-col h-screen py-8 fixed left-0 top-0 w-[280px] border-r border-slate-800/50 shadow-2xl bg-slate-950/60 backdrop-blur-md z-40 font-sans text-sm tracking-wide text-slate-300">
      <div className="px-6 mb-8">
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400">Smart SEO Maker</h1>
        <p className="text-slate-500 mt-1 text-[14px] leading-[1.5]">AI Optimization Suite</p>
      </div>
      <div className="px-6 mb-6">
        <button className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white py-2 rounded-lg font-medium hover:scale-[0.98] transition-transform duration-200">
          New Project
        </button>
      </div>
      <ul className="flex-1 space-y-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`w-full relative flex items-center px-6 py-3 transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600/10 to-transparent text-violet-400 border-l-4 border-violet-600 after:absolute after:inset-0 after:bg-violet-500/5 after:blur-xl"
                    : "text-slate-500 hover:bg-slate-800/30 hover:text-slate-100"
                } active:scale-[0.98] transition-transform duration-200`}
              >
                <span className="material-symbols-outlined mr-3">{tab.icon}</span>
                {tab.name}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-auto">
        <button className="w-full flex items-center text-slate-500 px-6 py-3 transition-colors hover:bg-slate-800/30 hover:text-slate-100">
          <span className="material-symbols-outlined mr-3">settings</span>
          Settings
        </button>
      </div>
    </nav>
  );
}
