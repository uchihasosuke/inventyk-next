import type { Metadata } from 'next';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { CloudCog, Code2, Briefcase, SearchCheck, Zap, Settings2 } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

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
      <ScrollAnimation direction="down">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Expert Services</h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            At Inventyk, we offer a comprehensive suite of digital services designed to empower your business and accelerate your journey towards innovation and efficiency, leveraging AI and modern development practices.
          </p>
        </section>
      </ScrollAnimation>

      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <ScrollAnimation 
            key={service.title}
            direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
            delay={0.2 * (index + 1)}
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </ScrollAnimation>
        ))}
      </section>

      {/* Core Services Grouped Tile */}
      <ScrollAnimation direction="up">
        <section className="py-16 bg-primary/5 rounded-lg mb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  <Settings2 className="w-10 h-10 mr-3 inline-block text-accent" />
                  Our Core Services
                </h2>
                <p className="text-lg text-foreground/80 mb-4">
                  We offer a comprehensive suite of digital services designed to transform your business. Our expert team delivers innovative solutions across multiple domains to ensure your success.
                </p>
                <ul className="list-none space-y-3 text-lg text-foreground/80">
                  <li className="flex items-center">
                    <Code2 className="w-6 h-6 mr-3 text-accent flex-shrink-0" />
                    <span className="font-semibold text-primary">Custom Software Development</span>
                  </li>
                  <li className="flex items-center">
                    <CloudCog className="w-6 h-6 mr-3 text-accent flex-shrink-0" />
                    <span className="font-semibold text-primary">Cloud Solutions & DevOps</span>
                  </li>
                  <li className="flex items-center">
                    <SearchCheck className="w-6 h-6 mr-3 text-accent flex-shrink-0" />
                    <span className="font-semibold text-primary">Data Analytics & AI Integration</span>
                  </li>
                  <li className="flex items-center">
                    <Briefcase className="w-6 h-6 mr-3 text-accent flex-shrink-0" />
                    <span className="font-semibold text-primary">Digital Strategy Consulting</span>
                  </li>
                </ul>
                <p className="mt-6 text-foreground/80">
                  Partner with us to leverage our expertise and drive your business forward with cutting-edge technology solutions.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-full max-w-xl h-auto">
                  <Image 
                    src="/images/services2.png"
                    alt="Core Services Overview"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl object-cover w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation direction="up">
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
                  src="/images/services.png"
                  alt="AI-Assisted Development"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl object-cover w-full h-auto max-w-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation direction="up" once={false}>
        <section className="text-center py-16 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Have a Project in Mind?</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Let's discuss your requirements and how our expertise can bring your vision to life.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/pricing">Request a Quote</Link>
          </Button>
        </section>
      </ScrollAnimation>
    </div>
  );
}
