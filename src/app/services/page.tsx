import type { Metadata } from 'next';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { CloudCog, Code2, Briefcase, SearchCheck } from 'lucide-react'; // Using existing icons
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore the range of expert digital services offered by Inventyk, including custom software development, cloud solutions, and strategic consulting.',
};

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business requirements, enhancing productivity and user engagement.',
  },
  {
    icon: CloudCog,
    title: 'Cloud Solutions & DevOps',
    description: 'Optimize your infrastructure with our cloud services, including migration, management, and DevOps practices for seamless operations.',
  },
  {
    icon: Briefcase, // Using Briefcase as a stand-in for "Strategy" or "Consulting"
    title: 'Digital Strategy Consulting',
    description: 'Expert guidance to navigate the digital landscape, helping you craft effective strategies for sustainable growth and market leadership.',
  },
  {
    icon: SearchCheck, // Using SearchCheck for "Analytics" or "Optimization"
    title: 'Data Analytics & AI',
    description: 'Unlock the power of your data with advanced analytics and AI-driven insights to make informed decisions and innovate faster.',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          At Inventyk, we offer a comprehensive suite of digital services designed to empower your business and accelerate your journey towards innovation and efficiency.
        </p>
      </section>

      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </section>
      
      <section className="text-center py-12 bg-primary/5 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Have a Project in Mind?</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          Let's discuss your requirements and how our expertise can bring your vision to life.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/contact">Request a Quote</Link>
        </Button>
      </section>
    </div>
  );
}
