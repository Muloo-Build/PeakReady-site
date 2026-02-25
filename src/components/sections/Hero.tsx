import { Button } from "@/components/ui/Button"

export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cyan/12 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/3 left-1/2 w-[600px] h-[300px] bg-brand-purple/12 blur-[100px] rounded-full pointer-events-none -z-10" />

            {/* Subtle MTB elevation profile */}
            <div className="absolute left-1/2 top-[54%] -translate-x-1/2 w-[1100px] max-w-[170vw] z-10 pointer-events-none opacity-35">
                <svg viewBox="0 0 1200 120" className="w-full h-16">
                    <path
                        className="hero-elevation-path"
                        d="M0 84 L80 82 L140 70 L220 76 L300 45 L390 58 L470 34 L560 46 L660 31 L760 49 L860 40 L960 66 L1030 58 L1120 73 L1200 70"
                        fill="none"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 text-center relative">
                <div className="relative z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-sm text-brand-cyan font-medium mb-8">
                        <span>Public Beta</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                        Train for Your Next MTB Event. <br className="hidden md:block" /> Without the <span className="text-gradient">Overwhelm.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        PeakReady helps everyday riders load an event, get a smart plan, and stay consistent — without elite-athlete complexity.
                        <span className="block mt-3">Load your event. Follow the plan. Let the app handle the adjustments.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
                            <Button variant="primary" size="lg" className="w-full sm:w-auto text-lg px-8 shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-shadow" href="https://web.peakready.app/signup">
                                Start Free Plan
                            </Button>
                            <p className="text-[11px] text-slate-400">Join our early tester group and get Pro unlocked.</p>
                        </div>
                        <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg px-8 backdrop-blur" href="#early-access">
                            Join Early Access
                        </Button>
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-3">
                        <p className="text-slate-400 text-sm font-medium">Mobile apps launching soon on iOS and Android.</p>
                        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full max-w-xl">
                            <div className="h-11 px-4 bg-slate-900/80 border border-white/10 rounded-lg flex items-center justify-between gap-3 w-full sm:w-auto min-w-[230px] opacity-70 grayscale cursor-default select-none">
                                <span className="text-xs text-slate-200 font-medium">Apple App Store</span>
                                <span className="text-[10px] uppercase tracking-wider bg-white/10 text-white/60 px-2 py-1 rounded-md">Coming Soon</span>
                            </div>
                            <div className="h-11 px-4 bg-slate-900/80 border border-white/10 rounded-lg flex items-center justify-between gap-3 w-full sm:w-auto min-w-[230px] opacity-70 grayscale cursor-default select-none">
                                <span className="text-xs text-slate-200 font-medium">Google Play</span>
                                <span className="text-[10px] uppercase tracking-wider bg-white/10 text-white/60 px-2 py-1 rounded-md">Coming Soon</span>
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm">No credit card required during beta.</p>
                    </div>
                </div>

                {/* Phone Mockup Preview */}
                <div className="mt-20 relative mx-auto w-[280px] md:w-[320px] z-0">
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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] bg-gradient-brand blur-[45px] md:blur-[80px] -z-10 rounded-full opacity-20 pointer-events-none" />
                </div>
            </div>
        </section>
    )
}
