import { Button } from "@/components/ui/Button"
import { Zap, Smartphone } from "lucide-react"

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cyan/20 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/3 left-1/2 w-[600px] h-[300px] bg-brand-purple/20 blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-sm text-brand-cyan font-medium mb-8">
                    <Zap className="w-4 h-4" />
                    <span>New: AI Coach Integration Live</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                    Train Smarter. Recover Better. <br className="hidden md:block" /> <span className="text-gradient">Race Ready.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    <strong className="text-slate-300 font-semibold">Designed for MTB and off-road progression.</strong> Whether you are going from couch to your first event or pushing for a PR, PeakReady adapts to your fatigue and builds the perfect, realistic plan.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto text-lg px-8" href="https://web.peakready.app/signup">
                        Start Free
                    </Button>
                    <a href="#pricing" className="w-full sm:w-auto">
                        <Button variant="secondary" size="lg" className="w-full text-lg px-8">
                            View Pricing
                        </Button>
                    </a>
                </div>

                {/* Phone Mockup Preview */}
                <div className="mt-20 relative mx-auto w-[280px] md:w-[320px]">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-darker to-transparent z-20 pointer-events-none" />
                    <div className="relative rounded-[2.5rem] md:rounded-[3rem] bg-brand-darker border-[6px] md:border-[8px] border-slate-800 shadow-2xl overflow-hidden aspect-[9/19.5] ring-1 ring-white/10 flex flex-col items-center justify-center group cursor-pointer transition-transform hover:-translate-y-2 duration-500">
                        {/* Dynamic notch */}
                        <div className="absolute top-0 inset-x-0 flex justify-center z-20">
                            <div className="w-1/3 h-5 md:h-6 bg-slate-800 rounded-b-2xl md:rounded-b-3xl" />
                        </div>

                        {/* Real App Screenshot */}
                        <img
                            src="/Dash.png"
                            alt="PeakReady Dashboard View"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    {/* Ambient background light */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] bg-gradient-brand blur-[60px] md:blur-[100px] -z-10 rounded-full opacity-30 pointer-events-none" />
                </div>
            </div>
        </section>
    )
}
