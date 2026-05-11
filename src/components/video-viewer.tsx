"use client"

import Image from "next/image"
import { CircleNotchIcon, PlayIcon } from "@phosphor-icons/react/dist/ssr"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type VideoViewerProps = {
  videoid: string
  thumbnail: string
  alt: string
  width: number
  height: number
  triggerClassName?: string
}

export const VideoViewer = ({
  videoid,
  thumbnail,
  alt,
  width,
  height,
  triggerClassName,
}: VideoViewerProps) => (
  <Dialog>
    <DialogTrigger asChild>
      <button
        type="button"
        className={cn(
          "group relative block w-full appearance-none overflow-hidden border border-border bg-transparent p-0 transition-colors duration-200 outline-none hover:border-foreground/30 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40",
          triggerClassName
        )}
      >
        <Image
          src={thumbnail}
          alt={alt}
          width={width}
          height={height}
          className="block h-auto w-full"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-background opacity-0 transition-opacity duration-200 group-hover:opacity-20"
        />
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="inline-flex size-16 items-center justify-center bg-neutral-950">
            <PlayIcon
              weight="fill"
              className="size-6 translate-x-px text-white"
            />
          </span>
        </span>
      </button>
    </DialogTrigger>
    <DialogContent
      showCloseButton={false}
      className="w-fit max-w-[95vw] border-0 bg-transparent p-0 ring-0 sm:max-w-[95vw]"
    >
      <DialogTitle className="sr-only">{alt}</DialogTitle>
      <div className="relative aspect-video max-h-[90vh] w-[95vw] bg-black">
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center"
        >
          <CircleNotchIcon
            weight="bold"
            className="size-10 animate-spin text-white/70"
          />
        </span>
        <iframe
          title={alt}
          src={`https://www.youtube.com/embed/${videoid}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      </div>
    </DialogContent>
  </Dialog>
)
