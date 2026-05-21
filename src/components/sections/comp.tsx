import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr"

type CompProps = {
  delay: number
}

export const Comp = ({ delay }: CompProps) => (
  <section
    aria-labelledby="comp-heading"
    className="flex animate-in flex-col gap-4 duration-500 ease-out fill-mode-both fade-in slide-in-from-bottom-3"
    style={{ animationDelay: `${delay}ms` }}
  >
    <Link
      href="https://comp.vc"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex w-fit items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
    >
      <Image
        src="/static/comp.png"
        alt=""
        width={48}
        height={48}
        className="size-6 shrink-0"
      />
      <h2
        id="comp-heading"
        className="text-[15px] font-medium tracking-tight text-foreground underline-offset-4 group-hover:underline"
      >
        Comp
      </h2>
      <ArrowUpRightIcon
        aria-hidden
        weight="light"
        className="size-3.5 -translate-x-0.5 text-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </Link>

    <div className="flex flex-col gap-3 text-[13px] leading-relaxed text-muted-foreground">
      <p>
        We are not just another HR software tool. We are not a consulting firm.
        We are something entirely new: an AI-Native HR function. We embed HR
        specialists and engineers directly within our clients&apos;
        organizations, creating customized AI policies, processes, and tools
        that make the People function both more strategic and more efficient.
      </p>
      <p>
        Think of us as a Superpowered HR Teammate, supporting everything from
        the most complex organizational decisions to day-to-day operational
        activities.
      </p>
      <p>
        We&apos;ve raised over <span className="text-foreground">R$100M</span>{" "}
        from world-class VCs, including Khosla Ventures (Keith Rabois), KASZEK,
        and Canary, and we serve more than{" "}
        <span className="text-foreground">150 innovative clients</span> such as
        Nubank, iFood, Creditas, and many others.
      </p>
      <p>We are growing extremely fast and are just getting started.</p>
    </div>
  </section>
)
