"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/ui/Logo"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "How it Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
    ]

    return (
        <header className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
            scrolled ? "bg-brand-darker/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 group-hover:drop-shadow-[0_0_15px_rgba(0,210,255,0.5)] transition-all">
                        <Logo className="w-full h-full" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white font-outfit">PeakReady</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <a href="https://web.peakready.app/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Log in</a>
                    <Button variant="primary" size="sm" href="https://web.peakready.app/signup">Start Free</Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-brand-darker border-b border-white/10 p-4 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-slate-300 hover:text-white pb-2 border-b border-white/5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                        <Button variant="outline" className="w-full" href="https://web.peakready.app/">Log in</Button>
                        <Button variant="primary" className="w-full" href="https://web.peakready.app/signup">Start Free</Button>
                    </div>
                </div>
            )}
        </header>
    )
}
