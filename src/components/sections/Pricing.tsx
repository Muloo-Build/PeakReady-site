"use client"

import { useState, useEffect } from "react"
import { Check, X, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

type Currency = 'USD' | 'ZAR';

export default function Pricing() {
    const [annual, setAnnual] = useState(true)
    const [currency, setCurrency] = useState<Currency>('USD')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        try {
            if (Intl.DateTimeFormat().resolvedOptions().timeZone.includes('Africa')) {
                setCurrency('ZAR')
            }
        } catch (e) { }
    }, [])

    const pricingData = {
        USD: {
            promo: { mo: "$9.99", yr: "$79" },
            standard: { mo: "$11.99", yr: "$99" }
        },
        ZAR: {
            promo: { mo: "R149", yr: "R1199" },
            standard: { mo: "R199", yr: "R1499" }
        }
    }

    const currentPricing = pricingData[currency];

    // Guard hydration mismatch
    if (!mounted) return <div className="py-24" />

    const plans = [
        {
            name: "Free",
            price: currency === "USD" ? "$0" : "R0",
            description: "Basic tools to log your rides and monitor fatigue manually.",
            features: [
                { name: "Core planning & goal event tracker", included: true },
                { name: "Manual metrics logging (RHR/Fatigue)", included: true },
                { name: "Basic bike maintenance profiles", included: true },
                { name: "Limited ride history", included: true },
                { name: "Advanced Strava Sync & Automation", included: false },
                { name: "In-App AI Coach", included: false },
            ],
            buttonText: "Start Free",
            popular: false
        },
        {
            name: "Pro",
            price: annual ? currentPricing.promo.yr : currentPricing.promo.mo,
            originalPrice: annual ? currentPricing.standard.yr : currentPricing.standard.mo,
            period: annual ? "/yr" : "/mo",
            savings: "Founders Launch Special",
            description: "The ultimate AI-powered endurance suite for MTB & gravel riders.",
            features: [
                { name: "In-App AI Coach", included: true, highlight: true },
                { name: "Advanced Strava insights & sync automation", included: true, highlight: true },
                { name: "Deep adaptive recommendations", included: true },
                { name: "Premium presets & full ride history", included: true },
                { name: "Advanced distance-triggered alerts", included: true },
            ],
            buttonText: "Claim Early Access",
            popular: true
        }
    ]

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-brand-purple/10 border border-brand-purple/30 text-brand-purple rounded-lg p-3 mx-auto max-w-2xl text-center text-sm font-medium mb-10 flex items-center justify-center gap-2">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>🚀 Founders Club Promo: First 500 users lock in lifetime early-adopter pricing. Let's go!</span>
                </div>

                <div className="text-center max-w-3xl mx-auto mb-16 relative">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Honest <span className="text-gradient">Pricing</span></h2>
                    <p className="text-slate-400 text-lg mb-10">
                        Start for free, upgrade when you're ready to unlock the full power of AI and Strava integration.
                    </p>

                    {/* Localization Toggle (Debug / Override) */}
                    <div className="absolute top-0 right-0 hidden md:flex items-center gap-2 text-xs">
                        <span className="text-slate-500">Currency:</span>
                        <button onClick={() => setCurrency('USD')} className={cn("px-2 py-1 rounded", currency === 'USD' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white')}>USD</button>
                        <button onClick={() => setCurrency('ZAR')} className={cn("px-2 py-1 rounded", currency === 'ZAR' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white')}>ZAR</button>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-brand-surface p-1.5 rounded-full border border-white/10 relative z-10">
                        <button
                            onClick={() => setAnnual(false)}
                            className={cn("px-6 py-2.5 rounded-full text-sm font-medium transition-colors", !annual ? "bg-brand-darker text-white shadow-sm" : "text-slate-400 hover:text-white")}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setAnnual(true)}
                            className={cn("px-6 py-2.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2", annual ? "bg-brand-darker text-white shadow-sm" : "text-slate-400 hover:text-white")}
                        >
                            Annual <span className="text-white text-xs px-2 py-0.5 rounded-full bg-gradient-brand font-bold">Save ~31%</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "glass-panel rounded-3xl p-8 md:p-10 relative flex flex-col",
                                plan.popular ? "border-brand-purple/40 shadow-[0_0_40px_rgba(178,63,255,0.15)] md:-translate-y-4 bg-brand-dark/50" : "border-white/10"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-brand text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-lg whitespace-nowrap">
                                    FOUNDERS CLUB
                                </div>
                            )}

                            <div className="mb-8 mt-2">
                                <h3 className="text-2xl font-bold mb-3 text-white">{plan.name}</h3>
                                <p className="text-slate-400 h-10">{plan.description}</p>
                            </div>

                            <div className="mb-8 border-b border-white/10 pb-8">
                                <div className="flex flex-col gap-1 justify-end min-h-[60px]">
                                    {plan.originalPrice && (
                                        <div className="text-slate-500 line-through font-medium text-lg leading-none">
                                            {plan.originalPrice}{plan.period}
                                        </div>
                                    )}
                                    <div className="flex items-end gap-1">
                                        <span className="text-5xl font-extrabold text-white leading-none">{plan.price}</span>
                                        {plan.period && <span className="text-slate-400 text-lg mb-1">{plan.period}</span>}
                                    </div>
                                </div>
                                {plan.savings ? (
                                    <div className="text-brand-cyan text-sm mt-3 font-medium flex items-center gap-1">
                                        <Zap className="w-4 h-4 inline" /> {plan.savings}
                                    </div>
                                ) : <div className="h-5 mt-3" />}
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        {feature.included ? (
                                            <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                                        ) : (
                                            <X className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                                        )}
                                        <span className={cn(
                                            "text-sm leading-relaxed",
                                            feature.included ? "text-slate-200" : "text-slate-500",
                                            'highlight' in feature && feature.highlight ? "font-semibold text-white" : ""
                                        )}>
                                            {feature.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button variant={plan.popular ? "primary" : "secondary"} size="lg" className="w-full" href={plan.popular ? "https://web.peakready.app/signup?plan=pro" : "https://web.peakready.app/signup"}>
                                {plan.buttonText}
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-white">Compare Plans</h3>
                    </div>
                    <div className="glass-panel rounded-2xl overflow-hidden border border-white/10">
                        <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 p-4 md:p-6 text-sm font-semibold text-slate-300">
                            <div className="col-span-1">Feature</div>
                            <div className="col-span-1 text-center">Free</div>
                            <div className="col-span-1 text-center text-brand-cyan">Pro</div>
                        </div>

                        {[
                            { name: "Manual plan tracking", free: true, pro: true },
                            { name: "Basic logging (RPE, Weight)", free: true, pro: true },
                            { name: "Workout history", free: "30 Days", pro: "Unlimited" },
                            { name: "Readiness Insights", free: false, pro: true },
                            { name: "Adaptive Suggestions", free: false, pro: true },
                            { name: "Strava Connect + Sync", free: false, pro: true },
                            { name: "AI Coach & Plan Gen", free: false, pro: true },
                        ].map((row, idx) => (
                            <div key={idx} className="grid grid-cols-3 border-b border-white/5 last:border-0 p-4 md:p-6 text-sm items-center hover:bg-white/5 transition-colors">
                                <div className="col-span-1 text-slate-300">{row.name}</div>
                                <div className="col-span-1 text-center flex justify-center text-slate-400">
                                    {typeof row.free === 'boolean' ? (row.free ? <Check className="w-5 h-5 text-slate-400" /> : <X className="w-5 h-5 text-slate-600" />) : row.free}
                                </div>
                                <div className="col-span-1 text-center flex justify-center text-white">
                                    {typeof row.pro === 'boolean' ? (row.pro ? <Check className="w-5 h-5 text-brand-cyan" /> : <X className="w-5 h-5 text-slate-600" />) : row.pro}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
// Required dummy component Zap for quick render fix
function Zap(props: any) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
}
