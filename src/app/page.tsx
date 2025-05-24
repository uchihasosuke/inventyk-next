
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Lightbulb, Zap, BrainCircuit, Users, Briefcase, Cloud } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { TestimonialCard } from '@/components/sections/TestimonialCard';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Inventyk - Your partner in digital transformation. We innovate, integrate, and inspire to bring your ideas to life with AI-powered solutions and expert training.',
};

// SVG Logo Components with specific brand colors

const NextjsLogo = ({ className }: { className?: string }) => (
  <svg aria-label="Next.js logomark" className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M64 0C28.654 0 0 28.654 0 64C0 99.346 28.654 128 64 128C99.346 128 128 99.346 128 64C128 28.654 99.346 0 64 0ZM87.003 90.858L69.791 61.669L51.507 90.858H38L64.461 48.531L71.689 37H85.198L57.28 82.249L75.587 51.045H89.096L87.003 90.858Z" fill="black"/>
  </svg>
);

const ReactLogo = ({ className }: { className?: string }) => (
  <svg aria-label="React logomark" className={className} viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const FirebaseLogo = ({ className }: { className?: string }) => (
  <svg aria-label="Firebase logomark" className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.96347 19.8671L13.148 4.2766L10.2899 3L3 15.634L5.96347 19.8671Z" fill="#FFA000"/> {/* Orange */}
    <path d="M13.1387 4.2766L11.6055 15.4011L18.7032 10.8508L13.1387 4.2766Z" fill="#FFCA28"/> {/* Yellow */}
    <path d="M5.96347 19.8671L12.5066 21L11.6055 15.4011L5.96347 19.8671Z" fill="#F57F17"/> {/* Dark Orange */}
  </svg>
);

const FlutterLogo = ({ className }: { className?: string }) => (
 <svg aria-label="Flutter logomark" className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.314 0L6.06 8.256l4.128 4.128L22.938 0h-8.624z" fill="#027DFD"/>
    <path d="M14.314 9.552l-4.128 4.128L6.06 17.808l8.256 8.256h8.624l-8.624-8.624z" fill="#027DFD"/> {/* Adjusted to #027DFD from #40C4FF for a more common Flutter blue */}
  </svg>
);

const PythonLogo = ({ className }: { className?: string }) => (
  <svg aria-label="Python logomark" className={className} viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    {/* Blue part */}
    <path d="M120,23.4c-26.1,0-50,9.3-68.7,25.1c-2,1.7-3.8,3.4-5.6,5.3L28,71.6c0,0,0.1,0,0.1-0.1c-2.7,4.4-4.9,9.2-6.3,14.2
      c-0.5,1.6-0.9,3.3-1.2,5c-2.1,10.3-2.1,21,0,31.3c0.3,1.7,0.7,3.3,1.2,5c1.5,5,3.6,9.8,6.3,14.2c0,0-0.1-0.1-0.1-0.1l17.6,17.6
      c1.8,1.8,3.6,3.6,5.6,5.3c18.7,15.8,42.6,25.1,68.7,25.1s50-9.3,68.7-25.1c2-1.7,3.8-3.4,5.6-5.3l17.6-17.6c0,0,0,0,0,0
      c2.7-4.4,4.9-9.2,6.3-14.2c0.5-1.6,0.9-3.3,1.2-5c2.1-10.3,2.1-21,0-31.3c-0.3-1.7-0.7-3.3-1.2-5c-1.5-5-3.6-9.8-6.3-14.2
      c0,0,0,0,0,0l-17.6-17.6c-1.8-1.8-3.6-3.6-5.6-5.3C170,32.7,146.1,23.4,120,23.4z M120,41.8c7.6,0,14.2,6.6,14.2,14.2
      s-6.6,14.2-14.2,14.2s-14.2-6.6-14.2-14.2S112.4,41.8,120,41.8z M120,198.2c-7.6,0-14.2-6.6-14.2-14.2c0-7.6,6.6-14.2,14.2-14.2
      s14.2,6.6,14.2,14.2C134.2,191.6,127.6,198.2,120,198.2z M166.8,166.8c-21.7,12.4-48.8,12.4-73.5,0L76.4,150
      c11.2,7.3,24.1,11.1,37.4,11.1c0.5,0,1,0,1.4-0.1l0,0h1.4c0.5,0,1,0,1.4,0.1c13.3,0,26.2-3.9,37.4-11.1L166.8,166.8z M166.8,73.2
      l16.8,16.8c-11.2-7.3-24.1-11.1-37.4-11.1c-0.5,0-1,0-1.4,0.1h-2.9c-0.5,0-1,0-1.4-0.1c-13.3,0-26.2,3.9-37.4,11.1L86.2,73.2
      C107.9,60.8,135.1,60.8,160,73.2H166.8z" fill="#3776AB"/>
    {/* Yellow part */}
    <path d="M120,23.4c26.1,0,50,9.3,68.7,25.1c2,1.7,3.8,3.4,5.6,5.3l17.6,17.6c0,0,0,0,0,0c2.7,4.4,4.9,9.2,6.3,14.2
      c0.5,1.6,0.9,3.3,1.2,5c2.1,10.3,2.1,21,0,31.3c-0.3,1.7-0.7,3.3-1.2,5c-1.5,5-3.6,9.8-6.3,14.2c0,0,0,0,0,0L198,168.4
      c-1.8,1.8-3.6,3.6-5.6,5.3c-18.7,15.8-42.6,25.1-68.7,25.1v-36.3c13.3,0,26.2-3.9,37.4-11.1l16.8-16.8
      c-12.4-21.7-12.4-48.8,0-73.5l-16.8-16.8C146.1,32.7,133.3,23.4,120,23.4V23.4z M120,70.1c7.6,0,14.2-6.6,14.2-14.2
      S127.6,41.8,120,41.8v28.3H120z M120,169.9v28.3c7.6,0,14.2-6.6,14.2-14.2C134.2,176.4,127.6,169.9,120,169.9z" fill="#FFD43B"/>
  </svg>
);

const JavaLogo = ({ className }: { className?: string }) => (
  <svg aria-label="Java logomark" className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {/* Cup body */}
    <path d="M5.636 17.014C4.01 15.483 3 13.362 3 11c0-4.411 3.589-8 8-8s8 3.589 8 8c0 2.362-1.01 4.483-2.636 6.014A7.952 7.952 0 0 1 19 11c0-3.86-3.14-7-7-7s-7 3.14-7 7c0 1.426.428 2.756 1.168 3.865" fill="#5382A1"/>
    {/* Coffee */}
    <path d="M6.036 10.752c.15-.608.371-1.189.652-1.737A7.963 7.963 0 0 1 11 5a7.96 7.96 0 0 1 4.313 4.015c.28.548.502 1.129.651 1.737" fill="#EDB571"/>
    {/* Handle */}
    <path d="M19 11a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1v-5h1z" fill="#5382A1"/>
    {/* Saucer */}
    <path d="M2 18h18a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z" fill="#B0BEC5"/>
    {/* Steam */}
    <path d="M9.5 2a.5.5 0 0 1 .5.5V5a.5.5 0 0 1-1 0V2.5a.5.5 0 0 1 .5-.5z" fill="#F89820"/>
    <path d="M12.5 1a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V1.5a.5.5 0 0 1 .5-.5z" fill="#F89820"/>
    <path d="M15.5 2a.5.5 0 0 1 .5.5V5a.5.5 0 0 1-1 0V2.5a.5.5 0 0 1 .5-.5z" fill="#F89820"/>
  </svg>
);

const TailwindLogo = ({ className }: { className?: string }) => (
  <svg aria-label="Tailwind CSS logomark" className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38BDF8"/>
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
  { name: 'Genkit AI', icon: BrainCircuit, category: 'Artificial Intelligence' }, // Lucide icon, uses text-accent
  { name: 'Firebase', icon: FirebaseLogo, category: 'Backend & Database' },
  { name: 'FlutterFlow', icon: FlutterLogo, category: 'Low-Code Mobile' },
  { name: 'Python', icon: PythonLogo, category: 'Backend & AI' },
  { name: 'Java', icon: JavaLogo, category: 'Backend' },
  { name: 'Tailwind CSS', icon: TailwindLogo, category: 'Styling' },
  { name: 'Cloud Platforms', icon: Cloud, category: 'Infrastructure' }, // Lucide icon, uses text-accent
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
                <tech.icon className="w-10 h-10 mb-2 text-accent" /> {/* text-accent will apply to Lucide icons, ignored by SVGs with hardcoded fills */}
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
