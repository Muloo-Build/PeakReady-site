import Image from "next/image"
import { Button } from "@/components/ui/Button"

export default function Hero() {
    return (
        <section className="relative pt-32 pb-28 md:pt-44 md:pb-36 overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[760px] h-[360px] bg-brand-cyan/6 blur-[100px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/3 left-1/2 w-[540px] h-[280px] bg-brand-purple/6 blur-[90px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-12 lg:gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-sm text-brand-cyan font-medium mb-7">
                            <span>Public Beta</span>
                        </div>

                        <h1 className="text-6xl md:text-[5.2rem] font-extrabold tracking-tight mb-7 max-w-3xl leading-tight">
                            Train for Your Next MTB Event. <br className="hidden md:block" /> Without the <span className="text-gradient">Overwhelm.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl leading-relaxed">
                            Built for everyday MTB riders who want structure without pro-level complexity.
                        </p>
                        <p className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl leading-relaxed">
                            Load your event. Get a smart plan. Let it adapt as life happens.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full sm:w-auto text-lg px-8 shadow-[0_0_16px_rgba(0,210,255,0.22)] hover:shadow-[0_0_24px_rgba(0,210,255,0.34)] transition-shadow"
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

                    <div className="relative mx-auto w-full max-w-[420px]">
                        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[460px] max-w-[120%] pointer-events-none opacity-30">
                            <svg viewBox="0 0 900 120" className="w-full h-16">
                                <path
                                    className="hero-elevation-path"
                                    d="M0 86 L70 84 L120 72 L180 78 L250 44 L325 62 L395 40 L470 52 L540 36 L620 57 L700 49 L780 69 L840 61 L900 66"
                                    fill="none"
                                />
                            </svg>
                        </div>

                        <div className="relative z-20 ml-auto w-full rounded-[1.6rem] border border-white/10 shadow-[0_14px_46px_rgba(0,0,0,0.36)] overflow-hidden bg-brand-dark">
                            <Image src="/Dash.png" alt="PeakReady dashboard screenshot" width={540} height={1120} className="w-full h-auto" priority />
                        </div>

                        <div className="absolute z-10 -left-10 top-14 w-[72%] scale-[0.85] rounded-[1.3rem] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.28)] overflow-hidden bg-brand-dark">
                            <Image src="/Plan.png" alt="PeakReady plan screenshot" width={420} height={900} className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
