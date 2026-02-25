"use client"

import { useState } from "react"
import { Check, Lock, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

type Currency = "USD" | "ZAR"

function detectDefaultCurrency(): Currency {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone.includes("Africa") ? "ZAR" : "USD"
    } catch {
        return "USD"
    }
}

export default function Pricing() {
    const [annual, setAnnual] = useState(true)
    const [currency, setCurrency] = useState<Currency>(detectDefaultCurrency)

    const pricingData = {
        USD: {
            promo: { mo: "$9.99", yr: "$79" },
            standard: { mo: "$11.99", yr: "$99" }
        },
        ZAR: {
            promo: { mo: "R49", yr: "R499" },
            standard: { mo: "R99", yr: "R890" }
        }
    }

    const currentPricing = pricingData[currency]

    const plans = [
        {
            name: "Free",
            price: currency === "USD" ? "$0" : "R0",
            description: "Core planning, metrics, and manual ride workflow.",
            features: [
                { name: "Simple weekly ride planner", included: true },
                { name: "Manual check-ins (energy, sleep, soreness)", included: true },
                { name: "Basic bike maintenance reminders", included: true },
                { name: "Limited ride history", included: true },
                { name: "Automatic Strava sync", included: false },
                { name: "In-app ride coach", included: false }
            ],
            buttonText: "Join Free",
            buttonHref: "#early-access",
            popular: false
        },
        {
            name: "Pro",
            price: annual ? currentPricing.promo.yr : currentPricing.promo.mo,
            originalPrice: annual ? currentPricing.standard.yr : currentPricing.standard.mo,
            period: annual ? "/yr" : "/mo",
            description: "Full AI plan generation, adaptive swaps, and smart Strava sync.",
            features: [
                { name: "AI Plan Generation", included: true, highlight: true },
                { name: "Adaptive Fatigue Swaps", included: true, highlight: true },
                { name: "Smart Strava Sync", included: true },
                { name: "Coach Chat", included: true },
                { name: "Pro features unlocked during beta", included: true, highlight: true }
            ],
            buttonText: "Join Early Access",
            buttonHref: "#early-access",
            popular: true
        }
    ]

    return (
        <section id="pricing" className="py-28 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 relative">
                    <p className="text-brand-cyan text-sm md:text-base font-semibold mb-5">
                        Currently free during beta for approved testers.
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Honest <span className="text-gradient">Pricing</span></h2>
                    <p className="text-slate-400 text-lg md:text-xl mb-10">
                        We are still refining the product with riders. Pricing below is planned and shown for transparency.
                    </p>

                    {/* Localization Toggle (Debug / Override) */}
                    <div className="absolute top-0 right-0 hidden md:flex items-center gap-2 text-xs">
                        <span className="text-slate-500">Currency:</span>
                        <button onClick={() => setCurrency("USD")} className={cn("px-2 py-1 rounded", currency === "USD" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white")}>USD</button>
                        <button onClick={() => setCurrency("ZAR")} className={cn("px-2 py-1 rounded", currency === "ZAR" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white")}>ZAR</button>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-brand-surface p-1.5 rounded-full border border-white/10 relative z-10 mb-8">
                        <button
                            onClick={() => setAnnual(false)}
                            className={cn("px-6 py-2.5 rounded-full text-sm font-medium transition-colors", !annual ? "bg-brand-darker text-white shadow-sm" : "text-slate-400 hover:text-white")}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setAnnual(true)}
                            className={cn("px-6 py-2.5 rounded-full text-sm font-medium transition-colors", annual ? "bg-brand-darker text-white shadow-sm" : "text-slate-400 hover:text-white")}
                        >
                            Annual
                        </button>
                    </div>

                    <p className="text-slate-300 text-sm md:text-base font-medium">
                        Simple pricing. No hidden upgrades. No per-session fees.
                    </p>
                </div>

                <p className="text-center text-xs uppercase tracking-wider text-slate-500 mb-5">Planned post-beta pricing</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "glass-panel rounded-3xl p-8 md:p-10 relative flex flex-col",
                                plan.popular ? "border-brand-purple/40 shadow-[0_0_40px_rgba(178,63,255,0.15)] md:-translate-y-4 bg-brand-dark/50" : "border-white/10"
                            )}
                        >
                            <div className="mb-8 mt-2">
                                <h3 className="text-2xl font-bold mb-3 text-white">{plan.name}</h3>
                                <p className="text-slate-400 text-[17px] leading-relaxed min-h-[52px]">{plan.description}</p>
                                {plan.name === "Pro" && (
                                    <p className="text-brand-cyan text-xs mt-3 font-medium">
                                        Beta testers receive Pro access while we refine the product.
                                    </p>
                                )}
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
                                {plan.name === "Pro" && annual && currency === "ZAR" && (
                                    <p className="text-brand-cyan text-sm mt-3 font-medium">Save R89 per year compared to monthly.</p>
                                )}
                                {plan.name === "Pro" && (
                                    <p className="text-slate-400 text-xs mt-2">
                                        {annual ? "Most popular for riders training toward an event." : "Flexible option."}
                                    </p>
                                )}
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
                                            "highlight" in feature && feature.highlight ? "font-semibold text-white" : ""
                                        )}>
                                            {feature.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button variant={plan.popular ? "primary" : "secondary"} size="lg" className="w-full" href={plan.buttonHref}>
                                {plan.buttonText}
                            </Button>

                            {plan.popular && (
                                <p className="text-center text-xs text-slate-500 mt-4">
                                    No credit card required to start.
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-slate-400 mb-16 inline-flex items-center justify-center gap-2 w-full">
                    <Lock className="w-4 h-4 text-slate-400" />
                    <span>Cancel anytime. Early beta pricing locked in.</span>
                </p>

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
                            { name: "Basic logging (energy, sleep, weight)", free: true, pro: true },
                            { name: "Ride history", free: "30 Days", pro: "Unlimited" },
                            { name: "Plan adjustments", free: false, pro: true },
                            { name: "Daily guidance suggestions", free: false, pro: true },
                            { name: "Strava Connect + Sync", free: false, pro: true },
                            { name: "In-app ride coach", free: false, pro: true },
                        ].map((row, idx) => (
                            <div key={idx} className="grid grid-cols-3 border-b border-white/5 last:border-0 p-4 md:p-6 text-sm items-center hover:bg-white/5 transition-colors">
                                <div className="col-span-1 text-slate-300">{row.name}</div>
                                <div className="col-span-1 text-center flex justify-center text-slate-400">
                                    {typeof row.free === "boolean" ? (row.free ? <Check className="w-5 h-5 text-slate-400" /> : <X className="w-5 h-5 text-slate-600" />) : row.free}
                                </div>
                                <div className="col-span-1 text-center flex justify-center text-white">
                                    {typeof row.pro === "boolean" ? (row.pro ? <Check className="w-5 h-5 text-brand-cyan" /> : <X className="w-5 h-5 text-slate-600" />) : row.pro}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

