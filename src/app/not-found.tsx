import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center justify-center px-6 py-20">
      <div className="flex flex-col gap-3">
        <h1 className="text-sm font-medium tracking-tight text-foreground">
          404
        </h1>
        <p className="text-[13px] text-muted-foreground">
          This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="text-[13px] text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
        >
          Go home
        </Link>
      </div>
    </main>
  )
}
