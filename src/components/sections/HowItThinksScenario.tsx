export default function HowItThinksScenario() {
    const scenario = [
        "You sign up.",
        "You load a 60km marathon 12 weeks away.",
        "The app checks your last 90 days of Strava data.",
        "It detects a 2-month gap.",
        "It builds a safe 3-week return ramp.",
        "You miss a hard ride one week.",
        "It adjusts the next session.",
        "You log high fatigue.",
        "It swaps intensity automatically."
    ]

    return (
        <section className="py-20 md:py-24 bg-brand-dark border-b border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6 text-center">
                        How PeakReady Adapts in Real Life
                    </h2>

                    <div className="glass-panel rounded-2xl border border-white/10 p-6 md:p-8">
                        <ol className="space-y-3 text-slate-300 text-base leading-relaxed">
                            {scenario.map((line, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="text-brand-cyan font-semibold text-sm mt-0.5">{String(idx + 1).padStart(2, "0")}</span>
                                    <span>{line}</span>
                                </li>
                            ))}
                        </ol>

                        <p className="mt-6 text-white font-bold text-lg">Structured. But realistic.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

