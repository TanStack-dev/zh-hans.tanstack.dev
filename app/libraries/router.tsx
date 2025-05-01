import { FaGithub } from 'react-icons/fa'
import { Library } from '.'
import { VscPreview } from 'react-icons/vsc'
import { BiBookAlt } from 'react-icons/bi'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { CgTimelapse } from 'react-icons/cg'
import { TbZoomQuestion } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'
import { redirect } from '@tanstack/react-router'

const repo = 'tanstack-dev/router'

const textStyles = 'text-emerald-500 dark:text-emerald-400'

export const routerProject = {
  id: 'router',
  name: 'TanStack Router',
  cardStyles: twMerge(
    `shadow-xl shadow-emerald-700/20 dark:shadow-lg dark:shadow-emerald-500/30 ${textStyles} border-2 border-transparent hover:border-current`
  ),
  to: '/router',
  tagline: `React 应用的类型安全路由。`,
  description: `为客户端和全栈 React 应用提供强大的路由器。完全类型安全的 API，用于在 URL 中管理状态的一流搜索参数，以及与现有 React 生态系统的无缝集成。`,
  ogImage: 'https://github.com/tanstack/router/raw/main/media/header.png',
  bgStyle: 'bg-emerald-500',
  textStyle: textStyles,
  badge: undefined,
  repo,
  latestBranch: 'main',
  latestVersion: 'v1',
  availableVersions: ['v1'],
  docsRoot: 'docs/router/zh-hans',
  colorFrom: 'from-emerald-500',
  colorTo: 'to-lime-600',
  textColor: textStyles,
  frameworks: ['react', 'solid'],
  scarfId: '3d14fff2-f326-4929-b5e1-6ecf953d24f4',
  defaultDocs: 'framework/react/overview',
  hideCodesandboxUrl: true,
  showVercelUrl: false,
  showNetlifyUrl: true,
  menu: [
    {
      icon: <VscPreview />,
      label: '示例',
      to: '/router/latest/docs/framework/react/examples/kitchen-sink-file-based',
    },
    {
      icon: <BiBookAlt />,
      label: '文档',
      to: '/router/latest/docs/framework/react/overview',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '类型安全且强大，但简单易用',
      icon: (
        <RiLightbulbFlashLine className={twMerge('scale-125', textStyles)} />
      ),
      description: (
        <div>
          TanStack Router
          构建在其他工具流行的现代路由模式基础上，但从头开始重新设计，以实现{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            100% 类型安全，且不影响开发体验
          </span>
          。您<em>可以</em>鱼与熊掌兼得！
        </div>
      ),
    },
    {
      title: '内置数据获取与缓存功能',
      icon: (
        <CgTimelapse
          className={twMerge('motion-safe:animate-spin', textStyles)}
          style={{
            animationDuration: '3s',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ),
      description: (
        <div>
          通过 TanStack Router 的 loader API 提升数据获取并避免瀑布流，获得{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            内置缓存和自动预加载带来的即时导航体验
          </span>
          。需要更加定制化的功能？Router 的 API
          设计可与您喜欢的客户端缓存库协同工作！
        </div>
      ),
    },
    {
      title: '让状态管理工具羡慕的搜索参数 API',
      icon: <TbZoomQuestion className={twMerge('', textStyles)} />,
      description: (
        <div>
          TanStack Router 不会让您直接面对 URLSearchParam
          困境，而是提供了状态管理级别的搜索参数 API。通过{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            架构、验证、完全类型安全和前/后处理
          </span>
          ，您可以在 URL 中管理状态，并轻松将其同步到您选择的状态管理工具。
        </div>
      ),
    },
  ],
  handleRedirects(href) {
    if (href.includes('router/latest/docs/framework/react/start')) {
      throw redirect({
        href: href.replace(
          'router/latest/docs/framework/react/start',
          'start/latest/docs/framework/react'
        ),
      })
    }

    if (href.includes('/router/latest/docs/framework/react/examples/start')) {
      throw redirect({
        href: href.replace(
          'router/latest/docs/framework/react/examples/start',
          'start/latest/docs/framework/react/examples/start'
        ),
      })
    }
  },
} satisfies Library
