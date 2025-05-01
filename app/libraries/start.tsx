import { FaGithub, FaYinYang } from 'react-icons/fa'
import { Library } from '.'
import { VscPreview } from 'react-icons/vsc'
import { BiBookAlt } from 'react-icons/bi'
import { PiRocketLaunchDuotone, PiTreeStructureBold } from 'react-icons/pi'
import { TbServerBolt } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/router'

const textStyles = 'text-cyan-600 dark:text-cyan-500'

export const startProject = {
  id: 'start',
  name: 'TanStack Start',
  cardStyles: `shadow-xl shadow-cyan-500/20 dark:shadow-lg dark:shadow-cyan-500/30 text-cyan-500 dark:text-white-400 border-2 border-transparent hover:border-current`,
  to: '/start',
  tagline: `由 TanStack Router 驱动的全栈 React 框架`,
  description: `完整文档 SSR，流式传输，服务器函数，打包等功能，由 TanStack Router 和 Vite 驱动 - 随时可部署到您喜爱的托管服务商。`,
  bgStyle: 'bg-cyan-500',
  textStyle: 'text-cyan-500',
  badge: 'beta',
  repo,
  latestBranch: 'main',
  latestVersion: 'v0',
  availableVersions: ['v0'],
  docsRoot: 'docs/start/zh-hans',
  colorFrom: 'from-teal-500',
  colorTo: 'to-cyan-500',
  textColor: 'text-cyan-600',
  embedEditor: 'codesandbox',
  frameworks: ['react', 'solid'],
  scarfId: 'b6e2134f-e805-401d-95c3-2a7765d49a3d',
  showNetlifyUrl: true,
  menu: [
    {
      icon: <VscPreview />,
      label: '示例',
      to: '/start/latest/docs/framework/react/examples/start-basic',
    },
    {
      icon: <BiBookAlt />,
      label: '文档',
      to: '/start/latest/docs/framework/react/overview',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '企业级路由',
      icon: (
        <PiTreeStructureBold
          className={twMerge('motion-safe:animate-pulse', textStyles)}
          style={{
            animationDuration: '5s',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ),
      description: (
        <div>
          构建于 TanStack Router 之上，Start 预装了{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            完全类型安全且功能强大无比的路由系统
          </span>{' '}
          ，专为轻松处理最复杂的全栈路由需求而设计。Start 在 Router
          完全推断的类型安全基础上，还提供了类型安全的全栈
          API，让您始终保持高效开发。
        </div>
      ),
    },
    {
      title: 'SSR、流式传输和服务器 RPC',
      icon: (
        <TbServerBolt
          className={twMerge('motion-safe:animate-ping', textStyles)}
          style={{
            animationDuration: '2s',
            animationTimingFunction: 'ease-out',
          }}
        />
      ),
      description: (
        <div>
          谁说丰富而交互式的应用不能拥有一切？TanStack Start
          包含了强大的功能，支持{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            完整文档 SSR、流式传输、服务器函数和 RPC
          </span>
          。不再需要在服务器端渲染和顶级客户端交互性之间做选择。按照您的需求掌控服务器。
        </div>
      ),
    },
    {
      title: '客户端优先，100% 服务端能力',
      icon: (
        <FaYinYang
          className={twMerge('motion-safe:animate-spin', textStyles)}
          style={{
            animationDuration: '10s',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ),
      description: (
        <div>
          当其他框架继续在我们多年来作为前端社区培养的客户端应用体验上做出妥协时，TanStack
          Start 保持忠于{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            客户端优先的开发者体验，
          </span>{' '}
          同时提供{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            功能齐全的服务端能力系统
          </span>{' '}
          ，让您无需在用户体验上妥协。
        </div>
      ),
    },
    {
      title: '随处部署',
      icon: (
        <PiRocketLaunchDuotone
          className={twMerge('motion-safe:animate-bounce', textStyles)}
          style={{
            animationDuration: '2.5s',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ),
      description: (
        <div>
          TanStack Start 可以{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            部署到任何 JS 可运行的地方
          </span>
          。无论您是在传统服务器、无服务器平台，还是 CDN 上托管，Start
          都能轻松构建、打包和部署您的应用。
        </div>
      ),
    },
  ],
} satisfies Library
