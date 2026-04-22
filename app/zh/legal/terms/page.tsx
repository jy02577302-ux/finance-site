import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <Link href="/zh/about" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4" />
            返回关于我们
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">服务条款</h1>
          <p className="text-gray-600 mt-2">生效日期: 2025 年 1 月 1 日</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              欢迎使用 STRESS FREE FINANCE 的服务。使用我们的网站和咨询 services 即表示您同意以下条款。
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">1. 服务描述</h2>
            <p>我们提供房贷经纪和金融咨询服务，包括但不限于：</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>贷款评估和预批</li>
              <li>贷款产品比较和推荐</li>
              <li>协助完成贷款申请</li>
              <li>与贷款机构沟通并跟进审批</li>
              <li>财务建议（在授权范围内）</li>
            </ul>
            <p>我们不是贷款机构，而是您的代理人和顾问。最终贷款批准由贷款机构决定。</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">2. 客户责任</h2>
            <p>为了确保我们能为您提供最佳服务，您需要：</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>提供真实、准确、完整的个人信息和财务文件</li>
              <li>及时回复我们的信息请求，避免审批延误</li>
              <li>独立核实任何建议后再做财务决定</li>
              <li>仅在您同意条款的情况下接受贷款产品</li>
              <li>支付必要的费用（如有）</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">3. 费用与佣金</h2>
            <p>
              <strong>咨询费用</strong>：初次咨询完全免费。后续服务费用将事先书面确认。
            </p>
            <p>
              <strong>佣金</strong>：我们通常从贷款机构获得佣金（residual commissions）。这不会增加您的贷款成本，因为贷款机构已将这些成本计入其定价。我们承诺：
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>为您选择最适合的 product，而非最高佣金的产品</li>
              <li>透明披露佣金范围（通常在贷款金额的 0.5% - 1% 之间）</li>
              <li>在您要求时提供 Commission 安排文件</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">4. 知识产权</h2>
            <p>本网站的所有内容（文本、logo、设计、软件）均为 STRESS FREE FINANCE 或第三方 licensors 的财产。您只能为个人、非商业目的访问和使用这些内容。不得复制、修改、分发或用于商业用途，除非我们书面同意。</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">5. 免责声明</h2>
            <p>
              <strong>一般建议</strong>：我们提供的信息仅为一般性建议，不构成个人财务建议。在做出任何财务决定前，您应咨询独立专业顾问。
            </p>
            <p>
              <strong>不保证</strong>：我们努力确保信息准确，但不对错误或遗漏承担责任。贷款产品、利率、条款可能随时变化，我们不保证 any particular rate or approval。
            </p>
            <p>
              <strong>间接损失</strong>：对于任何间接或后果性损失（如利润损失、数据 lost），我们不承担责任。
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">6. 隐私保护</h2>
            <p>我们严格遵守《隐私法》和 Australian Privacy Principles。有关我们如何处理您的个人信息，请参阅我们的 <Link href="/zh/legal/privacy" className="text-primary-700 hover:underline">隐私政策</Link>。</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">7. 争议解决</h2>
            <p>如果您对我们的服务有任何投诉，请首先联系我们的投诉处理部门（complaints@stressfree.com.au）。我们将努力在 30 天内解决。如果未解决，您可向 AFCA（Australian Financial Complaints Authority）申请免费外部争议解决。</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">8. 条款变更</h2>
            <p>我们可能偶尔更新这些条款。重大变更将通过网站公告通知。继续使用服务即表示您接受更新后的条款。</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">9. 管辖法律</h2>
            <p>这些条款受澳大利亚维多利亚州法律管辖。任何争议应提交至维多利亚州法院。</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">10. 联系我们</h2>
            <div className="bg-gray-50 p-6 rounded-xl mt-4">
              <p><strong>STRESS FREE FINANCE</strong></p>
              <p>邮箱：info@stressfree.com.au</p>
              <p>电话：0412 892 782</p>
              <p>地址：123 Collins St, Melbourne VIC 3000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
