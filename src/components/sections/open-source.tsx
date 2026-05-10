import Image from "next/image"
import Link from "next/link"

type RepoEntry = {
  href: string
  name: string
  image: string
}

const repos: RepoEntry[] = [
  {
    href: "https://github.com/advents-io/advents",
    name: "advents-io/advents",
    image: "/static/advents.png",
  },
  {
    href: "https://github.com/gabriel-moresco/legaltech",
    name: "gabriel-moresco/legaltech",
    image: "/static/legaltech.png",
  },
]

type OpenSourceProps = {
  delay: number
}

export const OpenSource = ({ delay }: OpenSourceProps) => (
  <section
    aria-labelledby="repos-heading"
    className="flex animate-in flex-col gap-4 duration-500 ease-out fill-mode-both fade-in slide-in-from-bottom-3"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex flex-col gap-2">
      <h2
        id="repos-heading"
        className="text-sm font-medium tracking-tight text-foreground"
      >
        Open Source
      </h2>
      <p className="text-[13px] leading-relaxed text-muted-foreground">
        A few public repos from projects and MVPs I&apos;ve shipped across my
        founder and CTO years.
      </p>
    </div>
    <ul className="flex flex-col gap-2.5">
      {repos.map((repo) => (
        <li key={repo.href}>
          <RepoBanner {...repo} />
        </li>
      ))}
    </ul>
  </section>
)

const RepoBanner = ({ href, name, image }: RepoEntry) => (
  <Link
    href={href}
    aria-label={`Open ${name} on GitHub`}
    title={name}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block aspect-2/1 overflow-hidden border border-border transition-all duration-200 outline-none hover:border-foreground/30 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 active:translate-y-px"
  >
    <Image
      src={image}
      alt={`${name} preview`}
      width={1200}
      height={600}
      className="size-full object-cover"
    />
  </Link>
)
