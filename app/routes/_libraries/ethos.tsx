import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '~/components/Footer'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/_libraries/ethos')({
  component: RouteComp,
  head: () => ({
    meta: seo({
      title: 'TanStack 理念',
      description: '我们对开放网络构建的理念和承诺。',
    }),
  }),
})

export default function RouteComp() {
  return (
    <div className="flex flex-col max-w-full min-h-screen gap-12 p-4 md:p-8 pb-0">
      <div className="flex-1 space-y-12 w-full max-w-3xl mx-auto">
        <header className="">
          <h1 className="text-4xl font-bold">TanStack 理念</h1>
        </header>

        <section className="">
          <p className="text-lg">
            在
            TanStack，我们的理念很简单：我们为开放网络、开放标准而构建，让您拥有自由组合、部署和创新的能力。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">独立所有，设计无偏</h2>
          <p>
            TanStack LLC <strong>100% 由创始人私人持有</strong>
            ——没有外部投资者，没有控制权益，没有隐藏议程。我们的资金来源于与共享我们核心价值观的公司的媒体和营销合作关系：
            <strong>
              开放网络、开放标准，以及自由组合和在任何地方部署任何内容的自由。
            </strong>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">可持续的未来</h2>
          <p>
            TanStack
            是一个精简、专注的团队：一位全职创始人，几位知名且获得良好赞助的维护者，以及一个共享我们核心价值观的蓬勃发展的用户和贡献者社区。
          </p>
          <p className="">
            与不惜一切代价追求增长的风险投资支持的项目不同，
            <strong>
              我们不需要"扩展"、"增长"或"扩大"成为风投资助的、寻求收购的或免费增值骗局的产品。
            </strong>
            我们并不痴迷于达到下一个 10 倍倍数以满足某个母公司追求 IPO 的野心。
          </p>
          <p className="">这意味着：</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>不会为了追求利润而牺牲开发者体验。</li>
            <li>没有企业影响来左右我们的技术方向。</li>
            <li>
              专注于
              <strong>构建让网络对用户和开发者更好的工具</strong>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">技术中立，默认原则</h2>
          <p>
            我们相信
            <strong>框架无关、平台无关的未来证明工具</strong>
            ，这些工具以开发者为先：
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>
              TanStack
              库建立在框架和平台无关的基础上。当我们的库构建在其他工具之上时，如
              TanStack Start 构建在 Vite
              之上，我们确保这些工具支持相同的开放性和灵活性价值观。
            </li>
            <li>
              <strong>TanStack 库</strong>
              已经支持或将支持所有主流（甚至一些小众的！）框架和部署环境——无一例外。
            </li>
            <li>
              <strong>
                如果说有任何技术是我们一致认同的，那就是 TypeScript
              </strong>
              ——或更广泛地说，是"类型化
              JavaScript"，无论它随着时间的推移如何演变。
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">开放的赞助关系</h2>
          <p>我们合作的每一个赞助商不仅理解还积极维护我们的价值观：</p>
          <ul className="list-disc pl-8  space-y-2">
            <li>
              没有赞助商可以以偏向他们平台的方式来左右 TanStack 的核心技术。
            </li>
            <li>
              我们的库旨在<strong>首先服务于开发者</strong>，而不是企业利益。
            </li>
            <li>
              如果一家公司支持我们，那是因为他们相信我们正在构建的东西——而不是因为他们期望得到优先待遇。
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <p className="text-lg font-medium">
            归根结底，
            <strong>
              TanStack 不仅仅是一套库——它是<em>按照您的条件</em>
              构建网络的承诺，绝不妥协。
            </strong>
            我们所需要的只是足够改进我们相信能真正让网络变得更好的工具。
          </p>
        </section>

        <section className="space-y-4">
          <div>
            <strong>- Tanner Linsley</strong>
            <br />
            创始人，TanStack LLC
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
