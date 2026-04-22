import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <Link href="/zh/about" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4" />
            返回关于我们
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">隐私政策</h1>
          <p className="text-gray-600 mt-2">生效日期: 2025 年 1 月 1 日</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              STRESS FREE FINANCE（以下简称"我们"）重视您的隐私。本政策说明我们如何收集、使用、存储和保护您的个人信息。
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">1. 我们收集的信息</h2>
            <p>我们可能收集以下类型的信息：</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>身份信息</strong>：姓名、地址、出生日期、护照/驾照信息</li>
              <li><strong>联系信息</strong>：电话、邮箱、邮寄地址</li>
              <li><strong>财务信息</strong>：收入、就业详情、资产、负债、银行流水</li>
              <li><strong>信用信息</strong>：信用报告、信用评分</li>
              <li><strong>技术信息</strong>：IP 地址、浏览器类型、访问日志（通过网站分析）</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">2. 我们如何使用您的信息</h2>
            <p>您的个人信息将用于：</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>处理和评估您的贷款申请</li>
              <li>与贷款机构、信用报告机构沟通</li>
              <li>提供个性化金融建议</li>
              <li>履行法定义务（如反洗钱验证）</li>
              <li>改进我们的服务（仅用于分析的匿名数据）</li>
              <li>与您沟通贷款进展、产品更新（您可以随时 opt-out）</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">3. 我们如何保护您的信息</h2>
            <p>我们采取严格措施保护您的个人信息：</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>所有员工签署保密协议</li>
              <li>使用加密传输 (SSL/TLS)</li>
              <li>物理和电子安全措施</li>
              <li>仅授权人员可访问客户数据</li>
              <li>定期安全审计</li>
              <li>遵守《隐私法》(Privacy Act 1988) 和 APPs</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">4. 我们与谁共享信息</h2>
            <p>我们仅在以下情况下共享您的信息：</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>贷款机构</strong>：银行、信用联盟、非银 Lender，用于评估您的申请</li>
              <li><strong>信用报告机构</strong>：如 Equifax、Experian，获取和更新信用报告</li>
              <li><strong>第三方服务商</strong>：如文档管理、支付处理（均签署保密协议）</li>
              <li><strong>法律要求</strong>：如 AML/CTF 检查、法院命令</li>
            </ul>
            <p>我们不出售您的个人信息给第三方营销用途。</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">5. 数据保留</h2>
            <p>我们保留您的个人信息的时间不超过必要期限，通常：</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>活跃客户：保留完整档案直到关系结束 + 7 年（法律要求）</li>
              <li>未成交客户：保留 3 年后匿名化或安全销毁</li>
              <li>网站日志：保留 12 个月</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">6. 您的权利</h2>
            <p>根据《隐私法》，您有权：</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>请求访问您的个人信息</li>
              <li>更正不准确或不完整的信息</li>
              <li>选择退出某些营销通信</li>
              <li>投诉我们处理隐私的方式（我们将迅速调查）</li>
            </ul>
            <p>如需行使这些权利，请通过下文联系方式与我们联系。</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">7. Cookies 和网站分析</h2>
            <p>我们的网站使用 Google Analytics 来分析流量，仅收集匿名数据。我们使用必要的 cookies 确保网站正常运行。您可以通过浏览器设置禁用 cookies，但可能会影响网站功能。</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">8. 第三方链接</h2>
            <p>我们的网站可能包含第三方链接（如银行、政府网站）。我们不对这些网站的隐私做法负责。请阅读他们自己的隐私政策。</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">9. 政策更新</h2>
            <p>我们可能偶尔更新本政策。重大变更将在网站首页公告，并更新"生效日期"。继续使用我们的服务即表示您接受更新后的政策。</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">10. 联系我们</h2>
            <p>如有隐私相关疑问或请求，请联系：</p>
            <div className="bg-gray-50 p-6 rounded-xl mt-4 mb-8">
              <p><strong>STRESS FREE FINANCE</strong></p>
              <p>邮箱：privacy@stressfree.com.au</p>
              <p>电话：0412 892 782</p>
              <p>地址：123 Collins St, Melbourne VIC 3000</p>
            </div>

            <p className="text-sm text-gray-500 mt-12">
              本政策依据《1988 年隐私法》(Privacy Act 1988) 和 Australian Privacy Principles (APPs) 制定。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
