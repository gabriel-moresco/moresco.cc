import Link from "next/link"

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh items-center justify-center px-6 py-48">
      <article className="flex w-full max-w-[520px] flex-col gap-4">
        <h1 className="text-sm font-medium tracking-tight text-foreground">
          404
        </h1>
        <p className="text-[13px] leading-relaxed text-muted-foreground">
          This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="w-fit text-[13px] font-medium text-foreground underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring/40"
        >
          Go home
        </Link>
      </article>
    </main>
  )
}
