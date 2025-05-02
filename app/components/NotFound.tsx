import { Link } from '@tanstack/react-router'

export function NotFound({ children }: { children?: any }) {
  return (
    <div className="h-[50vh] flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">404 页面未找到</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        您访问的页面不存在。
      </p>
      {children || (
        <p className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => window.history.back()}
            className="bg-emerald-500 text-white p-2 rounded uppercase font-black"
          >
            返回上页
          </button>
          <Link
            to="/"
            className="bg-cyan-600 text-white p-2 rounded uppercase font-black"
          >
            回到首页
          </Link>
        </p>
      )}
    </div>
  )
}
