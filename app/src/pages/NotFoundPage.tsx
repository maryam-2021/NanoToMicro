import { Link } from 'react-router';
import { ArrowRight, Home, SearchX } from 'lucide-react';
import { useSEO } from '@/components/SEO';

export default function NotFoundPage() {
  useSEO({
    title: 'Page Not Found | NanoToMicro',
    description: 'The requested NanoToMicro page could not be found. Return home or browse the nano-to-micro conversion hub.',
    robots: 'noindex, follow',
  });

  return (
    <section className="bg-grid">
      <div className="mx-auto flex min-h-[65vh] w-full max-w-3xl items-center justify-center px-4 py-16 sm:px-6">
        <div className="w-full rounded-3xl border border-border bg-card p-8 text-center shadow-xl sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
            <SearchX className="h-8 w-8" />
          </div>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-primary">404 error</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">Page not found</h1>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            The URL may be mistyped, outdated, or no longer available. You can return to the homepage or open the main nano-to-micro conversion hub.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Home className="h-4 w-4" /> Go to homepage
            </Link>
            <Link
              to="/nano-to-micro-conversion/"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Conversion hub <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
