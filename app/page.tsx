import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <div className="bg-[#030303] text-slate-300 antialiased overflow-x-hidden selection:bg-primary selection:text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 md:pt-60 md:pb-48 light-leak">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass mb-8 border-white/10 group cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-400 group-hover:text-white transition-colors">
              V3.0 Intelligent Engine Now Live
            </span>
          </div>
          <h1 className="text-6xl md:text-[7.5rem] font-black tracking-tightest leading-[0.9] mb-10 text-white">
            Outrank with <br />
            <span className="text-gradient">Pure Intelligence.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
            The high-fidelity SEO command center that turns raw data into{" "}
            <span className="text-white">production-ready strategy</span> and
            automated organic growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] transition-all flex items-center justify-center gap-3">
              Deploy SmartSEO{" "}
              <span className="material-symbols-outlined font-bold">bolt</span>
            </button>
            <button className="w-full sm:w-auto glass text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-3">
              Watch Demo{" "}
              <span className="material-symbols-outlined text-xl">
                play_circle
              </span>
            </button>
          </div>
        </div>

        {/* Command Center Visualization */}
        <div className="max-w-6xl mx-auto px-6 mt-32 relative">
          <div className="relative group animate-float">
            {/* Background Glows */}
            <div className="absolute -inset-10 bg-primary/20 blur-[100px] opacity-30 rounded-full"></div>
            <div className="absolute top-1/2 -left-20 w-40 h-40 bg-accent/20 blur-3xl opacity-40"></div>

            {/* Dashboard Container */}
            <div className="relative glass rounded-[2.5rem] p-4 border-white/10 shadow-2xl overflow-hidden dashboard-grid">
              <div className="bg-[#050505] rounded-[1.8rem] border border-white/5 overflow-hidden">
                {/* Dashboard UI */}
                <div className="p-8 space-y-8">
                  {/* Dashboard Header */}
                  <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/5 pb-8">
                    <div className="flex gap-4">
                      <div className="p-3 bg-white/5 rounded-2xl">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">
                          Health Score
                        </p>
                        <p className="text-2xl font-black text-white">98.4</p>
                      </div>
                      <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
                        <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                          Organic Delta
                        </p>
                        <p className="text-2xl font-black text-primary">
                          +240.2%
                        </p>
                      </div>
                      <div className="p-3 bg-white/5 rounded-2xl">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">
                          Domain Auth
                        </p>
                        <p className="text-2xl font-black text-white">82</p>
                      </div>
                    </div>
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                        JD
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-primary flex items-center justify-center text-[10px] font-bold">
                        AS
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-accent flex items-center justify-center text-[10px] font-bold">
                        +5
                      </div>
                    </div>
                  </div>

                  {/* Main Analytics */}
                  <div className="grid grid-cols-12 gap-8">
                    {/* Chart Area */}
                    <div className="col-span-12 lg:col-span-8 bg-white/[0.02] rounded-3xl p-6 border border-white/5">
                      <div className="flex items-center justify-between mb-10">
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-lg">
                            trending_up
                          </span>
                          Traffic Vector Analysis
                        </h4>
                        <div className="flex gap-2">
                          <div className="px-3 py-1 rounded-lg bg-white/5 text-[10px] font-bold uppercase">
                            7D
                          </div>
                          <div className="px-3 py-1 rounded-lg bg-primary text-[10px] font-bold uppercase">
                            30D
                          </div>
                        </div>
                      </div>
                      {/* Simplified CSS Chart */}
                      <div className="h-64 flex items-end gap-3 px-2">
                        <div className="flex-1 bg-primary/20 h-[40%] rounded-t-xl hover:bg-primary/40 transition-all cursor-pointer relative group">
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 glass px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                            12k
                          </div>
                        </div>
                        <div className="flex-1 bg-primary/30 h-[55%] rounded-t-xl hover:bg-primary/40 transition-all"></div>
                        <div className="flex-1 bg-primary/20 h-[45%] rounded-t-xl hover:bg-primary/40 transition-all"></div>
                        <div className="flex-1 bg-primary/60 h-[80%] rounded-t-xl hover:bg-primary/80 transition-all"></div>
                        <div className="flex-1 bg-primary/40 h-[65%] rounded-t-xl hover:bg-primary/60 transition-all"></div>
                        <div className="flex-1 bg-primary h-full rounded-t-xl shadow-[0_0_30px_rgba(124,58,237,0.3)]"></div>
                        <div className="flex-1 bg-primary/70 h-[85%] rounded-t-xl hover:bg-primary transition-all"></div>
                        <div className="flex-1 bg-primary/50 h-[70%] rounded-t-xl hover:bg-primary/70 transition-all"></div>
                        <div className="flex-1 bg-accent h-[40%] rounded-t-xl"></div>
                      </div>
                    </div>

                    {/* Side Stats */}
                    <div className="col-span-12 lg:col-span-4 space-y-6">
                      <div className="bg-white/[0.02] rounded-3xl p-6 border border-white/5">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                          Competitor Delta
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-300">
                              Vercel.com
                            </span>
                            <span className="text-xs font-bold text-green-400">
                              +12%
                            </span>
                          </div>
                          <div className="w-full bg-white/5 h-1.5 rounded-full">
                            <div className="bg-primary w-[85%] h-full rounded-full"></div>
                          </div>
                          <div className="flex items-center justify-between pt-2">
                            <span className="text-sm font-medium text-slate-300">
                              Stripe.com
                            </span>
                            <span className="text-xs font-bold text-red-400">
                              -3%
                            </span>
                          </div>
                          <div className="w-full bg-white/5 h-1.5 rounded-full">
                            <div className="bg-accent w-[45%] h-full rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary/10 rounded-3xl p-6 border border-primary/20 relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                          <span className="material-symbols-outlined text-8xl">
                            auto_awesome
                          </span>
                        </div>
                        <h5 className="text-sm font-black text-white mb-2 uppercase tracking-tighter">
                          AI Suggestion
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Cluster 'Next.js rendering' and 'Edge compute' into a
                          new pillar page. Projected lift:{" "}
                          <span className="text-primary font-bold">+18%</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 border-y border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 mb-14">
            Infrastructure for the elite
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
            <span className="text-2xl font-black text-white tracking-tight">
              VERCEL
            </span>
            <span className="text-2xl font-black text-white tracking-tight">
              NEXT.JS
            </span>
            <span className="text-2xl font-black text-white tracking-tight">
              FRAMER
            </span>
            <span className="text-2xl font-black text-white tracking-tight">
              STRIPE
            </span>
            <span className="text-2xl font-black text-white tracking-tight">
              SHOPIFY
            </span>
            <span className="text-2xl font-black text-white tracking-tight">
              WEBFLOW
            </span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-primary font-black text-xs tracking-[0.3em] uppercase mb-6 block">
              The Engine Room
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tightest mb-8 leading-none">
              Engineering <br />{" "}
              <span className="text-gradient">unfair advantages.</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
              We don't just track rankings. We reverse-engineer the SERP
              landscape and generate the assets required to win.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="glass p-8 rounded-[2rem] border-white/5 hover:border-primary/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl">
                  troubleshoot
                </span>
              </div>
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined font-bold text-3xl">
                  insights
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Competitor X-Ray
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Deep-crawl competitors to extract their DOM structure,
                meta-graph, and hidden keywords. Know their roadmap before they
                do.
              </p>
              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10"></div>
                  <div className="flex-1">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[75%] shimmer"></div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    Analysis 75%
                  </span>
                </div>
              </div>
            </div>
            {/* Feature Card 2 */}
            <div className="glass p-8 rounded-[2rem] border-white/5 hover:border-accent/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl">
                  code_blocks
                </span>
              </div>
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined font-bold text-3xl">
                  terminal
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Code Injection Ready
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Generate pixel-perfect JSON-LD, Breadcrumb lists, and Meta Tags
                ready to copy-paste into Next.js, Remix, or Nuxt.js projects.
              </p>
              <div className="pt-6 border-t border-white/5 font-mono text-[10px] text-accent/80">
                <p>{'{ "type": "Product", "rank": "Top 1" }'}</p>
              </div>
            </div>
            {/* Feature Card 3 */}
            <div className="glass p-8 rounded-[2rem] border-white/5 hover:border-white/20 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl">
                  psychology
                </span>
              </div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined font-bold text-3xl">
                  auto_fix_high
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                AI Link Scouting
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Autonomous scouting for backlink opportunities based on your
                niche and current ranking gaps. No more manual prospecting.
              </p>
              <div className="flex -space-x-2">
                <img
                  alt="user"
                  className="w-8 h-8 rounded-full border-2 border-[#0A0A0C]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAddAn81_A4mp4cBA66RMMrGq5WIhjhZ7qjW0rXfdxgUkGY5Dzt0CvnyqUY6nkBXbfVE82XCc7Ybtk-heQHKbT0WgIZx3z39ST4Mv4bSlm8NQmlcSlkAvR91wvO1990wHD8RRzwzY4chAmfqo0qaoFh9PfnUudrwit6vSMZmmVwrTr39IltxNzGn6kzsvSplR25DrCNpo1V22sWoOehnmOQuHdYj82MYnvBUOJDwC5_1eIifpTRD01W37K0FXnR2eW_S6F_VxpGeoQ"
                />
                <img
                  alt="user"
                  className="w-8 h-8 rounded-full border-2 border-[#0A0A0C]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxRXyzoyZQ7LZM7u3YA3l8fHOaiFoe4iiAptKkhQk-cl59ROBOtJcmUmWGpMqnG84JAH-z4O5C4ebWx64JmWrCZ_KlHT9SOIxdh2pVBc8vIeavTt9n9_SWg1wJxMNwNoYiJfVuCoT_DvCwyWIyLhMC1FCRnCzum6Wosub0rhpmfo8WgNGJ3Scs5rbXzLUjdJFgBtTexh59UnImfT75PU38q9bEXZMYkmVvDzlqQUUbF9HwsfSlW2qC3g8EnYbopDGD42bYcNzTSAw"
                />
                <img
                  alt="user"
                  className="w-8 h-8 rounded-full border-2 border-[#0A0A0C]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4Jtyou9rM9crapb5S3ht9kgmBX5tsFw6LvYJmmIpAh_VDFP61fYziQk0dA6I92z1p_1D_IOC6EPISyIruV6mXjOq0fiCKPbU1b1L1Rz6AFVwMBaBbl1Jj_cGoaSvLpO-XCi8iG4e_kIofmxLgrxKDzhiHsPk6Az5Vku6OOJwwgNytyabaDzo0_fQr1PYqTRVDfQAxLEkWxklJ-h_Enk0BCB0t10M7PNaCN7p5OQb_foMvo1WaBvR5ZSXqN43K0rvmq5-DVLf-dDg"
                />
                <div className="w-8 h-8 rounded-full border-2 border-[#0A0A0C] bg-white/5 flex items-center justify-center text-[10px] font-bold text-white">
                  +12
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl font-black text-white leading-tight tracking-tightest">
                From URL to <br />{" "}
                <span className="text-accent">Dominance.</span>
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="flex-none w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-lg font-black text-white group-hover:bg-primary group-hover:border-primary transition-all">
                    01
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Ingest Signal
                    </h4>
                    <p className="text-slate-400">
                      Simply drop a domain. Our crawlers simulate real user
                      behavior to bypass blocks and gather raw DOM data.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-none w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-lg font-black text-white group-hover:bg-primary group-hover:border-primary transition-all">
                    02
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Vector Mapping
                    </h4>
                    <p className="text-slate-400">
                      Our LLM-powered engine maps your content against the top
                      10 SERP results to identify semantic gaps.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-none w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-lg font-black text-white group-hover:bg-primary group-hover:border-primary transition-all">
                    03
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Deploy Assets
                    </h4>
                    <p className="text-slate-400">
                      Push changes directly via API or manual export. Watch your
                      rankings climb in real-time on our heatmaps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>
              <div className="relative glass rounded-[3rem] p-4 border-white/10 glow-violet">
                <div className="bg-card-dark rounded-[2.5rem] p-10 overflow-hidden">
                  {/* Visual Graphic */}
                  <div className="relative h-[400px] flex items-center justify-center">
                    {/* Central Node */}
                    <div className="w-24 h-24 bg-primary rounded-3xl rotate-12 flex items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.5)] z-20">
                      <span className="material-symbols-outlined text-white text-5xl">
                        hub
                      </span>
                    </div>
                    {/* Orbiting Elements */}
                    <div className="absolute w-64 h-64 border border-white/5 rounded-full animate-pulse-slow"></div>
                    <div className="absolute w-[350px] h-[350px] border border-white/5 rounded-full"></div>
                    <div className="absolute top-10 left-10 glass p-4 rounded-2xl flex items-center gap-4 animate-float">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
                        <span className="material-symbols-outlined">
                          analytics
                        </span>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">
                          Indexing
                        </p>
                        <p className="text-xs font-bold text-white">
                          4.2M Pages
                        </p>
                      </div>
                    </div>
                    <div
                      className="absolute bottom-10 right-0 glass p-4 rounded-2xl flex items-center gap-4 animate-float"
                      style={{ animationDelay: "-2s" }}
                    >
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500">
                        <span className="material-symbols-outlined">
                          rocket_launch
                        </span>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">
                          Growth
                        </p>
                        <p className="text-xs font-bold text-white">
                          +84% Lift
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tightest mb-6">
              Invest in <span className="text-gradient">Performance.</span>
            </h2>
            <p className="text-slate-400  mx-auto">
              Scale your SEO engine with plans built for high-performance teams.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Pro Plan */}
            <div className="glass p-12 rounded-[3rem] border-white/10 hover:border-white/20 transition-all flex flex-col">
              <h3 className="text-xl font-black text-white mb-2 tracking-wide uppercase">
                Core
              </h3>
              <p className="text-slate-500 text-sm mb-10">
                Essential intelligence for independent builders.
              </p>
              <div className="flex items-baseline gap-2 mb-12">
                <span className="text-6xl font-black text-white">$49</span>
                <span className="text-slate-500 font-bold">/month</span>
              </div>
              <ul className="space-y-6 mb-12 flex-grow">
                <li className="flex items-center gap-4 text-sm font-semibold text-slate-300">
                  <span className="material-symbols-outlined text-primary font-black">
                    check_circle
                  </span>
                  50 Advanced Site Audits
                </li>
                <li className="flex items-center gap-4 text-sm font-semibold text-slate-300">
                  <span className="material-symbols-outlined text-primary font-black">
                    check_circle
                  </span>
                  Automated JSON-LD Generation
                </li>
                <li className="flex items-center gap-4 text-sm font-semibold text-slate-300">
                  <span className="material-symbols-outlined text-primary font-black">
                    check_circle
                  </span>
                  Keyword Gap Analysis
                </li>
              </ul>
              <button className="w-full py-5 rounded-2xl glass font-black text-white hover:bg-white/5 transition-all">
                Get Started
              </button>
            </div>
            {/* Enterprise/Growth Plan */}
            <div className="relative p-12 bg-white rounded-[3rem] text-black shadow-2xl scale-105 z-10 flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-6 py-2 rounded-bl-3xl tracking-[0.2em] uppercase">
                Elite
              </div>
              <h3 className="text-xl font-black mb-2 tracking-wide uppercase">
                Velocity
              </h3>
              <p className="text-slate-600 text-sm mb-10">
                The full engine for high-growth SaaS and Agencies.
              </p>
              <div className="flex items-baseline gap-2 mb-12">
                <span className="text-6xl font-black">$199</span>
                <span className="text-slate-500 font-bold">/month</span>
              </div>
              <ul className="space-y-6 mb-12 flex-grow">
                <li className="flex items-center gap-4 text-sm font-black">
                  <span className="material-symbols-outlined text-primary font-black">
                    check_circle
                  </span>
                  Unlimited Intelligent Audits
                </li>
                <li className="flex items-center gap-4 text-sm font-black">
                  <span className="material-symbols-outlined text-primary font-black">
                    check_circle
                  </span>
                  Competitor X-Ray (All Access)
                </li>
                <li className="flex items-center gap-4 text-sm font-black">
                  <span className="material-symbols-outlined text-primary font-black">
                    check_circle
                  </span>
                  Custom SEO Webhook Pipeline
                </li>
                <li className="flex items-center gap-4 text-sm font-black">
                  <span className="material-symbols-outlined text-primary font-black">
                    check_circle
                  </span>
                  Priority Compute Queue
                </li>
              </ul>
              <button className="w-full py-5 rounded-2xl bg-black text-white font-black hover:opacity-90 transition-all shadow-xl">
                Ignite Growth
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative p-16 md:p-32 glass rounded-[4rem] text-center overflow-hidden border-primary/30 glow-purple">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-transparent"></div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/10 blur-[100px] rounded-full"></div>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 relative z-10 tracking-tightest leading-none">
              The Future is <br />
              <span className="text-gradient">Search Intelligence.</span>
            </h2>
            <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
              Join 2,400+ high-fidelity teams building the next generation of
              search presence.
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-white text-black px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all duration-500 shadow-2xl">
                Deploy Today
              </button>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                No credit card • 14 day free trial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-lg font-bold">
                    query_stats
                  </span>
                </div>
                <span className="font-black text-xl tracking-tightest text-white">
                  SmartSEO
                </span>
              </div>
              <p className="text-slate-500  leading-relaxed text-sm">
                Empowering modern teams to win the organic race through
                data-driven precision and AI-orchestrated strategies.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                Product
              </h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    X-Ray Crawler
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Schema Gen
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                Company
              </h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Engineering Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
              © 2024 SmartSEO Technologies Inc. All systems operational.
            </p>
            <div className="flex gap-8 text-slate-500">
              <Link className="hover:text-white transition-colors" href="#">
                <span className="text-xs font-black uppercase tracking-widest">
                  Twitter
                </span>
              </Link>
              <Link className="hover:text-white transition-colors" href="#">
                <span className="text-xs font-black uppercase tracking-widest">
                  LinkedIn
                </span>
              </Link>
              <Link className="hover:text-white transition-colors" href="#">
                <span className="text-xs font-black uppercase tracking-widest">
                  GitHub
                </span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
