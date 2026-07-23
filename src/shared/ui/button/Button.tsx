import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

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
    ghost: `
    bg-brand-ghost
    text-white
    `
}

const sizeClasses: Record<ButtonSize, string> = {
    sm: `
    text-[0.8rem]
    py-[0.5rem]
    px-[0.5rem]`,
    md: `
    text-[1rem]
    py-[1rem]
    px-[0.5rem]`,
    lg: `
    text-[1.2rem]
    py-[1.5rem]
    px-[1rem]`
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
