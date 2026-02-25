import { Zap, BookOpen, Route, Brain } from "lucide-react"

export default function Roadmap() {
    const items = [
        {
            title: "Garmin Integration",
            description: "Direct sync for your head unit, removing the need to manually execute workouts.",
            icon: <Zap className="w-6 h-6 text-brand-cyan" />
        },
        {
            title: "Long-term Coaching Memory",
            description: "The app learns your unique recovery patterns over multiple seasons and base periods.",
            icon: <Brain className="w-6 h-6 text-brand-purple" />
        },
        {
            title: "Skills Blocks",
            description: "Dedicated sessions for cornering, drops, and technical climbing added to your plan.",
            icon: <BookOpen className="w-6 h-6 text-brand-cyan" />
        },
        {
            title: "Event Course Modeling",
            description: "Specific plan adjustments based on your target race's elevation profile and distance.",
            icon: <Route className="w-6 h-6 text-brand-purple" />
        }
    ]

    return (
        <section className="py-24 md:py-32 bg-brand-dark relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">What&apos;s <span className="text-gradient">Coming Next</span></h2>
                    <p className="text-slate-400 text-lg md:text-xl mb-3">
                        These features are on our roadmap and not yet live.
                    </p>
                    <p className="text-slate-400 text-base md:text-lg">
                        We are building the ultimate MTB tool with practical upgrades for real riders.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {items.map((item, idx) => (
                            <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 flex gap-4 items-start">
                                <div className="mt-1 bg-brand-surface p-3 rounded-xl border border-white/10 shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

