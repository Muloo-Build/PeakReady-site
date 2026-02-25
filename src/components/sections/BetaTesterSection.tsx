import Script from "next/script"

export default function BetaTesterSection() {
    return (
        <section id="beta-tester" className="py-24 md:py-28 border-t border-white/5 bg-brand-dark relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                        Become a <span className="text-gradient">Beta Tester</span>
                    </h2>
                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        We’re inviting a small group of everyday MTB riders to help refine PeakReady before App Store launch.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mb-8 glass-panel rounded-2xl border border-white/10 p-6 md:p-7">
                    <h3 className="text-white font-bold text-lg mb-4">You’ll get:</h3>
                    <ul className="space-y-2 text-slate-300 text-sm md:text-base">
                        <li>• Full Pro access during beta</li>
                        <li>• Direct feedback channel</li>
                        <li>• Early feature access</li>
                    </ul>
                </div>

                <div className="max-w-[600px] mx-auto glass-panel rounded-2xl border border-white/10 p-6 md:p-8">
                    <Script id="hs-forms-embed" src="https://js.hsforms.net/forms/embed/8066413.js" strategy="afterInteractive" />
                    <div
                        className="hs-form-frame"
                        data-region="na1"
                        data-form-id="b3cc7f32-dbee-4aac-ad4c-2774a30245bf"
                        data-portal-id="8066413"
                    />
                    <p className="text-sm text-slate-400 mt-5 text-center">
                        Thanks. I’ll personally review your submission and send onboarding details shortly.
                    </p>
                </div>
            </div>
        </section>
    )
}
