import { Divider } from "@/components/divider"
import { Introduction } from "@/components/sections/introduction"
import { OpenSource } from "@/components/sections/open-source"
import { Favorito } from "@/components/sections/favorito"
import { Weg } from "@/components/sections/weg"
import { ThemeToggleHint } from "@/components/theme-toggle-hint"

export default function Page() {
  return (
    <main className="relative flex min-h-svh items-center justify-center px-6 py-48">
      <article className="flex w-full max-w-[520px] flex-col gap-16">
        <Introduction delay={60} />
        <Divider delay={510} />
        <OpenSource delay={540} />
        <Divider delay={720} />
        <Favorito delay={750} />
        <Divider delay={930} />
        <Weg delay={960} />
      </article>

      <ThemeToggleHint />
    </main>
  )
}
