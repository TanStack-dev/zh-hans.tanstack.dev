import * as React from 'react'

import { CgSpinner } from 'react-icons/cg'
import { FaCheckCircle } from 'react-icons/fa'
import {
  Await,
  Link,
  createFileRoute,
  getRouteApi,
} from '@tanstack/react-router'
import { Carbon } from '~/components/Carbon'
import { Footer } from '~/components/Footer'
import { TbHeartHandshake } from 'react-icons/tb'
import SponsorPack from '~/components/SponsorPack'
import { formProject } from '~/libraries/form'
import { Framework, getBranch, getLibrary } from '~/libraries'
import { seo } from '~/utils/seo'
import { twMerge } from 'tailwind-merge'
import { LibraryFeatureHighlights } from '~/components/LibraryFeatureHighlights'
import LandingPageGad from '~/components/LandingPageGad'

export const Route = createFileRoute('/_libraries/form/$version/')({
  component: FormVersionIndex,
  head: () => ({
    meta: seo({
      title: formProject.name,
      description: formProject.description,
    }),
  }),
})

const librariesRouteApi = getRouteApi('/_libraries')

const library = getLibrary('form')

export default function FormVersionIndex() {
  const { sponsorsPromise } = librariesRouteApi.useLoaderData()
  const { version } = Route.useParams()
  const branch = getBranch(formProject, version)
  const [framework, setFramework] = React.useState<Framework>('react')
  const [isDark, setIsDark] = React.useState(true)

  React.useEffect(() => {
    setIsDark(window.matchMedia?.(`(prefers-color-scheme: dark)`).matches)
  }, [])

  const gradientText = `pr-1 inline-block text-transparent bg-clip-text bg-gradient-to-r ${formProject.colorFrom} ${formProject.colorTo}`

  return (
    <>
      <div className="flex flex-col gap-20 md:gap-32 max-w-full pt-32">
        <div className="flex flex-col items-center gap-8 text-center px-4">
          <h1 className="font-black flex gap-3 items-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase [letter-spacing:-.05em]">
            <span>TanStack</span>
            <span className={twMerge(gradientText)}>Form</span>
          </h1>
          <h2
            className="font-bold text-2xl max-w-[600px]
            md:text-3xl
            lg:text-5xl lg:max-w-[800px]"
          >
            <span className="underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2">
              无头、高性能且类型安全的
            </span>{' '}
            表单状态管理，适用于 TS/JS、React、Vue、Angular、Solid、Lit 和
            Svelte
          </h2>
          <p
            className="text opacity-90 max-w-[500px]
            lg:text-xl lg:max-w-[800px]"
          >
            使用 TanStack Form 回归简单、可组合性和类型安全，不再为表单而烦恼。
            拥有
            <strong>
              极小的体积、零依赖、与框架无关的核心以及全面的类型安全性
            </strong>
            ， TanStack Form 是您构建表单所需的完美组合，简单强大且安心使用。
          </p>
          <Link
            to="/$libraryId/$version/docs"
            params={{ libraryId: library.id, version }}
            className={`py-2 px-4 bg-yellow-400 text-black rounded uppercase font-extrabold`}
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
              无依赖。所有功能。
            </h3>
            <p className="mt-4 text-xl max-w-3xl mx-auto leading-7 opacity-60">
              TanStack Form 没有任何依赖，但提供了极其丰富的功能集。
              从周末爱好项目到企业级应用，TanStack Form
              拥有帮助您以创意速度成功的工具。
            </p>
          </div>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4  mx-auto">
            {[
              '与框架无关的设计',
              '一流的 TypeScript 支持',
              '无头',
              '极小 / 零依赖',
              '细粒度的响应式组件/钩子',
              '可扩展性和插件架构',
              '模块化架构',
              '表单/字段验证',
              '异步验证',
              '内置异步验证防抖',
              '可配置的验证事件',
              '深度嵌套的对象/数组字段',
            ].map((d, i) => {
              return (
                <span key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 " /> {d}
                </span>
              )
            })}
          </div>
        </div>

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
              Form <TbHeartHandshake /> You?
            </span>
            <div className="flex flex-col p-4 gap-4">
              <div>
                我们正在寻找 TanStack Form 开源合作伙伴，超越赞助的职责。
                您是否像我们一样对 TanStack Form
                投入？让我们一起突破表单的界限吧！
              </div>
              <a
                href="mailto:partners@tanstack.com?subject=TanStack Form Partnership"
                className="text-blue-500 uppercase font-black text-sm"
              >
                聊聊吧
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

        <LandingPageGad />

        <div className="flex flex-col gap-4">
          <div className="px-4 sm:px-6 lg:px-8  mx-auto container max-w-3xl sm:text-center">
            <h3 className="text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-2">
              更少的代码，更少的边缘情况
            </h3>
            <p className="my-4 text-xl leading-7  text-gray-600">
              TanStack Form 并不鼓励草率的抽象和专注于钩子的
              API，而是在关键处拥抱组合， 通过组件提供无头
              API（当然，如果您需要，也可以使用钩子）。 TanStack Form
              旨在直接用于您的组件和 UI 中。这意味着更少的代码、
              更少的边缘情况和对 UI 的更深入控制。试试下面的示例！
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {(
                [
                  { label: 'React', value: 'react' },
                  { label: 'Vue', value: 'vue' },
                  { label: 'Angular', value: 'angular' },
                  { label: 'Solid', value: 'solid' },
                  { label: 'Lit', value: 'lit' },
                  { label: 'Svelte', value: 'svelte' },
                ] as const
              ).map((item) => (
                <button
                  key={item.value}
                  className={`inline-block py-2 px-4 rounded text-black uppercase font-extrabold ${
                    item.value === framework
                      ? 'bg-yellow-500'
                      : 'bg-gray-300 dark:bg-gray-700 hover:bg-yellow-300'
                  }`}
                  onClick={() => setFramework(item.value)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {['solid', 'vue', 'svelte', 'angular', 'lit'].includes(framework) ? (
          <div className="px-2">
            <div className="p-8 text-center text-lg w-full max-w-screen-lg mx-auto bg-black text-white rounded-xl">
              正在查找 <strong>@tanstack/{framework}-form</strong>{' '}
              示例？我们需要您的帮助来构建{' '}
              <strong>@tanstack/{framework}-form</strong> 适配器！加入{' '}
              <a
                href="https://tlinz.com/discord"
                className="text-teal-500 font-bold"
              >
                TanStack Discord 服务器
              </a>{' '}
              让我们一起工作吧！
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-black">
            <iframe
              key={framework}
              src={`https://stackblitz.com/github/${
                formProject.repo
              }/tree/${branch}/examples/${framework}/simple?embed=1&theme=${
                isDark ? 'dark' : 'light'
              }`}
              title={`tanstack//${framework}-form: simple`}
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              className="shadow-2xl max-h-[800px]"
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
              to="/$libraryId/$version/docs"
              params={{ libraryId: library.id, version }}
              className={`inline-block py-2 px-4 bg-yellow-500 rounded text-black uppercase font-extrabold`}
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
