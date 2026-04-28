"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass px-8 py-3 rounded-full border-white/5 relative">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-300">
              <span className="material-symbols-outlined text-white text-xl font-bold">
                query_stats
              </span>
            </div>
            <span className="font-black text-xl tracking-tightest text-white">
              SmartSEO
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-[13px] font-semibold uppercase tracking-widest text-slate-400">
            <Link className="hover:text-white transition-colors" href="#">
              Platform
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Solutions
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Changelog
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Pricing
            </Link>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              className="hidden sm:block text-sm font-bold text-slate-400 hover:text-white transition-all mr-2"
              href="/login"
            >
              Sign In
            </Link>
            <Link
              className="hidden sm:block bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              href="/dashboard"
            >
              Start Free
            </Link>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-24 left-6 right-6 glass border border-white/10 rounded-3xl p-6 flex flex-col gap-6 shadow-2xl md:hidden z-[101]">
            <div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white transition-colors py-2"
                href="#"
              >
                Platform
              </Link>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white transition-colors py-2"
                href="#"
              >
                Solutions
              </Link>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white transition-colors py-2"
                href="#"
              >
                Changelog
              </Link>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white transition-colors py-2"
                href="#"
              >
                Pricing
              </Link>
            </div>
            <div className="flex flex-col gap-4 mt-2 pt-6 border-t border-white/10">
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center text-sm font-bold text-slate-300 hover:text-white transition-all py-2"
                href="/login"
              >
                Sign In
              </Link>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-white text-black text-center px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                href="/dashboard"
              >
                Start Free
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
