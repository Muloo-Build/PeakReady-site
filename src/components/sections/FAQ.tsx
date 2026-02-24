"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0)

    const faqs = [
        {
            question: "Why pay for Pro instead of using the Free tier?",
            answer: "The Free tier is great for manually logging how you feel, but Pro unlocks PeakReady's core value: our AI Coach and automatic Strava synchronization. With Pro, your training plan adapts dynamically every single day based on what you actually rode and how fatigued you are."
        },
        {
            question: "What do the AI features include?",
            answer: "Our AI generates complete macro training plans based on your target event. Day-to-day, the AI coach analyzes your Strava data, heart rate, and subjective feedback (RPE) to recommend adjustments—like swapping a VO2 max session for a recovery spin if you're carrying too much fatigue."
        },
        {
            question: "What exactly does the Strava sync do?",
            answer: "We automatically ingest your completed activities. Our engine compares the duration, intensity, and TSS of your actual ride against what was planned for that day, and uses that delta to adjust your future workouts seamlessly."
        },
        {
            question: "Can I upgrade or downgrade my plan later?",
            answer: "Yes, absolutely. You can upgrade to Pro at any time to unlock historical analytics and AI features, and your existing data will be waiting for you. Downgrading will simply pause access to premium integrations without deleting your ride history."
        },
        {
            question: "Is there a trial or refund policy?",
            answer: "We offer a 14-day money-back guarantee on all Annual Pro plans. If you don't find value in the adaptive plans within your first two weeks of training, we'll refund your subscription—no questions asked."
        }
    ]

    return (
        <section id="faq" className="py-24 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h2>
                    <p className="text-slate-400 text-lg">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="glass-panel rounded-2xl overflow-hidden transition-all duration-300 border border-white/5"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left"
                                onClick={() => setOpen(open === idx ? null : idx)}
                            >
                                <span className="font-semibold text-lg text-white">{faq.question}</span>
                                <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4", open === idx ? "rotate-180 text-brand-cyan" : "")} />
                            </button>

                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300 px-6",
                                    open === idx ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <p className="text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
