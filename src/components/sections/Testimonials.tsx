import { Star, Quote } from "lucide-react"

export default function Testimonials() {
    const testimonials = [
        {
            name: "Mike T.",
            role: "Weekend Warrior",
            text: "I used to just guess how hard I should ride. PeakReady's AI coach actually told me to take a rest day last week because my fatigue was high. I felt amazing for my long Sunday ride.",
            rating: 5,
        },
        {
            name: "Sarah L.",
            role: "Gravel Enthusiast",
            text: "Getting back into riding after 5 years off. This app is exactly what I needed. It doesn't treat me like a pro racer, it just gives me a sensible plan that adapts when life gets in the way.",
            rating: 5,
        },
        {
            name: "Dave K.",
            role: "Seasoned Amateur",
            text: "The Strava sync is flawless. I log my ride, the AI sees I pushed too hard on that climb, and tomorrow's workout is automatically adjusted. It's like having a real coach checking my data.",
            rating: 5,
        }
    ]

    return (
        <section id="testimonials" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Real Riders. <span className="text-gradient">Real Results.</span></h2>
                    <p className="text-slate-400 text-lg">
                        Whether you're hitting the local trails or training for a 100-miler gravel race, see how PeakReady helps riders like you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="glass-panel p-8 rounded-2xl relative border border-white/10 flex flex-col hover:border-brand-cyan/30 transition-colors duration-300"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />

                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-brand-cyan text-brand-cyan" />
                                ))}
                            </div>

                            <p className="text-slate-300 leading-relaxed text-lg mb-8 flex-grow">
                                "{testimonial.text}"
                            </p>

                            <div>
                                <div className="font-semibold text-white font-outfit text-lg">{testimonial.name}</div>
                                <div className="text-brand-cyan text-sm">{testimonial.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
