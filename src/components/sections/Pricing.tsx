import { Check } from "lucide-react"
import { Button } from "@/components/ui/Button"

const plans = [
    {
        name: "Free",
        price: "R0",
        period: "",
        description: "Core planning and manual tracking for riders getting started.",
        features: [
            "Simple weekly ride planner",
            "Manual check-ins (energy, sleep, soreness)",
            "Basic bike maintenance reminders",
        ],
        cta: "Join Free",
        href: "#beta-tester",
    },
    {
        name: "Pro",
        price: "R49",
        period: "/mo",
        description: "Adaptive planning, Strava sync, and coaching tools during beta.",
        features: [
            "AI Plan Generation",
            "Adaptive Fatigue Swaps",
            "Smart Strava Sync",
            "Coach Chat",
        ],
        cta: "Join Early Access",
        href: "#beta-tester",
        highlight: "Cancel anytime. Beta pricing.",
    },
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 md:py-40 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-brand-cyan/7 blur-[130px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Simple, Honest <span className="text-gradient">Pricing</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl">
                        Focused monthly plans for beta riders with no hidden upgrades.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {plans.map((plan) => (
                        <article
                            key={plan.name}
                            className={`glass-panel rounded-3xl p-8 md:p-10 border ${plan.name === "Pro" ? "border-brand-purple/35" : "border-white/10"} shadow-[0_10px_24px_rgba(0,0,0,0.22)]`}
                        >
                            <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                            <p className="text-slate-400 text-[16px] leading-[1.7] mb-6">{plan.description}</p>

                            <div className="mb-6 pb-6 border-b border-white/10">
                                <div className="flex items-end gap-1">
                                    <span className="text-5xl font-extrabold text-white leading-none">{plan.price}</span>
                                    {plan.period ? <span className="text-slate-400 text-lg mb-1">{plan.period}</span> : null}
                                </div>
                                {plan.highlight ? <p className="text-slate-300 text-sm mt-3">{plan.highlight}</p> : null}
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                                        <span className="text-sm text-slate-200 leading-[1.7]">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button variant={plan.name === "Pro" ? "primary" : "secondary"} size="lg" className="w-full" href={plan.href}>
                                {plan.cta}
                            </Button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
