import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { Faq } from '@/data/converters';

export function FaqSection({ faqs, heading = 'Frequently Asked Questions' }: { faqs: Faq[]; heading?: string }) {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-base font-medium hover:text-primary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
