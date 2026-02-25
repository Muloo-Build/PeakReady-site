import { Quote } from "lucide-react"

export default function Testimonials() {
    const testimonials = [
        {
            name: "Michael D",
            location: "Cape Town",
            riderType: "Returning MTB Rider",
            event: "Wines2Whales 60km",
            result: "Completed Wines2Whales 60km after rebuilding consistency.",
            text: "After 2 years off the bike, PeakReady got me back to consistent riding without wrecking myself.",
            tag: "Beta Rider",
            statLabel: "Strava consistency",
            statValue: "9 weeks logged in a row"
        },
        {
            name: "Carlos Ramirez",
            location: "Boise, ID",
            riderType: "Marathon Event Rider",
            text: "I used PeakReady for a 60km marathon build. The plan stayed realistic when work got busy, and I finished prepared."
        },
        {
            name: "Hannah Doyle",
            location: "Fort Collins, CO",
            riderType: "Weekend Trail Rider",
            text: "I wanted structure without coach-level complexity. The day-to-day guidance helped me keep momentum instead of skipping weeks."
        }
    ]

    return (
        <section id="testimonials" className="py-32 md:py-40 bg-brand-dark relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[360px] h-[360px] bg-brand-cyan/4 blur-[110px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[360px] h-[360px] bg-brand-purple/4 blur-[110px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Real Riders. <span className="text-gradient">Real Progress.</span></h2>
                    <p className="text-slate-400 text-xl">
                        From consistency rebuilds to race-day finishes, these are real outcomes from everyday riders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="glass-panel p-8 rounded-2xl relative border border-white/10 flex flex-col hover:border-brand-cyan/30 transition-colors duration-300 shadow-[0_10px_28px_rgba(0,0,0,0.24)]"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />

                            {testimonial.tag && (
                                <span className="inline-flex w-fit mb-4 text-[11px] uppercase tracking-wider text-brand-cyan border border-brand-cyan/40 bg-brand-cyan/10 px-2 py-1 rounded-full">
                                    {testimonial.tag}
                                </span>
                            )}

                            <p className="text-slate-300 leading-[1.7] text-lg mb-6 flex-grow">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            {"event" in testimonial && testimonial.event && (
                                <p className="text-slate-300 text-sm mb-2">
                                    Event: <span className="font-semibold text-white">{testimonial.event}</span>
                                </p>
                            )}
                            {"result" in testimonial && testimonial.result && (
                                <p className="text-slate-400 text-sm mb-5">{testimonial.result}</p>
                            )}

                            {testimonial.statLabel && testimonial.statValue && (
                                <div className="mb-6 bg-slate-900/70 border border-white/10 rounded-lg p-3">
                                    <p className="text-[11px] uppercase tracking-wider text-slate-400 mb-1">{testimonial.statLabel}</p>
                                    <p className="text-sm font-semibold text-brand-cyan">{testimonial.statValue}</p>
                                </div>
                            )}

                            <div>
                                <div className="font-semibold text-white font-outfit text-lg">{testimonial.name}</div>
                                <div className="text-slate-400 text-sm">{testimonial.location}</div>
                                <div className="text-brand-cyan text-sm font-medium">{testimonial.riderType}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

