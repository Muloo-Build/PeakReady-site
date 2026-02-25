import { Activity } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-brand-darker border-t border-white/5 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-4 w-fit">
                            <div className="bg-brand-neon p-1.5 rounded-lg">
                                <Activity className="w-5 h-5 text-black" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white font-outfit">PeakReady</span>
                        </a>
                        <p className="text-slate-400 max-w-md mb-3">
                            PeakReady is currently in active public beta. Built and tested by everyday MTB riders.
                        </p>
                        <p className="text-slate-400 max-w-md">
                            Built for everyday MTB riders training toward real events.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#features" className="text-slate-400 hover:text-brand-neon transition-colors">Features</a></li>
                            <li><a href="#pricing" className="text-slate-400 hover:text-brand-neon transition-colors">Pricing</a></li>
                            <li><a href="#how-it-works" className="text-slate-400 hover:text-brand-neon transition-colors">How it Works</a></li>
                            <li><a href="#beta-tester" className="text-slate-400 hover:text-brand-neon transition-colors">Beta Tester</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li><a href="mailto:jarrud@muloo.co" className="text-slate-400 hover:text-brand-neon transition-colors">jarrud@muloo.co</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-brand-neon transition-colors">Instagram (placeholder)</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-brand-neon transition-colors">Strava Club (placeholder)</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-brand-neon transition-colors">X / Twitter (placeholder)</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-slate-500">
                    <div className="text-center md:text-left">
                        <p>© {new Date().getFullYear()} PeakReady. All rights reserved.</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Strava</a>
                        <a href="#" className="hover:text-white transition-colors">X</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
