import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg" | "xlg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
};

const baseClasses = `
    inline-flex
    items-center
    justify-center
    rounded-[1.8rem]
    text-[1rem]
    py-[0.5rem]
    px-[1rem]
    hover:rounded-[0.5rem]
    transition-all
    duration-300
    ease-in-out
`

const variantClasses: Record<ButtonVariant, string> = {
    primary: `
    bg-brand-blue
    text-white
    `,
    secondary: `
    bg-transparent
    text-brand-blue
    border-brand-blue
    border-[1px]
    `,
    dark: `
    bg-brand-dark
    text-white
    `,
    ghost: `
    bg-brand-ghost
    text-white
    `
}

const sizeClasses: Record<ButtonSize, string> = {
    sm: `
    text-[0.8rem]
    w-[121px]
    h-[32px]`,
    md: `
    text-[1rem]
    w-[121px]
    h-[40px]`,
    lg: `
    text-[1.2rem]
    w-[121px]
    h-[48px]`,
    xlg: `
    text-[1.5rem]
    w-[121px]
    h-[56px]`
}

export function Button({
    variant = "primary",
    size = "md",
    className,
    type = "button",
    ...props
}: ButtonProps) {
    const buttonClassName = [
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
    ]
    .filter(Boolean)
    .join(" ");

    return <button type={type} className={buttonClassName} {...props} />
}
