import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr"
import { ImageViewer } from "@/components/image-viewer"
import { VideoViewer } from "@/components/video-viewer"

type WegProps = {
  delay: number
}

export const Weg = ({ delay }: WegProps) => (
  <section
    aria-labelledby="weg-heading"
    className="flex animate-in flex-col gap-12 duration-500 ease-out fill-mode-both fade-in slide-in-from-bottom-3"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex flex-col gap-4">
      <Link
        href="https://weg.net"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex w-fit items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
      >
        <Image
          src="/static/weg.png"
          alt=""
          width={48}
          height={48}
          className="size-6 shrink-0"
        />
        <h2
          id="weg-heading"
          className="text-sm font-medium tracking-tight text-foreground underline-offset-4 group-hover:underline"
        >
          WEG
        </h2>
        <ArrowUpRightIcon
          aria-hidden
          weight="light"
          className="size-3.5 -translate-x-0.5 text-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
        />
      </Link>
      <div className="flex flex-col gap-3 text-[13px] leading-relaxed text-muted-foreground">
        <p>
          WEG is the sixth-largest company in Brazil, a leader in the
          manufacturing of electrical equipment, and is currently focused on
          building software products.
        </p>
        <p>
          During my time at WEG, I built more than{" "}
          <span className="text-foreground">10 products</span> from scratch.
          Below are some of the key projects I developed over the 3 years I
          spent at the company.
        </p>
      </div>
    </div>

    <article className="flex flex-col gap-4">
      <h3 className="text-sm font-medium tracking-tight text-foreground">
        Leopard
      </h3>
      <div className="flex flex-col gap-3 text-[13px] leading-relaxed text-muted-foreground">
        <p>
          Leopard is a CAD software focused on electrical panel design. I was
          responsible for planning, choosing technologies, and developing the
          software from scratch.
        </p>
        <p>
          I led a team of 3 developers from creation through the launch of the
          alpha version internally at WEG.
        </p>
        <p>
          This project allowed WEG to create CAD software tailored to internal
          needs that were not being met by market products, such as AutoCAD.
        </p>
      </div>
      <ImageViewer
        src="/static/leopard.png"
        alt="Screenshot of the Leopard CAD software showing an electrical panel diagram"
        width={1920}
        height={1040}
      />
    </article>

    <article className="flex flex-col gap-4">
      <h3 className="text-sm font-medium tracking-tight text-foreground">
        WAU SAP Connector
      </h3>
      <div className="flex flex-col gap-3 text-[13px] leading-relaxed text-muted-foreground">
        <p>
          WAU SAP Connector is a software I developed from scratch to replace a
          product (CIDEON) that WEG paid annual licenses for more than 1,500
          mechanical and electrical engineers.
        </p>
        <p>
          The product is responsible for making the connection between the
          SolidWorks project and the SAP ERP entities.
        </p>
        <p>
          By the time I left the company, over{" "}
          <span className="text-foreground">R$ 1.2M per year</span> in CIDEON
          license fees for more than 1,500 engineers was being saved.
        </p>
      </div>
      <VideoViewer
        videoid="pdNS3ZwGv_U"
        thumbnail="/static/wsc.png"
        alt="WAU SAP Connector demo"
        width={1553}
        height={824}
      />
    </article>
  </section>
)
