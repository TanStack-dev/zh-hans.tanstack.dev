import { VscPreview } from 'react-icons/vsc'
import { Library } from '.'
import { FaGithub } from 'react-icons/fa'
import { BiBookAlt } from 'react-icons/bi'
import { CgTimelapse } from 'react-icons/cg'
import { TbZoomQuestion } from 'react-icons/tb'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/ranger'

const textStyles = 'text-pink-600 dark:text-pink-400'

export const rangerProject = {
  id: 'ranger',
  name: 'TanStack Ranger',
  cardStyles: `shadow-xl shadow-pink-700/20 dark:shadow-lg dark:shadow-pink-500/30 text-pink-500 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hans',
  to: '/ranger',
  tagline: `无头范围和多范围滑块工具。`,
  description: `用于构建范围和多范围滑块的无头、轻量级和可扩展的原语。`,
  ogImage: 'https://github.com/tanstack/ranger/raw/main/media/headerv1.png',
  badge: undefined,
  bgStyle: 'bg-pink-500',
  textStyle: 'text-pink-500',
  repo,
  latestBranch: 'main',
  latestVersion: 'v0',
  availableVersions: ['v0'],
  colorFrom: 'from-pink-400',
  colorTo: 'to-pink-500',
  textColor: 'text-pink-500',
  frameworks: ['react'],
  scarfId: 'dd278e06-bb3f-420c-85c6-6e42d14d8f61',
  menu: [
    {
      icon: <VscPreview />,
      label: '示例',
      to: '/ranger/latest/docs/framework/react/examples/basic',
    },
    {
      icon: <BiBookAlt />,
      label: '文档',
      to: '/ranger/latest/docs/overview',
    },
    {
      icon: <FaGithub />,
      label: 'Github',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '类型安全且强大，但又简单易用',
      icon: (
        <RiLightbulbFlashLine
          className={twMerge('scale-125 animate-pulse', textStyles)}
        />
      ),
      description: (
        <div>
          用于在 React 中构建范围和多范围滑块的钩子{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            100% 类型安全且不影响开发体验
          </span>
          。
        </div>
      ),
    },
    {
      title: '"无头" UI 库',
      icon: (
        <CgTimelapse
          className={twMerge('animate-spin', textStyles)}
          style={{
            animationDuration: '3s',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ),
      description: (
        <div>
          无头且可扩展。Ranger 不渲染或提供任何实际的 UI 元素。它是一个{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            用于构建您自己的自定义设计的 UI 组件的工具
          </span>
          。
        </div>
      ),
    },
    {
      title: '可扩展性',
      icon: <TbZoomQuestion className={twMerge('', textStyles)} />,
      description: (
        <div>
          以最大程度的控制反转为设计理念，Ranger 的构建旨在{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            易于扩展和自定义
          </span>{' '}
          以满足您的需求。
        </div>
      ),
    },
  ],
} satisfies Library
