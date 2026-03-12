"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

export default function BookPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "20min" })
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#4ADE80",
          },
          dark: {
            "cal-brand": "#4ADE80",
          },
        },
      })
    })()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-8 pt-30 pb-20 sm:px-12 lg:px-20">
        <div className="mb-12 text-center">
          <h1 className="font-editorial text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
            Let&apos;s talk about your operations.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Book a 20-minute call. We&apos;ll learn how your agency runs and show you where systems can replace manual work.
          </p>
        </div>

        <Cal
          namespace="20min"
          calLink="alex-lapointe/20min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "light" }}
        />
      </div>
    </div>
  )
}
