"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("audit");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<any>(null);

  const handleAction = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAuditResult(null);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch data");
      }

      const data = await response.json();
      setAuditResult(data);
    } catch (error: any) {
      console.error(error);
      alert(`Oops: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const formatSchema = (schemaString: string) => {
    try {
      return JSON.stringify(JSON.parse(schemaString), null, 2);
    } catch {
      return schemaString;
    }
  };

  return (
    <div className="bg-[#131313] text-[#e5e2e1] font-sans min-h-screen flex selection:bg-[#d0bcff] selection:text-[#3c0091]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 flex flex-col md:ml-[280px] min-h-screen relative overflow-y-auto">
        {/* TopAppBar */}
        <header className="flex justify-between items-center h-16 px-8 w-full fixed top-0 right-0 md:left-[280px] z-50 border-b border-slate-800/50 shadow-sm bg-slate-950/40 backdrop-blur-lg text-sm text-slate-200">
          <div className="flex items-center gap-4">
            <h2 className="text-[24px] leading-[1.3] text-violet-500 font-extrabold tracking-tight">Dashboard</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block focus-within:ring-1 focus-within:ring-violet-500/50 rounded-lg">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input
                className="bg-[#0a0a0a] border border-slate-700 rounded-lg pl-10 pr-4 py-1.5 focus:outline-none focus:border-violet-500 text-slate-200 w-64 transition-all focus:shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                placeholder="Search..."
                type="text"
              />
            </div>
            <button className="hover:text-violet-300 transition-all text-slate-400"><span className="material-symbols-outlined">notifications</span></button>
            <button className="hover:text-violet-300 transition-all text-slate-400"><span className="material-symbols-outlined">help_outline</span></button>
            <button className="hover:text-violet-300 transition-all text-slate-400"><span className="material-symbols-outlined">account_circle</span></button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 md:p-8 pt-24 md:pt-32 max-w-7xl mx-auto w-full space-y-8">
          
          {activeTab === "audit" && (
            <>
              {/* Site Audit Hero */}
              <section className="bg-[rgba(18,18,18,0.6)] backdrop-blur-[12px] border border-[#1e293b] rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between">
                  <div className="flex-1">
                    <h2 className="text-[32px] leading-[1.2] font-semibold tracking-[-0.02em] mb-2 text-[#e9ddff]">Run Site Audit</h2>
                    <p className="text-[16px] leading-[1.6] text-slate-400 mb-6">Analyze your website for critical SEO issues, performance bottlenecks, and accessibility improvements.</p>
                    
                    <form onSubmit={handleAction} className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
                      <input
                        className="flex-1 bg-[#0a0a0a] border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-violet-500 focus:shadow-[0_0_12px_rgba(139,92,246,0.3)] transition-all text-[#e5e2e1]"
                        placeholder="https://example.com"
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white px-8 py-3 rounded-lg font-medium hover:scale-[0.98] transition-transform duration-200 whitespace-nowrap shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                      >
                        {isLoading ? "Crawling..." : "Run Audit"}
                      </button>
                    </form>
                  </div>
                </div>
              </section>

              {auditResult && (
                <div className="pt-8 border-t border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-xl font-medium text-white mb-6">Generated Assets</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-[#111] border border-white/5 space-y-6">
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-semibold">Title Tag</p>
                        <div className="p-3 bg-[#0a0a0a] rounded-lg border border-white/5 text-white">
                          {auditResult.titleTag}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-semibold">Meta Description</p>
                        <div className="p-3 bg-[#0a0a0a] rounded-lg border border-white/5 text-slate-300 text-sm leading-relaxed">
                          {auditResult.metaDescription}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-semibold">Suggested Keywords</p>
                        <div className="flex flex-wrap gap-2">
                          {auditResult.suggestedKeywords?.map((kw: string, i: number) => (
                            <span key={i} className="px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#111] border border-white/5 flex flex-col">
                      <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-semibold">JSON-LD Schema</p>
                      <div className="flex-1 rounded-xl bg-[#050505] border border-white/5 p-4 overflow-x-auto relative group">
                        <pre className="text-emerald-400 text-sm font-mono leading-relaxed">
                          {formatSchema(auditResult.schemaMarkup)}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!auditResult && (
                <>
                  {/* Overview Scores */}
                  <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-[rgba(18,18,18,0.6)] backdrop-blur-[12px] border border-[#1e293b] rounded-xl p-6 flex flex-col items-center justify-center text-center">
                      <div className="relative w-24 h-24 mb-4">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                          <path className="text-emerald-400" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="92, 100" strokeWidth="3" style={{ filter: "drop-shadow(0 0 4px rgba(52,211,153,0.5))" }}></path>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center"><span className="text-[24px] font-semibold text-emerald-400">92</span></div>
                      </div>
                      <h3 className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider">Performance</h3>
                    </div>
                    {/* Accessibilty, Best Practices, SEO - omitted for brevity, but they keep the grid looking full */}
                    <div className="bg-[rgba(18,18,18,0.6)] backdrop-blur-[12px] border border-[#1e293b] rounded-xl p-6 flex flex-col items-center justify-center text-center">
                      <div className="relative w-24 h-24 mb-4">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                          <path className="text-violet-400" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="88, 100" strokeWidth="3" style={{ filter: "drop-shadow(0 0 4px rgba(139,92,246,0.5))" }}></path>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center"><span className="text-[24px] font-semibold text-violet-400">88</span></div>
                      </div>
                      <h3 className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider">Accessibility</h3>
                    </div>
                    <div className="bg-[rgba(18,18,18,0.6)] backdrop-blur-[12px] border border-[#1e293b] rounded-xl p-6 flex flex-col items-center justify-center text-center">
                      <div className="relative w-24 h-24 mb-4">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                          <path className="text-blue-400" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="100, 100" strokeWidth="3" style={{ filter: "drop-shadow(0 0 4px rgba(59,130,246,0.5))" }}></path>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center"><span className="text-[24px] font-semibold text-blue-400">100</span></div>
                      </div>
                      <h3 className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider">Best Practices</h3>
                    </div>
                    <div className="bg-[rgba(18,18,18,0.6)] backdrop-blur-[12px] border border-[#1e293b] rounded-xl p-6 flex flex-col items-center justify-center text-center">
                      <div className="relative w-24 h-24 mb-4">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                          <path className="text-amber-400" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="74, 100" strokeWidth="3" style={{ filter: "drop-shadow(0 0 4px rgba(251,191,36,0.5))" }}></path>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center"><span className="text-[24px] font-semibold text-amber-400">74</span></div>
                      </div>
                      <h3 className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider">SEO</h3>
                    </div>
                  </section>
                </>
              )}
            </>
          )}

          {activeTab === "spy" && (
            <section className="bg-[rgba(18,18,18,0.6)] backdrop-blur-[12px] border border-[#1e293b] rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10 flex flex-col items-center text-center py-12">
                 <span className="material-symbols-outlined text-4xl text-violet-400 mb-4">construction</span>
                 <h2 className="text-[24px] font-semibold text-slate-200 mb-2">Competitor Analysis</h2>
                 <p className="text-slate-400">This feature is currently being generated via Stitch.</p>
              </div>
            </section>
          )}

          {activeTab === "content" && (
            <section className="bg-[rgba(18,18,18,0.6)] backdrop-blur-[12px] border border-[#1e293b] rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10 flex flex-col items-center text-center py-12">
                 <span className="material-symbols-outlined text-4xl text-violet-400 mb-4">construction</span>
                 <h2 className="text-[24px] font-semibold text-slate-200 mb-2">Keyword Research</h2>
                 <p className="text-slate-400">This feature is currently being generated via Stitch.</p>
              </div>
            </section>
          )}

          {activeTab === "outreach" && (
            <section className="bg-[rgba(18,18,18,0.6)] backdrop-blur-[12px] border border-[#1e293b] rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10 flex flex-col items-center text-center py-12">
                 <span className="material-symbols-outlined text-4xl text-violet-400 mb-4">construction</span>
                 <h2 className="text-[24px] font-semibold text-slate-200 mb-2">Rank Tracking</h2>
                 <p className="text-slate-400">This feature is currently being generated via Stitch.</p>
              </div>
            </section>
          )}

        </div>
      </main>
    </div>
  );
}
