"use client"

import Image, { type ImageProps } from "next/image"
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
}

export const ImageViewer = ({
  alt,
  triggerClassName,
  imageClassName,
  ...imageProps
}: ImageViewerProps) => (
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
          {...imageProps}
          alt={alt}
          className={cn("size-full object-cover", imageClassName)}
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-background opacity-0 transition-opacity duration-200 group-hover:opacity-20"
        />
      </button>
    </DialogTrigger>
    <DialogContent
      showCloseButton={false}
      aria-describedby={undefined}
      className="w-fit max-w-[95vw] border-0 bg-transparent p-0 ring-0 sm:max-w-[95vw]"
    >
      <DialogTitle className="sr-only">{alt}</DialogTitle>
      <Image
        {...imageProps}
        alt={alt}
        className="block h-auto max-h-[90vh] w-auto max-w-[95vw]"
      />
    </DialogContent>
  </Dialog>
)
