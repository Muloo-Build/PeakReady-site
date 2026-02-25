import Image from "next/image"

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Pick an Event",
            description: "Tell us what you're training for, when it is, and how much time you have to train each week. We automatically structure a safe ramp-up.",
            image: "/Event.png"
        },
        {
            number: "02",
            title: "Get a Smart Plan",
            description: "Receive a clear, day-by-day weekly guide. Nothing overly technical - just plain language for what to ride today.",
            image: "/Metrics.png"
        },
        {
            number: "03",
            title: "Ride & Sync",
            description: "Connect Strava, go ride, and PeakReady updates your progress. Catch a cold or miss a weekend? The plan adjusts automatically.",
            image: "/Strava.png"
        }
    ]

    return (
        <section id="how-it-works" className="py-32 md:py-40 bg-brand-surface relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">How It <span className="text-gradient">Works</span></h2>
                    <p className="text-slate-400 text-lg md:text-xl">
                        Three simple steps to build confidence and stay consistent toward race day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/50 to-brand-cyan/0 z-0" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-brand-darker border-2 border-brand-surface group-hover:border-brand-cyan flex items-center justify-center mb-8 transition-colors duration-300 shadow-xl relative">
                                <span className="text-3xl font-bold font-outfit text-white group-hover:text-brand-cyan transition-colors duration-300">{step.number}</span>
                                <div className="absolute inset-0 rounded-full bg-brand-cyan/0 group-hover:bg-brand-cyan/10 transition-colors duration-300 pointer-events-none" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                            <p className="text-slate-400 text-[15px] leading-[1.7] max-w-sm mb-10 min-h-[80px]">
                                {step.description}
                            </p>

                            <div className="relative w-full max-w-[180px] md:max-w-[220px] mx-auto mt-auto rounded-[18px] bg-brand-dark border-[6px] border-slate-800 shadow-[0_10px_24px_rgba(0,0,0,0.22)] overflow-hidden aspect-[9/19.5] ring-1 ring-white/10 group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="absolute top-0 inset-x-0 flex justify-center z-20">
                                    <div className="w-1/3 h-4 bg-slate-800 rounded-b-xl" />
                                </div>
                                <Image src={step.image} alt={step.title} fill className="object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
