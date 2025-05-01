import * as React from 'react'

import { CgSpinner } from 'react-icons/cg'
import { FaCheckCircle } from 'react-icons/fa'
import {
  Await,
  Link,
  createFileRoute,
  getRouteApi,
} from '@tanstack/react-router'
import { virtualProject } from '~/libraries/virtual'
import { getLibrary } from '~/libraries'
import { LibraryFeatureHighlights } from '~/components/LibraryFeatureHighlights'
import { Carbon } from '~/components/Carbon'
import { Footer } from '~/components/Footer'
import SponsorPack from '~/components/SponsorPack'
import { TbHeartHandshake } from 'react-icons/tb'
import { Framework, getBranch } from '~/libraries'
import { seo } from '~/utils/seo'
import { twMerge } from 'tailwind-merge'

export const Route = createFileRoute('/_libraries/virtual/$version/')({
  component: RouteComp,
  head: () => ({
    meta: seo({
      title: virtualProject.name,
      description: virtualProject.description,
    }),
  }),
})

const librariesRouteApi = getRouteApi('/_libraries')

const library = getLibrary('virtual')

export default function RouteComp() {
  const { sponsorsPromise } = librariesRouteApi.useLoaderData()
  const { version } = Route.useParams()
  const [framework, setFramework] = React.useState<Framework>('react')
  const branch = getBranch(virtualProject, version)
  const [isDark, setIsDark] = React.useState(true)

  React.useEffect(() => {
    setIsDark(window.matchMedia?.(`(prefers-color-scheme: dark)`).matches)
  }, [])

  const gradientText = `pr-1 inline-block text-transparent bg-clip-text bg-gradient-to-r ${virtualProject.colorFrom} ${virtualProject.colorTo}`

  return (
    <div className="flex flex-col gap-20 md:gap-32 max-w-full pt-32">
      <div className="flex flex-col items-center gap-8 text-center px-4">
        <h1 className="font-black flex gap-3 items-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase [letter-spacing:-.05em]">
          <span>TanStack</span>
          <span className={twMerge(gradientText)}>Virtual</span>
        </h1>
        <h2
          className="font-bold text-2xl max-w-md
            md:text-3xl
            lg:text-5xl lg:max-w-2xl"
        >
          <span className="underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2">
            无头
          </span>{' '}
          UI 用于虚拟化大型元素列表
        </h2>
        <p
          className="text opacity-90 max-w-sm
            lg:text-xl lg:max-w-2xl"
        >
          在 TS/JS、React、Vue、Solid、Svelte、Lit 和 Angular 中以 60FPS
          的速度仅虚拟化 大型可滚动元素中的可见 DOM 节点，同时保持对标记和样式的
          100% 控制。
        </p>
        <Link
          to="./docs/introduction"
          className={`py-2 px-4 bg-purple-500 rounded text-white uppercase font-extrabold`}
        >
          开始使用
        </Link>
      </div>

      <LibraryFeatureHighlights featureHighlights={library.featureHighlights} />

      <div className="px-4 sm:px-6 lg:px-8 mx-auto">
        <div className=" sm:text-center pb-16">
          <h3 className="text-3xl text-center mx-auto leading-tight font-extrabold tracking-tight sm:text-4xl lg:leading-none mt-2">
            框架无关 & 功能丰富
          </h3>
          <p className="mt-4 text-xl max-w-3xl mx-auto leading-7 opacity-60">
            TanStack Virtual 的 API
            和引擎高度模块化且与框架无关，同时仍然优先考虑人体工程学。看看这些必备功能：
          </p>
        </div>
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4  mx-auto">
          {[
            '轻量级 (10 - 15kb)',
            '可树摇',
            '无头设计',
            '垂直/列虚拟化',
            '水平/行虚拟化',
            '网格虚拟化',
            '窗口滚动',
            '固定尺寸',
            '可变尺寸',
            '动态/测量尺寸',
            '滚动工具函数',
            '粘性元素',
          ].map((d, i) => {
            return (
              <span key={i} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 " /> {d}
              </span>
            )
          })}
        </div>
      </div>

      {/* <div>
        <div className="uppercase tracking-wider text-sm font-semibold text-center text-gray-400 mb-3">
          Trusted in Production by
        </div>
        <marquee scrollamount="2">
          <div className="flex gap-2 items-center text-3xl font-bold ml-[-100%]">
            {(new Array(4) as string[])
              .fill('')
              .reduce(
                (all) => [...all, ...all],
                [
                  'Intuit',
                  'Google',
                  'Amazon',
                  'Apple',
                  'AutoZone',
                  'Microsoft',
                  'Cisco',
                  'Uber',
                  'Salesforce',
                  'Walmart',
                  'Wix',
                  'HP',
                  'Docusign',
                  'Tripwire',
                  'Yahoo!',
                  'Ocado',
                  'Nordstrom',
                  'TicketMaster',
                  'Comcast Business',
                  'Nozzle.io',
                ]
              )
              .map((d, i) => (
                <span key={i} className="opacity-70 even:opacity-40">
                  {d}
                </span>
              ))}
          </div>
        </marquee>
      </div> */}

      <div className="px-4 w-[500px] max-w-full mx-auto">
        <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-8">
          合作伙伴
        </h3>
        <div className="h-8" />
        <div
          className="flex-1 flex flex-col items-center text-sm text-center
                      bg-white/80 shadow-xl shadow-gray-500/20 rounded-lg
                        divide-y-2 divide-gray-500 divide-opacity-10 overflow-hidden
                        dark:bg-black/40 dark:shadow-none"
        >
          <span className="flex items-center gap-2 p-12 text-4xl text-rose-500 font-black uppercase">
            Virtual <TbHeartHandshake /> 您?
          </span>
          <div className="flex flex-col p-4 gap-4">
            <div>
              我们正在寻找一个 TanStack Virtual OSS
              合作伙伴，以超越赞助的呼吁。您是否像我们一样投入于 TanStack
              Virtual？让我们一起推动 Virtual 的边界！
            </div>
            <a
              href="mailto:partners@tanstack.com?subject=TanStack Virtual Partnership"
              className="text-blue-500 uppercase font-black text-sm"
            >
              一起聊聊
            </a>
          </div>
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

      <div className="mx-auto max-w-[400px] flex flex-col gap-2 items-center">
        <div className="shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-800 dark:text-white max-w-[250px] mx-auto">
          <Carbon />
        </div>
        <span
          className="text-[.7rem] bg-gray-500 bg-opacity-10 py-1 px-2 rounded text-gray-500
                dark:bg-opacity-20"
        >
          这则广告帮助我们对投入的时间感到满足，避免精疲力竭而放弃开源项目。耶，金钱！😉
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="px-4 sm:px-6 lg:px-8  mx-auto container max-w-3xl sm:text-center">
          <h3 className="text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-2">
            试用一下！
          </h3>
          <p className="my-4 text-xl leading-7  text-gray-600">
            只需几个 div
            和一些内联样式，您就已经在创建一个非常强大的虚拟化体验的路上了。
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {(
              [
                { label: 'React', value: 'react' },
                { label: 'Solid', value: 'solid' },
                { label: 'Lit', value: 'lit' },
                { label: 'Svelte', value: 'svelte' },
                { label: 'Vue', value: 'vue' },
                { label: 'Angular', value: 'angular' },
              ] as const
            ).map((item) => (
              <button
                key={item.value}
                className={`inline-block py-2 px-4 rounded text-white uppercase font-extrabold ${
                  item.value === framework
                    ? 'bg-purple-500'
                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-teal-300'
                }`}
                onClick={() => setFramework(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {['vue', 'solid', 'svelte'].includes(framework) ? (
        <div className="px-2">
          <div className="p-8 text-center text-lg w-full max-w-screen-lg mx-auto bg-black text-white rounded-xl">
            想找 <strong>@tanstack/{framework}-virtual</strong>{' '}
            的例子？我们需要您的帮助来构建{' '}
            <strong>@tanstack/{framework}-virtual</strong> 适配器！加入{' '}
            <a
              href="https://tlinz.com/discord"
              className="text-teal-500 font-bold"
            >
              TanStack Discord 服务器
            </a>{' '}
            让我们一起工作！
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg黑色">
          <iframe
            key={framework}
            src={`https://stackblitz.com/github/${
              virtualProject.repo
            }/tree/${branch}/examples/${framework}/fixed?embed=1&theme=${
              isDark ? 'dark' : 'light'
            }`}
            title="tannerlinsley/react-table: dynamic"
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
          哇，你已经走了这么远！
        </div>
        <div className="italic font-sm opacity-70">只剩下一件事要做了...</div>
        <div>
          <Link
            to="./docs/introduction"
            className={`inline-block py-2 px-4 bg-purple-500 rounded text-white uppercase font-extrabold`}
          >
            开始使用！
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
