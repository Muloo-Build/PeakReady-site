import Image from "next/image"

type AppCard = {
    image: string
    title: string
    description: string
}

const cards: AppCard[] = [
    {
        image: "/Dash.png",
        title: "Weekly Overview & Readiness",
        description: "See your week at a glance, including progress, recovery status, and what session to prioritize next.",
    },
    {
        image: "/Plan.png",
        title: "Structured Weekly Plan",
        description: "Follow a clear day-by-day plan built around your event timeline and available riding hours.",
    },
    {
        image: "/Event.png",
        title: "Goal Event & Countdown",
        description: "Track your target event, countdown, and readiness trajectory in one place.",
    },
    {
        image: "/Strava.png",
        title: "Sync & Planned vs Actual",
        description: "Compare what you planned against what you actually rode through direct Strava sync.",
    },
    {
        image: "/Metrics.png",
        title: "Fatigue & Readiness Logging",
        description: "Log sleep, soreness, and energy to guide effort decisions through the week.",
    },
    {
        image: "/Bike.png",
        title: "Bike Profile & Maintenance Tracking",
        description: "Keep bike setup and service reminders tied to your real usage and ride load.",
    },
    {
        image: "/Coach.png",
        title: "AI Coach Guidance",
        description: "Ask practical training questions and get context-aware guidance for your current block.",
    },
    {
        image: "/More.png",
        title: "Settings & Customisation",
        description: "Tune preferences, planning controls, and profile settings to match your routine.",
    },
]

export default function InsideTheApp() {
    return (
        <section id="inside-the-app" className="py-24 md:py-32 bg-brand-surface relative overflow-hidden border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                        Inside the <span className="text-gradient">App</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl">
                        PeakReady combines planning, sync, coaching and maintenance in one system.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {cards.map((card) => (
                        <article key={card.title} className="bg-brand-dark/80 rounded-2xl p-4 md:p-5 shadow-[0_12px_35px_rgba(0,0,0,0.25)]">
                            <div className="rounded-xl overflow-hidden mb-4 shadow-[0_8px_26px_rgba(0,0,0,0.35)] bg-brand-dark">
                                <Image src={card.image} alt={card.title} width={480} height={950} className="w-full h-auto" />
                            </div>
                            <h3 className="text-white font-bold text-base mb-2">{card.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
