import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CreditGuidePageEN() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <Link href="/en/about" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to About Us
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Credit Guide</h1>
          <p className="text-gray-600 mt-2">Effective Date: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              This Credit Guide provides important information about our credit services, as required by the National Consumer Credit Protection Act 2009 (NCCP Act).
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">1. Who We Are</h2>
            <p>
              <strong>STRESS FREE FINANCE</strong><br/>
              ABN: 123 456 789<br/>
              Australian Credit Licence (ACL): 123456<br/>
              Address: 123 Collins St, Melbourne VIC 3000<br/>
              Phone: 0412 892 782<br/>
              Email: info@stressfree.com.au
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">2. Our Credit Services</h2>
            <p>We act as a credit assistance provider under the NCCP Act. We assist clients in obtaining:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Home loans (owner-occupied and investor)</li>
              <li>Construction loans</li>
              <li>Refinancing and equity release</li>
              <li>Commercial property loans (subject to licensing)</li>
              <li>Car loans and personal loans (through partnered lenders)</li>
            </ul>
            <p>We do not provide credit under our own name; we arrange credit with licensed lenders.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">3. Our Process</h2>
            <p>When you engage our services, we will:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Gather your financial information and objectives</li>
              <li>Assess your borrowing capacity and suitability</li>
              <li>Search and compare suitable loan products from our panel of lenders</li>
              <li>Present recommendations with clear explanations of costs, features, and risks</li>
              <li>Assist with documentation and submission</li>
              <li>Liaise with the chosen lender throughout approval</li>
              <li>Provide ongoing support after settlement</li>
            </ol>

            <h2 className="text-2xl font-bold mt-12 mb-4">4. Disclosure of Receipt of Commissions</h2>
            <p>
              We receive commissions from lenders when your loan settles. These commissions are part of the lender's funding, not an additional charge to you.
            </p>
            <p>Commission amounts vary but typically range from <strong>0.5% to 1.0%</strong> of the loan amount. For a $500,000 loan, this equates to approximately $2,500 - $5,000.</p>
            <p>We also may receive ongoing trailing commissions (residuals) for the life of the loan, typically 0.1% - 0.3% p.a.</p>
            <p>We will provide you with a Commission Arrangement document on request, detailing exact commission amounts for your specific loan.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">5. Our Obligations Under the NCCP Act</h2>
            <p>As a credit assistance provider, we must:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Act in your best interests (best interests duty)</li>
              <li>Provide credit services efficiently, honestly, and fairly</li>
              <li>Assess whether the credit product is suitable for you</li>
              <li>Provide you with a Credit Guide (this document)</li>
              <li>Provide you with a Credit Proposal Disclosure document before proceeding</li>
              <li>Disclose any remuneration or benefits we receive</li>
              <li>Maintain professional indemnity insurance</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">6. Conflicts of Interest</h2>
            <p>We have policies to manage conflicts of interest. While we receive commissions from lenders, we are legally obliged to act in your best interests. We will:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Disclose any relationships or incentives that could influence our recommendations</li>
              <li>Explain why a particular product is suitable for you</li>
              <li>Consider a wide range of lenders (not just those with higher commissions)</li>
            </ul>
            <p>You are free to seek independent advice and choose any lender, even if not recommended by us.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">7. Fees and Charges</h2>
            <p>
              <strong>Our Service Fees</strong>: Our initial consultation is free. For complex or ongoing services, we will provide a quote beforehand. Any fees will be disclosed in a Credit Proposal Disclosure.
            </p>
            <p>
              <strong>Lender Fees</strong>: Lenders charge application fees, valuation fees, and ongoing annual fees. These are separate from our services. We will disclose all known lender fees during the recommendation process.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">8. Complaints Process</h2>
            <p>If you have a complaint about our credit services:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Contact our internal complaints department: complaints@stressfree.com.au or 0412 892 782</li>
              <li>We will acknowledge within 1 business day and aim to resolve within 30 days</li>
              <li>If unsatisfied, you may contact the <strong>Australian Financial Complaints Authority (AFCA)</strong>:<br/>
                Phone: 1800 931 678<br/>
                Email: info@afca.org.au<br/>
                Website: www.afca.org.au</li>
              <li>AFCA provides a free external dispute resolution service</li>
            </ol>

            <h2 className="text-2xl font-bold mt-12 mb-4">9. Internal Dispute Resolution</h2>
            <p>Our internal dispute resolution team can be contacted at:</p>
            <p>
              Email: disputes@stressfree.com.au<br/>
              Mail: PO Box 123, Collins St West, Melbourne VIC 8007<br/>
              Phone: 0412 892 782 (ask for Disputes Officer)
            </p>
            <p>We will keep you updated throughout the investigation and provide a written response within 30 days.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">10. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Request a copy of our Credit Guide and Commission Arrangement</li>
              <li>Receive clear, concise information about loan products</li>
              <li>Ask questions and receive satisfactory answers</li>
              <li>Withdraw from the process at any time without penalty (though some third-party fees may apply)</li>
              <li>Seek independent legal or financial advice</li>
              <li>Lodge a complaint with AFCA if unresolved</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">11. Important Notices</h2>
            <p>
              <strong>Loan Approval Not Guaranteed</strong>: Final approval rests with the lender. We cannot guarantee approval or specific interest rates.
            </p>
            <p>
              <strong>Interest Rates Variable</strong>: Interest rates may change during the loan term. We will notify you of known changes, but you should verify with the lender.
            </p>
            <p>
              <strong>Independent Decision</strong>: You are responsible for your own financial decisions. Our advice is general and should be considered alongside your personal circumstances.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">12. Updates to This Guide</h2>
            <p>We may update this Credit Guide from time to time to reflect changes in law or our practices. The latest version will be posted on our website. We will notify clients of material changes via email or website announcement.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">13. Contact for Further Information</h2>
            <div className="bg-gray-50 p-6 rounded-xl mt-4">
              <p><strong>STRESS FREE FINANCE</strong></p>
              <p>Email: info@stressfree.com.au</p>
              <p>Phone: 0412 892 782</p>
              <p>Address: 123 Collins St, Melbourne VIC 3000</p>
              <p className="mt-4"><strong>Australian Credit Licence Number:</strong> 123456</p>
            </div>

            <p className="text-sm text-gray-500 mt-12">
              This Credit Guide is provided in accordance with the National Consumer Credit Protection Act 2009 and ASIC Regulatory Guide 203.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
