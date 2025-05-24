import type { Metadata } from 'next';
import Image from 'next/image';
import { TeamMemberCard } from '@/components/sections/TeamMemberCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users, Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Inventyk\'s vision, mission, and the passionate team driving innovation and excellence in digital solutions.',
};

const teamMembers = [
  {
    imageUrl: 'https://placehold.co/300x300.png',
    name: 'Dr. Evelyn Reed',
    role: 'Founder & CEO',
    bio: 'Evelyn is a visionary leader with over 15 years of experience in tech innovation and strategic business growth.',
    imageHint: 'woman ceo'
  },
  {
    imageUrl: 'https://placehold.co/300x300.png',
    name: 'Marcus Chen',
    role: 'Chief Technology Officer',
    bio: 'Marcus spearheads our technological advancements, ensuring Inventyk stays at the forefront of digital solutions.',
    imageHint: 'man cto'
  },
  {
    imageUrl: 'https://placehold.co/300x300.png',
    name: 'Aisha Khan',
    role: 'Head of Product',
    bio: 'Aisha translates complex user needs into intuitive and impactful product experiences.',
    imageHint: 'woman product head'
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Inventyk</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          We are a dynamic team of innovators, thinkers, and creators passionate about leveraging technology to solve real-world problems and drive business success.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="Inventyk Team Collaboration" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="team collaboration office" 
          />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-primary mb-3 flex items-center">
              <Eye className="w-8 h-8 mr-3 text-accent" /> Our Vision
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              To be a leading force in digital innovation, empowering businesses globally to achieve their full potential through transformative technology and strategic insights.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-primary mb-3 flex items-center">
              <Target className="w-8 h-8 mr-3 text-accent" /> Our Mission
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              To deliver cutting-edge, reliable, and scalable digital solutions with exceptional service, fostering sustainable growth and success for our clients in an ever-evolving technological landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 flex items-center justify-center">
          <Users className="w-10 h-10 mr-4 text-accent" /> Meet Our Leadership
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>
      
      <section className="text-center py-12 bg-primary/5 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Join Our Journey</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          Interested in collaborating or becoming part of our innovative team? We'd love to hear from you.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/contact">Connect With Us</Link>
        </Button>
      </section>
    </div>
  );
}
