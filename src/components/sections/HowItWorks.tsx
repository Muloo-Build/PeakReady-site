export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Tell Us Where You Are",
            description: "Share your current riding routine, your goal, and how much time you have each week.",
            image: "/Event.png"
        },
        {
            number: "02",
            title: "Follow Your Weekly Plan",
            description: "Get simple day-by-day guidance you can actually stick to, then log how each ride felt.",
            image: "/Metrics.png"
        },
        {
            number: "03",
            title: "Ride, Sync, Adjust",
            description: "Connect Strava if you want, and PeakReady updates your next rides based on what you completed.",
            image: "/Strava.png"
        }
    ]
    return (
        <section id="how-it-works" className="py-28 bg-brand-dark">
            <div className="container mx-auto px-4 md:px-6 pt-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">How It <span className="text-gradient">Works</span></h2>
                    <p className="text-slate-400 text-xl">
                        Three simple steps to get back into riding, build confidence, and stay consistent.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/50 to-brand-cyan/0 z-0" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-brand-darker border-2 border-brand-surface group-hover:border-brand-cyan flex items-center justify-center mb-8 transition-colors duration-300 shadow-xl relative">
                                <span className="text-3xl font-bold font-outfit text-white group-hover:text-brand-cyan transition-colors duration-300">{step.number}</span>
                                <div className="absolute inset-0 rounded-full bg-brand-cyan/0 group-hover:bg-brand-cyan/5 transition-colors duration-300 pointer-events-none" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                            <p className="text-slate-400 text-[17px] leading-relaxed max-w-sm mb-10">
                                {step.description}
                            </p>

                            {/* Mini Phone Mockup for Step */}
                            <div className="relative w-full max-w-[220px] mx-auto mt-auto rounded-[2rem] bg-brand-darker border-[6px] border-slate-800 shadow-2xl overflow-hidden aspect-[9/19.5] ring-1 ring-white/10 group-hover:-translate-y-2 transition-transform duration-500">
                                {/* Dynamic notch */}
                                <div className="absolute top-0 inset-x-0 flex justify-center z-20">
                                    <div className="w-1/3 h-4 bg-slate-800 rounded-b-xl" />
                                </div>
                                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
