// This page will now be a Server Component again.
// 'use client'; // REMOVED

import type { Metadata } from 'next';
import { PricingCard } from '@/components/sections/PricingCard';
import { PricingContactSection } from '@/components/sections/PricingContactSection';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

// Metadata can be exported from a Server Component.
export const metadata: Metadata = {
  title: 'Pricing Plans',
  description: 'Choose the perfect plan for your needs. Inventyk offers flexible pricing for startups, businesses, and enterprises.',
};

const pricingPlans = [
  {
    title: 'Basic',
    price: '₹14,999',
    priceSuffix: '/project',
    features: [
      '1 Core Feature Web/Mobile Page',
      'Basic UI/UX Design',
      'Source Code (No Backend)',
      '3 Revisions',
      'Standard Support',
    ],
    buttonText: 'Get Started',
  },
  {
    title: 'Standard',
    price: '₹39,999',
    priceSuffix: '/project',
    features: [
      'Up to 3 Core Feature Pages',
      'Custom UI/UX Design',
      'Frontend + Basic Backend Setup (Firebase)',
      '5 Revisions',
      'Priority Support',
      'AI Feature Integration (1)',
    ],
    buttonText: 'Choose Standard',
    isFeatured: true,
  },
  {
    title: 'Premium',
    price: '₹98,999',
    priceSuffix: '/project',
    features: [
      'Up to 5 Core Feature Pages',
      'Advanced UI/UX Prototyping',
      'Full Stack Development (Firebase/Next.js)',
      'Unlimited Revisions',
      'Dedicated Support Manager',
      'AI Feature Integration (Up to 3)',
      'Basic SEO Optimization',
    ],
    buttonText: 'Go Premium',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    priceSuffix: '',
    features: [
      'Complex Web/Mobile Applications',
      'Scalable Architecture Design',
      'Dedicated Development Team',
      'Full CI/CD & DevOps Support',
      'Advanced AI & ML Solutions',
      'Ongoing Maintenance & Support',
      'Service Level Agreements (SLAs)',
    ],
    buttonText: 'Request Quote',
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <ScrollAnimation direction="down">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Pricing Plans</h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Affordable and transparent pricing to help you innovate and grow. Choose a plan that fits your business needs or contact us for a custom quote.
          </p>
        </section>
      </ScrollAnimation>

      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {pricingPlans.map((plan, index) => (
          <ScrollAnimation 
            key={plan.title}
            direction={index % 2 === 0 ? 'left' : 'right'}
            delay={0.2 * (index + 1)}
          >
            <PricingCard
              title={plan.title}
              price={plan.price}
              pricePeriod={plan.priceSuffix}
              features={plan.features}
              buttonText={plan.buttonText}
              isFeatured={plan.isFeatured}
            />
          </ScrollAnimation>
        ))}
      </section>
      
      <ScrollAnimation direction="up" once={false}>
        <PricingContactSection />
      </ScrollAnimation>
    </div>
  );
}
