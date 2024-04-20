import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import { Image } from '@/components/Image'
import { Link } from '@/components/Link'
import { TableWrapper } from '@/components/TableWrapper'

export const MdxComponents: MDXComponentsType = {
  Image,
  TOCInline,
  a: Link,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
}