'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

import siteMetadata from '@/data/siteMetadata'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemeProvider attribute='class' defaultTheme={siteMetadata.theme} enableSystem>
      {children}
    </NextThemeProvider>
  )
}
