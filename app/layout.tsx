import 'css/tailwind.css'
import 'pliny/search/algolia.css'

import { Metadata } from 'next'
import localFont from 'next/font/local'

import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SectionContainer } from '@/components/SectionContainer'
import { ThemeProvider } from '@/components/ThemeProvider'

import siteMetadata from '@/data/siteMetadata'

const biotif = localFont({
  src: [
    {
      path: '../public/static/fonts/Biotif-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../public/static/fonts/Biotif-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/Biotif-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../public/static/fonts/Biotif-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/Biotif-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/static/fonts/Biotif-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/Biotif-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/static/fonts/Biotif-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/Biotif-BookItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/static/fonts/Biotif-Book.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/Biotif-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/static/fonts/Biotif-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/Biotif-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/static/fonts/Biotif-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-biotif',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${biotif.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel='apple-touch-icon' sizes='76x76' href='/static/favicons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/static/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/static/favicons/favicon-16x16.png' />
      <link rel='manifest' href='/static/favicons/site.webmanifest' />
      <link rel='mask-icon' href='/static/favicons/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='theme-color' media='(prefers-color-scheme: light)' content='#fff' />
      <meta name='theme-color' media='(prefers-color-scheme: dark)' content='#000' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />

      <body className='bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white'>
        <ThemeProvider>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />

          <SectionContainer>
            <div className='flex h-screen flex-col justify-between font-sans'>
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                <Header />

                <main className='mb-auto'>{children}</main>
              </SearchProvider>

              <Footer />
            </div>
          </SectionContainer>
        </ThemeProvider>
      </body>
    </html>
  )
}
