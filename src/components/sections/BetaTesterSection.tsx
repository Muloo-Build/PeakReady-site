"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/Button"

type FormState = {
    firstName: string
    lastName: string
    email: string
    trainsTowardEvents: "Yes" | "No" | ""
    blockers: string
    stravaProfile: string
    ridingFrequency: "" | "1–2 per week" | "3–4 per week" | "5+ per week"
    targetEventDistance: string
}

const initialForm: FormState = {
    firstName: "",
    lastName: "",
    email: "",
    trainsTowardEvents: "",
    blockers: "",
    stravaProfile: "",
    ridingFrequency: "",
    targetEventDistance: "",
}

export default function BetaTesterSection() {
    const [form, setForm] = useState<FormState>(initialForm)
    const [submitting, setSubmitting] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSubmitting(true)
        setErrorMessage("")
        setSuccessMessage("")

        try {
            const response = await fetch("/api/beta-signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })

            if (!response.ok) {
                const data = (await response.json()) as { error?: string }
                throw new Error(data.error || "Unable to submit request right now. Please try again.")
            }

            setForm(initialForm)
            setSuccessMessage("Thanks. I’ll personally reach out with your Pro access details shortly.")
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : "Unable to submit request right now. Please try again.")
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <section id="beta-tester" className="py-24 md:py-28 border-t border-white/5 bg-brand-dark relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Become a <span className="text-gradient">Beta Tester</span></h2>
                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        We’re currently inviting a small group of everyday MTB riders to help test and refine PeakReady.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="glass-panel rounded-2xl border border-white/10 p-6 md:p-7">
                        <h3 className="text-white font-bold text-lg mb-4">You’ll get:</h3>
                        <ul className="space-y-2 text-slate-300 text-sm">
                            <li>• Full Pro access during beta</li>
                            <li>• Direct influence on upcoming features</li>
                            <li>• A simple onboarding guide</li>
                            <li>• Direct contact with the founder</li>
                        </ul>
                    </div>
                    <div className="glass-panel rounded-2xl border border-white/10 p-6 md:p-7">
                        <h3 className="text-white font-bold text-lg mb-4">In return, we ask for:</h3>
                        <ul className="space-y-2 text-slate-300 text-sm">
                            <li>• Honest feedback</li>
                            <li>• Real-world usage</li>
                            <li>• What works and what doesn’t</li>
                        </ul>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto glass-panel rounded-2xl border border-white/10 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm text-slate-300 mb-2">First Name *</label>
                        <input
                            required
                            value={form.firstName}
                            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                            className="w-full bg-brand-dark/60 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan/50"
                            placeholder="First name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-slate-300 mb-2">Last Name</label>
                        <input
                            value={form.lastName}
                            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                            className="w-full bg-brand-dark/60 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan/50"
                            placeholder="Last name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-slate-300 mb-2">Email Address *</label>
                        <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full bg-brand-dark/60 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan/50"
                            placeholder="name@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-slate-300 mb-2">Do you currently train toward events? *</label>
                        <select
                            required
                            value={form.trainsTowardEvents}
                            onChange={(e) => setForm({ ...form, trainsTowardEvents: e.target.value as "Yes" | "No" | "" })}
                            className="w-full bg-brand-dark/60 border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan/50"
                        >
                            <option value="" className="text-slate-400">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm text-slate-300 mb-2">Current riding frequency *</label>
                        <select
                            required
                            value={form.ridingFrequency}
                            onChange={(e) => setForm({ ...form, ridingFrequency: e.target.value as FormState["ridingFrequency"] })}
                            className="w-full bg-brand-dark/60 border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan/50"
                        >
                            <option value="" className="text-slate-400">Select</option>
                            <option value="1–2 per week">1–2 per week</option>
                            <option value="3–4 per week">3–4 per week</option>
                            <option value="5+ per week">5+ per week</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm text-slate-300 mb-2">Target event distance</label>
                        <input
                            value={form.targetEventDistance}
                            onChange={(e) => setForm({ ...form, targetEventDistance: e.target.value })}
                            className="w-full bg-brand-dark/60 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan/50"
                            placeholder="e.g. 60km marathon"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm text-slate-300 mb-2">Strava profile link</label>
                        <input
                            type="url"
                            value={form.stravaProfile}
                            onChange={(e) => setForm({ ...form, stravaProfile: e.target.value })}
                            className="w-full bg-brand-dark/60 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan/50"
                            placeholder="https://www.strava.com/athletes/..."
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm text-slate-300 mb-2">What would stop you from using an app like this? *</label>
                        <textarea
                            required
                            rows={5}
                            value={form.blockers}
                            onChange={(e) => setForm({ ...form, blockers: e.target.value })}
                            className="w-full bg-brand-dark/60 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan/50 resize-y"
                            placeholder="Tell us what would make this hard to use for you."
                        />
                    </div>

                    <div className="md:col-span-2 flex flex-col items-start gap-4 pt-2">
                        <Button type="submit" variant="primary" size="lg" className="px-8" disabled={submitting}>
                            {submitting ? "Submitting..." : "Request Beta Access"}
                        </Button>

                        <p className="text-xs text-slate-500">No payment information required. No account creation required on submission.</p>

                        {successMessage && <p className="text-sm text-brand-cyan font-medium">{successMessage}</p>}
                        {errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}
                    </div>
                </form>
            </div>
        </section>
    )
}
