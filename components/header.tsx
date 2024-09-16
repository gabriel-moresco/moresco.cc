import { Logo } from '@/components/icons'
import { Link } from '@/components/link'
import { MobileNav } from '@/components/mobile-nav'
import { SearchButton } from '@/components/search-button'
import { ThemeSwitch } from '@/components/theme-switch'

export const links = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
]

export const Header = () => {
  return (
    <header className='flex items-center justify-between py-8'>
      <Link href='/' aria-label='Gabriel Moresco'>
        <Logo className='mr-4 h-14 w-14' />
      </Link>
      <div className='flex items-center space-x-4 leading-5 sm:space-x-6'>
        {links
          .filter(link => link.href !== '/')
          .map(link => (
            <Link
              key={link.title}
              href={link.href}
              className='hidden font-medium text-gray-900 dark:text-gray-100 sm:block'
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav links={links} />
      </div>
    </header>
  )
}
