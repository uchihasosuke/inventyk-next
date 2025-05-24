
'use client';

import { Button } from '@/components/ui/button';

export function PricingContactSection() {
  return (
    <section id="contact-us-section" className="text-center py-12 bg-primary/5 rounded-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Need a Custom Solution or Have Questions?</h2>
      <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
        If your project has unique requirements, or if you'd like to discuss which plan is best for you, don't hesitate to reach out. We can create a tailored plan just for you.
      </p>
      <Button
        size="lg"
        className="bg-accent hover:bg-accent/90 text-accent-foreground"
        onClick={() => {
          if (typeof window !== 'undefined') {
            window.location.href = 'mailto:info@inventyk.com?subject=Project Inquiry';
          }
        }}
      >
        Email Us: info@inventyk.com
      </Button>
      <p className="text-sm text-muted-foreground mt-4">
        We'll get back to you shortly to discuss your project.
      </p>
    </section>
  );
}
