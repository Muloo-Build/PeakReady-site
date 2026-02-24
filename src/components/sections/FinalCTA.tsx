import { Button } from "@/components/ui/Button"

export default function FinalCTA() {
    return (
        <section className="py-28 relative overflow-hidden my-12">
            {/* Background container */}
            <div className="absolute inset-0 mx-4 md:mx-6 rounded-[3rem] overflow-hidden">
                <div className="absolute inset-0 bg-brand-surface border border-white/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 opacity-30" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/30 blur-[150px] -translate-y-1/2 translate-x-1/3 rounded-full pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center py-20 md:py-28 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight text-white font-outfit">
                    Train Smarter. Recover Better. <br className="hidden md:block" /> Race Ready.
                </h2>

                <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                    Join thousands of MTB and gravel riders using PeakReady to crush their goals, get fitter, and enjoy the ride without overtraining.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="primary" size="xl" className="w-full sm:w-auto shadow-[0_0_30px_rgba(0,210,255,0.4)] hover:shadow-[0_0_40px_rgba(0,210,255,0.6)]" href="https://web.peakready.app/signup">
                        Start Your Free Training
                    </Button>
                    <span className="text-slate-400 text-sm mt-4 sm:mt-0 sm:ml-4">
                        No credit card required
                    </span>
                </div>
            </div>
        </section>
    )
}
