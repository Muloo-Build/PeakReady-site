import { BrainCircuit, LineChart, Target, Zap, ActivitySquare, Bell } from "lucide-react"

export default function Features() {
    const features = [
        {
            title: "Getting Back Into Riding",
            description: "Ease back in with a plan that starts where you are now, not where you used to be.",
            icon: <Target className="w-6 h-6 text-brand-cyan" />,
        },
        {
            title: "Weekend Warriors",
            description: "Make the most of limited time with simple weekly guidance that fits around work and family.",
            icon: <BrainCircuit className="w-6 h-6 text-brand-purple" />,
        },
        {
            title: "First-Time Event Riders",
            description: "Build steady fitness and confidence so your first event feels exciting, not overwhelming.",
            icon: <ActivitySquare className="w-6 h-6 text-brand-purple" />,
        },
        {
            title: (
                <div className="flex items-center gap-2">
                    Strava Sync (Optional)
                    <span className="text-[10px] uppercase font-bold bg-brand-cyan/20 text-brand-cyan px-2 py-0.5 rounded-full">Garmin soon</span>
                </div>
            ),
            description: "Connect your rides and let PeakReady automatically keep your plan in sync.",
            icon: <LineChart className="w-6 h-6 text-brand-cyan" />,
        },
        {
            title: "Easy Check-Ins",
            description: "Log how your ride felt, how you slept, and your energy level in a few quick taps.",
            icon: <Zap className="w-6 h-6 text-brand-cyan" />,
        },
        {
            title: "Bike Maintenance Reminders",
            description: "Get helpful reminders for chain lube, tire sealant checks, and other routine bike care.",
            icon: <Bell className="w-6 h-6 text-brand-purple" />,
        },
    ]

    return (
        <section id="features" className="py-28 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 border-t border-white/5 pt-28">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for <span className="text-gradient">Every</span> Rider</h2>
                    <p className="text-slate-400 text-xl">
                        From your first ride back to your first event, PeakReady gives you clear guidance that fits real life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="glass-panel p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300 group"
                        >
                            <div className="bg-brand-surface w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                            <p className="text-slate-400 text-[17px] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
