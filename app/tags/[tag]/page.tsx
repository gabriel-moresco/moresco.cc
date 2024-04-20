import { Metadata } from 'next'

import { allBlogs } from 'contentlayer/generated'
import { slug } from 'github-slugger'

import { ListLayout } from '@/layouts/ListLayout'

import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

import { genPageMetadata } from '@/utils/seo'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = decodeURI(params.tag)

  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  })
}

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const paths = tagKeys.map(tag => ({
    tag: encodeURI(tag),
  }))

  return paths
}

export default function Page({ params }: { params: { tag: string } }) {
  const tag = decodeURI(params.tag)

  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)

  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter(post => post.tags && post.tags.map(t => slug(t)).includes(tag))),
  )

  return <ListLayout posts={filteredPosts} title={title} />
}
