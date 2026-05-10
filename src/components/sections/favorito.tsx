import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr"

type FavoritoProps = {
  delay: number
}

export const Favorito = ({ delay }: FavoritoProps) => (
  <section
    aria-labelledby="favorito-heading"
    className="flex animate-in flex-col gap-4 duration-500 ease-out fill-mode-both fade-in slide-in-from-bottom-3"
    style={{ animationDelay: `${delay}ms` }}
  >
    <Link
      href="https://favorito.digital"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex w-fit items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
    >
      <Image
        src="/static/favorito.png"
        alt=""
        width={48}
        height={48}
        className="size-6 shrink-0"
      />
      <h2
        id="favorito-heading"
        className="text-sm font-medium tracking-tight text-foreground underline-offset-4 group-hover:underline"
      >
        Favorito (formerly Que Barbada)
      </h2>
      <ArrowUpRightIcon
        aria-hidden
        weight="light"
        className="size-3.5 -translate-x-0.5 text-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </Link>
  </section>
)
