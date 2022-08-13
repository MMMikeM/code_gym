import Link from "next/link"
import { ReactNode } from "react"

type conditionalProps =
  | {
      href?: string
      onClick?: never
    }
  | {
      href?: never
      onClick?: () => void
    }

export type buttonProps = conditionalProps & {
  color?: "primary" | "secondary" | "tertiary" | "critical"
  size?: "base" | "lg" | "sm"
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  className?: string
  children: ReactNode
}

const Button = (props: buttonProps) => {
  const {
    color = "primary",
    size = "base",
    disabled,
    error,
    fullWidth,
    href,
    onClick,
    className = "",
    children,
  } = props

  const bg = disabled
    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
    : error
    ? "bg-red-200 text-red-700 hover:bg-red-300 hover:scale-105"
    : color === "primary"
    ? "bg-primary-500 hover:bg-primary-600 hover:scale-105 font-semibold"
    : color === "secondary"
    ? "bg-secondary-500 hover:bg-secondary-600 hover:scale-105 font-semibold"
    : color === "tertiary"
    ? "bg-tertiary-500 hover:bg-tertiary-600 hover:scale-105 font-semibold"
    : color === "critical"
    ? "bg-red-500 hover:bg-red-600 hover:scale-105 font-semibold"
    : ""

  const sizeClass =
    size === "lg"
      ? "text-lg px-12 py-2 rounded-lg"
      : size === "sm"
      ? "text-sm px-5 py-1 rounded-md"
      : "text-base px-8 py-1.5 rounded-lg"

  return !href ? (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        type="button"
        className={`
          border-2 border-transparent 
          capitalize text-white
          transition active:translate-y-0.5 
          ${sizeClass}
          ${bg}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
      >
        {children}
      </button>
    </>
  ) : (
    <Link href={href} passHref>
      <a
        className={`
          inline-flex
          cursor-pointer items-center 
          border-2 border-transparent 
          capitalize text-white
          transition active:translate-y-0.5 
          ${sizeClass}
          ${bg}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
      >
        {children}
      </a>
    </Link>
  )
}

export default Button
