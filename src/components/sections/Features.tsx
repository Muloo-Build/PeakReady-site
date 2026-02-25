import type { ReactNode } from "react"
import { ChainringIcon, ElevationLineIcon, TrailMarkerIcon } from "@/components/ui/MtbIcons"

type Feature = {
    title: string
    description: string
    seeInApp: string
    icon: ReactNode
}

export default function Features() {
    const features: Feature[] = [
        {
            title: "Event-Based Planning",
            description: "Set your event date and build a structured timeline that guides each week toward race day.",
            seeInApp: "See Event screen above.",
            icon: <TrailMarkerIcon className="text-brand-cyan" />,
        },
        {
            title: "AI Plan Generation",
            description: "Get a practical weekly plan matched to your riding history, recovery profile, and available time.",
            seeInApp: "See Plan screen above.",
            icon: <ChainringIcon className="text-brand-purple" />,
        },
        {
            title: "Strava Sync",
            description: "Automatically pull completed rides and compare planned sessions against actual execution.",
            seeInApp: "See Strava screen above.",
            icon: <ElevationLineIcon className="text-brand-cyan" />,
        },
        {
            title: "Adaptive Logic",
            description: "When life interrupts training, the schedule adjusts intelligently to keep momentum without overreaching.",
            seeInApp: "See Dash screen above.",
            icon: <ElevationLineIcon className="text-brand-purple" />,
        },
        {
            title: "Metrics & Readiness",
            description: "Log fatigue signals quickly so intensity decisions stay aligned with your actual recovery state.",
            seeInApp: "See Metrics screen above.",
            icon: <ChainringIcon className="text-brand-cyan" />,
        },
        {
            title: "Bike Maintenance",
            description: "Track bike usage and service reminders so mechanical issues do not derail your build.",
            seeInApp: "See Bike screen above.",
            icon: <TrailMarkerIcon className="text-brand-purple" />,
        },
        {
            title: "Coach Chat",
            description: "Ask plan-specific questions and get context-aware guidance based on your current training block.",
            seeInApp: "See Coach screen above.",
            icon: <ChainringIcon className="text-brand-cyan" />,
        },
    ]

    return (
        <section id="features" className="py-32 md:py-40 relative overflow-hidden bg-brand-dark">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Everything You Need <br className="hidden md:block" /> in <span className="text-gradient">One MTB System</span></h2>
                    <p className="text-slate-400 text-lg md:text-xl">
                        A complete toolkit designed to build your fitness and confidence without unnecessary complexity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-10">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="glass-panel p-8 rounded-2xl hover:-translate-y-1.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.28)] transition-all duration-300 group border border-white/5 hover:border-brand-purple/30 bg-white/5 backdrop-blur-sm"
                        >
                            <div className="bg-brand-surface w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(178,63,255,0.15)] transition-all duration-300 border border-white/10">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-slate-400 text-[15px] leading-[1.7] mb-3">{feature.description}</p>
                            <p className="text-xs font-medium text-brand-cyan/90">{feature.seeInApp}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
