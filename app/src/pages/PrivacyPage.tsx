import { useSEO } from '@/components/SEO';

export default function PrivacyPage() {
  useSEO({
    title: 'Privacy Policy | NanoToMicro',
    description: 'Read the NanoToMicro privacy policy, including how browser-based calculators handle input, hosting logs, external links and contact information.',
    canonical: 'https://www.nanotomicro.com/privacy',
    jsonLd: [{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Privacy Policy', url: 'https://www.nanotomicro.com/privacy' }],
  });

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-sm font-bold uppercase tracking-wider text-primary">Last updated: 10 August 2026</p>
      <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Privacy Policy</h1>
      <p className="mt-4 leading-relaxed text-muted-foreground">This page explains the privacy behavior of NanoToMicro's current website and calculator experience. It should be reviewed whenever analytics, advertising, user accounts, server-side forms or other data-collection features are added.</p>

      <div className="article-body mt-10">
        <h2>Calculator inputs</h2>
        <p>The conversion tools run in your browser. Values entered into the calculators are used to calculate results on the page and are not intended to be submitted as account data or stored as a user profile.</p>

        <h2>Server and hosting data</h2>
        <p>Like most websites, the infrastructure used to deliver NanoToMicro may process standard technical request information such as IP address, requested URL, browser or user-agent information, timestamps, security signals and diagnostic logs. This information may be handled by hosting, security, DNS or content-delivery providers as part of operating and protecting the website.</p>

        <h2>Cookies and similar technologies</h2>
        <p>The core conversion tools do not require an account to work. If analytics, advertising, consent-management or other services that use cookies or similar technologies are introduced, this policy and any required consent controls should be updated before those services are enabled.</p>

        <h2>Contact by email</h2>
        <p>If you email NanoToMicro, the information you include in the message is received for the purpose of responding to your request, correction or feedback. Do not send sensitive medical records, passwords or confidential laboratory data.</p>

        <h2>External links</h2>
        <p>Some educational pages link to external scientific, standards or public-sector sources. Those websites have their own privacy practices and policies.</p>

        <h2>Children</h2>
        <p>NanoToMicro is a general educational and utility website and is not designed to create profiles about children or request sensitive information from them.</p>

        <h2>Changes to this policy</h2>
        <p>This policy may be updated when the site's features, providers or legal requirements change. The date at the top of this page identifies the latest published version.</p>

        <h2>Contact</h2>
        <p>Privacy questions can be sent to <a href="mailto:contact@nanotomicro.com">contact@nanotomicro.com</a>.</p>
      </div>
    </main>
  );
}
