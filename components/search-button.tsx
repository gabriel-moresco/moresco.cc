import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { KBarButton } from 'pliny/search/KBarButton'

import { Search } from '@/components/icons'

import siteMetadata from '@/data/siteMetadata'

export const SearchButton = () => {
  if (
    !siteMetadata.search ||
    (siteMetadata.search.provider !== 'algolia' && siteMetadata.search.provider !== 'kbar')
  ) {
    return
  }

  const SearchButtonWrapper =
    siteMetadata.search.provider === 'algolia' ? AlgoliaButton : KBarButton

  return (
    <SearchButtonWrapper aria-label='Search'>
      <Search className='h-6 w-6 text-gray-900 dark:text-gray-100' />
    </SearchButtonWrapper>
  )
}
