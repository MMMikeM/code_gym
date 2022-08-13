import NextLink from "next/link"
import { useRouter } from "next/router"
import { ReactNode } from "react"

type linkProps = {
  href: string
  className?: string
  children?: ReactNode
}

function Link({ href, className = "", children }: linkProps) {
  const router = useRouter()

  const activeClass = router?.pathname === href ? "text-gray-500" : ""

  return (
    <NextLink href={href} passHref>
      <a
        className={`
          inline-flex
          cursor-pointer 
          items-center 
          border-2 border-transparent
          px-4 py-1.5
          font-semibold capitalize 
          transition hover:scale-110 active:translate-y-0.5 
          ${className}
          ${activeClass}
        `}
      >
        {children}
      </a>
    </NextLink>
  )
}

export default Link
