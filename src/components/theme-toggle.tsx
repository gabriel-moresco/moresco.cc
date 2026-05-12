"use client"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@phosphor-icons/react"

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="group inline-flex size-8 items-center justify-center border border-border text-muted-foreground transition-colors duration-200 outline-none hover:border-foreground/30 hover:text-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 active:translate-y-px sm:hidden"
    >
      <SunIcon
        className="size-4 scale-100 transition-transform duration-200 group-hover:scale-110 dark:hidden"
        weight="light"
      />
      <MoonIcon
        className="hidden size-4 scale-100 transition-transform duration-200 group-hover:scale-110 dark:block"
        weight="light"
      />
    </button>
  )
}
