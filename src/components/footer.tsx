export function Footer() {
  return (
    <footer className="py-8 px-10 sm:px-16 lg:px-32" style={{ backgroundColor: "#1a1919" }}>
      <div className="flex items-center justify-between">
        <span className="font-editorial text-lg font-normal tracking-tight text-white/90">
          pointe
        </span>
        <span className="text-sm text-white/50">
          &copy; {new Date().getFullYear()} Pointe. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
