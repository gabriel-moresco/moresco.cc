import { MetadataRoute } from 'next'

import { allPosts } from 'contentlayer/generated'

import siteMetadata from '@/data/siteMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const postRoutes = allPosts
    .filter(post => !post.draft)
    .map(post => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: (post.lastmod || post.date).split('T')[0],
    }))

  const routes = ['', 'about'].map(route => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...postRoutes]
}
