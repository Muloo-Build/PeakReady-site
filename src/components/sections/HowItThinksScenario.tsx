import { AlertCircle, BatteryWarning, GaugeCircle, Undo2 } from "lucide-react"

const scenarios = [
    {
        title: "Returning Rider Detected",
        copy: "If you’ve had a long break, PeakReady ramps you safely for the first few weeks.",
        icon: Undo2,
    },
    {
        title: "Missed Session",
        copy: "Miss a ride? The plan doesn’t punish you. It adjusts the next session realistically.",
        icon: AlertCircle,
    },
    {
        title: "High Fatigue Logged",
        copy: "Log high fatigue and PeakReady recommends recovery instead of intensity.",
        icon: BatteryWarning,
    },
    {
        title: "Surprise Hard Ride",
        copy: "Ride hard on a rest day? It suggests an easier next session to keep balance.",
        icon: GaugeCircle,
    },
]

export default function HowItThinksScenario() {
    return (
        <section className="py-28 md:py-32 bg-brand-dark border-b border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-8">
                        How PeakReady Adapts in Real Life
                    </h2>

                    <div className="max-w-[760px] mx-auto glass-panel rounded-2xl border border-white/10 p-6 md:p-8 shadow-[0_10px_24px_rgba(0,0,0,0.22)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 text-left">
                            {scenarios.map((scenario) => {
                                const Icon = scenario.icon

                                return (
                                    <article key={scenario.title} className="rounded-xl border border-white/10 bg-brand-dark/60 p-4 md:p-5">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Icon className="w-4 h-4 text-brand-cyan" />
                                            <h3 className="text-white font-semibold text-base">{scenario.title}</h3>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-[1.7]">{scenario.copy}</p>
                                    </article>
                                )
                            })}
                        </div>
                    </div>

                    <p className="mt-6 text-white font-bold text-lg">Structured. But realistic.</p>
                </div>
            </div>
        </section>
    )
}
