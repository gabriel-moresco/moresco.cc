import { Divider } from "@/components/divider"
import { Introduction } from "@/components/sections/introduction"
import { OpenSource } from "@/components/sections/open-source"

export default function Page() {
  return (
    <main className="relative flex min-h-svh items-center justify-center px-6 py-48">
      <article className="flex w-full max-w-[440px] flex-col gap-7">
        <Introduction />
        <Divider delay={510} />
        <OpenSource />
      </article>

      <div
        className="pointer-events-none fixed right-5 bottom-5 hidden animate-in text-[10px] tracking-wide text-muted-foreground/70 uppercase delay-600 duration-500 ease-out fill-mode-both select-none fade-in sm:block"
        aria-hidden
      >
        Press{" "}
        <kbd className="mx-0.5 inline-flex h-[18px] min-w-[18px] items-center justify-center border border-border/80 bg-muted/40 px-1 text-[10px] font-medium text-muted-foreground">
          D
        </kbd>{" "}
        to toggle theme
      </div>
    </main>
  )
}
