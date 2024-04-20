import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import Pre from 'pliny/ui/Pre'
import TOCInline from 'pliny/ui/TOCInline'

import { Image } from '@/components/image'
import { Link } from '@/components/link'
import { TableWrapper } from '@/components/table-wrapper'

export const MdxComponents: MDXComponentsType = {
  Image,
  TOCInline,
  a: Link,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
}
