import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code, Briefcase, Laptop, BookOpen, Users, Mail, Phone } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { TrainingContact } from '@/components/sections/TrainingContact';

export const metadata: Metadata = {
  title: 'Training & Internships',
  description: 'Explore courses in Python, Java, C++, and discover industrial training and internship opportunities at Inventyk.',
};

const courses = [
  {
    title: 'Python Programming Masterclass',
    icon: Laptop, 
    description: 'Comprehensive Python course covering fundamentals to advanced topics, including web development and data science.',
    imageHint: 'python code'
  },
  {
    title: 'Data Structures with Python',
    icon: Code,
    description: 'Master essential data structures and algorithms using Python. Perfect for interview preparation and problem-solving skills.',
    imageHint: 'python algorithms'
  },
  {
    title: 'Flutter App Development',
    icon: Laptop,
    description: 'Learn to build beautiful cross-platform mobile apps for iOS and Android using Flutter and Dart.',
    imageHint: 'flutter code'
  },
  {
    title: 'Java Full-Stack Development',
    icon: Code,
    description: 'Learn to build robust enterprise-level applications with Java, Spring Boot, and modern frontend frameworks.',
    imageHint: 'java code'
  },
  {
    title: 'C Programming Fundamentals',
    icon: Laptop,
    description: 'Master the basics of programming with C, including memory management, pointers, and system programming concepts.',
    imageHint: 'c code'
  },
  {
    title: 'C++ for Systems Programming',
    icon: Laptop, 
    description: 'Dive deep into C++ for high-performance computing, game development, and systems-level programming.',
    imageHint: 'c++ code'
  },
];

export default function TrainingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <ScrollAnimation direction="down">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Training & Internships</h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Elevate your skills with our expert-led courses and gain real-world experience through our training and internship programs.
          </p>
        </section>
      </ScrollAnimation>

      <section className="mb-16">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold text-primary text-center mb-12 flex items-center justify-center">
            <BookOpen className="w-10 h-10 mr-4 text-accent" /> Our Core Courses
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <ScrollAnimation 
              key={course.title}
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
              delay={0.2 * (index + 1)}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
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
            </ScrollAnimation>
          ))}
        </div>
      </section>

      <ScrollAnimation direction="up">
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
              src="/images/training.png"
              alt="Industrial Training & Internship"
              width={600}
              height={450}
              className="rounded-lg shadow-xl object-cover w-full h-auto max-w-xl"
              priority
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation direction="up" once={false}>
        <section className="text-center py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready to Advance Your Career?</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Join our programs to acquire in-demand skills and open doors to exciting career paths in the tech industry.
          </p>
          <TrainingContact />
        </section>
      </ScrollAnimation>
    </div>
  );
}
