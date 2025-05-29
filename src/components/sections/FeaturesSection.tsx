'use client';

import { CircleCheckBig, Lightbulb, Zap } from 'lucide-react';
import dynamic from 'next/dynamic';
import { AdvancedScrollAnimation } from '@/components/ui/motion/AdvancedScrollAnimation';

const AnimatedFeatureCard = dynamic(() => import('./AnimatedFeatureCard'), {
  ssr: false
});

export function FeaturesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AdvancedScrollAnimation effect="fade">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Choose Inventyk?</h2>
        </AdvancedScrollAnimation>
        
        <div className="grid md:grid-cols-3 gap-8">
          <AdvancedScrollAnimation effect="slide-up" delay={0.2}>
            <AnimatedFeatureCard
              icon={<Lightbulb className="w-12 h-12 text-accent" />}
              title="Innovative Solutions"
              description="We leverage AI and the latest technologies to create groundbreaking solutions tailored to your unique needs."
            />
          </AdvancedScrollAnimation>

          <AdvancedScrollAnimation effect="slide-up" delay={0.4}>
            <AnimatedFeatureCard
              icon={<Zap className="w-12 h-12 text-accent" />}
              title="Rapid Development"
              description="Our agile, low-code, and AI-assisted approach ensures quick turnaround times without compromising on quality."
            />
          </AdvancedScrollAnimation>

          <AdvancedScrollAnimation effect="slide-up" delay={0.6}>
            <AnimatedFeatureCard
              icon={<CircleCheckBig className="w-12 h-12 text-accent" />}
              title="Client-Centric"
              description="Your success is our priority. We work closely with you to understand and achieve your goals effectively."
            />
          </AdvancedScrollAnimation>
        </div>
      </div>
    </section>
  );
} 