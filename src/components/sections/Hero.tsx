import Image from "next/image"
import { Button } from "@/components/ui/Button"

export default function Hero() {
    return (
        <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/3 left-1/2 w-[640px] h-[320px] bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-12 lg:gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-sm text-brand-cyan font-medium mb-7">
                            <span>Public Beta</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight">
                            Train for Your Next MTB Event. <br className="hidden md:block" /> Without the <span className="text-gradient">Overwhelm.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl leading-relaxed">
                            Built for everyday MTB riders who want structure without pro-level complexity.
                        </p>
                        <p className="text-base md:text-lg text-slate-400 mb-9 max-w-2xl leading-relaxed">
                            Load your event. Get a smart plan. Let it adapt as life happens.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full sm:w-auto text-lg px-8 shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-shadow"
                                href="#beta-tester"
                            >
                                Join the Beta
                            </Button>
                            <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg px-8 backdrop-blur" href="#how-it-works">
                                See How It Works
                            </Button>
                        </div>

                        <p className="text-sm text-slate-500">Free during beta. No credit card required.</p>
                    </div>

                    <div className="relative mx-auto w-full max-w-[500px]">
                        <div className="absolute left-1/2 top-8 -translate-x-1/2 w-[540px] max-w-[120%] pointer-events-none opacity-40">
                            <svg viewBox="0 0 900 120" className="w-full h-16">
                                <path
                                    className="hero-elevation-path"
                                    d="M0 86 L70 84 L120 72 L180 78 L250 44 L325 62 L395 40 L470 52 L540 36 L620 57 L700 49 L780 69 L840 61 L900 66"
                                    fill="none"
                                />
                            </svg>
                        </div>

                        <div className="relative z-20 ml-auto w-[86%] rounded-[1.6rem] border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.45)] overflow-hidden bg-brand-dark">
                            <Image src="/Dash.png" alt="PeakReady dashboard screenshot" width={540} height={1120} className="w-full h-auto" priority />
                        </div>

                        <div className="absolute z-10 -left-4 top-16 w-[64%] rounded-[1.3rem] border border-white/10 shadow-[0_12px_38px_rgba(0,0,0,0.35)] overflow-hidden bg-brand-dark">
                            <Image src="/Plan.png" alt="PeakReady plan screenshot" width={420} height={900} className="w-full h-auto" />
                        </div>

                        <div className="absolute -right-4 bottom-8 w-[58%] rounded-[1.2rem] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden bg-brand-dark opacity-35">
                            <Image src="/Strava.png" alt="PeakReady Strava sync screenshot" width={380} height={760} className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
