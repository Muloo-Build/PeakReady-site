import { BrainCircuit, LineChart, Target, Zap, ActivitySquare, Bell } from "lucide-react"

export default function Features() {
    const features = [
        {
            title: "Adaptive Training Plans",
            description: "Plans that shift daily based on your readiness score and actual Strava activity.",
            icon: <Target className="w-6 h-6 text-brand-cyan" />,
        },
        {
            title: "Adaptive AI Coaching",
            description: "Whether it's your first 20-mile event or your tenth 100-miler, our AI builds an adaptable plan that actually fits your life and adjusts dynamically.",
            icon: <BrainCircuit className="w-6 h-6 text-brand-purple" />,
        },
        {
            title: (
                <div className="flex items-center gap-2">
                    Strava Sync
                    <span className="text-[10px] uppercase font-bold bg-brand-cyan/20 text-brand-cyan px-2 py-0.5 rounded-full">Garmin soon</span>
                </div>
            ),
            description: "We automatically match your completed rides against your scheduled workouts.",
            icon: <LineChart className="w-6 h-6 text-brand-cyan" />,
        },
        {
            title: "Guided & Approachable",
            description: "Stop guessing what to do. Get clear, guided daily instructions that make sense, designed specifically for everyday riders.",
            icon: <ActivitySquare className="w-6 h-6 text-brand-purple" />,
        },
        {
            title: "Daily Metrics",
            description: "Track RPE, sleep quality, and weight to give the AI context on your condition.",
            icon: <Zap className="w-6 h-6 text-brand-cyan" />,
        },
        {
            title: "Bike Maintenance Alerts",
            description: "PeakReady tracks your mileage and automatically alerts you when it's time for to lube your chain, check tire sealant, or service your suspension.",
            icon: <Bell className="w-6 h-6 text-brand-purple" />,
        },
    ]

    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 border-t border-white/5 pt-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for <span className="text-gradient">Every</span> Rider</h2>
                    <p className="text-slate-400 text-lg">
                        PeakReady analyzes your rides and fatigue to dial in the perfect daily workout. We guide you from day one to race day.
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
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
