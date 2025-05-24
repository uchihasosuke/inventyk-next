
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code, Briefcase, Laptop, BookOpen, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Training & Internships',
  description: 'Explore courses in Python, Java, C++, and discover industrial training and internship opportunities at Inventyk.',
};

const courses = [
  {
    title: 'Python Programming Masterclass',
    icon: Laptop, // Using Laptop as a generic icon for programming
    description: 'Comprehensive Python course covering fundamentals to advanced topics, including web development and data science.',
    imageHint: 'python code'
  },
  {
    title: 'Java Full-Stack Development',
    icon: Code,
    description: 'Learn to build robust enterprise-level applications with Java, Spring Boot, and modern frontend frameworks.',
    imageHint: 'java code'
  },
  {
    title: 'C++ for Systems Programming',
    icon: Laptop, // Using Laptop
    description: 'Dive deep into C++ for high-performance computing, game development, and systems-level programming.',
    imageHint: 'c++ code'
  },
];

export default function TrainingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Training & Internships</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Elevate your skills with our expert-led courses and gain real-world experience through our training and internship programs.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-12 flex items-center justify-center">
          <BookOpen className="w-10 h-10 mr-4 text-accent" /> Our Core Courses
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                 <div className="p-3 bg-accent/10 rounded-full mb-3">
                    <course.icon className="w-10 h-10 text-accent" />
                  </div>
                <CardTitle className="text-xl text-primary">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center text-foreground/80">{course.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-16 items-center bg-primary/5 p-8 md:p-12 rounded-lg">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-semibold text-primary mb-4 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-accent" /> Industrial Training
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Our industrial training programs are designed to bridge the gap between academic learning and industry demands. Get hands-on experience with live projects and mentorship from seasoned professionals.
          </p>
          <h2 className="text-3xl font-semibold text-primary mb-4 mt-6 flex items-center">
            <Users className="w-8 h-8 mr-3 text-accent" /> Internship Opportunities
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Kickstart your career with an Inventyk internship. Work on cutting-edge projects, contribute to real products, and learn from the best in the industry. We offer internships across various domains.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="https://placehold.co/600x450.png"
            alt="Students in a training session"
            width={600}
            height={450}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="students training class"
          />
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready to Advance Your Career?</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          Join our programs to acquire in-demand skills and open doors to exciting career paths in the tech industry.
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Join Now
        </Button>
      </section>
    </div>
  );
}
