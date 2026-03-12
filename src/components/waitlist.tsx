"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { RiArrowRightLine } from "@remixicon/react"
import Link from "next/link"

export function Waitlist() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="waitlist"
      className="relative flex flex-col items-center overflow-hidden px-8 pb-24 pt-32 sm:px-12 lg:px-20 text-center"
    >
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, #c4c4c4 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <h2 className="relative z-10 font-editorial text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
        Your operations should work as hard as you do.
      </h2>
      <div className="relative z-10 mt-8">
        <Button asChild size="lg" className="group px-6 py-5 text-base font-medium">
          <Link href="/book">
            Get Started
            <RiArrowRightLine className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </motion.section>
  )
}
