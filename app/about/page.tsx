import { Metadata } from 'next'

import { Author, allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'

import { Image } from '@/components/image'
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
  const author = allAuthors.find(p => p.slug === 'default') as Author

  const { name, avatar, occupation } = coreContent(author)

  return (
    <>
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='space-y-2 pb-8 pt-6 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
            About
          </h1>
        </div>
        <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
          <div className='flex flex-col items-center space-x-2 pt-8'>
            {avatar && (
              <Image
                src={avatar}
                alt='avatar'
                width={192}
                height={192}
                className='h-48 w-48 rounded-full'
              />
            )}
            <h3 className='pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight'>{name}</h3>
            <div className='text-gray-500 dark:text-gray-400'>{occupation}</div>
          </div>
          <div className='prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2'>
            <MDXLayoutRenderer code={author.body.code} />
          </div>
        </div>
      </div>
    </>
  )
}
