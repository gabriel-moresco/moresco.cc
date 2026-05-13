import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon, ArrowsOutIcon } from "@phosphor-icons/react/dist/ssr"
import { ImageViewer } from "@/components/image-viewer"
import type {
  FavoritoMediaAppearance,
  NewspaperMediaAppearance,
  OnlineMediaAppearance,
} from "@/data/favorito-media-appearances"

type MediaAppearanceCardProps = {
  appearance: FavoritoMediaAppearance
}

export const MediaAppearanceCard = ({
  appearance,
}: MediaAppearanceCardProps) =>
  appearance.type === "online" ? (
    <OnlineMediaAppearanceCard appearance={appearance} />
  ) : (
    <NewspaperMediaAppearanceCard appearance={appearance} />
  )

const OnlineMediaAppearanceCard = ({
  appearance,
}: {
  appearance: OnlineMediaAppearance
}) => (
  <Link
    href={appearance.href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex h-[330px] w-[230px] shrink-0 flex-col overflow-hidden border border-border text-left transition-colors duration-200 outline-none hover:border-foreground/30 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
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
    <div className="flex min-h-0 flex-1 flex-col gap-1.5 p-3">
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

const NewspaperMediaAppearanceCard = ({
  appearance,
}: {
  appearance: NewspaperMediaAppearance
}) => (
  <div className="flex h-[330px] w-[380px] shrink-0 flex-col overflow-hidden border border-border text-left">
    <div className="grid aspect-video grid-cols-2 gap-px bg-border">
      {appearance.images.map((image) => (
        <ImageViewer
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          triggerClassName="border-0"
          imageClassName="object-cover"
          bordered={false}
        >
          <span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          >
            <span className="inline-flex size-8 items-center justify-center bg-foreground/80 text-background">
              <ArrowsOutIcon weight="light" className="size-4" />
            </span>
          </span>
        </ImageViewer>
      ))}
    </div>
    <div className="flex min-h-0 flex-1 flex-col gap-2 p-3">
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
    </div>
  </div>
)
