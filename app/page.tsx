import { dayjs } from '@/lib/dayjs'
import { allPosts } from 'contentlayer/generated'
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'

import { Link } from '@/components/link'

import siteMetadata from '@/data/siteMetadata'

export default async function Page() {
  const sortedPosts = sortPosts(allPosts)
  const posts = allCoreContent(sortedPosts)

  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className='space-y-2 pb-8 pt-6 md:space-y-5'>
        <h1 className='text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
          Gabriel Moresco
        </h1>

        <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
          {siteMetadata.description}
        </p>
      </div>

      <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
        {!posts.length && 'No posts found.'}

        {posts.map(post => {
          const { slug, date, title, summary } = post

          return (
            <li key={slug} className='py-12'>
              <article>
                <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                  <dl>
                    <dt className='sr-only'>Published on</dt>
                    <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                      <time dateTime={date}>{dayjs.utc(date).format('MMMM D, YYYY')}</time>
                    </dd>
                  </dl>
                  <div className='space-y-5 xl:col-span-3'>
                    <div className='space-y-6'>
                      <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                        <Link href={`/${slug}`} className='text-gray-900 dark:text-gray-100'>
                          {title}
                        </Link>
                      </h2>
                      <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                        {summary}
                      </div>
                    </div>
                    <div className='text-base font-medium leading-6'>
                      <Link
                        href={`/${slug}`}
                        className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                        aria-label={`Read more: "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
