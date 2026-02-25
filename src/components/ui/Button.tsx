import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    asChild?: boolean;
    href?: string;
    target?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: "bg-gradient-to-r from-brand-cyan to-brand-purple text-white hover:opacity-90 shadow-[0_0_16px_rgba(0,210,255,0.28)] border-none",
            secondary: "bg-brand-surface text-white hover:bg-brand-surface-hover border border-brand-cyan/30 hover:border-brand-cyan/60",
            outline: "border border-brand-purple text-brand-purple hover:bg-brand-purple/10",
            ghost: "hover:bg-white/5 text-slate-300 hover:text-white"
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6",
            lg: "h-14 px-8 text-lg",
            xl: "h-16 px-10 text-xl"
        };

        // If href is provided, render an anchor tag
        if (props.href) {
            return (
                <a
                    href={props.href}
                    target={props.target}
                    className={cn(
                        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan disabled:pointer-events-none disabled:opacity-50",
                        variants[variant],
                        sizes[size],
                        className
                    )}
                >
                    {props.children}
                </a>
            )
        }

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
