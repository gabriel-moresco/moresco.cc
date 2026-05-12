import Image from "next/image"
import Link from "next/link"
import {
  AppleLogoIcon,
  ArrowUpRightIcon,
  GooglePlayLogoIcon,
} from "@phosphor-icons/react/dist/ssr"
import { ImageViewer } from "@/components/image-viewer"

type FavoritoProps = {
  delay: number
}

export const Favorito = ({ delay }: FavoritoProps) => (
  <section
    aria-labelledby="favorito-heading"
    className="flex animate-in flex-col gap-12 duration-500 ease-out fill-mode-both fade-in slide-in-from-bottom-3"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex flex-col gap-5">
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
      <div className="flex flex-col gap-3 text-[13px] leading-relaxed text-muted-foreground">
        <p>
          I&apos;ve Co-founded Favorito, a B2B2C mobile app platform connecting
          consumers with bars and restaurants through real-time venue discovery,
          events, promotions, and location-based search. Backed by WOW Startups.
        </p>
        <p>
          I grew the app to{" "}
          <span className="text-foreground">130k downloads</span>,{" "}
          <span className="text-foreground">27k monthly active users</span>,{" "}
          <span className="text-foreground">700 paying business customers</span>{" "}
          and <span className="text-foreground">1.5k app store reviews</span>,
          including a <span className="text-foreground">Top 26</span> ranking on
          the App Store.
        </p>
      </div>
      <ImageViewer
        src="/static/favorito-app-preview.png"
        alt="Preview screenshots of the Favorito mobile app"
        width={2386}
        height={728}
        bordered={false}
      />
    </div>
    <div className="flex flex-col gap-4">
      <p className="text-[13px] leading-relaxed text-muted-foreground">
        You can <span className="text-foreground">download</span> and check out
        the app through the links below.
      </p>
      <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Link
            href="https://apps.apple.com/br/app/favorito-onde-comer-e-beber/id1598991618"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            <AppleLogoIcon
              aria-hidden
              weight="fill"
              className="size-4 shrink-0 text-foreground"
            />
            <span className="text-[13px] font-medium tracking-tight text-foreground underline-offset-4 group-hover:underline">
              Apple App Store
            </span>
            <ArrowUpRightIcon
              aria-hidden
              weight="light"
              className="size-3.5 text-foreground"
            />
          </Link>
          <ImageViewer
            src="/static/favorito-rating-appstore.png"
            alt="Favorito on the App Store"
            width={757}
            height={458}
            bordered={false}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="https://play.google.com/store/apps/details?id=com.quebarbada.quebarbada&hl=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            <GooglePlayLogoIcon
              aria-hidden
              weight="fill"
              className="size-4 shrink-0 text-foreground"
            />
            <span className="text-[13px] font-medium tracking-tight text-foreground underline-offset-4 group-hover:underline">
              Google Play Store
            </span>
            <ArrowUpRightIcon
              aria-hidden
              weight="light"
              className="size-3.5 text-foreground"
            />
          </Link>
          <ImageViewer
            src="/static/favorito-rating-playstore.png"
            alt="Favorito on Google Play"
            width={757}
            height={370}
            bordered={false}
          />
        </div>
      </div>
      <p className="border-l-2 border-border pl-3 text-[11px] leading-relaxed text-muted-foreground">
        Store metrics (ratings, reviews, downloads) are country-specific. If you
        open the App Store/Google Play links from outside Brazil, you may see
        different numbers.
      </p>
    </div>
    <div className="flex flex-col gap-5">
      <p className="text-[13px] leading-relaxed text-muted-foreground">
        The day we reached <span className="text-foreground">Top 26</span> in
        the App Store Food &amp; Drink ranking.
      </p>
      <ImageViewer
        src="/static/favorito-store-ranking.png"
        alt="Favorito ranked Top 26 in the App Store Food and Drink ranking"
        width={814}
        height={1023}
        triggerClassName="mx-auto max-w-[360px]"
        bordered={false}
      />
    </div>
    <article className="flex flex-col gap-5">
      <h3 className="text-sm font-medium tracking-tight text-foreground">
        Featured in the Media
      </h3>
      <div className="flex flex-col gap-3 text-[13px] leading-relaxed text-muted-foreground">
        <p>
          We had more than{" "}
          <span className="text-foreground">40 media appearances</span>,
          including articles in portals, newspapers, radio and TV interviews,
          among others. I list some below.
        </p>
        <Link
          href="https://l.moresco.cc/favorito-pr"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-1.5 font-medium text-foreground underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring/40"
        >
          See more media appearances
          <ArrowUpRightIcon
            aria-hidden
            weight="light"
            className="size-3.5 shrink-0 text-foreground"
          />
        </Link>
      </div>
    </article>
  </section>
)
