import * as React from 'react'

import { CgSpinner } from 'react-icons/cg'
import { FaCheckCircle } from 'react-icons/fa'
import { Await, Link, getRouteApi } from '@tanstack/react-router'
import { Carbon } from '~/components/Carbon'
import { Footer } from '~/components/Footer'
import { TbHeartHandshake } from 'react-icons/tb'
import SponsorPack from '~/components/SponsorPack'
// import { QueryGGBanner } from '~/components/QueryGGBanner'
import { QueryGGBannerSale } from '~/components/QueryGGBannerSale'
import { queryProject } from '~/libraries/query'
import { createFileRoute } from '@tanstack/react-router'
import { Framework, getBranch, getLibrary } from '~/libraries'
import { seo } from '~/utils/seo'
import { twMerge } from 'tailwind-merge'
import { LibraryFeatureHighlights } from '~/components/LibraryFeatureHighlights'
import { partners } from '~/utils/partners'
import LandingPageGad from '~/components/LandingPageGad'
export const Route = createFileRoute('/_libraries/query/$version/')({
  component: VersionIndex,
  head: () => ({
    meta: seo({
      title: queryProject.name,
      description: queryProject.description,
    }),
  }),
})

const librariesRouteApi = getRouteApi('/_libraries')

const library = getLibrary('query')

