
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Lightbulb, Zap, BrainCircuit, Users, Briefcase, Cloud } from 'lucide-react'; // Removed Code2Icon, Palette
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { TestimonialCard } from '@/components/sections/TestimonialCard';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Inventyk - Your partner in digital transformation. We innovate, integrate, and inspire to bring your ideas to life with AI-powered solutions and expert training.',
};

// SVG Logo Components
const NextjsLogo = ({ className }: { className?: string }) => (
  <svg aria-label="Next.js logomark" className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M64 0C28.654 0 0 28.654 0 64C0 99.346 28.654 128 64 128C99.346 128 128 99.346 128 64C128 28.654 99.346 0 64 0ZM87.003 90.858L69.791 61.669L51.507 90.858H38L64.461 48.531L71.689 37H85.198L57.28 82.249L75.587 51.045H89.096L87.003 90.858Z" fill="currentColor"/>
  </svg>
);

const ReactLogo = ({ className }: { className?: string }) => (
  <svg aria-label="React logomark" className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const FirebaseLogo = ({ className }: { className?: string }) => (
  <svg aria-label="Firebase logomark" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.96347 19.8671L13.148 4.2766L10.2899 3L3 15.634L5.96347 19.8671Z" fill="currentColor" style={{fillOpacity: 0.5}}/>
    <path d="M13.1387 4.2766L11.6055 15.4011L18.7032 10.8508L13.1387 4.2766Z" fill="currentColor" style={{fillOpacity: 0.8}}/>
    <path d="M5.96347 19.8671L12.5066 21L11.6055 15.4011L5.96347 19.8671Z" fill="currentColor"/>
  </svg>
);

const FlutterLogo = ({ className }: { className?: string }) => (
 <svg aria-label="Flutter logomark" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.314 0L6.06 8.256l4.128 4.128L22.938 0h-8.624z" fill="currentColor" style={{fillOpacity: 0.7}}/>
    <path d="M14.314 9.552l-4.128 4.128L6.06 17.808l8.256 8.256h8.624l-8.624-8.624z" fill="currentColor"/>
  </svg>
);

const PythonLogo = ({ className }: { className?: string }) => (
  <svg aria-label="Python logomark" className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
    <path d="M14.6 10.4c-.4-.4-.9-.6-1.4-.6H9.5v-2c0-.8-.7-1.5-1.5-1.5S6.5 7.6 6.5 8.4v4.1c0 .8.6 1.4 1.4 1.4h1.9c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4s-.2 1-.6 1.4c-.4.4-.9.6-1.4.6h-2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h.1c.8 0 1.5-.7 1.5-1.5S9.8 9.7 9 9.7H7.1c-.8 0-1.4-.6-1.4-1.4V4.5c0-.8.7-1.5 1.5-1.5S8.6 3.7 8.6 4.5v2h3.7c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4s-.2 1-.6 1.4zm2.9 3.1c.4.4.9.6 1.4.6h3.7v2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-4.1c0-.8-.6-1.4-1.4-1.4h-1.9c-.5 0-1-.2-1.4-.6-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4c.4-.4.9-.6 1.4-.6h2c.8 0 1.5.7 1.5 1.5S19.3 11 18.5 11h-.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h1.9c.8 0 1.4.6 1.4 1.4v3.8c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-2h-3.7c-.5 0-1-.2-1.4-.6-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4z"/>
  </svg>
);

const JavaLogo = ({ className }: { className?: string }) => (
  <svg aria-label="Java logomark" className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7V5c0-1.1-.9-2-2-2zm.5 7h-1.5V5h1.5v5zM3 19h18v2H3v-2z" />
    <path d="M11 19h2v2h-2z" fillOpacity=".3" />
    <path d="M6 19h2v2H6zm9 0h2v2h-2z" fillOpacity=".3"/>
  </svg>
);

const TailwindLogo = ({ className }: { className?: string }) => (
  <svg aria-label="Tailwind CSS logomark" className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
  </svg>
);


const projects = [
  {
    title: 'AI-Powered E-commerce Platform',
    description: 'Developed a scalable e-commerce solution with personalized recommendations and an AI chatbot for customer support, boosting sales by 25%.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce platform online store',
    tags: ['Next.js', 'Firebase', 'Genkit AI', 'Tailwind CSS'],
    liveLink: '#', 
  },
  {
    title: 'Corporate Training Portal',
    description: 'Created an interactive online portal for employee training and development, featuring course management, progress tracking, and certification.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'training portal online learning',
    tags: ['React', 'Node.js', 'MongoDB', 'ShadCN UI'],
    liveLink: '#',
  },
  {
    title: 'Mobile Health & Wellness App',
    description: 'Built a cross-platform mobile app using FlutterFlow for activity tracking, personalized fitness plans, and community engagement.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app health fitness',
    tags: ['FlutterFlow', 'Firebase', 'AI Insights'],
    liveLink: '#',
  },
];

const testimonials = [
  {
    quote: "Inventyk transformed our online presence with their innovative solutions and rapid development. Their team is professional and incredibly skilled.",
    name: 'Jane Doe',
    company: 'CEO, Tech Solutions Inc.',
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarHint: 'woman ceo portrait'
  },
  {
    quote: "The AI-assisted development approach by Inventyk was a game-changer for our project timeline. We launched ahead of schedule with a superior product.",
    name: 'John Smith',
    company: 'CTO, Innovate Startups',
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarHint: 'man cto portrait'
  },
  {
    quote: "Their training programs are top-notch. Our team gained valuable skills in a very short amount of time thanks to Inventyk's expert instructors.",
    name: 'Alice Brown',
    company: 'HR Manager, Future Corp',
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarHint: 'woman manager portrait'
  },
];

const techStack = [
  { name: 'Next.js', icon: NextjsLogo, category: 'Frontend & Full-Stack' },
  { name: 'React', icon: ReactLogo, category: 'Frontend' },
  { name: 'Genkit AI', icon: BrainCircuit, category: 'Artificial Intelligence' },
  { name: 'Firebase', icon: FirebaseLogo, category: 'Backend & Database' },
  { name: 'FlutterFlow', icon: FlutterLogo, category: 'Low-Code Mobile' },
  { name: 'Python', icon: PythonLogo, category: 'Backend & AI' },
  { name: 'Java', icon: JavaLogo, category: 'Backend' },
  { name: 'Tailwind CSS', icon: TailwindLogo, category: 'Styling' },
  { name: 'Cloud Platforms', icon: Cloud, category: 'Infrastructure' },
];


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary mb-6">
            Innovate. Integrate. Inspire.
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
            Inventyk is your trusted partner for AI-powered digital solutions, bespoke software development, and expert tech training. We turn complex challenges into growth opportunities.
          </p>
          <div className="space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 flex flex-col sm:flex-row items-center justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
              <Link href="/services">Discover Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto">
              <Link href="/pricing">View Pricing & Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Choose Inventyk?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg">
              <CardHeader>
                <Lightbulb className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle className="text-primary">Innovative Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We leverage AI and the latest technologies to create groundbreaking solutions tailored to your unique needs.</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <Zap className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle className="text-primary">Rapid Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Our agile, low-code, and AI-assisted approach ensures quick turnaround times without compromising on quality.</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <CheckCircle className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle className="text-primary">Client-Centric</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Your success is our priority. We work closely with you to understand and achieve your goals effectively.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-4 flex items-center justify-center">
            <Briefcase className="w-10 h-10 mr-3 text-accent" />
            Our Recent Projects
          </h2>
          <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-12">
            Discover how we've helped businesses like yours achieve their digital ambitions with our innovative solutions.
          </p>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 mr-3 text-accent" />
            Our Technology Expertise
          </h2>
          <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-12">
            We harness the power of modern technologies and AI to build robust, scalable, and innovative solutions.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center p-4 bg-card shadow-md rounded-lg hover:shadow-xl transition-shadow">
                <tech.icon className="w-10 h-10 text-accent mb-2" />
                <p className="text-sm font-medium text-primary">{tech.name}</p>
                <p className="text-xs text-muted-foreground">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-4 flex items-center justify-center">
            <Users className="w-10 h-10 mr-3 text-accent" />
            What Our Clients Say
          </h2>
          <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-12">
            Hear from businesses who have partnered with Inventyk and experienced transformative results.
          </p>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-8">
            Let's discuss how Inventyk can help you achieve new heights of success with our expert services and training.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/pricing#contact-us-section">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
