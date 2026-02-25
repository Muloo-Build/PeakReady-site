import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { ShieldCheck, LineChart, HeartPulse, RefreshCw, MessageCircle, WifiOff } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/5 blur-[150px] rounded-full pointer-events-none -z-10" />

                <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 mt-12">
                            The Engine Behind <br className="hidden md:block" /> Your <span className="text-gradient">Training.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            No black boxes. No elite coaching jargon. Here is exactly how PeakReady builds, adapts, and manages your MTB plan.
                        </p>
                    </div>

                    <div className="space-y-12 md:space-y-16">
                        {/* A. The AI Intake Flow */}
                        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden hover:border-brand-cyan/20 transition-colors">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[80px] rounded-full pointer-events-none" />
                            <ShieldCheck className="w-12 h-12 text-brand-cyan mb-6" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">The AI Intake Flow</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                It starts with a simple conversation. You tell us your goal event, your current riding routine, and how many hours you <em>actually</em> have to train (not in a perfect world, but in reality).
                            </p>
                            <div className="bg-brand-dark/50 backdrop-blur p-6 rounded-2xl border border-white/5">
                                <h3 className="text-white font-semibold mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5 text-brand-purple" /> The Magic</h3>
                                <p className="text-slate-300 leading-relaxed text-[15px]">
                                    PeakReady cross-references your available hours with the requirements of your target event to build a progressive, week-by-week calendar that fits your life.
                                </p>
                            </div>
                        </div>

                        {/* B. Strava Logic */}
                        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden hover:border-brand-purple/20 transition-colors">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 blur-[80px] rounded-full pointer-events-none" />
                            <LineChart className="w-12 h-12 text-brand-purple mb-6" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">Strava Logic & 90-Day Baseline</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                We do not start you from zero if you already have training history. When you connect Strava, our system looks back 90 to 180 days.
                            </p>
                            <div className="bg-brand-dark/50 backdrop-blur p-6 rounded-2xl border border-white/5">
                                <h3 className="text-white font-semibold mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5 text-brand-cyan" /> The Magic</h3>
                                <p className="text-slate-300 leading-relaxed text-[15px]">
                                    It calculates your chronic training load and creates a starting baseline. This means week one of your plan is perfectly calibrated to your current fitness—neither too easy nor dangerously hard.
                                </p>
                            </div>
                        </div>

                        {/* C. Age-Aware Scaling */}
                        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden hover:border-brand-cyan/20 transition-colors">
                            <HeartPulse className="w-12 h-12 text-brand-cyan mb-6" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">Age-Aware Scaling</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                A 25-year-old recovers differently than a 45-year-old. PeakReady understands this context natively.
                            </p>
                            <div className="bg-brand-dark/50 backdrop-blur p-6 rounded-2xl border border-white/5">
                                <h3 className="text-white font-semibold mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5 text-brand-purple" /> The Magic</h3>
                                <p className="text-slate-300 leading-relaxed text-[15px]">
                                    We apply age-aware scaling to interval intensities and recovery durations. As you age, the system intelligently allocates slightly longer recovery windows and adjusts volume to prevent joint stress and burnout.
                                </p>
                            </div>
                        </div>

                        {/* D. Adaptive Fatigue Swaps */}
                        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden hover:border-brand-purple/20 transition-colors">
                            <RefreshCw className="w-12 h-12 text-brand-purple mb-6" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">Adaptive Fatigue Swaps</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                Your plan called for threshold intervals, but you slept poorly and your legs feel heavy.
                            </p>
                            <div className="bg-brand-dark/50 backdrop-blur p-6 rounded-2xl border border-white/5">
                                <h3 className="text-white font-semibold mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5 text-brand-cyan" /> The Magic</h3>
                                <p className="text-slate-300 leading-relaxed text-[15px]">
                                    By checking daily readiness metrics, PeakReady can suggest a fatigue swap. It downgrades the session and recalculates the rest of the week.
                                </p>
                            </div>
                        </div>

                        {/* E. Maintenance */}
                        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden hover:border-brand-cyan/20 transition-colors">
                            <ShieldCheck className="w-12 h-12 text-brand-cyan mb-6" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">Maintenance Tracking System</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                A broken chain ruins a race just as fast as bad pacing.
                            </p>
                            <div className="bg-brand-dark/50 backdrop-blur p-6 rounded-2xl border border-white/5">
                                <h3 className="text-white font-semibold mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5 text-brand-purple" /> The Magic</h3>
                                <p className="text-slate-300 leading-relaxed text-[15px]">
                                    As your Strava rides sync, we track your actual time-in-saddle and distance. When you hit specific thresholds (e.g., 20 hours), the app pings you to check tire sealant, lube the chain, or inspect brake pads.
                                </p>
                            </div>
                        </div>

                        {/* F. Coach Chat */}
                        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden hover:border-brand-purple/20 transition-colors">
                            <MessageCircle className="w-12 h-12 text-brand-purple mb-6" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">Coach Chat Context Injection</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                Sometimes you just need to ask a question.
                            </p>
                            <div className="bg-brand-dark/50 backdrop-blur p-6 rounded-2xl border border-white/5">
                                <h3 className="text-white font-semibold mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5 text-brand-cyan" /> The Magic</h3>
                                <p className="text-slate-300 leading-relaxed text-[15px]">
                                    Our AI Coach Chat is not generic. It uses your event, your recent ride data, and your current fatigue levels for specific answers.
                                </p>
                            </div>
                        </div>

                        {/* G. Offline PWA */}
                        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden hover:border-brand-cyan/20 transition-colors">
                            <WifiOff className="w-12 h-12 text-brand-cyan mb-6" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">Offline PWA Support & Themes</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                Trails do not always have cell service.
                            </p>
                            <div className="bg-brand-dark/50 backdrop-blur p-6 rounded-2xl border border-white/5">
                                <h3 className="text-white font-semibold mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5 text-brand-purple" /> The Magic</h3>
                                <p className="text-slate-300 leading-relaxed text-[15px]">
                                    PeakReady is built as a Progressive Web App (PWA) with offline support. Load your plan at home, and access your session details deep in the forest. Plus, support for both Light and Dark modes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-28 text-center pb-12">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">Stop guessing. <span className="text-gradient">Start riding.</span></h2>
                        <Link href="/#early-access" className="inline-flex items-center justify-center h-14 px-10 text-lg font-bold text-slate-900 bg-brand-cyan rounded-full shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-all">
                            Join the Beta
                        </Link>
                        <p className="text-slate-400 mt-6">Help us refine the smartest training tool for everyday riders.</p>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}

function Sparkles(props: React.SVGProps<SVGSVGElement>) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
}
