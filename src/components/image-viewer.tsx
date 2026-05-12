"use client"

import Image, { type ImageProps } from "next/image"
import type { ReactNode } from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type ImageViewerProps = Omit<ImageProps, "className"> & {
  triggerClassName?: string
  imageClassName?: string
  bordered?: boolean
  children?: ReactNode
}

export const ImageViewer = ({
  alt,
  triggerClassName,
  imageClassName,
  bordered = true,
  children,
  ...imageProps
}: ImageViewerProps) => {
  const { width, height, ...restImageProps } = imageProps
  const aspectRatio = Number(width) / Number(height)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "group relative block w-full appearance-none overflow-hidden bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
            bordered &&
              "border border-border transition-colors duration-200 hover:border-foreground/30 focus-visible:border-ring",
            triggerClassName
          )}
        >
          <Image
            {...imageProps}
            alt={alt}
            className={cn("size-full object-cover", imageClassName)}
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-background opacity-0 transition-opacity duration-200 group-hover:opacity-20"
          />
          {children}
        </button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        aria-describedby={undefined}
        className="w-fit max-w-none border-0 bg-transparent p-0 ring-0 sm:max-w-none"
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <div
          className="relative"
          style={{
            width: `min(95vw, ${(95 * aspectRatio).toFixed(4)}vh)`,
            aspectRatio: `${width} / ${height}`,
          }}
        >
          <Image
            {...restImageProps}
            alt={alt}
            fill
            sizes="95vw"
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
