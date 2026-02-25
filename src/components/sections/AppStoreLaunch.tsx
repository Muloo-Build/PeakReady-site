import { Button } from "@/components/ui/Button"
import { Smartphone } from "lucide-react"

export default function AppStoreLaunch() {
    return (
        <section className="py-24 md:py-32 bg-brand-cyan/5 border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-transparent pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-brand-dark rounded-2xl border border-white/10 mb-8 shadow-xl">
                    <Smartphone className="w-8 h-8 text-brand-cyan" />
                </div>

                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Mobile Apps <span className="text-gradient">Coming Soon</span></h2>
                <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                    iOS and Android builds are in progress. Early access users will be invited first.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 mb-16">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto text-lg px-8 shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-shadow" href="#early-access">
                        Join Early Access List
                    </Button>
                    <p className="text-brand-cyan font-semibold text-sm md:text-base">Pro features unlocked during beta.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center grayscale opacity-80 cursor-not-allowed">
                    <div className="h-14 px-6 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center gap-3">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                        <span className="text-xs text-white/50 text-left leading-tight">Download on the<br /><strong className="text-lg text-white font-semibold">App Store</strong></span>
                    </div>
                    <div className="h-14 px-6 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center gap-3">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                        <span className="text-xs text-white/50 text-left leading-tight">GET IT ON<br /><strong className="text-lg text-white font-semibold">Google Play</strong></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

