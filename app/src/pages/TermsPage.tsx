import { useSEO } from '@/components/SEO';

export default function TermsPage() {
  useSEO({
    title: 'Terms of Use | NanoToMicro',
    description: 'Terms of use for NanoToMicro calculators, educational guides, external references and informational content.',
    canonical: 'https://www.nanotomicro.com/terms',
    jsonLd: [{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Terms of Use', url: 'https://www.nanotomicro.com/terms' }],
  });

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-sm font-bold uppercase tracking-wider text-primary">Last updated: 10 August 2026</p>
      <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Terms of Use</h1>
      <p className="mt-4 leading-relaxed text-muted-foreground">By using NanoToMicro, you agree to use the calculators and educational material responsibly and to verify important results against the requirements of your own application.</p>

      <div className="article-body mt-10">
        <h2>Informational purpose</h2>
        <p>NanoToMicro provides mathematical conversion tools and educational explanations. The site is intended to help users understand SI prefixes and express compatible measurements in different units.</p>

        <h2>Accuracy and verification</h2>
        <p>We aim to use exact SI prefix relationships and to correct errors when they are identified. However, you remain responsible for checking values before using them in safety-critical, regulated, clinical, engineering, financial or other consequential work.</p>

        <h2>Medical and radiation content</h2>
        <p>Radiation and health-related pages explain units and arithmetic only. They do not diagnose a condition, assess an individual's risk, interpret a medical exposure or replace advice from a qualified clinician, medical physicist, radiation-protection professional or other appropriate specialist.</p>

        <h2>No warranty</h2>
        <p>The site is provided on an “as available” basis. To the extent permitted by applicable law, no guarantee is made that every page will always be available, error-free or suitable for a particular purpose.</p>

        <h2>External sources and links</h2>
        <p>NanoToMicro may link to standards bodies, scientific organizations, government agencies and other external websites for context. External content is controlled by its respective publisher and may change independently of this site.</p>

        <h2>Acceptable use</h2>
        <p>You may use the calculators for normal personal, educational, research and professional reference. Do not attempt to interfere with the site's operation, misuse automated access in a way that degrades service, or present NanoToMicro content in a misleading way.</p>

        <h2>Changes</h2>
        <p>These terms may be updated as the website changes. The date at the top of this page identifies the latest published version.</p>

        <h2>Contact</h2>
        <p>Questions about these terms can be sent to <a href="mailto:contact@nanotomicro.com">contact@nanotomicro.com</a>.</p>
      </div>
    </main>
  );
}
