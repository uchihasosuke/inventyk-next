
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleCheckBig, Lightbulb, Zap, Users, Briefcase } from 'lucide-react'; 
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { TestimonialCard } from '@/components/sections/TestimonialCard';
import { Logo } from '@/components/Logo'; 

// Assuming filenames like nextjs.svg, react.svg, etc.
// Adjust paths if your filenames are different.
import NextjsLogo from '@/components/icons/nextjs.svg';
import ReactLogo from '@/components/icons/react.svg';
import FirebaseLogo from '@/components/icons/firebase.svg';
import FlutterLogo from '@/components/icons/flutter.svg';
import PythonLogo from '@/components/icons/python.svg';
import NodejsLogo from '@/components/icons/nodejs.svg';
import GenkitAILogo from '@/components/icons/genkitai.svg';


export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Inventyk - Your partner in digital transformation. We innovate, integrate, and inspire to bring your ideas to life with AI-powered solutions and expert training.',
};

const projects = [
  {
    title: 'SmartLibTrack',
    description: 'SmartLibTrack is a smart library entry/exit system that uses ID scan and camera capture to track student visits in real-time.',
    imageUrl: '/images/projects/smartlibtrack-showcase.png', 
    imageHint: 'app login screen',
    tags: ['Next.js', 'Genkit AI', 'Tailwind CSS', 'Firebase'],
    liveLink: 'https://libtrack-agppi.vercel.app/admin/dashboard',
  },
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
    description: 'Built a cross-platform mobile app using Flutter for activity tracking, personalized fitness plans, and community engagement.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app health fitness',
    tags: ['Flutter', 'Firebase', 'AI Insights'],
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
  { name: 'Node.js', icon: NodejsLogo, category: 'Backend' },
  { name: 'Python', icon: PythonLogo, category: 'Backend & AI' },
  { name: 'Flutter', icon: FlutterLogo, category: 'Mobile Development' },
  { name: 'Genkit AI', icon: GenkitAILogo, category: 'Artificial Intelligence' },
  { name: 'Firebase', icon: FirebaseLogo, category: 'Backend & Database' },
];


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mb-8"> 
            <Logo />
          </div>
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
                <CircleCheckBig className="w-12 h-12 mx-auto text-accent mb-4" />
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
            {techStack.map((tech) => {
              const IconToRender = tech.icon;
              const isFunctionComponent = typeof IconToRender === 'function';
              const isAssetObject = typeof IconToRender === 'object' && IconToRender && (IconToRender as any).src;
              
              const iconSizeClass = 'w-10 h-10'; 
              const imageRenderWidth = 40; 
              const imageRenderHeight = 40; 
              
              const finalIconDisplayClasses = `${iconSizeClass} mb-2`;

              return (
                <div key={tech.name} className="flex flex-col items-center p-4 bg-card shadow-md rounded-lg hover:shadow-xl transition-shadow">
                  {isFunctionComponent ? (
                    <IconToRender className={finalIconDisplayClasses} />
                  ) : isAssetObject ? (
                    <Image 
                      src={(IconToRender as any).src} 
                      alt={tech.name} 
                      width={imageRenderWidth} 
                      height={imageRenderHeight} 
                      className="mb-2" 
                    />
                  ) : (
                    <div className={`${finalIconDisplayClasses} text-muted-foreground`} aria-label={tech.name}>?</div>
                  )}
                  <p className="text-sm font-medium text-primary">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </div>
              );
            })}
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

