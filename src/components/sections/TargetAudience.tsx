import { Target, RotateCcw, Mountain } from "lucide-react"

export default function TargetAudience() {
    return (
        <section className="py-32 md:py-40 bg-brand-dark overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Who It Is <span className="text-gradient">Built For</span></h2>
                    <p className="text-slate-400 text-lg md:text-xl">
                        Designed for everyday riders. No elite language, just clear guidance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-brand-purple/30 bg-white/5 backdrop-blur-sm transition-all duration-300 shadow-[0_10px_28px_rgba(0,0,0,0.24)]">
                        <Target className="w-10 h-10 text-brand-cyan mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-white">Couch to First Event</h3>
                        <p className="text-slate-400 text-[15px] leading-[1.7]">
                            You signed up for your first 30km race and need a simple roadmap so climbs do not derail your day.
                        </p>
                    </div>
                    <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-brand-purple/30 bg-white/5 backdrop-blur-sm transition-all duration-300 shadow-[0_10px_28px_rgba(0,0,0,0.24)]">
                        <RotateCcw className="w-10 h-10 text-brand-purple mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-white">Returning Rider</h3>
                        <p className="text-slate-400 text-[15px] leading-[1.7]">
                            Life got busy, you spent months off the bike, and now need a structured way to rebuild fitness safely.
                        </p>
                    </div>
                    <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-brand-purple/30 bg-white/5 backdrop-blur-sm transition-all duration-300 shadow-[0_10px_28px_rgba(0,0,0,0.24)]">
                        <Mountain className="w-10 h-10 text-brand-cyan mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-white">Marathon / Stage Build</h3>
                        <p className="text-slate-400 text-[15px] leading-[1.7]">
                            You have a 60km+ event coming up and need a consistent weekly structure that builds endurance without chaos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

