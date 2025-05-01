import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '~/components/Footer'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/_libraries/terms')({
  component: RouteComp,
  head: () => ({
    meta: seo({
      title: '服务条款',
      description: '服务条款',
    }),
  }),
})

export default function RouteComp() {
  return (
    <div className="flex flex-col max-w-full min-h-screen gap-12 p-4 md:p-8 pb-0">
      <div className="flex-1 space-y-12 w-full max-w-3xl mx-auto">
        <header className="">
          <h1 className="text-4xl font-bold">服务条款</h1>
          <p className="">生效日期：2025年1月18日</p>
        </header>

        <section className="">
          <p className="text-lg">
            欢迎访问 <strong>TanStack.com</strong>
            （以下简称"本网站"）。这些服务条款（以下简称"条款"）规定了您对我们网站、产品、服务以及通过本网站提供的任何内容的使用。通过访问或使用
            TanStack.com，您同意这些条款。如果您不同意，则不得使用本网站。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">1. 接受条款</h2>
          <p>
            通过访问、浏览或使用
            TanStack.com，您确认已阅读、理解并同意受这些条款和我们的隐私政策约束。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. 条款变更</h2>
          <p>
            我们可能会随时修改这些条款，恕不另行通知。变更将在发布到网站后立即生效。在变更发布后继续使用
            TanStack.com 构成接受修订后的条款。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. 资格</h2>
          <p>任何人都可以使用本网站。通过使用本网站，您同意遵守这些条款。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. 网站使用</h2>
          <p>
            您同意仅将网站用于合法目的，并按照这些条款使用。具体而言，您同意不会：
          </p>
          <ul className="list-disc pl-8">
            <li>违反任何适用法律或法规。</li>
            <li>未经授权访问或使用 TanStack 的系统或服务器。</li>
            <li>上传或传输病毒、恶意软件或有害代码。</li>
            <li>对网站进行反向工程、反编译或试图获取源代码。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. 账户注册</h2>
          <ul className="list-disc pl-8">
            <li>
              本网站的某些功能可能需要您注册账户。您必须提供准确、完整且最新的信息。
            </li>
            <li>您有责任维护账户凭证的机密性，并对您账户下的所有活动负责。</li>
            <li>如发现账户未经授权使用或安全漏洞，请立即通知我们。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. 知识产权</h2>
          <p>
            网站上的所有内容、功能和功能——包括软件、代码、文本、图像、视频和商标——均为
            TanStack 或其许可方所有，并受适用知识产权法律保护。
          </p>
          <p>
            <strong>您不得：</strong>
          </p>
          <ul className="list-disc pl-8">
            <li>未经事先书面许可，复制、修改、分发或公开展示网站内容。</li>
            <li>未经事先书面同意，使用我们的任何商标。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. 用户内容</h2>
          <p>
            如果您提交或发布任何内容（例如反馈、评论或代码贡献），您授予
            TanStack 非独占、全球性、免版税的许可，以使用、复制和展示此类内容。
          </p>
          <p>
            <strong>您声明并保证：</strong>
          </p>
          <ul className="list-disc pl-8">
            <li>您拥有或具有发布内容所需的必要权利。</li>
            <li>您的内容不侵犯任何第三方权利或适用法律。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. 免责声明</h2>
          <p>
            本网站及其内容按"原样"和"可用性"提供，不作任何形式的明示或暗示保证。TanStack
            不提供任何保证，包括对适销性、特定用途适用性和非侵权的暗示保证。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. 责任限制</h2>
          <p>
            在法律允许的最大范围内，TanStack
            不对因您使用本网站或服务而产生的任何间接、偶然、特殊、后果性或惩罚性损害承担责任。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">10. 第三方链接</h2>
          <p>
            本网站可能包含第三方网站的链接。我们不对任何链接的第三方站点的内容或做法负责。此类链接并不表示认可。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">11. 终止</h2>
          <p>
            我们保留因任何原因终止或暂停您访问本网站的权利，恕不另行通知或承担任何责任，包括违反这些条款。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">12. 适用法律</h2>
          <p>这些条款应受犹他州法律管辖并按其解释，不考虑其冲突法律规定。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">13. 争议解决</h2>
          <p>
            因这些条款引起的任何争议应通过具有约束力的仲裁解决，按照犹他州标准仲裁规则进行。仲裁应在犹他州进行。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">14. 可分割性</h2>
          <p>
            如果这些条款的任何规定被发现不可执行或无效，该规定应在保留其余规定的同时受到限制或消除到必要的最低程度。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">15. 完整协议</h2>
          <p>
            这些条款构成您与 TanStack
            之间关于使用本网站的完整协议，取代任何先前的协议。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">16. 联系我们</h2>
          <p>如果您对这些条款有任何疑问，请联系我们：</p>
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
