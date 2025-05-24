
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
    <path d="M14.314 9.552l-4.128 4.128L6.06 17.808l8.256 8.256h8.624l-8.624-8.624z" fill="#027DFD"/>
  </svg>
);

const PythonLogo = ({ className }: { className?: string }) => (
  <svg aria-label="Python logomark" className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* Blue snake */}
      <path d="M12.5844 10.0898C14.3644 10.0898 15.8244 11.5498 15.8244 13.3298C15.8244 14.7098 15.0144 15.9098 13.8644 16.5298V19.6498H10.2944V16.5198C9.15438 15.8998 8.34438 14.7098 8.34438 13.3198C8.34438 11.5498 9.80438 10.0898 11.5844 10.0898H12.5844Z" fill="#3776AB"/>
      <path d="M11.9944 6.96982C12.9944 6.96982 13.7644 6.20982 13.7644 5.20982C13.7644 4.20982 12.9944 3.44982 11.9944 3.44982C10.9944 3.44982 10.2244 4.20982 10.2244 5.20982C10.2244 6.20982 10.9944 6.96982 11.9944 6.96982Z" fill="#3776AB"/>
      {/* Yellow snake */}
      <path d="M11.4156 13.91C9.63562 13.91 8.17562 12.45 8.17562 10.67C8.17562 9.29 8.98563 8.09 10.1356 7.47V4.35H13.7056V7.48C14.8456 8.1 15.6556 9.29 15.6556 10.68C15.6556 12.45 14.1956 13.91 12.4156 13.91H11.4156Z" fill="#FFD43B"/>
      <path d="M12.0056 17.03C11.0056 17.03 10.2356 17.79 10.2356 18.79C10.2356 19.79 11.0056 20.55 12.0056 20.55C13.0056 20.55 13.7756 19.79 13.7756 18.79C13.7756 17.79 13.0056 17.03 12.0056 17.03Z" fill="#FFD43B"/>
    </g>
  </svg>
);

const JavaLogo = ({ className }: { className?: string }) => (
  <svg aria-label="Java logomark" className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V6Z" fill="#5382A1"/> {/* Blue cup */}
    <path d="M20 8H22C22.5523 8 23 8.44772 23 9V13C23 13.5523 22.5523 14 22 14H20V8Z" fill="#5382A1"/> {/* Blue handle */}
    <path d="M2 20C2 19.4477 2.44772 19 3 19H21C21.5523 19 22 19.4477 22 20V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V20Z" fill="#B0BEC5"/> {/* Grey saucer */}
    <path d="M8 4.5C8 3.94772 8.44772 3.5 9 3.5C9.55228 3.5 10 3.94772 10 4.5C10 5.05228 9.55228 5.5 9 5.5C8.44772 5.5 8 5.05228 8 4.5Z" fill="#F89820"/> {/* Orange steam */}
    <path d="M11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3Z" fill="#F89820"/> {/* Orange steam */}
    <path d="M14 4.5C14 3.94772 14.4477 3.5 15 3.5C15.5523 3.5 16 3.94772 16 4.5C16 5.05228 15.5523 5.5 15 5.5C14.4477 5.5 14 5.05228 14 4.5Z" fill="#F89820"/> {/* Orange steam */}
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
