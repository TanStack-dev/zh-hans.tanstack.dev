import { Link, createFileRoute } from '@tanstack/react-router'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/_libraries/blog')({
  head: () => ({
    meta: seo({
      title: '博客 | TanStack',
      description: 'TanStack的最新新闻和博客文章！',
    }),
  }),
})

export function PostNotFound() {
  return (
    <div className="flex-1 p-4 flex flex-col items-center justify-center gap-6">
      <h1 className="opacity-10 flex flex-col text-center font-black">
        <div className="text-7xl leading-none">404</div>
        <div className="text-3xl leading-none">未找到</div>
      </h1>
      <div className="text-lg">博客文章未找到。</div>
      <Link
        to="/blog"
        className={`py-2 px-4 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold`}
      >
        博客首页
      </Link>
    </div>
  )
}
