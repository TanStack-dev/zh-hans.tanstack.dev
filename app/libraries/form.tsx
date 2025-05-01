import { VscPreview, VscWand } from 'react-icons/vsc'
import { Library } from '.'
import { FaGithub, FaBolt, FaCogs } from 'react-icons/fa'
import { BiBookAlt } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/form'

const textStyles = 'text-yellow-600 dark:text-yellow-300'

export const formProject = {
  id: 'form',
  name: 'TanStack Form',
  cardStyles: `shadow-xl shadow-yellow-700/20 dark:shadow-lg dark:shadow-yellow-500/30 text-yellow-500 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hans',
  to: '/form',
  tagline: `用于构建高性能和类型安全表单的无头 UI`,
  description: `用于 TS/JS、React、Vue、Angular、Solid、Lit 和 Svelte 的无头、高性能且类型安全的表单状态管理。`,
  ogImage: 'https://github.com/tanstack/form/raw/main/media/repo-header.png',
  badge: 'new',
  bgStyle: 'bg-yellow-500',
  textStyle: 'text-yellow-500',
  repo,
  latestBranch: 'main',
  latestVersion: 'v1',
  availableVersions: ['v1'],
  colorFrom: 'from-yellow-500',
  colorTo: 'to-yellow-600',
  textColor: 'text-yellow-600',
  frameworks: ['react', 'vue', 'angular', 'solid', 'lit', 'svelte'],
  scarfId: '72ec4452-5d77-427c-b44a-57515d2d83aa',
  menu: [
    {
      icon: <VscPreview />,
      label: '示例',
      to: '/form/latest/docs/framework/react/examples/simple',
    },
    {
      icon: <BiBookAlt />,
      label: '文档',
      to: '/form/latest/docs',
    },
    {
      icon: <FaGithub />,
      label: 'Github',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '一流的 TypeScript 支持',
      icon: <VscWand className="text-yellow-400" />,
      description: (
        <div>
          TanStack Form 提供一流的 TypeScript
          支持，拥有出色的自动完成功能、优秀的泛型透传和尽可能多的推断类型。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            这减少了运行时错误，提高了代码可维护性，并带来更流畅的开发体验
          </span>{' '}
          ，帮助您自信地构建可扩展的健壮且类型安全的表单解决方案。
        </div>
      ),
    },
    {
      title: '无头设计和框架无关',
      icon: <FaBolt className="text-yellow-500" />,
      description: (
        <div>
          Form
          的无头和框架无关的方法确保了最大的灵活性和与许多前端框架的广泛兼容性，甚至可以完全不用框架。通过提供并鼓励对表单采用无头方法，构建定制的可重用表单组件以适应应用需求{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            只需很少的抽象，并保持代码模块化、简单和可组合
          </span>
          。
        </div>
      ),
    },
    {
      title: '粒度响应式性能',
      icon: <FaCogs className="text-amber-500" />,
      description: (
        <div>
          在性能方面，TanStack Form
          提供惊人的速度和控制，但没有繁琐、样板代码或抽象概念。以粒度响应式 API
          为核心，{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            只有相关组件在表单状态变化时更新
          </span>
          。最终结果？更快的 UI、愉快的用户体验，以及对性能零顾虑。
        </div>
      ),
    },
  ],
} satisfies Library
