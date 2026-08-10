import { Mail, MessageSquareText } from 'lucide-react';
import { useSEO } from '@/components/SEO';

export default function ContactPage() {
  useSEO({
    title: 'Contact NanoToMicro — Corrections, Feedback & Questions',
    description: 'Contact NanoToMicro about calculator corrections, scientific sources, broken links, accessibility issues or general feedback.',
    canonical: 'https://www.nanotomicro.com/contact',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact NanoToMicro',
        url: 'https://www.nanotomicro.com/contact',
      },
    ],
  });

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"><MessageSquareText className="h-4 w-4" /> Contact</div>
      <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Questions, corrections or source suggestions?</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">If a calculator, formula, unit symbol, source link or explanation needs attention, send the page URL and a short description of what you found.</p>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary"><Mail className="h-5 w-5" /></span>
          <div>
            <h2 className="font-bold">Email</h2>
            <a href="mailto:contact@nanotomicro.com" className="mt-1 inline-block font-semibold text-primary hover:underline">contact@nanotomicro.com</a>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">For a correction, include the affected URL, the text or result you believe is wrong, and an authoritative source when possible.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-5"><h2 className="font-bold">Good reasons to contact us</h2><ul className="mt-3 space-y-2 text-sm text-muted-foreground"><li>• Incorrect conversion or formula</li><li>• Broken or outdated reference</li><li>• Accessibility or mobile issue</li><li>• Suggestion for a useful unit page</li></ul></div>
        <div className="rounded-2xl border border-border bg-card p-5"><h2 className="font-bold">Please do not send</h2><ul className="mt-3 space-y-2 text-sm text-muted-foreground"><li>• Sensitive medical information</li><li>• Passwords or account credentials</li><li>• Confidential laboratory records</li><li>• Personal data not needed for the question</li></ul></div>
      </div>
    </main>
  );
}
