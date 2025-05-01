import { VscPreview } from 'react-icons/vsc'
import { Library } from '.'
import { FaGithub, FaBolt, FaCogs } from 'react-icons/fa'
import { BiBookAlt } from 'react-icons/bi'
import { IoIosBody } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/virtual'

const textStyles = 'text-violet-700 dark:text-violet-400'

export const virtualProject = {
  id: 'virtual',
  name: 'TanStack Virtual',
  cardStyles: `shadow-xl shadow-purple-700/20 dark:shadow-lg dark:shadow-purple-500/30 text-purple-500 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hans',
  to: '/virtual',
  tagline: `无头 UI 库，用于虚拟化大型元素列表`,
  description: `仅虚拟化可见内容，在 TS/JS、React、Vue、Solid、Svelte、Lit 和 Angular 中以 60FPS 的速度处理大型可滚动 DOM 节点，同时保持对标记和样式的 100% 控制。`,
  ogImage: 'https://github.com/tanstack/query/raw/main/media/header.png',
  badge: undefined,
  bgStyle: 'bg-purple-500',
  textStyle: 'text-purple-500',
  repo,
  latestBranch: 'main',
  latestVersion: 'v3',
  availableVersions: ['v3'],
  colorFrom: 'from-purple-500',
  colorTo: 'to-violet-600',
  textColor: 'text-purple-600',
  frameworks: ['react', 'solid', 'vue', 'svelte', 'lit', 'angular'],
  defaultDocs: 'introduction',
  scarfId: '32372eb1-91e0-48e7-8df1-4808a7be6b94',
  menu: [
    {
      icon: <VscPreview />,
      label: '示例',
      to: '/virtual/latest/docs/framework/react/examples/dynamic',
    },
    {
      icon: <BiBookAlt />,
      label: '文档',
      to: '/virtual/latest/docs/introduction',
    },
    {
      icon: <FaGithub />,
      label: 'Github',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '为零设计而设计',
      icon: (
        <div className="text-center overflow-hidden">
          <IoIosBody className="text-purple-400" />
        </div>
      ),
      description: (
        <div>
          无头虚拟化意味着您始终可以控制您的{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            标记、样式和组件
          </span>
          。设计并实现您能想象到的最美丽的 UI，让我们来处理困难的部分。
        </div>
      ),
    },
    {
      title: '小包装，大能量',
      icon: <FaBolt className="text-purple-500" />,
      description: (
        <div>
          不要被小体积的包大小所迷惑。TanStack Virtual
          充分利用每一个字节来提供强大的性能。毕竟，{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            如今 60FPS 是基本要求
          </span>{' '}
          ，为了实现黄油般顺滑的用户体验，我们拒绝做任何妥协。
        </div>
      ),
    },
    {
      title: '最大的可组合性',
      icon: <FaCogs className="text-purple-600" />,
      description: (
        <div>
          只需一个函数/钩子，您就可以获得{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            垂直、水平和网格样式
          </span>
          布局的无限虚拟化。API 非常小（实际上只有 1
          个函数），但其可组合性却不小。
        </div>
      ),
    },
  ],
} satisfies Library