export default function VersionIndex() {
  const { sponsorsPromise } = librariesRouteApi.useLoaderData()
  const { version } = Route.useParams()
  const branch = getBranch(queryProject, version)
  const [framework, setFramework] = React.useState<Framework>('react')
  const [isDark, setIsDark] = React.useState(true)

  React.useEffect(() => {
    setIsDark(window.matchMedia?.(`(prefers-color-scheme: dark)`).matches)
  }, [])

  const gradientText = `pr-1 inline-block leading-snug text-transparent bg-clip-text bg-gradient-to-r ${queryProject.colorFrom} ${queryProject.colorTo}`

  return (
    <div className="flex flex-1 flex-col min-h-0 relative overflow-x-hidden">
      <div className="flex flex-1 min-h-0 relative justify-center overflow-x-hidden">
        <div className="flex flex-col gap-20 md:gap-32 max-w-full py-32">
          <div className="flex flex-col items-center gap-8 text-center px-4">
            <QueryGGBannerSale />
            <h1 className="font-black flex gap-3 items-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase [letter-spacing:-.05em]">
              <span>TanStack</span>
              <span className={twMerge(gradientText)}>Query</span>
            </h1>
            <h2
              className="font-bold text-2xl max-w-md
            md:text-3xl
            lg:text-5xl lg:max-w-2xl"
            >
              强大的{' '}
              <span className="underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2">
                异步状态管理
              </span>{' '}
              适用于 TS/JS、React、Solid、Vue、Svelte 和 Angular
            </h2>
            <p
              className="text opacity-90 max-w-[500px]
            lg:text-xl lg:max-w-[600px]"
            >
              抛弃那些细粒度状态管理、手动重新获取和无尽的异步意大利面代码。TanStack
              Query 为您提供声明式、始终最新的自动管理查询和修改，
              <strong>直接改善您的开发者和用户体验</strong>。
            </p>
            <div className="space-y-4">
              <Link
                to="./docs/"
                className={`py-2 px-4 bg-red-500 rounded text-white uppercase font-extrabold`}
              >
                阅读文档
              </Link>
              <p>
                (or{' '}
                <a
                  href="https://query.gg?s=tanstack"
                  className="font-semibold underline"
                >
                  check out our official course
                </a>
                . It’s on sale!)
              </p>
            </div>
            {/* <QueryGGBanner /> */}
          </div>
          <LibraryFeatureHighlights
            featureHighlights={library.featureHighlights}
          />

          <div className="px-4 sm:px-6 lg:px-8 mx-auto">
            <div className=" sm:text-center pb-16">
              <h3 className="text-3xl text-center mx-auto leading-tight font-extrabold tracking-tight sm:text-4xl lg:leading-none mt-2">
                零依赖。所有功能。
              </h3>
              <p className="mt-4 text-xl max-w-3xl mx-auto leading-7 opacity-60">
                TanStack Query 没有任何依赖，但提供了极其丰富的功能集。
                从周末爱好项目到企业级电子商务系统（是的，沃尔玛，我在看着你！😉），
                TanStack Query
                是一个经过实战检验的工具，可以帮助您以创意的速度取得成功。
              </p>
            </div>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4  mx-auto">
              {[
                '后端不可知',
                '专用开发工具',
                '自动缓存',
                '自动重新获取',
                '窗口焦点重新获取',
                '轮询/实时查询',
                '并行查询',
                '依赖查询',
                '变更 API',
                '自动垃圾回收',
                '分页/游标查询',
                '加载更多/无限滚动查询',
                '滚动恢复',
                '请求取消',
                'Suspense 就绪！',
                '边获取边渲染',
                '预取',
                '可变长度并行查询',
                '离线支持',
                'SSR 支持',
                '数据选择器',
              ].map((d, i) => {
                return (
                  <span key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500 " /> {d}
                  </span>
                )
              })}
            </div>
          </div>

          <div>
            <div className="uppercase tracking-wider text-sm font-semibold text-center text-gray-400 mb-3">
              生产环境中受信任的技术，被以下公司使用
            </div>
            {/* @ts-ignore */}
            <marquee scrollamount="2">
              <div className="flex gap-2 items-center text-3xl font-bold ml-[-100%]">
                {(new Array(4) as string[])
                  .fill('')
                  .reduce(
                    (all) => [...all, ...all],
                    [
                      'Google',
                      'Walmart',
                      'Facebook',
                      'PayPal',
                      'Amazon',
                      'American Express',
                      'Microsoft',
                      'Target',
                      'Ebay',
                      'Autodesk',
                      'CarFAX',
                      'Docusign',
                      'HP',
                      'MLB',
                      'Volvo',
                      'Ocado',
                      'UPC.ch',
                      'EFI.com',
                      'ReactBricks',
                      'Nozzle.io',
                      'Uber',
                    ]
                  )
                  .map((d, i) => (
                    <span key={i} className="opacity-70 even:opacity-40">
                      {d}
                    </span>
                  ))}
              </div>
              {/* @ts-ignore */}
            </marquee>
          </div>

          <div className="px-4 lg:max-w-screen-lg md:mx-auto mx-auto">
            <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-8">
              合作伙伴
            </h3>
            <div className="h-8" />
            <div className={`grid grid-cols-1 gap-6 max-w-screen-md mx-auto`}>
              {partners
                .filter((d) => d.libraries?.includes('query'))
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

          <div className="relative text-lg overflow-hidden">
            <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-8">
              赞助商
            </h3>
            <div
              className="my-4 flex flex-wrap mx-auto max-w-screen-lg"
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

          <LandingPageGad />

          <div className="flex flex-col gap-4">
            <div className="px-4 sm:px-6 lg:px-8  mx-auto max-w-3xl sm:text-center">
              <h3 className="text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-2">
                更少的代码，更少的边缘情况。
              </h3>
              <p className="my-4 text-xl leading-7  text-gray-600">
                您不再需要编写
                reducer、缓存逻辑、定时器、重试逻辑、复杂的异步/await 脚本
                (我可以继续列举...)，您实际上只需编写平常所需代码量的一小部分。
                当您使用 TanStack Query 时，您会惊讶于自己编写的代码量如此之少，
                或者删除了多少代码。试试下面的例子吧！
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {(
                  [
                    { label: 'Angular', value: 'angular' },
                    { label: 'React', value: 'react' },
                    { label: 'Solid', value: 'solid' },
                    { label: 'Svelte', value: 'svelte' },
                    { label: 'Vue', value: 'vue' },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.value}
                    className={`inline-block py-2 px-4 rounded text-white uppercase font-extrabold ${
                      item.value === framework
                        ? 'bg-red-500'
                        : 'bg-gray-300 dark:bg-gray-700 hover:bg-red-300'
                    }`}
                    onClick={() => setFramework(item.value)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {[''].includes(framework) ? (
            <div className="px-2">
              <div className="p-8 text-center text-lg w-full max-w-screen-lg mx-auto bg-black text-white rounded-xl">
                正在寻找 <strong>@tanstack/{framework}-query</strong>{' '}
                示例？我们需要您的帮助来构建{' '}
                <strong>@tanstack/{framework}-query</strong> 适配器！加入{' '}
                <a
                  href="https://tlinz.com/discord"
                  className="text-teal-500 font-bold"
                >
                  TanStack Discord 服务器
                </a>{' '}
                一起开始工作吧！
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg黑">
              <iframe
                key={framework}
                src={`https://stackblitz.com/github/${
                  queryProject.repo
                }/tree/${branch}/examples/${framework}/simple?embed=1&theme=${
                  isDark ? 'dark' : 'light'
                }&preset=node`}
                title={`tannerlinsley/${framework}-query: basic`}
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
          )}

          <div className="flex flex-col gap-4 items-center">
            <div className="font-extrabold text-xl lg:text-2xl">
              哇，您已经走了这么远！
            </div>
            <div className="italic font-sm opacity-70">
              只剩下一件事要做了...
            </div>
            <div>
              <Link
                to="./docs/"
                className={`inline-block py-2 px-4 bg-red-500 rounded text-white uppercase font-extrabold`}
              >
                阅读文档！
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
