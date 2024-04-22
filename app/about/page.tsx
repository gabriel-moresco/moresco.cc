import { Metadata } from 'next'

import { Authors, allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'

import { AuthorLayout } from '@/layouts/author-layout'

import { MDXLayoutRenderer } from 'pliny/mdx-components'

import siteMetadata from '@/data/siteMetadata'

export const metadata: Metadata = {
  title: 'About',
  openGraph: {
    title: `About | ${siteMetadata.title}`,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: siteMetadata.socialBanner,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: `About | ${siteMetadata.title}`,
    card: 'summary_large_image',
    images: siteMetadata.socialBanner,
  },
}

export default function Page() {
  const author = allAuthors.find(p => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
