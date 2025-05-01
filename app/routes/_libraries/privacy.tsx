import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '~/components/Footer'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/_libraries/privacy')({
  component: RouteComp,
  head: () => ({
    meta: seo({
      title: '隐私政策',
      description: '隐私政策',
    }),
  }),
})

export default function RouteComp() {
  return (
    <div className="flex flex-col max-w-full min-h-screen gap-12 p-4 md:p-8 pb-0">
      <div className="flex-1 space-y-12 w-full max-w-3xl mx-auto">
        <header className="">
          <h1 className="text-4xl font-bold">隐私政策</h1>
          <p className="">生效日期：2025年1月18日</p>
        </header>

        <section className="">
          <p className="text-lg">
            在 <strong>TanStack.com</strong>
            （以下简称"本网站"），您的隐私对我们很重要。本隐私政策解释了我们如何在您访问或使用我们的网站、产品和服务时收集、使用和保护您的信息。通过使用本网站，您同意本隐私政策中描述的做法。如果您不同意，请不要使用本网站。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">1. 我们收集的信息</h2>
          <p>
            我们收集信息以提供和改进我们的服务。我们可能收集的信息类型包括：
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>个人信息：</strong>
              包括您的姓名、电子邮件地址、电话号码或您在注册账户或与本网站交互时提供的其他信息。
            </li>
            <li>
              <strong>使用数据：</strong>
              有关您如何访问和使用本网站的信息，包括您的IP地址、浏览器类型、访问的页面以及其他诊断数据。
            </li>
            <li>
              <strong>Cookie和跟踪技术：</strong>
              请参阅下面的"Cookie和跟踪"部分了解更多详情。
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. 我们如何使用您的信息</h2>
          <p>我们将收集的信息用于以下目的：</p>
          <ul className="list-disc pl-8">
            <li>提供、运营和维护本网站和我们的服务。</li>
            <li>改善用户体验并优化性能。</li>
            <li>与您沟通，包括回应询问和发送更新。</li>
            <li>遵守法律义务或执行我们的服务条款。</li>
            <li>防止欺诈、有害或未经授权的活动。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. Cookie和跟踪</h2>
          <p>
            本网站使用Cookie和类似的跟踪技术来分析趋势、跟踪用户行为并收集人口统计信息。Cookie是存储在您设备上的小文件。
          </p>
          <p>
            <strong>您可以控制Cookie：</strong>
          </p>
          <ul className="list-disc pl-8">
            <li>大多数浏览器允许您通过设置阻止或删除Cookie。</li>
            <li>禁用Cookie可能会影响本网站的功能。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. 我们如何共享您的信息</h2>
          <p>
            我们不会出售或出租您的个人信息。但是，我们可能在以下情况下共享信息：
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>服务提供商：</strong>
              与帮助我们运营本网站的第三方，如托管或分析提供商。
            </li>
            <li>
              <strong>法律合规：</strong>如果法律要求或响应法律请求。
            </li>
            <li>
              <strong>业务转让：</strong>与合并、收购或资产出售有关。
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. 数据安全</h2>
          <p>
            我们采取合理措施保护您的信息，防止未经授权的访问、使用或泄露。然而，没有任何安全措施是完全无懈可击的，我们不能保证您的数据的绝对安全。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. 您的权利</h2>
          <p>根据您的所在位置，您可能对您的个人信息拥有以下权利：</p>
          <ul className="list-disc pl-8">
            <li>
              <strong>访问：</strong>要求访问我们持有的关于您的个人信息。
            </li>
            <li>
              <strong>更正：</strong>要求更正不准确或不完整的数据。
            </li>
            <li>
              <strong>删除：</strong>要求删除您的个人信息。
            </li>
            <li>
              <strong>数据可携性：</strong>
              以结构化、机器可读的格式接收您数据的副本。
            </li>
          </ul>
          <p>
            要行使这些权利，请联系我们：{' '}
            <a
              href="mailto:support@tanstack.com"
              className="text-blue-600 underline"
            >
              support@tanstack.com
            </a>
            。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. 第三方服务</h2>
          <p>
            本网站可能包含第三方服务或网站的链接。我们不对这些第三方的隐私实践负责。请查阅他们的隐私政策以获取更多信息。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. 儿童隐私</h2>
          <p>
            本网站不适用于13岁以下的儿童，我们不会故意从儿童那里收集个人信息。如果我们了解到我们从儿童那里收集了信息，我们将立即删除。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. 本隐私政策的变更</h2>
          <p>
            我们可能会不时更新本隐私政策。任何变更都将在本页面上发布，并附有更新后的"生效日期"。在变更发布后继续使用本网站，即表示接受修订后的隐私政策。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">10. 联系我们</h2>
          <p>如果您对本隐私政策或我们如何处理您的信息有疑问，请联系我们：</p>
          <address>
            <p>
              <strong>TanStack</strong>
            </p>
            <p>
              电子邮件：{' '}
              <a
                href="mailto:support@tanstack.com"
                className="text-blue-600 underline"
              >
                support@tanstack.com
              </a>
            </p>
          </address>
        </section>
      </div>
      <Footer />
    </div>
  )
}
