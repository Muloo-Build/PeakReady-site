import { BrainCircuit, LineChart, Target, Zap, ActivitySquare, MessageSquare } from "lucide-react"

export default function Features() {
    const features = [
        {
            title: "Event Date Roadmap",
            description: "Set your event date and available days to generate a week-by-week build to race day.",
            capabilities: ["Targets XC, marathon, and gravel formats", "Schedules build, recovery, and taper blocks", "Recalculates timeline if event date changes"],
            benefit: "Know exactly what to ride this week to arrive prepared on race day.",
            icon: <Target className="w-6 h-6 text-brand-cyan" />,
        },
        {
            title: "AI Plan Generation",
            description: "Answer a few questions once and get a weekly plan matched to your fitness and schedule.",
            capabilities: ["Uses Strava history as your baseline", "Adjusts progression for age and inactivity", "Builds workload toward your event date"],
            benefit: "Start with a realistic plan on day one without building spreadsheets.",
            icon: <BrainCircuit className="w-6 h-6 text-brand-purple" />,
        },
        {
            title: "Strava Sync",
            description: "Connect Strava and completed rides log automatically against planned sessions in one clean weekly view.",
            capabilities: ["Imports distance, elevation, duration, and effort", "Matches each ride to the planned workout", "Flags missed and completed sessions quickly"],
            benefit: "Your training log stays current without manual data entry.",
            icon: <LineChart className="w-6 h-6 text-brand-cyan" />,
        },
        {
            title: "Adaptive Plan Adjustments",
            description: "Miss a workout or log fatigue, and the app recalibrates your next sessions automatically.",
            capabilities: ["Swaps hard days when recovery is low", "Ramps back gradually after inactivity", "Protects key sessions before event day"],
            benefit: "Stay consistent without guessing how to reshuffle your training week.",
            icon: <ActivitySquare className="w-6 h-6 text-brand-purple" />,
        },
        {
            title: "Daily Readiness Check-ins",
            description: "Log sleep, soreness, and energy in seconds to guide the day-to-day ride intensity.",
            capabilities: ["Quick inputs for morning and post-ride", "Generates a simple readiness trend", "Highlights when to push or back off"],
            benefit: "Avoid fatigue spirals before they derail your training block.",
            icon: <Zap className="w-6 h-6 text-brand-cyan" />,
        },
        {
            title: "Coach Chat",
            description: "Ask plan-specific questions anytime and get guidance based on your event, history, and current week.",
            capabilities: ["Suggests swaps for weather or schedule changes", "Explains workout intent in plain language", "Answers fueling and pacing questions"],
            benefit: "Get useful coaching input in the moment instead of stalling your plan.",
            icon: <MessageSquare className="w-6 h-6 text-brand-purple" />,
        }
    ]

    return (
        <section id="features" className="py-24 md:py-32 relative overflow-hidden bg-brand-dark">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Everything You Need <br className="hidden md:block" /> in <span className="text-gradient">One MTB System</span></h2>
                    <p className="text-slate-400 text-lg md:text-xl">
                        A complete toolkit designed to build your fitness and confidence without the complexity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="glass-panel p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 group border border-white/5 hover:border-brand-purple/30 bg-white/5 backdrop-blur-sm"
                        >
                            <div className="bg-brand-surface w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(178,63,255,0.2)] transition-all duration-300 border border-white/10">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-slate-400 text-[15px] leading-relaxed mb-6">
                                {feature.description}
                            </p>

                            <ul className="space-y-2 mb-6 border-l-2 border-white/10 pl-4 py-1">
                                {feature.capabilities.map((cap, cIdx) => (
                                    <li key={cIdx} className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/70 shrink-0" />
                                        {cap}
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-brand-purple/10 border border-brand-purple/20 p-3 rounded-lg mt-auto">
                                <p className="text-brand-purple text-sm font-bold leading-snug">
                                    {feature.benefit}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

