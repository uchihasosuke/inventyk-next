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
    price: '₹9,999',
    priceSuffix: '/project',
    features: [
      'Single Page Website/Landing Page',
      'Responsive Mobile-Friendly Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      '2 Design Revisions',
      '15 Days Support',
      'Source Code Handover'
    ],
    buttonText: 'Get Started',
  },
  {
    title: 'Standard',
    price: '₹24,999',
    priceSuffix: '/project',
    features: [
      'Up to 5 Pages Website',
      'Custom Responsive Design',
      'Basic Backend Integration',
      'Basic Database Setup',
      'Content Management System',
      '3 Design Revisions',
      '1 Month Support',
      'Basic AI Chatbot Integration',
      '1 Year Free Domain & Hosting'
    ],
    buttonText: 'Choose Standard',
    isFeatured: true,
  },
  {
    title: 'Premium',
    price: '₹49,999',
    priceSuffix: '/project',
    features: [
      'Up to 10 Pages Dynamic Website',
      'Advanced UI/UX Design',
      'Full Backend Development',
      'Advanced Database Architecture',
      'Admin Dashboard',
      'Payment Gateway Integration',
      '5 Design Revisions',
      '2 Months Support',
      'Advanced AI Features',
      'Complete SEO Package'
    ],
    buttonText: 'Go Premium',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    priceSuffix: '',
    features: [
      'Custom Web/Mobile Applications',
      'Enterprise-Grade Architecture',
      'Dedicated Development Team',
      'Advanced Security Features',
      'Custom AI/ML Solutions',
      'Priority 24/7 Support',
      'Maintenance & Updates',
      'Training & Documentation',
      'SLA Guaranteed Uptime'
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
