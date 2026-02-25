"use client"

import { Button } from "@/components/ui/Button"

export default function FinalCTA() {
    return (
        <section id="early-access" className="py-24 md:py-32 relative overflow-hidden my-12">
            {/* Background container */}
            <div className="absolute inset-0 mx-4 md:mx-6 rounded-[3rem] overflow-hidden glass-panel border border-white/10">
                <div className="absolute inset-0 bg-brand-surface" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 opacity-30" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/30 blur-[150px] -translate-y-1/2 translate-x-1/3 rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/30 blur-[150px] translate-y-1/2 -translate-x-1/3 rounded-full pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center py-20 md:py-28 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white gap-2">
                    Be the First on the <span className="text-gradient">Trail.</span>
                </h2>

                <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Drop your email to get notified when the native iOS & Android apps drop, and secure your spot in the beta.
                </p>

                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 relative" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 bg-brand-dark/50 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-all text-lg min-w-0"
                        required
                    />
                    <Button variant="primary" size="lg" className="w-full sm:w-auto h-auto py-4 px-8 shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)]">
                        Get Early Access
                    </Button>
                </form>

                <p className="text-slate-500 text-sm mt-6">
                    We only email when we have major app updates. No spam, just gears.
                </p>
            </div>
        </section>
    )
}

