"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/Button"

type FormState = {
    firstname: string
    lastname: string
    email: string
    phone: string
    current_riding_frequency: string
    training_toward_event: string
    app_usage_blocker: string
}

const initialFormState: FormState = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    current_riding_frequency: "",
    training_toward_event: "",
    app_usage_blocker: "",
}

export default function BetaTesterSection() {
    const [formState, setFormState] = useState<FormState>(initialFormState)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsSubmitting(true)
        setStatus("idle")

        const fields = [
            { name: "firstname", value: formState.firstname },
            { name: "lastname", value: formState.lastname },
            { name: "email", value: formState.email },
            { name: "phone", value: formState.phone },
            { name: "current_riding_frequency", value: formState.current_riding_frequency },
            { name: "training_toward_event", value: formState.training_toward_event },
            { name: "app_usage_blocker", value: formState.app_usage_blocker },
        ].filter((field) => field.value.trim() !== "")

        try {
            const response = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/8066413/b3cc7f32-dbee-4aac-ad4c-2774a30245bf", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fields,
                    context: {
                        pageUri: window.location.href,
                        pageName: "PeakReady Beta Tester",
                    },
                }),
            })

            if (!response.ok) {
                throw new Error("HubSpot submission failed")
            }

            setStatus("success")
            setFormState(initialFormState)
        } catch {
            setStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="beta-tester" className="py-32 md:py-40 border-t border-white/5 bg-brand-dark relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                        Become a <span className="text-gradient">Beta Tester</span>
                    </h2>
                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        We’re inviting a small group of everyday MTB riders to help refine PeakReady before App Store launch.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mb-8 glass-panel rounded-2xl border border-white/10 p-6 md:p-7">
                    <h3 className="text-white font-bold text-lg mb-4">You’ll get:</h3>
                    <ul className="space-y-2 text-slate-300 text-sm md:text-base">
                        <li>• Full Pro access during beta</li>
                        <li>• Direct feedback channel</li>
                        <li>• Early feature access</li>
                    </ul>
                </div>

                <div className="max-w-[520px] mx-auto glass-panel rounded-2xl border border-white/10 p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="firstname" className="text-sm font-medium text-slate-200 mb-1.5 block">
                                First Name *
                            </label>
                            <input
                                id="firstname"
                                type="text"
                                required
                                value={formState.firstname}
                                onChange={(event) => setFormState((prev) => ({ ...prev, firstname: event.target.value }))}
                                className="w-full rounded-xl border border-white/15 bg-brand-dark/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="lastname" className="text-sm font-medium text-slate-200 mb-1.5 block">
                                Last Name
                            </label>
                            <input
                                id="lastname"
                                type="text"
                                value={formState.lastname}
                                onChange={(event) => setFormState((prev) => ({ ...prev, lastname: event.target.value }))}
                                className="w-full rounded-xl border border-white/15 bg-brand-dark/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-slate-200 mb-1.5 block">
                                Email *
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={formState.email}
                                onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
                                className="w-full rounded-xl border border-white/15 bg-brand-dark/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="text-sm font-medium text-slate-200 mb-1.5 block">
                                Phone
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                value={formState.phone}
                                onChange={(event) => setFormState((prev) => ({ ...prev, phone: event.target.value }))}
                                className="w-full rounded-xl border border-white/15 bg-brand-dark/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="current_riding_frequency" className="text-sm font-medium text-slate-200 mb-1.5 block">
                                Current Riding Frequency *
                            </label>
                            <select
                                id="current_riding_frequency"
                                required
                                value={formState.current_riding_frequency}
                                onChange={(event) => setFormState((prev) => ({ ...prev, current_riding_frequency: event.target.value }))}
                                className="w-full rounded-xl border border-white/15 bg-brand-dark/70 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                            >
                                <option value="" disabled>
                                    Select frequency
                                </option>
                                <option value="1-2 per week">1-2 per week</option>
                                <option value="3-4 per week">3-4 per week</option>
                                <option value="5+ per week">5+ per week</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="training_toward_event" className="text-sm font-medium text-slate-200 mb-1.5 block">
                                Training Toward Event? *
                            </label>
                            <select
                                id="training_toward_event"
                                required
                                value={formState.training_toward_event}
                                onChange={(event) => setFormState((prev) => ({ ...prev, training_toward_event: event.target.value }))}
                                className="w-full rounded-xl border border-white/15 bg-brand-dark/70 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                            >
                                <option value="" disabled>
                                    Select option
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="app_usage_blocker" className="text-sm font-medium text-slate-200 mb-1.5 block">
                                What Would Stop You From Using This? *
                            </label>
                            <textarea
                                id="app_usage_blocker"
                                required
                                rows={4}
                                value={formState.app_usage_blocker}
                                onChange={(event) => setFormState((prev) => ({ ...prev, app_usage_blocker: event.target.value }))}
                                className="w-full rounded-xl border border-white/15 bg-brand-dark/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/20 transition-all resize-y"
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full text-base shadow-[0_0_16px_rgba(0,210,255,0.22)] hover:shadow-[0_0_24px_rgba(0,210,255,0.34)]"
                        >
                            {isSubmitting ? "Submitting..." : "Request Beta Access"}
                        </Button>
                    </form>

                    <div className="mt-5 text-center min-h-6" aria-live="polite">
                        {status === "success" && (
                            <p className="text-sm text-brand-cyan">Thanks. I’ll personally reach out soon.</p>
                        )}
                        {status === "error" && (
                            <p className="text-sm text-rose-300">Something went wrong. Please try again.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
