
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Lightbulb, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Inventyk - Your partner in digital transformation. We innovate, integrate, and inspire to bring your ideas to life.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary mb-6">
            Innovate. Integrate. Inspire.
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
            Inventyk is your trusted partner in navigating the complexities of the digital world. We craft bespoke solutions that drive growth and efficiency.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/services">Discover Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Get in Touch
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
                <CardDescription>We leverage the latest technologies to create groundbreaking solutions tailored to your unique needs.</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <Zap className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle className="text-primary">Rapid Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Our agile approach ensures quick turnaround times without compromising on quality.</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <CheckCircle className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle className="text-primary">Client-Centric</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Your success is our priority. We work closely with you to understand and achieve your goals.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-8">
            Let's discuss how Inventyk can help you achieve new heights of success.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
