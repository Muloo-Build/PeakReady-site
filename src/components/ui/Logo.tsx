import * as React from "react"
import { cn } from "@/lib/utils"

type LogoProps = React.SVGProps<SVGSVGElement>

export function Logo({ className, ...props }: LogoProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={cn("w-auto h-auto", className)}
            {...props}
        >
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D2FF" />
                    <stop offset="100%" stopColor="#B23FFF" />
                </linearGradient>
            </defs>

            {/* Background backing so it pops */}
            <rect width="100" height="100" rx="20" fill="#0A0F1A" />

            <g stroke="url(#logoGradient)" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {/* Mountain Component */}
                <path d="M20 65 L40 30 L50 45 L60 20 L80 65" />

                {/* Abstract gear/chainring curve cutting through */}
                <path d="M15 65 Q 50 85 85 65" />

                {/* Smaller inner gear hub */}
                <circle cx="50" cy="55" r="8" />
            </g>
        </svg>
    )
}
