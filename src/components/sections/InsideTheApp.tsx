import Image from "next/image"

type JourneyStep = {
    image: string
    title: string
    description: string
    imageLeft: boolean
}

const steps: JourneyStep[] = [
    {
        image: "/Event.png",
        title: "Start With Your Event",
        description: "Set your target distance and date. Everything builds toward it.",
        imageLeft: false,
    },
    {
        image: "/Plan.png",
        title: "Get a Structured Plan",
        description: "Choose a preset or generate one based on your history and goals.",
        imageLeft: true,
    },
    {
        image: "/Strava.png",
        title: "Sync & Track Progress",
        description: "Automatically compare planned sessions with real rides.",
        imageLeft: false,
    },
    {
        image: "/Metrics.png",
        title: "Log Fatigue & Stay Balanced",
        description: "Track readiness and adjust before overtraining.",
        imageLeft: true,
    },
    {
        image: "/Bike.png",
        title: "Manage Your Bike",
        description: "Track mileage and get service reminders based on real usage.",
        imageLeft: false,
    },
    {
        image: "/Coach.png",
        title: "Ask the Coach",
        description: "Get focused guidance based on your recent activity.",
        imageLeft: true,
    },
]

export default function InsideTheApp() {
    return (
        <section id="inside-the-app" className="py-32 md:py-40 bg-brand-surface relative overflow-hidden border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                        How PeakReady Works in <span className="text-gradient">Real Life</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl">
                        See the full rider journey from event setup to weekly execution and adjustments.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {steps.map((step, idx) => (
                        <article
                            key={step.title}
                            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-10 md:py-12 ${idx > 0 ? "border-t border-white/10" : ""}`}
                        >
                            <div className={step.imageLeft ? "order-1" : "order-2 md:order-1"}>
                                <div className="w-full max-w-[380px] mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_28px_rgba(0,0,0,0.26)] bg-brand-dark">
                                    <Image src={step.image} alt={step.title} width={760} height={1500} className="w-full h-auto" />
                                </div>
                            </div>

                            <div className={step.imageLeft ? "order-2" : "order-1 md:order-2"}>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">{step.title}</h3>
                                <p className="text-slate-400 text-base md:text-lg leading-[1.7] max-w-lg">{step.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
