import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, User, Smartphone, MessageSquare, FileText } from 'lucide-react'; // Added User, Smartphone, MessageSquare, FileText

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Inventyk. Reach out for inquiries, collaborations, or to discuss your next project. Find our office location and contact details.',
};

export default function ContactPage() {
  // Simple form handler for demonstration - logs to console
  async function handleSubmit(formData: FormData) {
    "use server";
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    console.log("Contact Form Submitted:", { name, email, phone, subject, message });
    // Here you would typically send this data to a backend or email service,
    // or store it in Firebase Firestore/Realtime DB.
    // For example: await db.collection('contacts').add({ name, email, phone, subject, message, submittedAt: new Date() });

    // A toast message could be triggered on the client-side after this server action completes.
    // This requires more setup with form state management (e.g. react-hook-form or custom state).
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          We're here to help and answer any question you might have. We look forward to hearing from you!
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <MessageSquare className="w-7 h-7 mr-3 text-accent" /> Send us a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form action={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="flex items-center"><User className="w-4 h-4 mr-2 text-primary/70" />Full Name</Label>
                <Input type="text" id="name" name="name" placeholder="John Doe" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="flex items-center"><Mail className="w-4 h-4 mr-2 text-primary/70" />Email Address</Label>
                <Input type="email" id="email" name="email" placeholder="john.doe@example.com" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone" className="flex items-center"><Smartphone className="w-4 h-4 mr-2 text-primary/70" />Phone Number (Optional)</Label>
                <Input type="tel" id="phone" name="phone" placeholder="+91 12345 67890" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="subject" className="flex items-center"><FileText className="w-4 h-4 mr-2 text-primary/70" />Subject</Label>
                <Input type="text" id="subject" name="subject" placeholder="Inquiry about services" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message" className="flex items-center"><MessageSquare className="w-4 h-4 mr-2 text-primary/70" />Message</Label>
                <Textarea id="message" name="message" rows={5} placeholder="Your message..." required className="mt-1" />
              </div>
              <div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <MapPin className="w-7 h-7 mr-3 text-accent" /> Our Office
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Map showing Inventyk office location"
                width={600}
                height={400}
                className="rounded-md mb-6 object-cover w-full"
                data-ai-hint="map office location"
              />
              <div className="space-y-3 text-foreground/90">
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <span>123 Innovation Drive, Suite 404<br />Tech City, TX 75001, USA</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                  <span>(555) 123-4567</span>
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                  <span>info@inventyk.com</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
