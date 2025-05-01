import * as React from 'react'
import { CgSpinner } from 'react-icons/cg'
import { Await, Link } from '@tanstack/react-router'
import { rangerProject } from '~/libraries/ranger'
import { Carbon } from '~/components/Carbon'
import { Footer } from '~/components/Footer'
import SponsorPack from '~/components/SponsorPack'
import { createFileRoute } from '@tanstack/react-router'
import { getRouteApi } from '@tanstack/react-router'
import { Framework, getBranch, getLibrary } from '~/libraries'
import { seo } from '~/utils/seo'
import { twMerge } from 'tailwind-merge'
import { LibraryFeatureHighlights } from '~/components/LibraryFeatureHighlights'

export const Route = createFileRoute('/_libraries/ranger/$version/')({
  component: VersionIndex,
  head: () => ({
    meta: seo({
      title: rangerProject.name,
      description: rangerProject.description,
    }),
  }),
})

const librariesRouteApi = getRouteApi('/_libraries')
const library = getLibrary('ranger')

export default function VersionIndex() {
  const { sponsorsPromise } = librariesRouteApi.useLoaderData()
  const { version } = Route.useParams()
  const branch = getBranch(rangerProject, version)
  const [framework] = React.useState<Framework>('react')
  const [isDark, setIsDark] = React.useState(true)

  React.useEffect(() => {
    setIsDark(window.matchMedia?.(`(prefers-color-scheme: dark)`).matches)
  }, [])

  const gradientText = `pr-1 inline-block leading-snug text-transparent bg-clip-text bg-gradient-to-r ${rangerProject.colorFrom} ${rangerProject.colorTo}`

  return (
    <>
      <div className="flex flex-col gap-20 md:gap-32 max-w-full pt-32">
        <div className="flex flex-col items-center gap-8 text-center px-4">
          <h1 className="font-black flex gap-3 items-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase [letter-spacing:-.05em]">
            <span>TanStack</span>
            <span className={twMerge(gradientText)}>Ranger</span>
          </h1>
          <h2
            className="font-bold text-2xl max-w-md
            md:text-3xl
            lg:text-5xl lg:max-w-2xl"
          >
            <span className="underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2">
              无头
            </span>{' '}
            现代化的无头范围选择器 UI 库
          </h2>
          <p
            className="text opacity-90 max-w-sm
            lg:text-xl lg:max-w-2xl"
          >
            用于在 React 中构建范围和多范围滑块的完全类型安全的钩子。
          </p>
          <Link
            to="./docs/overview"
            className={`py-2 px-4 bg-pink-500 rounded text-white uppercase font-extrabold`}
          >
            开始使用
          </Link>
        </div>
        <LibraryFeatureHighlights
          featureHighlights={library.featureHighlights}
        />

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
          </div>
        </div>

        <div className="bg-white dark:bg-black">
          <iframe
            key={framework}
            src={`https://stackblitz.com/github/${
              rangerProject.repo
            }/tree/${branch}/examples/${framework}/basic?embed=1&theme=${
              isDark ? 'dark' : 'light'
            }`}
            title="tannerlinsley/react-ranger: basic"
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
              to="./docs/overview"
              className={`inline-block py-2 px-4 bg-pink-500 rounded text-white uppercase font-extrabold`}
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
