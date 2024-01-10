'use client';

import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";


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
];

function Nav() {

  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const itemStyles = "rounded-full px-5 py-2 hover:bg-accent duration-300"; 

  return (
    <nav className="w-full border-b py-3">
      <div className="max-w-screen-lg flex items-center justify-between mx-auto px-4">
        <div className="text-xl font-bold">
          <Link href="/">RCSX.</Link>
        </div>
        <div className="flex">

          <div className="hidden sm:flex sm:gap-2">
            {
              navItems.map(({ name, link }) => (
                <Link key={link} href={link} className={path === link ? `bg-accent shadow-inner dark:shadow-black ${itemStyles}` : `bg-transparent  ${itemStyles}`}>{name}</Link>
              ))
            }
          </div>

          <div className="flex sm:hidden">
            <Button variant={"outline"} size={"icon"} className="mx-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              { isMobileMenuOpen
                ? <X />
                : <Menu />
              }
            </Button>
          </div>

          <ModeToggle />
        </div>
      </div>

      { isMobileMenuOpen && 
          <div className="pt-3">
            {
              navItems.map(({ name, link }) => (
                <Link key={link} href={link} className={path === link ? "bg-accent block py-4 text-center" : "block py-4 text-center"} onClick={() => setIsMobileMenuOpen(false)}>{name}</Link>
              ))
            }
          </div>
      }
    </nav>
  )
}

export default Nav