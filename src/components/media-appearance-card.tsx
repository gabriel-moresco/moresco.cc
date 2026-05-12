import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr"
import type { FavoritoMediaAppearance } from "@/data/favorito-media-appearances"

type MediaAppearanceCardProps = {
  appearance: FavoritoMediaAppearance
}

export const MediaAppearanceCard = ({
  appearance,
}: MediaAppearanceCardProps) => (
  <Link
    href={appearance.href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex w-[230px] shrink-0 snap-start flex-col overflow-hidden border border-border text-left transition-colors duration-200 outline-none hover:border-foreground/30 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
  >
    <div className="relative aspect-video overflow-hidden bg-muted">
      <Image
        src={appearance.image}
        alt=""
        width={640}
        height={360}
        className="size-full object-cover"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-background opacity-0 transition-opacity duration-200 group-hover:opacity-20"
      />
    </div>
    <div className="flex min-h-[148px] flex-col gap-2 p-3">
      <div className="flex items-center justify-between gap-3 text-[11px] leading-none text-muted-foreground">
        <span className="inline-flex min-w-0 items-center gap-1.5">
          <Image
            src={appearance.favicon}
            alt=""
            width={16}
            height={16}
            unoptimized
            className="size-3.5 shrink-0 object-contain"
          />
          <span className="truncate">{appearance.outlet}</span>
        </span>
        <span className="shrink-0">{appearance.date}</span>
      </div>
      <h4 className="[display:-webkit-box] overflow-hidden text-[12px] leading-snug font-medium text-foreground [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
        {appearance.title}
      </h4>
      <p className="[display:-webkit-box] overflow-hidden text-[11px] leading-relaxed text-muted-foreground [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
        {appearance.description}
      </p>
      <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-medium text-foreground">
        Read article
        <ArrowUpRightIcon
          aria-hidden
          weight="light"
          className="size-3 shrink-0 text-foreground"
        />
      </span>
    </div>
  </Link>
)
