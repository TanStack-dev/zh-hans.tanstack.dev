import { handleRedirects } from '~/utils/handleRedirects.server'
import { Library } from '.'
import { VscPreview } from 'react-icons/vsc'
import { FaGithub, FaBolt, FaCogs } from 'react-icons/fa'
import { BiBookAlt } from 'react-icons/bi'
import { IoIosBody } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/table'

const textStyles = 'text-blue-500 dark:text-blue-400'

export const tableProject = {
  id: 'table',
  name: 'TanStack Table',
  cardStyles: `shadow-xl shadow-blue-700/20 dark:shadow-lg dark:shadow-blue-500/30 text-blue-500 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hans',
  to: '/table',
  tagline: `用于构建强大表格和数据网格的无头 UI`,
  description: `增强您的表格功能或从头开始构建数据网格，支持 TS/JS、React、Vue、Solid、Svelte、Qwik、Angular 和 Lit，同时保持对标记和样式的 100% 控制。`,
  ogImage: 'https://github.com/tanstack/table/raw/main/media/repo-header.png',
  badge: undefined,
  bgStyle: 'bg-blue-500',
  textStyle: 'text-blue-500',
  repo,
  latestBranch: 'main',
  latestVersion: 'v8',
  availableVersions: ['v8'],
  colorFrom: 'from-cyan-500',
  colorTo: 'to-blue-600',
  textColor: 'text-blue-600',
  frameworks: [
    'angular',
    'lit',
    'qwik',
    'react',
    'solid',
    'svelte',
    'vue',
    'vanilla',
  ],
  scarfId: 'dc8b39e1-3fe9-4f3a-8e56-d4e2cf420a9e',
  defaultDocs: 'introduction',
  handleRedirects: (href) => {
    handleRedirects(
      reactTableV7List,
      href,
      '/table/v7',
      '/table/v8',
      'from=reactTableV7'
    )
  },
  menu: [
    {
      icon: <VscPreview className="text-lg" />,
      label: '示例',
      to: '/table/latest/docs/framework/react/examples/basic',
    },
    {
      icon: <BiBookAlt />,
      label: '文档',
      to: '/table/latest/docs/introduction',
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
          <IoIosBody className={twMerge(textStyles)} />
        </div>
      ),
      description: (
        <div>
          如果您刚刚聘请的那位超级时髦的设计师无法在表格上施展他们的 UI
          魔法，那强大的表格有什么用呢？{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            TanStack Table 设计上就是无头的
          </span>
          ，这意味着从最小的 HTML 标签、组件、类到样式，您都能获得 100%
          的控制权。追求像素级完美？尽管去做！
        </div>
      ),
    },
    {
      title: '小巧包装，强大性能',
      icon: <FaBolt className={twMerge(textStyles)} />,
      description: (
        <div>
          不要被小巧的包体积所迷惑。TanStack Table
          是一匹工作马。它的构建目的是通过非常小的 API
          表面来物化、过滤、排序、分组、聚合、分页和显示海量数据集。将您的新表格或现有表格连接起来，{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            看着您的用户立即变得更加高效
          </span>
          。
        </div>
      ),
    },
    {
      title: '可扩展性',
      icon: <FaCogs className={twMerge(textStyles)} />,
      description: (
        <div>
          TanStack Table
          提供了优秀的默认设置，让您能尽快上手，但没有什么能阻止您{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            按照自己的喜好自定义和覆盖几乎所有内容
          </span>
          。有足够的勇气构建自己的 Sheets/Excel/AirTable 克隆版？尽管来吧 😉
        </div>
      ),
    },
  ],
} satisfies Library

// prettier-ignore
export const reactTableV7List = [
    {from: 'docs/api/overview',to: 'docs/overview',},
    {from: 'docs/api/useColumnOrder',to: 'docs/api/features/column-ordering',},
    {from: 'docs/api/useExpanded',to: 'docs/api/features/expanding',},
    {from: 'docs/api/useFilters',to: 'docs/api/features/filters',},
    {from: 'docs/api/useGlobalFilter',to: 'docs/api/features/filters',},
    {from: 'docs/api/useGroupBy',to: 'docs/api/features/grouping',},
    {from: 'docs/api/usePagination',to: 'docs/api/features/pagination',},
    {from: 'docs/api/useResizeColumns',to: 'docs/api/features/column-sizing',},
    {from: 'docs/api/useRowSelect',to: 'docs/api/features/row-selection',},
    {from: 'docs/api/useSortBy',to: 'docs/api/features/sorting',},
    {from: 'docs/api/useTable',to: 'docs/guide/tables',},
    {from: 'docs/examples/basic',to: 'docs/framework/react/examples/basic',},
    {from: 'docs/examples/filtering',to: 'docs/framework/react/examples/filters',},
    {from: 'docs/examples/footers',to: 'docs/framework/react/examples/basic',},
    {from: 'docs/examples/grouping',to: 'docs/framework/react/examples/grouping',},
    {from: 'docs/examples/pagination-controlled',to: 'docs/framework/react/examples/pagination-controlled',},
    {from: 'docs/examples/pagination',to: 'docs/framework/react/examples/pagination',},
    {from: 'docs/examples/sorting',to: 'docs/framework/react/examples/sorting',},
    {from: 'docs/examples/row-selection',to: 'docs/framework/react/examples/row-selection',},
    {from: 'docs/examples/row-selection-with-pagination',to: 'docs/framework/react/examples/row-selection',},
    {from: 'docs/examples/expanding',to: 'docs/framework/react/examples/expanding',},
    {from: 'docs/examples/editable-data',to: 'docs/framework/react/examples/editable-data',},
    {from: 'docs/examples/column-ordering',to: 'docs/framework/react/examples/column-ordering',},
    {from: 'docs/examples/column-hiding',to: 'docs/framework/react/examples/column-visibility',},
    {from: 'docs/examples/column-resizing',to: 'docs/framework/react/examples/column-sizing',},
    {from: 'docs/installation',to: 'docs/installation',},
    {from: 'docs/overview',to: 'docs/introduction',},
    {from: 'docs/quick-start',to: 'docs/overview',},
]
