import { VscPreview, VscWand } from 'react-icons/vsc'
import { Library } from '.'
import { FaGithub, FaBolt, FaCogs } from 'react-icons/fa'
import { BiBookAlt } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/optimistic'

const textStyles = `text-orange-600 dark:text-orange-500`

export const optimisticProject = {
  id: 'optimistic',
  name: 'TanStack Optimistic',
  cardStyles: `shadow-xl shadow-orange-700/20 dark:shadow-lg dark:shadow-orange-500/20 text-orange-500 dark:text-orange-400 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hans',
  to: '/optimistic',
  tagline: `框架无关的防抖、节流和队列工具`,
  description: `控制应用程序中交互的节奏。限制函数触发的频率，或智能地队列化长时间运行的任务，实现并发控制。`,
  ogImage:
    'https://github.com/tanstack/optimistic/raw/main/media/repo-header.png',
  badge: 'soon',
  bgStyle: `bg-orange-700`,
  textStyle: `text-orange-500`,
  repo,
  latestBranch: 'main',
  latestVersion: 'v0',
  availableVersions: ['v0'],
  colorFrom: `from-orange-500`,
  colorTo: `to-orange-700`,
  textColor: `text-orange-700`,
  frameworks: ['react', 'solid'],
  scarfId: '302d0fef-cb3f-43c6-b45c-f055b9745edb',
  defaultDocs: 'overview',
  menu: [
    {
      icon: <VscPreview />,
      label: '示例',
      to: '/optimistic/latest/docs/framework/react/examples/simple',
    },
    {
      icon: <BiBookAlt />,
      label: '文档',
      to: '/optimistic/latest/docs',
    },
    {
      icon: <FaGithub />,
      label: 'Github',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '框架无关和类型安全',
      icon: <VscWand className={twMerge(textStyles)} />,
      description: (
        <div>
          TanStack Optimistic 提供直观灵活的 API，适用于任何 JavaScript 框架。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            每个工具都完全类型安全，带有响应式框架适配器
          </span>{' '}
          ，可以无缝连接到您选择的状态管理方案。从多层次的抽象中选择，自信地控制应用程序中的时序。
        </div>
      ),
    },
    {
      title: '灵活的速率限制控制',
      icon: <FaBolt className={twMerge(textStyles)} />,
      description: (
        <div>
          通过强大的工具控制应用程序的时序，实现{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            速率限制、节流和防抖
          </span>
          。利用内置的清理和取消功能，帮助您精确管理执行时序，同时防止内存泄漏。灵活的配置选项让您能够根据需求微调行为。
        </div>
      ),
    },
    {
      title: '异步/同步队列管理',
      icon: <FaCogs className={twMerge(textStyles)} />,
      description: (
        <div>
          通过智能队列和并发控制处理复杂的异步工作流。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            使用 FIFO/LIFO 排序、优先级队列和并行执行管理长时间运行的任务
          </span>
          。内置的暂停、恢复和取消功能让您完全控制队列的生命周期。非常适合管理
          API 调用、动画和其他顺序操作。
        </div>
      ),
    },
  ],
} satisfies Library
