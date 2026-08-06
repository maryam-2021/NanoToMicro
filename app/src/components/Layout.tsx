import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Atom, BookOpen, ChevronDown, Menu, ArrowRightLeft, TableProperties } from 'lucide-react';
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

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5 font-extrabold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Atom className="h-5 w-5" />
            </span>
            <span className="text-lg">
              Nano<span className="text-gradient-gold">To</span>Micro
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1.5 text-sm font-medium">
                  Converters <ChevronDown className="h-4 w-4 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="max-h-[70vh] w-72 overflow-y-auto">
                {CATEGORIES.map((cat) => (
                  <div key={cat.name}>
                    <DropdownMenuLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                      {cat.name}
                    </DropdownMenuLabel>
                    {cat.slugs.map((slug) => {
                      const c = getConverter(slug)!;
                      return (
                        <DropdownMenuItem key={slug} asChild>
                          <Link to={`/${slug}`} className="cursor-pointer">
                            {c.fromNamePlural} to {c.toNamePlural}
                            <span className="ml-auto text-xs text-muted-foreground">
                              {c.fromSymbol} → {c.toSymbol}
                            </span>
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                    <DropdownMenuSeparator />
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" asChild className="gap-1.5 text-sm font-medium">
              <NavLink to="/nano-to-micro-conversion/">
                <Atom className="h-4 w-4 opacity-60" /> Conversion Hub
              </NavLink>
            </Button>
            <Button variant="ghost" asChild className="gap-1.5 text-sm font-medium">
              <NavLink to="/si-prefix-converter">
                <ArrowRightLeft className="h-4 w-4 opacity-60" /> SI Prefix Converter
              </NavLink>
            </Button>
            <Button variant="ghost" asChild className="gap-1.5 text-sm font-medium">
              <NavLink to="/conversion-charts">
                <TableProperties className="h-4 w-4 opacity-60" /> Charts
              </NavLink>
            </Button>
            <Button variant="ghost" asChild className="gap-1.5 text-sm font-medium">
              <NavLink to="/guides">
                <BookOpen className="h-4 w-4 opacity-60" /> Guides
              </NavLink>
            </Button>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Atom className="h-5 w-5 text-primary" /> NanoToMicro
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1">
                <Link
                  to="/si-prefix-converter"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-accent"
                >
                  SI Prefix Converter
                </Link>
                <Link
                  to="/conversion-charts"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-accent"
                >
                  Conversion Charts
                </Link>
                <Link
                  to="/guides"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-accent"
                >
                  Guides & Articles
                </Link>
                {CATEGORIES.map((cat) => (
                  <div key={cat.name} className="mt-3">
                    <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {cat.name}
                    </p>
                    {cat.slugs.map((slug) => {
                      const c = getConverter(slug)!;
                      return (
                        <Link
                          key={slug}
                          to={`/${slug}`}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                        >
                          {c.fromNamePlural} to {c.toNamePlural}
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/70 bg-card/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
            <div>
              <div className="flex items-center gap-2.5 font-extrabold">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Atom className="h-5 w-5" />
                </span>
                Nano<span className="text-gradient-gold">To</span>Micro
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                The dedicated home of nano ↔ micro conversions. Every calculator on NanoToMicro uses exact SI
                definitions — 1 nano = 0.001 micro — with formulas, worked examples and reference tables you can trust.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {CATEGORIES.map((cat) => (
                <div key={cat.name}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {cat.name}
                  </p>
                  <ul className="space-y-2">
                    {cat.slugs.map((slug) => {
                      const c = getConverter(slug)!;
                      return (
                        <li key={slug}>
                          <Link to={`/${slug}`} className="text-sm text-foreground/80 hover:text-primary">
                            {c.fromSymbol} to {c.toSymbol}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tools</p>
                <ul className="space-y-2">
                  <li>
                    <Link to="/nano-to-micro-conversion/" className="text-sm text-foreground/80 hover:text-primary font-medium">
                      Conversion Hub (10⁻⁹ to 10⁻⁶)
                    </Link>
                  </li>
                  <li>
                    <Link to="/si-prefix-converter" className="text-sm text-foreground/80 hover:text-primary">
                      SI Prefix Converter
                    </Link>
                  </li>
                  <li>
                    <Link to="/conversion-charts" className="text-sm text-foreground/80 hover:text-primary">
                      Conversion Charts
                    </Link>
                  </li>
                  <li>
                    <Link to="/guides" className="text-sm text-foreground/80 hover:text-primary">
                      Guides & Articles
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} NanoToMicro.com — {CONVERTERS.length}+ exact nano & micro unit converters. All
            conversions follow SI (International System of Units) definitions.
          </div>
        </div>
      </footer>
    </div>
  );
}
