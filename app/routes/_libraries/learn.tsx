import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from '~/utils/seo'
import { FaCheckCircle } from 'react-icons/fa'
import { LogoQueryGG } from '~/components/LogoQueryGG'

export const Route = createFileRoute('/_libraries/learn')({
  component: LoginComp,
  head: () => ({
    meta: seo({
      title: '学习 | TanStack',
      description: `TanStack 库和项目的教育与学习资源`,
      keywords: `学习,课程,教育,学习资源,培训,tanstack,react query,教程`,
    }),
  }),
})

function LoginComp() {
  return (
    <div className="flex flex-col min-h-[100dvh] max-w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-8">
        <div className="flex flex-col items-center space-y-12 text-center ">
          <div className="space-y-4">
            <h1 className="space-y-2">
              <div className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-pretty">
                教育资源
              </div>
              <div className="text-xl font-normal tracking-tight sm:text-2xl md:text-3xl lg:text-4xl/none text-pretty">
                TanStack 库的学习资料
              </div>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-pretty">
              无论您是刚刚入门还是希望提升个人或团队技能，我们都有帮助您成功的资源。
            </p>
          </div>
          <div className="flex items-stretch flex-wrap gap-4 max-w-full w-[900px] justify-center">
            <Link
              to={'https://query.gg?s=tanstack' as string}
              target="_blank"
              className="min-w-[300px] max-w-[300px] rounded-lg bg-white dark:bg-gray-800 shadow-black/20 shadow-lg hover:shadow-2xl hover:shadow-black/20 divide-y divide-white/30 transition-all duration-200 hover:scale-105 overflow-hidden block"
            >
              <LogoQueryGG className="w-full" />
              <div className="flex flex-col gap-6 pt-2 p-4 lg:p-8 ">
                <div className="text-center">
                  <div className="text-sm opacity-70 mt-2">
                    由 <span className="font-bold">Dominik Dorfmeister</span> 和{' '}
                    <span className="font-bold">ui.dev</span> 创建
                  </div>
                </div>

                <div className="text-sm max-w-full text-center font-bold">
                  "这是学习如何在实际应用中使用 React Query 的最佳方式。"
                  <div className="mt-2 text-xs italic">—Tanner Linsley</div>
                </div>

                <div className="grid max-w-screen-lg mx-auto text-xs gap-2 text-left">
                  <div className="flex items-start gap-2">
                    <span className="text-lg text-green-500">
                      <FaCheckCircle />
                    </span>
                    <div>通过引导式学习方法节省时间</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-lg text-green-500">
                      <FaCheckCircle />
                    </span>
                    <div>获得构建实际应用的实践经验</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-lg text-green-500">
                      <FaCheckCircle />
                    </span>
                    <div>再也不用担心数据获取问题</div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex items-center min-w-[300px] max-w-[300px] rounded-lg bg-white dark:bg-gray-800/60 shadow-lg divide-y divide-white/30 overflow-hidden justify-center p-4">
              <div className="opacity-20 font-black text-3xl rotate-[-5deg]">
                更多内容即将推出！
              </div>
            </div>
            {/* <Link
              to={'https://github.com/tanstack' as string}
              target="_blank"
              className="max-w-[300px] rounded-lg bg-gradient-to-br from-gray-500 to-gray-900 text-white shadow-black/20 shadow-lg hover:shadow-2xl hover:shadow-black/20 divide-y divide-white/30 transition-all duration-200 hover:scale-105"
            >
              <div className="p-4 text-lg md:text-xl lg:text-2xl font-bold text-center">
                GitHub
              </div>
              <div className="p-4 flex gap-2 flex-wrap">
                {['Bug Reports', 'Feature Requests', 'Source Code'].map((d) => (
                  <div
                    key={d}
                    className="text-sm bg-white text-black rounded-full py-1 px-2 shadow-lg font-bold"
                  >
                    {d}
                  </div>
                ))}
              </div>
            </Link>
            <Link
              to="/dedicated-support"
              className="max-w-[300px] rounded-lg bg-gradient-to-br from-green-500 to-sky-500 text-white shadow-black/20 shadow-lg hover:shadow-2xl hover:shadow-black/20 divide-y divide-white/30 transition-all duration-200 hover:scale-105"
            >
              <div className="p-4 text-lg md:text-xl lg:text-2xl font-bold text-center">
                Dedicated Support
              </div>
              <div className="p-4 flex gap-2 flex-wrap">
                {['Consulting', 'Enterprise Support Contracts'].map((d) => (
                  <div
                    key={d}
                    className="text-sm bg-white/90 rounded-full py-1 px-2 shadow-lg font-bold"
                  >
                    <div className="text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-sky-600">
                      {d}
                    </div>
                  </div>
                ))}
              </div>
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  )
}
