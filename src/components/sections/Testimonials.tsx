import { Star, Quote } from "lucide-react"

export default function Testimonials() {
    const testimonials = [
        {
            name: "Mike T.",
            role: "Returning Rider",
            text: "I hadn't ridden consistently in years. PeakReady gave me a simple weekly plan I could actually follow. A few weeks in, riding feels like part of my routine again.",
            rating: 5,
        },
        {
            name: "Sarah L.",
            role: "Busy Weekend Rider",
            text: "My schedule is busy, so I needed something realistic. The daily guidance is clear, and when life gets hectic I can pick back up without feeling behind.",
            rating: 5,
        },
        {
            name: "Dave K.",
            role: "First-Time Event Rider",
            text: "I signed up before my first local event. The plan felt approachable from day one, and syncing with Strava made it easy to stay on track.",
            rating: 5,
        }
    ]

    return (
        <section id="testimonials" className="py-28 bg-brand-dark relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Real Riders. <span className="text-gradient">Real Progress.</span></h2>
                    <p className="text-slate-400 text-xl">
                        From getting back on the bike to building a steady routine, see how everyday riders use PeakReady in real life.
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
                                &ldquo;{testimonial.text}&rdquo;
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
