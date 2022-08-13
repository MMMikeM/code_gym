import React from "react"
import Link from "./Link"

function Header() {
	return (
		<header className="relative flex h-20 w-full bg-gray-200 px-10 font-bold text-black">
			<div className="absolute flex h-full items-center">
				<h1 className="text-xl font-bold">Snack store</h1>
			</div>
			<div className="m-auto gap-8">
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</header>
	)
}

export default Header
