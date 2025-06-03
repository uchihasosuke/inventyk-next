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
    title: 'Starter',
    price: '₹9,999',
    priceSuffix: '/project',
    features: [
      '1 Page Website / Landing Page',
      'Mobile Responsive Design',
      'Contact Form',
      '1 Design Revision',
      'Basic SEO Setup',
      '7 Days Free Support'
    ],
    buttonText: 'Get Started',
  },
  {
    title: 'Professional',
    price: '₹24,999',
    priceSuffix: '/project',
    features: [
      'Up to 5 Pages Website',
      'Custom Mobile-Responsive Design',
      'Admin Panel (Basic)',
      'Contact + Feedback Forms',
      '2 Design Revisions',
      'Basic Backend & Database Setup',
      '15 Days Support',
      'Basic SEO + Speed Optimization',
      '1 Year Domain & Hosting'
      
    ],
    buttonText: 'Choose Professional',
    isFeatured: true,
  },
  {
    title: 'Enterprise',
    price: '₹59,999',
    priceSuffix: '/project',
    features: [
      'Up to 10 Pages Dynamic Website',
      'Modern UI/UX Design',
      'Full Backend Development',
      'Advanced Admin Dashboard',
      'Database + Analytics Integration',
      '3 Design Revisions',
      'Advanced SEO & Speed Optimization',
      'AI Chatbot (Basic)',
      'Payment Gateway Integration',
      '1 Year Domain & Hosting',
      '45 Days Support',
    ],
    buttonText: 'Go with Enterprise',
  },
  {
    title: 'Elite',
    price: '₹109,999',
    priceSuffix: '/project',
    features: [
      'Custom Web App / SaaS Platform',
      'Full Stack Development (Frontend + Backend)',
      'Custom AI Feature Integration',
      'Advanced Admin Panel + Role-Based Access',
      'Payment & Subscription Systems',
      'API Integrations (3rd Party)',
      '5 Design Revisions',
      '2 Months Priority Support',
      'Complete SEO & Analytics Setup',
      'Custom Hosting & Deployment Strategy',
    ],
    buttonText: 'Go with Elite',
  }
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
