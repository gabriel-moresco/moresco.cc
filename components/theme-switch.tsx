'use client'

import { useTheme } from 'next-themes'

import { Moon, Sun } from '@/components/icons'

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button className='mr-5' onClick={toggleTheme}>
      <Moon className='hidden h-6 w-6 text-gray-900 dark:flex dark:text-gray-100' />
      <Sun className='flex h-6 w-6 text-gray-900 dark:hidden dark:text-gray-100' />
    </button>
  )
}
