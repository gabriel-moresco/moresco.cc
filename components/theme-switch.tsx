'use client'

import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { Moon, Sun } from '@/components/icons'

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button className='mr-5' onClick={toggleTheme}>
      {theme === 'dark' || !mounted ? (
        <Moon className='h-6 w-6 text-gray-900 dark:text-gray-100' />
      ) : (
        <Sun className='h-6 w-6 text-gray-900 dark:text-gray-100' />
      )}
    </button>
  )
}
