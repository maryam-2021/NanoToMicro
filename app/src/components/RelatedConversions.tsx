import { Link } from 'react-router';
import { Ruler, Timer, Activity, Atom, ArrowRight } from 'lucide-react';

export interface RelatedConversionsProps {
  currentSpoke: 'length' | 'time' | 'radiation';
}

export function RelatedConversions({ currentSpoke }: RelatedConversionsProps) {
  const items = [
    {
      key: 'length',
      title: 'Nanometers to Micrometers',
      path: '/length/nm-to-um/',
      icon: Ruler,
      description: 'Convert spatial length measurements used in semiconductor lithography, optical physics, and molecular biology.',
      anchorText: 'Convert nanometers to micrometers',
    },
    {
      key: 'time',
      title: 'Nanoseconds to Microseconds',
      path: '/time/ns-to-us/',
      icon: Timer,
      description: 'Convert temporal durations, CPU clock cycles, DRAM memory access times, and network signal latency.',
      anchorText: 'Convert nanoseconds to microseconds',
    },
    {
      key: 'radiation',
      title: 'Nanosieverts to Microsieverts',
      path: '/radiation/nsv-to-usv/',
      icon: Activity,
      description: 'Convert ionizing radiation dose equivalent values used in environmental monitoring and medical dosimetry.',
      anchorText: 'Convert nanosieverts to microsieverts',
    },
  ];

  const filteredItems = items.filter((item) => item.key !== currentSpoke);

  return (
    <section aria-labelledby="related-conversions-heading" className="my-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h3 id="related-conversions-heading" className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        More Nano-to-Micro Conversions
      </h3>
      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
        Explore specialized unit converters across different physical dimensions.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.key} className="flex flex-col justify-between rounded-xl border border-border/80 bg-secondary/30 p-5 transition-colors hover:border-primary/40">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold text-primary">
                  <IconComponent className="h-4 w-4" /> {item.title}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/40">
                <Link
                  to={item.path}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  {item.anchorText} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          );
        })}

        {/* Central Hub Card */}
        <div className="flex flex-col justify-between rounded-xl border border-primary/40 bg-primary/10 p-5 transition-colors hover:border-primary/60">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold text-primary">
              <Atom className="h-4 w-4" /> Universal Hub
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Access the main metric-prefix directory to convert any compatible physical quantity between 10⁻⁹ and 10⁻⁶.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-primary/20">
            <Link
              to="/nano-to-micro-conversion/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
            >
              Explore all nano-to-micro converters <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
