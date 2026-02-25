import { Brain, Activity, Clock, RefreshCcw } from "lucide-react"

export default function SmartLogic() {
    return (
        <section className="py-24 md:py-32 bg-brand-surface border-y border-white/5 relative overflow-hidden">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-purple/10 via-brand-dark/0 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Smart Logic That Actually <br className="hidden lg:block" /><span className="text-gradient">Understands You</span></h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            PeakReady does not just give you a static calendar. It is adaptive, intelligent, and completely in the background.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-brand-dark p-2 rounded-lg border border-white/10 shrink-0">
                                    <Clock className="w-5 h-5 text-brand-cyan" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">90-180 Day Baseline</h4>
                                    <p className="text-slate-400 text-sm">When you connect Strava, our system looks back at your ride history to understand your true starting point. Week one is calibrated to your current load.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-brand-dark p-2 rounded-lg border border-white/10 shrink-0">
                                    <Activity className="w-5 h-5 text-brand-purple" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Age-Aware Scaling</h4>
                                    <p className="text-slate-400 text-sm">A 25-year-old recovers differently than a 45-year-old. The system adjusts recovery windows and volume to reduce burnout risk.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-brand-dark p-2 rounded-lg border border-white/10 shrink-0">
                                    <RefreshCcw className="w-5 h-5 text-brand-cyan" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Inactivity Detection</h4>
                                    <p className="text-slate-400 text-sm">Miss a few weeks? Inactivity detection builds a safe return ramp so you restart without forcing intensity too early.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full relative">
                        <div className="relative rounded-3xl bg-brand-dark border border-white/10 p-6 md:p-8 shadow-2xl overflow-hidden glass-panel">
                            <div className="absolute inset-0 bg-topo-overlay opacity-[0.03] pointer-events-none" />

                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 blur-[80px] rounded-full pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/20 blur-[80px] rounded-full pointer-events-none" />

                            <div className="relative z-10 space-y-4">
                                <div className="bg-slate-900/80 backdrop-blur border border-white/10 p-4 rounded-xl flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                                            <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-bold">Strava Sync Complete</p>
                                            <p className="text-slate-400 text-xs">Imported last 90 days</p>
                                        </div>
                                    </div>
                                    <span className="text-brand-cyan text-xs font-bold px-2 py-1 bg-brand-cyan/10 rounded">Smart Logic</span>
                                </div>

                                <div className="bg-slate-900/80 backdrop-blur border border-white/10 p-4 rounded-xl">
                                    <p className="text-white text-sm mb-3">Baseline Calculated: <span className="font-bold text-brand-cyan">Moderate Fitness</span></p>
                                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="w-3/5 h-full bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full" />
                                    </div>
                                </div>

                                <div className="bg-slate-900/80 backdrop-blur border border-white/10 p-4 rounded-xl flex items-start gap-3">
                                    <Brain className="w-5 h-5 text-brand-purple mt-0.5" />
                                    <div>
                                        <p className="text-white text-sm font-bold mb-1">Adaptive Suggestion</p>
                                        <p className="text-slate-400 text-xs leading-relaxed">Based on your age and recent load, recovery after long rides was extended by 12 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

