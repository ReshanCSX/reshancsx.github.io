import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Raleway } from 'next/font/google'

const raleway = Raleway({subsets : ["latin"]});

function HeroSection() {
  return (
    <section className="md:w-full py-20 flex justify-center px-5 border-b">
        <div className="max-w-screen-sm w-full flex flex-col gap-6 text-center">
          <h1 className={`${raleway.className} text-5xl sm:text-6xl font-extrabold`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">{"Hi, I'm Reshan,"}</span>
          </h1>
          <p className="sm:text-lg text-muted-foreground">{"a full-stack developer with a design edge. I craft clean code and captivating brands that drive results for small businesses and individuals."}</p>
          <div className="mt-3">
            <Button size="lg">
              <Link href="/contact" className="font-bold sm:text-lg">{"Let's Collaborate On Your Next Big Thing"}</Link>
            </Button>
          </div>
        </div>
    </section>
  )
}

export default HeroSection