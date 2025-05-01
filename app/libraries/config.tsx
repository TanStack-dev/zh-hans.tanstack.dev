import { FaGithub, FaBolt, FaCogs } from 'react-icons/fa'
import { Library } from '.'
import { BiBookAlt } from 'react-icons/bi'
import { VscWand } from 'react-icons/vsc'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/config'

const textStyles = 'text-gray-700 dark:text-gray-500'

export const configProject = {
  id: 'config',
  name: 'TanStack Config',
  cardStyles: `shadow-xl shadow-slate-700/20 dark:shadow-lg dark:shadow-slate-500/30 text-slate-500 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hans',
  to: '/config',
  tagline: `用于发布和维护高质量 JavaScript 包的配置和工具`,
  description: `我们所有项目使用的构建和发布工具。如果你敢用的话！`,
  ogImage: 'https://github.com/tanstack/config/raw/main/media/repo-header.png',
  badge: undefined,
  bgStyle: 'bg-slate-500',
  textStyle: 'text-slate-500',
  repo,
  latestBranch: 'main',
  latestVersion: 'v0',
  availableVersions: ['v0'],
  colorFrom: 'from-gray-500',
  colorTo: 'to-gray-700',
  textColor: 'text-gray-700',
  frameworks: [],
  menu: [
    {
      icon: <BiBookAlt />,
      label: '文档',
      to: '/config/latest/docs',
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
      icon: <VscWand className="text-gray-400" />,
      description: (
        <div>
          TanStack Config
          提供了一个无缝且直观的配置管理系统，简化了构建和发布高质量 JavaScript
          包的过程。TanStack Config{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            简化了配置过程，让开发者能够专注于编写代码
          </span>{' '}
          ，而不必为复杂的设置程序烦恼。
        </div>
      ),
    },
    {
      title: 'Vite 驱动的构建',
      icon: <FaBolt className="text-gray-500" />,
      description: (
        <div>
          TanStack Config 的构建配置利用了 Vite
          生态系统。轻松定制和扩展您的构建工作流程，使其满足项目的独特需求。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            无论您需要高级优化、预处理器，还是其他专业工具，
          </span>{' '}
          TanStack Config 都为打造满足您特定需求的构建管道提供了强大的基础。
        </div>
      ),
    },
    {
      title: '轻松发布',
      icon: <FaCogs className="text-gray-700" />,
      description: (
        <div>
          告别代码发布的复杂性。该包提供了设计用于自动化项目发布的工具。开发者可以轻松发布更新、管理版本和在
          npm 和 GitHub 上发布。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            TanStack Config 负责包发布的繁琐方面，
          </span>{' '}
          使开发者能够高效地与社区分享他们的工作。
        </div>
      ),
    },
  ],
} satisfies Library
