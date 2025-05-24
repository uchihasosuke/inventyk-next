
import type { Metadata } from 'next';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { CloudCog, Code2, Briefcase, SearchCheck, Zap, Settings2 } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore the range of expert digital services offered by Inventyk, including AI-assisted custom software development, cloud solutions, low-code development, and strategic consulting.',
};

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business requirements, enhancing productivity and user engagement. We specialize in rapid, AI-assisted development for web and mobile applications.',
  },
  {
    icon: CloudCog,
    title: 'Cloud Solutions & DevOps',
    description: 'Optimize your infrastructure with our cloud services, including migration, management, and DevOps practices for seamless operations and scalability.',
  },
  {
    icon: Settings2, 
    title: 'Low-Code & No-Code Solutions',
    description: 'Accelerate your digital transformation with powerful low-code and no-code platforms. We leverage tools like Firebase Studio and FlutterFlow to build and deploy applications faster.',
  },
  {
    icon: SearchCheck, 
    title: 'Data Analytics & AI Integration',
    description: 'Unlock the power of your data with advanced analytics and AI-driven insights to make informed decisions and innovate faster. We integrate AI to enhance functionality and user experience.',
  },
  {
    icon: Briefcase,
    title: 'Digital Strategy Consulting',
    description: 'Expert guidance to navigate the digital landscape, helping you craft effective strategies for sustainable growth and market leadership in the tech-driven world.',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Expert Services</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          At Inventyk, we offer a comprehensive suite of digital services designed to empower your business and accelerate your journey towards innovation and efficiency, leveraging AI and modern development practices.
        </p>
      </section>

      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </section>
      
      <section className="py-16 bg-primary/5 rounded-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                <Zap className="w-10 h-10 mr-3 inline-block text-accent" />
                Fast, AI-Assisted Development
              </h2>
              <p className="text-lg text-foreground/80 mb-4">
                We harness the power of Artificial Intelligence and cutting-edge low-code tools like Firebase Studio and FlutterFlow to deliver high-quality web and mobile applications at an unprecedented speed.
              </p>
              <p className="text-lg text-foreground/80">
                Our approach minimizes development time and costs, allowing you to bring your ideas to market faster and more efficiently. Whether it's a complex enterprise solution or a nimble MVP, Inventyk ensures quality and speed.
              </p>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="AI Assisted Development" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-xl object-cover"
                data-ai-hint="ai development code"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-16 mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Have a Project in Mind?</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          Let's discuss your requirements and how our expertise can bring your vision to life.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/pricing">Request a Quote</Link>
        </Button>
      </section>
    </div>
  );
}
