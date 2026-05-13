import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Icon as PhosphorIcon } from "@phosphor-icons/react/dist/lib/types"
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeIcon,
} from "@phosphor-icons/react/dist/ssr"

type SocialEntry = {
  href: string
  label: string
  icon: PhosphorIcon
  external?: boolean
}

const socials: SocialEntry[] = [
  {
    href: "https://github.com/gabriel-moresco/moresco.cc",
    label: "GitHub",
    icon: GithubLogoIcon,
    external: true,
  },
  {
    href: "https://linkedin.com/in/gabriel-moresco",
    label: "LinkedIn",
    icon: LinkedinLogoIcon,
    external: true,
  },
  {
    href: "mailto:gabriel.moresco25@gmail.com",
    label: "Email",
    icon: EnvelopeIcon,
  },
]

type IntroductionProps = {
  delay: number
}

export const Introduction = ({ delay }: IntroductionProps) => (
  <section aria-labelledby="profile-heading" className="flex flex-col gap-7">
    <div
      className="relative size-[72px] animate-in overflow-hidden bg-muted duration-500 ease-out fill-mode-both fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Image
        src="/static/gabriel.jpg"
        alt="Portrait of Gabriel Moresco"
        width={144}
        height={144}
        priority
        className="size-full object-cover"
      />
    </div>

    <header
      className="flex animate-in flex-col gap-1 duration-500 ease-out fill-mode-both fade-in slide-in-from-bottom-3"
      style={{ animationDelay: `${delay + 120}ms` }}
    >
      <h1
        id="profile-heading"
        className="text-base font-medium tracking-tight text-foreground"
      >
        Gabriel Moresco
      </h1>
      <p className="flex items-baseline gap-1.5 text-xs text-muted-foreground">
        <span className="font-serif text-sm leading-none italic">
          Product Engineer
        </span>
        <span aria-hidden className="text-muted-foreground/60">
          ·
        </span>
        <span>Brazil</span>
      </p>
    </header>

    <div
      className="flex animate-in flex-col gap-3 text-[13px] leading-relaxed text-muted-foreground duration-500 ease-out fill-mode-both fade-in slide-in-from-bottom-3"
      style={{ animationDelay: `${delay + 240}ms` }}
    >
      <p>
        <span className="text-foreground">I&apos;m a builder-minded</span>{" "}
        Product Engineer from Brazil, with 8+ years of experience building web,
        mobile, and AI products.
      </p>
      <p>
        Co-founded and led technology for early-stage startups, including{" "}
        <span className="text-foreground">Favorito</span>, a B2B2C mobile app
        that grew to 130k downloads, 27k MAU, and 700 paying business customers.
      </p>
    </div>

    <div
      className="flex animate-in items-center gap-1.5 duration-500 ease-out fill-mode-both fade-in slide-in-from-bottom-3"
      style={{ animationDelay: `${delay + 360}ms` }}
    >
      {socials.map((social) => (
        <SocialButton key={social.href} {...social} />
      ))}
      <ThemeToggle />
    </div>
  </section>
)

const SocialButton = ({ href, label, icon: Icon, external }: SocialEntry) => {
  const isExternal = external ?? false

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          aria-label={label}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="group inline-flex size-8 items-center justify-center border border-border text-muted-foreground transition-colors duration-200 outline-none hover:border-foreground/30 hover:text-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
        >
          <Icon
            className="size-4 transition-transform duration-200 group-hover:scale-110"
            weight="light"
          />
        </Link>
      </TooltipTrigger>
      <TooltipContent sideOffset={6}>{label}</TooltipContent>
    </Tooltip>
  )
}
