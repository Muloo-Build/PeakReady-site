import * as React from "react"
import { cn } from "@/lib/utils"

type IconProps = React.SVGProps<SVGSVGElement>

export function ChainringIcon({ className, ...props }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("w-6 h-6", className)}
            {...props}
        >
            <circle cx="12" cy="12" r="6.8" />
            <circle cx="12" cy="12" r="2.3" />
            <path d="M12 2.5v2.1M12 19.4v2.1M21.5 12h-2.1M4.6 12H2.5M18.7 5.3l-1.5 1.5M6.8 17.2l-1.5 1.5M18.7 18.7l-1.5-1.5M6.8 6.8 5.3 5.3" />
        </svg>
    )
}

export function ElevationLineIcon({ className, ...props }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("w-6 h-6", className)}
            {...props}
        >
            <path d="M2.5 18.5h19" />
            <path d="M3.5 15.8 7 10.7l2.4 3.4 4.1-7 3.1 4.3 4-5.9" />
            <circle cx="20.5" cy="5.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
    )
}

export function TrailMarkerIcon({ className, ...props }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("w-6 h-6", className)}
            {...props}
        >
            <path d="M12 21s-5-5.2-5-9a5 5 0 1 1 10 0c0 3.8-5 9-5 9Z" />
            <circle cx="12" cy="12" r="1.8" />
            <path d="M2.5 19.5c1.9-1.4 3.8-1.4 5.7 0s3.8 1.4 5.7 0 3.8-1.4 5.6 0" />
        </svg>
    )
}
