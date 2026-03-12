import { Hero } from "@/components/hero"
import { Waitlist } from "@/components/waitlist"

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#1a1919" }}>
      <div className="bg-background">
        <Hero />
        <Waitlist />
      </div>
    </div>
  )
}
