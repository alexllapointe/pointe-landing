"use client"

import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const phases = [
  {
    title: "Discovery (Week 1–2)",
    description:
      "We map your current operations end to end — where data lives, where handoffs break, where your team is doing work a system should be doing. You'll walk away with a clear picture of what's costing you the most, even if we never work together.",
  },
  {
    title: "Build (Week 3–8)",
    description:
      "We design and implement directly inside your existing tools. No new software to learn, no migration headaches. Just the infrastructure your back office has been missing.",
  },
  {
    title: "Handoff + Support",
    description:
      "We don't disappear after launch. We stay on to make sure everything runs, train your team, and iterate as your operations evolve.",
  },
]

export function Engagement() {
  return (
    <section className="mx-auto max-w-6xl px-8 pb-32 sm:px-12 lg:px-20">
      {/* How We Engage */}
      <motion.div
        className="pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          How we engage
        </motion.p>
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 max-w-2xl font-editorial text-3xl font-normal tracking-tight text-foreground sm:text-4xl"
        >
          We work with a small number of agencies at a time so the work actually gets done.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-px border-t border-border/40 lg:grid-cols-3">
          {phases.map((phase) => (
            <motion.div
              key={phase.title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="border-b border-border/40 py-10 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:pr-10 lg:pl-0 lg:first:pl-0 [&:nth-child(n+2)]:lg:pl-10"
            >
              <h3 className="font-editorial text-lg font-normal text-foreground">
                {phase.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Who This Is For */}
      <motion.div
        className="mt-32 border-t border-border/40 pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          Who this is for
        </motion.p>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-foreground sm:text-lg"
        >
          Staffing agencies between $1M–$20M in revenue who are growing but operationally stretched — you&apos;re winning clients faster than your back office can keep up, and the answer shouldn&apos;t be hiring two more coordinators.
        </motion.p>
      </motion.div>
    </section>
  )
}
