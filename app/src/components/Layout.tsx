import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Atom, BookOpen, ChevronDown, Menu, ArrowRightLeft, TableProperties, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { CATEGORIES, CONVERTERS, getConverter } from '@/data/converters';
import { CATEGORY_HUBS, categoryHubPath } from '@/data/category-hubs';
import { LOCALIZED_HUBS } from '@/data/localized-hubs';
import { converterPath } from '@/lib/routes';

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5 font-extrabold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary"><Atom className="h-5 w-5" /></span>
            <span className="text-lg">Nano<span className="text-gradient-gold">To</span>Micro</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1.5 text-sm font-medium">Converters <ChevronDown className="h-4 w-4 opacity-60" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="max-h-[70vh] w-72 overflow-y-auto">
                {CATEGORIES.map((cat) => {
                  const hubPath = categoryHubPath(cat.name);
                  return (
                    <div key={cat.name}>
                      <DropdownMenuLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                        {hubPath ? <Link to={hubPath} className="hover:text-primary">{cat.name} hub</Link> : cat.name}
                      </DropdownMenuLabel>
                      {cat.slugs.map((slug) => {
                        const c = getConverter(slug)!;
                        return (
                          <DropdownMenuItem key={slug} asChild>
                            <Link to={converterPath(slug)} className="cursor-pointer">
                              {c.fromNamePlural} to {c.toNamePlural}
                              <span className="ml-auto text-xs text-muted-foreground">{c.fromSymbol} → {c.toSymbol}</span>
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                      <DropdownMenuSeparator />
                    </div>
                  );
                })}
                <DropdownMenuItem asChild><Link to="/units/radiation/" className="cursor-pointer font-semibold text-primary">Radiation unit hub</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" asChild className="gap-1.5 text-sm font-medium"><NavLink to="/nano-to-micro-conversion/"><Atom className="h-4 w-4 opacity-60" /> Conversion Hub</NavLink></Button>
            <Button variant="ghost" asChild className="gap-1.5 text-sm font-medium"><NavLink to="/si-prefix-converter/"><ArrowLeftRight className="h-4 w-4 opacity-60" /> SI Prefix</NavLink></Button>
            <Button variant="ghost" asChild className="gap-1.5 text-sm font-medium"><NavLink to="/conversion-charts/"><TableProperties className="h-4 w-4 opacity-60" /> Charts</NavLink></Button>
            <Button variant="ghost" asChild className="gap-1.5 text-sm font-medium"><NavLink to="/guides/"><BookOpen className="h-4 w-4 opacity-60" /> Guides</NavLink></Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1.5 text-sm font-medium"><Languages className="h-4 w-4 opacity-60" /> Languages <ChevronDown className="h-4 w-4 opacity-60" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="max-h-[70vh] w-56 overflow-y-auto">
                <DropdownMenuItem asChild><Link to="/nano-to-micro-conversion/">English</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                {LOCALIZED_HUBS.map((locale) => <DropdownMenuItem key={locale.code} asChild><Link to={`/${locale.code}/`} lang={locale.code}>{locale.language}</Link></DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden"><Button variant="ghost" size="icon" aria-label="Open menu"><Menu className="h-5 w-5" /></Button></SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <SheetHeader><SheetTitle className="flex items-center gap-2"><Atom className="h-5 w-5 text-primary" /> NanoToMicro</SheetTitle></SheetHeader>
              <div className="mt-6 flex flex-col gap-1">
                <Link to="/nano-to-micro-conversion/" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-accent">Conversion Hub</Link>
                <Link to="/si-prefix-converter/" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-accent">SI Prefix Converter</Link>
                <Link to="/conversion-charts/" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-accent">Conversion Charts</Link>
                <Link to="/guides/" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-accent">Guides & Articles</Link>

                {CATEGORIES.map((cat) => {
                  const hubPath = categoryHubPath(cat.name);
                  return (
                    <div key={cat.name} className="mt-3">
                      {hubPath ? <Link to={hubPath} onClick={() => setOpen(false)} className="block px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary">{cat.name} hub</Link> : <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{cat.name}</p>}
                      {cat.slugs.map((slug) => {
                        const c = getConverter(slug)!;
                        return <Link key={slug} to={converterPath(slug)} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm hover:bg-accent">{c.fromNamePlural} to {c.toNamePlural}</Link>;
                      })}
                    </div>
                  );
                })}

                <Link to="/units/radiation/" onClick={() => setOpen(false)} className="mt-3 rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-accent">Radiation unit hub</Link>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Languages</p>
                  <div className="grid grid-cols-2 gap-1">{LOCALIZED_HUBS.map((locale) => <Link key={locale.code} to={`/${locale.code}/`} lang={locale.code} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm hover:bg-accent">{locale.language}</Link>)}</div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/70 bg-card/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_2.2fr]">
            <div>
              <div className="flex items-center gap-2.5 font-extrabold"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary"><Atom className="h-5 w-5" /></span>Nano<span className="text-gradient-gold">To</span>Micro</div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">Focused nano, micro and neighboring SI-prefix conversions with exact formulas, practical context and topical measurement guides.</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <Link to="/about/" className="text-foreground/75 hover:text-primary">About</Link><span>•</span>
                <Link to="/contact/" className="text-foreground/75 hover:text-primary">Contact</Link><span>•</span>
                <Link to="/privacy/" className="text-foreground/75 hover:text-primary">Privacy</Link><span>•</span>
                <Link to="/terms/" className="text-foreground/75 hover:text-primary">Terms</Link><span>•</span>
                <a href="/sitemap.xml" className="text-foreground/75 hover:text-primary">Sitemap</a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Unit hubs</p>
                <ul className="space-y-2">{CATEGORY_HUBS.map((hub) => <li key={hub.slug}><Link to={`/units/${hub.slug}/`} className="text-sm text-foreground/80 hover:text-primary">{hub.name}</Link></li>)}</ul>
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tools & learning</p>
                <ul className="space-y-2">
                  <li><Link to="/nano-to-micro-conversion/" className="text-sm text-foreground/80 hover:text-primary font-medium">Conversion Hub</Link></li>
                  <li><Link to="/si-prefix-converter/" className="text-sm text-foreground/80 hover:text-primary">SI Prefix Converter</Link></li>
                  <li><Link to="/conversion-charts/" className="text-sm text-foreground/80 hover:text-primary">Conversion Charts</Link></li>
                  <li><Link to="/guides/" className="text-sm text-foreground/80 hover:text-primary">Guides & Articles</Link></li>
                  <li><Link to="/radiation/gray-vs-sievert/" className="text-sm text-foreground/80 hover:text-primary">Gray vs Sievert</Link></li>
                </ul>
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Popular converters</p>
                <ul className="space-y-2">
                  {['nanometers-to-micrometers', 'nanograms-to-micrograms', 'nanomolar-to-micromolar', 'nanofarads-to-microfarads', 'nanoseconds-to-microseconds'].map((slug) => {
                    const c = getConverter(slug)!;
                    return <li key={slug}><Link to={converterPath(slug)} className="text-sm text-foreground/80 hover:text-primary">{c.fromSymbol} → {c.toSymbol}</Link></li>;
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-border/60 pt-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground/80">Languages:</span>
              <Link to="/nano-to-micro-conversion/" className="hover:text-primary">English</Link>
              {LOCALIZED_HUBS.map((locale) => <Link key={locale.code} to={`/${locale.code}/`} lang={locale.code} className="hover:text-primary">{locale.language}</Link>)}
            </div>
            <p className="mt-5 text-xs text-muted-foreground">© {new Date().getFullYear()} NanoToMicro.com — {CONVERTERS.length}+ exact unit converters. Prefix conversions follow SI definitions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
