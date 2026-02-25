import Image from "next/image"

type JourneyStep = {
    number: string
    image: string
    title: string
    description: string
}

const steps: JourneyStep[] = [
    {
        number: "01",
        image: "/Event.png",
        title: "Start With Your Event",
        description: "Set your target distance and date so everything builds toward a clear goal.",
    },
    {
        number: "02",
        image: "/Plan.png",
        title: "Get a Plan That Fits",
        description: "Choose a preset or generate a plan based on your current history and routine.",
    },
    {
        number: "03",
        image: "/Strava.png",
        title: "Sync Your Rides",
        description: "Connect Strava and keep planned sessions matched against what you actually rode.",
    },
    {
        number: "04",
        image: "/Metrics.png",
        title: "Track Fatigue Simply",
        description: "Log readiness quickly so intensity can adjust before fatigue stacks too high.",
    },
    {
        number: "05",
        image: "/Bike.png",
        title: "Keep Your Bike Ready",
        description: "Track mileage and maintenance reminders tied to real use, not guesswork.",
    },
    {
        number: "06",
        image: "/Coach.png",
        title: "Ask the Coach",
        description: "Get focused guidance based on your recent training and current block.",
    },
]

export default function InsideTheApp() {
    return (
        <section id="inside-the-app" className="py-32 md:py-40 bg-brand-surface border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
                        Your PeakReady <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl">
                        A clean, step-by-step flow from event setup to adaptive coaching.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto relative">
                    <svg
                        viewBox="0 0 1200 700"
                        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
                        aria-hidden="true"
                    >
                        <defs>
                            <marker id="flow-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                                <path d="M0 0 L10 5 L0 10 z" fill="rgba(255,255,255,0.25)" />
                            </marker>
                        </defs>
                        <path d="M220 162 C330 162 450 162 560 162" stroke="rgba(255,255,255,0.2)" strokeWidth="1.25" fill="none" markerEnd="url(#flow-arrow)" />
                        <path d="M640 162 C750 162 870 162 980 162" stroke="rgba(255,255,255,0.2)" strokeWidth="1.25" fill="none" markerEnd="url(#flow-arrow)" />
                        <path d="M1060 210 C1110 320 950 470 220 530" stroke="rgba(255,255,255,0.2)" strokeWidth="1.25" fill="none" markerEnd="url(#flow-arrow)" />
                        <path d="M220 530 C330 530 450 530 560 530" stroke="rgba(255,255,255,0.2)" strokeWidth="1.25" fill="none" markerEnd="url(#flow-arrow)" />
                        <path d="M640 530 C750 530 870 530 980 530" stroke="rgba(255,255,255,0.2)" strokeWidth="1.25" fill="none" markerEnd="url(#flow-arrow)" />
                    </svg>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
                        {steps.map((step) => (
                            <article
                                key={step.number}
                                className="glass-panel rounded-2xl border border-white/10 p-5 md:p-6 shadow-[0_10px_24px_rgba(0,0,0,0.22)]"
                            >
                                <span className="inline-flex items-center justify-center text-xs font-semibold tracking-wider text-brand-cyan border border-brand-cyan/35 bg-brand-cyan/10 rounded-full px-2.5 py-1 mb-4">
                                    {step.number}
                                </span>
                                <h3 className="text-white text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-[1.7] mb-5">{step.description}</p>
                                <div className="w-full rounded-[18px] border border-white/10 bg-brand-dark/80 overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.22)] p-3">
                                    <div className="w-full h-[140px] md:h-[180px]">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            width={500}
                                            height={900}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
