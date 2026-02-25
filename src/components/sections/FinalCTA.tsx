"use client"

import { Button } from "@/components/ui/Button"

export default function FinalCTA() {
    return (
        <section id="early-access" className="py-32 md:py-40 relative overflow-hidden my-16">
            {/* Background container */}
            <div className="absolute inset-0 mx-4 md:mx-6 rounded-[3rem] overflow-hidden glass-panel border border-white/10">
                <div className="absolute inset-0 bg-brand-surface" />
                <div className="absolute top-0 right-0 w-[440px] h-[440px] bg-brand-cyan/16 blur-[130px] -translate-y-1/2 translate-x-1/3 rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[440px] h-[440px] bg-brand-purple/16 blur-[130px] translate-y-1/2 -translate-x-1/3 rounded-full pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center py-20 md:py-28 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white gap-2">
                    Be the First on the <span className="text-gradient">Trail.</span>
                </h2>

                <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join the active tester group and get direct onboarding while we refine the beta experience.
                </p>

                <Button
                    variant="primary"
                    size="lg"
                    href="#beta-tester"
                    className="w-full sm:w-auto h-auto py-4 px-10 shadow-[0_0_16px_rgba(0,210,255,0.22)] hover:shadow-[0_0_24px_rgba(0,210,255,0.34)]"
                >
                    Request Beta Access
                </Button>

                <p className="text-slate-500 text-sm mt-6">
                    Public beta access includes Pro features while we gather feedback.
                </p>
            </div>
        </section>
    )
}

