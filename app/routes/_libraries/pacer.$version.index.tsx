import { CgSpinner } from 'react-icons/cg'
import * as React from 'react'
import { Link, createFileRoute, getRouteApi } from '@tanstack/react-router'
import { Carbon } from '~/components/Carbon'
import { Footer } from '~/components/Footer'
import { TbHeartHandshake } from 'react-icons/tb'
import { FaCheckCircle } from 'react-icons/fa'
import SponsorPack from '~/components/SponsorPack'
import { pacerProject } from '~/libraries/pacer'
import { Await } from '@tanstack/react-router'
import { seo } from '~/utils/seo'
import { twMerge } from 'tailwind-merge'
import { getLibrary } from '~/libraries'
import { LibraryFeatureHighlights } from '~/components/LibraryFeatureHighlights'
import { partners } from '~/utils/partners'

export const Route = createFileRoute('/_libraries/pacer/$version/')({
  component: PacerVersionIndex,
  head: () => ({
    meta: seo({
      title: pacerProject.name,
      description: pacerProject.description,
    }),
  }),
})

const librariesRouteApi = getRouteApi('/_libraries')
const library = getLibrary('pacer')

export default function PacerVersionIndex() {
  const { sponsorsPromise } = librariesRouteApi.useLoaderData()
  const { version } = Route.useParams()

  const gradientText = `pr-1 inline-block text-transparent bg-clip-text bg-gradient-to-r ${pacerProject.colorFrom} ${pacerProject.colorTo}`

  return (
    <>
      <div className="flex flex-col gap-20 md:gap-32 max-w-full pt-32">
        <div className="flex flex-col items-center gap-6 text-center px-4">
          <h1 className="font-black flex gap-3 items-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase [letter-spacing:-.05em]">
            <span>TanStack</span>
            <span className={twMerge(gradientText)}>Pacer</span>
          </h1>
          <h2
            className="font-bold text-2xl max-w-md
            md:text-3xl
            lg:text-5xl lg:max-w-2xl"
          >
            <span className="underline decoration-dashed decoration-gray-500 decoration-3 underline-offset-2">
              框架无关
            </span>{' '}
            类型安全的速率限制和队列工具
          </h2>
          <p
            className="text opacity-90 max-w-[500px]
            lg:text-xl lg:max-w-[800px]"
          >
            使用 TanStack Pacer 的 <strong>速率限制、节流和防抖动工具</strong>
            控制您应用程序的定时。通过 <strong>智能队列和并发控制</strong>
            管理复杂的异步工作流，
            同时保持对内置的暂停、恢复和取消功能的完全控制。
          </p>
          <Link
            to="/$libraryId/$version/docs"
            params={{ libraryId: library.id, version }}
            className={`py-2 px-4 bg-stone-600 text-white rounded uppercase font-extrabold`}
          >
            开始使用
          </Link>
        </div>
        <LibraryFeatureHighlights
          featureHighlights={library.featureHighlights}
        />

        <div className="px-4 sm:px-6 lg:px-8 mx-auto">
          <div className=" sm:text-center pb-16">
            <h3 className="text-3xl text-center mx-auto leading-tight font-extrabold tracking-tight sm:text-4xl lg:leading-none mt-2">
              轻量级 & 功能丰富
            </h3>
            <p className="mt-4 text-xl max-w-3xl mx-auto leading-7 opacity-60">
              TanStack Pacer
              高度模块化且与框架无关，同时仍然优先考虑人体工程学。看看这些必备功能：
            </p>
          </div>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4  mx-auto">
            {[
              '轻量级',
              '可树摇',
              '类型安全',
              '速率限制',
              '节流',
              '防抖动',
              '队列管理',
              'LIFO/FIFO/双向队列排序',
              '并发控制',
              '队列优先级',
              '暂停/恢复控制',
              '取消功能',
              'Abort Controller 支持',
              'Promise 集成',
              '多层抽象',
            ].map((d, i) => {
              return (
                <span key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 " /> {d}
                </span>
              )
            })}
          </div>
        </div>

        <div className="px-4 lg:max-w-screen-lg md:mx-auto mx-auto max-w-full">
          <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-8">
            合作伙伴
          </h3>
          <div className="h-8" />
          <div className={`w-[500px] max-w-full`}>
            {partners
              .filter((d) => d.libraries?.includes('pacer'))
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

        <div className="mx-auto max-w-[400px] flex flex-col gap-2 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-800 dark:text-white">
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
              看看它的实际效果！
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {(
                [
                  { label: 'React', value: 'react' },
                  // More adapters coming soon
                  // { label: 'Solid', value: 'solid' },
                  // { label: 'Svelte', value: 'svelte' },
                  // { label: 'Vue', value: 'vue' },
                  // { label: 'Vanilla', value: 'vanilla' },
                ] as const
              ).map((item) => (
                <button
                  key={item.value}
                  className={`inline-block py-2 px-4 rounded text-white uppercase font-extrabold bg-stone-600`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-black">
          <iframe
            src={`https://stackblitz.com/github/${pacerProject.repo}/tree/main/examples/react/useDebouncer?embed=1&theme=dark&preset=node&file=src/main.tsx`}
            title="tanstack/pacer: useDebouncer"
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

        <div className="flex flex-col gap-4 items-center">
          <div className="font-extrabold text-xl lg:text-2xl">
            哇，你已经走了这么远！
          </div>
          <div className="italic font-sm opacity-70">只剩下一件事要做了...</div>
          <div>
            <Link
              to="/$libraryId/$version/docs"
              params={{ libraryId: library.id, version }}
              className={`inline-block py-2 px-4 bg-stone-700 rounded text-white uppercase font-extrabold`}
            >
              开始使用！
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
