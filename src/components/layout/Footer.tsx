import { Activity, Twitter, Instagram, Github } from "lucide-react"

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
                        <p className="text-slate-400 max-w-sm">
                            The premier MTB endurance training app. Train smarter. Recover better. Race ready.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#features" className="text-slate-400 hover:text-brand-neon transition-colors">Features</a></li>
                            <li><a href="#pricing" className="text-slate-400 hover:text-brand-neon transition-colors">Pricing</a></li>
                            <li><a href="#how-it-works" className="text-slate-400 hover:text-brand-neon transition-colors">How it Works</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-400 hover:text-brand-neon transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-brand-neon transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-brand-neon transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} PeakReady. All rights reserved.</p>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
