"use client"

import { RiArrowRightLine, RiCodeSSlashLine, RiLoopLeftLine, RiRocketLine } from "@remixicon/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const fadeUpSmall = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

const cardReveal = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const stepsContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}


export function Hero() {
  return (
    <>
      {/* Hero text */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-8 sm:px-12 lg:px-20 text-center overflow-hidden">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl font-editorial text-5xl font-normal leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Staffing Operations at the <span className="italic text-primary">Speed of Systems.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-4 max-w-xl text-base font-normal leading-relaxed text-muted-foreground sm:text-lg"
          >
            Your agency runs on relationships. It shouldn&apos;t run on broken workflows.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-10"
          >
            <Button asChild size="lg" className="group px-6 py-5 text-base font-medium">
              <Link href="/book">
                Get Started
                <RiArrowRightLine className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Editorial grid section */}
      <section className="mx-auto max-w-6xl px-8 pb-32 sm:px-12 lg:px-20">
        <div className="border-t border-border/40">
          {/* Top row: How it works + Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left panel — How it works */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center border-b border-border/40 p-12 sm:p-16 lg:border-r lg:border-b-0 lg:p-20"
            >
              <h2 className="font-editorial text-5xl font-normal tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                How it works
              </h2>
            </motion.div>

            {/* Right panel — Steps */}
            <div className="p-8 sm:p-12 lg:p-16">
              <motion.div
                className="flex h-full flex-col justify-center gap-6"
                variants={stepsContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {[
                  { step: "01", text: "Map your current operations" },
                  { step: "02", text: "Identify where time and money leak" },
                  { step: "03", text: "Build systems that run automatically" },
                  { step: "04", text: "Your agency scales without adding overhead" },
                ].map((item) => (
                  <motion.div
                    key={item.step}
                    variants={fadeUpSmall}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-baseline gap-4"
                  >
                    <span className="text-sm font-medium text-primary">
                      {item.step}
                    </span>
                    <span className="text-base text-foreground">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom row: Two feature panels */}
          <div className="grid grid-cols-1 border-t border-border/40 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="border-b border-border/40 p-8 sm:p-12 lg:border-r lg:border-b-0 lg:p-16"
            >
              <h3 className="font-editorial text-2xl font-normal tracking-tight text-foreground sm:text-3xl">
                First, we map everything
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Staffing agencies typically run on a mix of spreadsheets, manual follow-ups, and tools that don&apos;t talk to each other. We map exactly how your operations work today so we know precisely where to fix them.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="p-8 sm:p-12 lg:p-16"
            >
              <h3 className="font-editorial text-2xl font-normal tracking-tight text-foreground sm:text-3xl">
                Then we build what&apos;s missing
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                We design and implement the infrastructure your back office actually needs — automated invoicing, real-time reporting, and integrations built directly into the tools you already use.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Feature cards */}
        <motion.div
          className="mt-40 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              title: "Embedded infrastructure",
              icon: <RiCodeSSlashLine className="size-5 text-foreground" />,
              body: "We don't hand you a playbook and leave. We build directly inside your existing tools so your team doesn't have to change how they work, just how much they do manually.",
            },
            {
              title: "Manual work eliminated",
              icon: <RiLoopLeftLine className="size-5 text-foreground" />,
              body: "Every hour your team spends on manual invoicing or pulling reports is an hour not spent on clients. We replace that recurring effort with systems that run on their own.",
            },
            {
              title: "Built to scale",
              icon: <RiRocketLine className="size-5 text-foreground" />,
              body: "Whether you're at 10 clients or 100, your operations shouldn't require more people just to keep up. We build the infrastructure that grows with your revenue.",
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={cardReveal}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-row items-start gap-4 p-5 lg:flex-col lg:gap-0 lg:bg-[#fcfbfa] lg:p-10"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted lg:hidden">
                {card.icon}
              </div>
              <div>
                <h4 className="font-editorial text-base font-normal text-foreground lg:text-lg">
                  {card.title}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground lg:mt-3 lg:text-base">
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Examples section */}
        <motion.div
          className="mt-32 border-t border-border/40 pt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="font-editorial text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            Systems we build
          </h3>

          <div className="mt-16 grid grid-cols-1 border-t border-l border-border/40 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { from: "Timesheets", to: "Billing", label: "Approved timesheets automatically generate client invoices." },
              { from: "ATS", to: "Reporting", label: "Recruiter performance, pipeline, and placement dashboards in real time." },
              { from: "CRM", to: "Workflows", label: "Deal stages trigger onboarding, internal tasks, and client handoffs." },
              { from: "Invoices", to: "Follow-ups", label: "Overdue invoices trigger structured follow-up and payment workflows." },
              { from: "Client Data", to: "Reports", label: "Financial and performance reporting generated and delivered automatically." },
              { from: "Tools", to: "Dashboards", label: "Operational data unified into a single source of truth." },
            ].map((item) => (
              <div key={item.label} className="border-b border-r border-border/40 p-8 lg:p-10">
                <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <span className="rounded-md bg-muted px-2.5 py-1">{item.from}</span>
                  <span className="text-primary">→</span>
                  <span className="rounded-md bg-muted px-2.5 py-1">{item.to}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  )
}
