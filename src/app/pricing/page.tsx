
import type { Metadata } from 'next';
import { PricingCard } from '@/components/sections/PricingCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Package, Briefcase, Building } from 'lucide-react'; // Added Building for Enterprise

export const metadata: Metadata = {
  title: 'Pricing Plans',
  description: 'Choose the perfect plan for your needs. Inventyk offers flexible pricing for startups, businesses, and enterprises.',
};

const pricingPlans = [
  {
    title: 'Basic',
    price: '₹4,999',
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
    price: '₹9,999',
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
    price: '₹14,999',
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
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Pricing Plans</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Affordable and transparent pricing to help you innovate and grow. Choose a plan that fits your business needs.
        </p>
      </section>

      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.title}
            title={plan.title}
            price={plan.price}
            pricePeriod={plan.priceSuffix}
            features={plan.features}
            buttonText={plan.buttonText}
            isFeatured={plan.isFeatured}
          />
        ))}
      </section>
      
      <section className="text-center py-12 bg-primary/5 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Need a Custom Solution?</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          If your project has unique requirements, don't hesitate to reach out. We can create a tailored plan just for you.
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Discuss Your Project
        </Button>
      </section>
    </div>
  );
}
