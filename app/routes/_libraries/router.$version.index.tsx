import * as React from 'react'
import { CgSpinner } from 'react-icons/cg'
import { FaCheckCircle } from 'react-icons/fa'
import {
  Await,
  Link,
  createFileRoute,
  getRouteApi,
} from '@tanstack/react-router'
import { routerProject } from '~/libraries/router'
import { Footer } from '~/components/Footer'
import SponsorPack from '~/components/SponsorPack'
import { Framework, getBranch, getLibrary } from '~/libraries'
import { seo } from '~/utils/seo'
import { partners } from '~/utils/partners'
import { twMerge } from 'tailwind-merge'
import { LibraryFeatureHighlights } from '~/components/LibraryFeatureHighlights'

export const Route = createFileRoute('/_libraries/router/$version/')({
  component: RouterVersionIndex,
  head: () => ({
    meta: seo({
      title: routerProject.name,
      description: routerProject.description,
    }),
  }),
})

const librariesRouteApi = getRouteApi('/_libraries')

const library = getLibrary('router')

function RouterVersionIndex() {
  const { sponsorsPromise } = librariesRouteApi.useLoaderData()
  const { version } = Route.useParams()
  const branch = getBranch(routerProject, version)
  const [framework] = React.useState<Framework>('react')
  const [isDark, setIsDark] = React.useState(true)

  React.useEffect(() => {
    setIsDark(window.matchMedia?.(`(prefers-color-scheme: dark)`).matches)
  }, [])

  const gradientText = `pr-1 inline-block text-transparent bg-clip-text bg-gradient-to-r ${routerProject.colorFrom} ${routerProject.colorTo}`

  return (
    <div className="flex flex-col gap-20 md:gap-32 max-w-full pt-32">
      <div className="flex flex-col items-center gap-8 text-center px-4">
        <h1 className="font-black flex gap-3 items-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase [letter-spacing:-.05em]">
          <span>TanStack</span>
          <span className={twMerge(gradientText)}>Router</span>
        </h1>
        <h2
          className="font-bold text-2xl max-w-md
            md:text-3xl
            lg:text-5xl lg:max-w-2xl"
        >
          <span className="underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2">
            现代且可扩展的
          </span>{' '}
          React 和 Solid 应用程序路由
        </h2>
        <p
          className="text opacity-90 max-w-sm
            lg:text-xl lg:max-w-2xl"
        >
          一个完全类型安全的路由器，内置数据获取、过时后重新验证缓存以及一流的搜索参数
          API。
        </p>
        <Link
          to="./docs/framework/react/overview"
          className={`py-2 px-4 bg-emerald-500 rounded text-white uppercase font-extrabold`}
        >
          开始使用
        </Link>
      </div>
      <LibraryFeatureHighlights featureHighlights={library.featureHighlights} />
      <div className="px-4 lg:max-w-screen-lg md:mx-auto mx-auto">
        <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-8">
          合作伙伴
        </h3>
        <div className="h-8" />
        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2`}>
          {partners
            .filter((d) => d.libraries?.includes('router'))
            .map((partner) => {
              return (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  className="shadow-xl shadow-gray-500/20 rounded-lg dark:border border-gray-500/20 bg-white dark:bg-black/40 dark:shadow-none group overflow-hidden grid"
                  rel="noreferrer"
                >
                  <div className="z-0 row-start-1 col-start-1 flex items-center justify-center group-hover:blur-sm transition-all duration-200">
                    {partner.homepageImg}
                  </div>
                  <div className="z-10 row-start-1 col-start-1 max-w-full p-4 text-sm flex flex-col gap-4 items-start opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/70 dark:bg-gray-800/70">
                    {partner.content}
                  </div>
                </a>
              )
            })}
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mx-auto">
        <div className=" sm:text-center pb-16">
          <h3 className="text-3xl text-center mx-auto leading-tight font-extrabold tracking-tight sm:text-4xl lg:leading-none mt-2">
            功能丰富且轻量级
          </h3>
          <p className="mt-4 text-xl w-3xl mx-auto leading-7 opacity-60">
            看看这必不可少的功能列表：
          </p>
        </div>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4  mx-auto">
          {[
            '100% 类型安全',
            '并行路由加载器',
            '一流的搜索参数 API',
            '嵌套/布局路由',
            '轻量级 (12kb)',
            'Suspense + 过渡',
            '严格导航',
            '路径自动补全',
            '搜索参数架构',
            '搜索参数验证',
            '搜索参数解析 + 序列化',
            '搜索参数预/后处理',
            '结构共享',
            '自动预获取',
            '异步元素',
            '等待元素',
            '错误边界',
          ].map((d, i) => {
            return (
              <span key={i} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 " /> {d}
              </span>
            )
          })}
        </div>
      </div>

      {/* <div className="mx-auto max-w-[400px] flex flex-col gap-2 items-center">
        <div className="shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-800 dark:text-white max-w-[250px] mx-auto">
          <Carbon />
        </div>
        <span
          className="text-[.7rem] bg-gray-500 bg-opacity-10 py-1 px-2 rounded text-gray-500
                dark:bg-opacity-20"
        >
          This ad helps us be happy about our invested time and not burn out and
          rage-quit OSS. Yay money! 😉
        </span>
      </div> */}

      <div className="relative text-lg overflow-hidden">
        <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-8">
          赞助商
        </h3>
        <div
          className="my-4 flex flex-wrap mx-auto max-w-screen-lg w-full"
          style={{
            aspectRatio: '1/1',
          }}
        >
          <Await
            promise={sponsorsPromise}
            fallback={<CgSpinner className="text-2xl animate-spin" />}
            children={(sponsors) => {
              return <SponsorPack sponsors={sponsors} />
            }}
          />
        </div>
        <div className="text-center">
          <a
            href="https://github.com/sponsors/tannerlinsley"
            className="inline-block bg-green-500 px-4 py-2 text-xl mx-auto leading-tight font-extrabold tracking-tight text-white rounded-full"
          >
            成为赞助商！
          </a>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-4">
          <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-3xl sm:text-center">
            <h3 className="text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-2">
              亲自试用一下！
            </h3>
            <p className="my-4 text-xl leading-7  text-gray-600">
              创建一个路由，加入路由器，然后开始编写代码！
            </p>
            {/* <div className="flex flex-wrap gap-2 justify-center">
            {(
              [
                { label: 'React', value: 'react' },
                { label: 'Preact', value: 'preact' },
                { label: 'Solid', value: 'solid' },
                { label: 'Vue', value: 'vue' },
                { label: 'Svelte', value: 'svelte' },
              ] as const
            ).map((item) => (
              <button
                key={item.value}
                className={`inline-block py-2 px-4 rounded text-white uppercase font-extrabold ${
                  item.value === framework
                    ? 'bg-teal-500'
                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-teal-300'
                }`}
                onClick={() => setFramework(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div> */}
          </div>
        </div>

        {/* {['preact', 'vue', 'solid', 'svelte'].includes(framework) ? (
        <div className="px-2">
          <div className="p-8 text-center text-lg w-full max-w-screen-lg mx-auto bg-black text-white rounded-xl">
            Looking for the <strong>@tanstack/{framework}-router</strong>{' '}
            example? The <strong>@tanstack/{framework}-router</strong> adapter
            is currently under development! Join the{' '}
            <a
              href="https://tlinz.com/discord"
              className="text-teal-500 font-bold"
            >
              TanStack Discord Server
            </a>{' '}
            and help us make routing in {framework} a better place!
          </div>
        </div>
      ) : ( */}
        <div className="bg-white dark:bg-black">
          <iframe
            key={framework}
            src={`https://stackblitz.com/github/${
              routerProject.repo
            }/tree/${branch}/examples/${framework}/kitchen-sink-file-based?file=src%2Fmain.tsx&embed=1&theme=${
              isDark ? 'dark' : 'light'
            }`}
            title="tannerlinsley/router: kitchen-sink"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            className="shadow-2xl"
            loading="lazy"
            style={{
              width: '100%',
              height: '80vh',
              border: '0',
            }}
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <div className="font-extrabold text-xl lg:text-2xl">
          哇，你已经走了这么远！
        </div>
        <div className="italic font-sm opacity-70">只剩下一件事要做了...</div>
        <div>
          <Link
            to="./docs/framework/react/overview"
            className={`inline-block py-2 px-4 bg-emerald-500 rounded text-white uppercase font-extrabold`}
          >
            开始使用！
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
