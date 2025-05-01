import { VscPreview, VscWand } from 'react-icons/vsc'
import { Library } from '.'
import { FaGithub, FaBolt, FaCogs } from 'react-icons/fa'
import { BiBookAlt } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/store'

const textStyles = 'text-twine-600 dark:text-twine-500'

export const storeProject = {
  id: 'store',
  name: 'TanStack Store',
  cardStyles: `shadow-xl shadow-twine-700/20 dark:shadow-lg dark:shadow-twine-500/20 text-twine-500 dark:text-twine-400 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hans',
  to: '/store',
  tagline: `框架无关的数据存储，带有响应式框架适配器`,
  description: `支持 TanStack 库核心和框架适配器的不可变响应式数据存储。`,
  ogImage: 'https://github.com/tanstack/store/raw/main/media/repo-header.png',
  badge: 'alpha',
  bgStyle: 'bg-twine-700',
  textStyle: 'text-twine-500',
  repo,
  latestBranch: 'main',
  latestVersion: 'v0',
  availableVersions: ['v0'],
  colorFrom: 'from-twine-500',
  colorTo: 'to-twine-700',
  textColor: 'text-twine-700',
  frameworks: ['react', 'solid', 'svelte', 'vue', 'angular'],
  scarfId: '302d0fef-cb3f-43c6-b45c-f055b9745edb',
  defaultDocs: 'overview',
  menu: [
    {
      icon: <VscPreview />,
      label: '示例',
      to: '/store/latest/docs/framework/react/examples/simple',
    },
    {
      icon: <BiBookAlt />,
      label: '文档',
      to: '/store/latest/docs',
    },
    {
      icon: <FaGithub />,
      label: 'Github',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '直观的配置',
      icon: <VscWand className={twMerge(textStyles)} />,
      description: (
        <div>
          TanStack Store
          提供了一个无缝且直观的配置管理系统，简化了构建和发布高质量 JavaScript
          包的过程。TanStack Store{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            简化了配置过程，让开发者能够专注于编写代码
          </span>{' '}
          ，而不必为复杂的设置程序烦恼。
        </div>
      ),
    },
    {
      title: 'Vite 驱动的构建',
      icon: <FaBolt className={twMerge(textStyles)} />,
      description: (
        <div>
          TanStack Store 的构建配置利用了 Vite
          生态系统。轻松定制和扩展您的构建工作流程，使其满足项目的独特需求。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            无论您需要高级优化、预处理器，还是其他专业工具，
          </span>{' '}
          TanStack Store 都为打造满足您特定需求的构建管道提供了强大的基础。
        </div>
      ),
    },
    {
      title: '轻松发布',
      icon: <FaCogs className={twMerge(textStyles)} />,
      description: (
        <div>
          告别代码发布的复杂性。该包提供了设计用于自动化项目发布的工具。开发者可以轻松发布更新、管理版本和在
          npm 和 GitHub 上发布。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            TanStack Store 负责包发布的繁琐方面，
          </span>{' '}
          使开发者能够高效地与社区分享他们的工作。
        </div>
      ),
    },
  ],
} satisfies Library
