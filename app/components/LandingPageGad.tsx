import { Link } from '@tanstack/react-router'
import { GadFooter } from './GoogleScripts'

export default function LandingPageGad() {
  return (
    <div className={`lg:max-[400px] px-4 mx-auto`}>
      <div className="flex flex-col gap-4 items-center">
        <div className="shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-800 dark:text-white mx-auto">
          <GadFooter />
        </div>
        <div
          className="text-xs bg-gray-500 bg-opacity-10 py-2 px-4 rounded text-gray-500
                dark:bg-opacity-20 self-center text-center w-[500px] max-w-full space-y-2"
        >
          <div>
            <span className="font-medium italic">
              开源项目上的广告？
            </span>{' '}
            <span className="font-black">这是回到了1999年吗？</span>
          </div>
          <div>
            <span className="font-medium italic">请理解...</span> TanStack 是100%私有运营的，没有付费产品、风险投资或收购计划。我们是一个小团队，致力于开发每天被数百万人使用的软件。您期望我们怎么做呢？
          </div>
          <div>
            <Link to="/ethos" className="text-gray-500 font-bold underline">
              了解我们的理念
            </Link>{' '}
            来了解更多关于我们如何长期坚持（并保持相关性）的计划。
          </div>
        </div>
      </div>
    </div>
  )
}
