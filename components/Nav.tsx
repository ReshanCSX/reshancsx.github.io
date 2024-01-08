'use client';
import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";


const navItems = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "Contact",
    link: "/contact"
  }
]

function Nav() {
  return (
    <nav className="w-full border-b py-3">
      <div className="max-w-screen-lg flex items-center justify-between mx-auto">
        <div className="text-xl font-bold text-red-600">
          <Link href="/">RCSX.</Link>
        </div>
        <div className="flex gap-2">
          {
            navItems.map(({ name, link }) => (
              <Link key={link} href={link} className="rounded-full px-5 py-2 hover:bg-accent duration-300">{name}</Link>
            ))
          }
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Nav