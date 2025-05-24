
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, User, Smartphone, MessageSquare, FileText, Send } from 'lucide-react';
import { db } from '@/lib/firebase'; // Import Firestore instance
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ContactForm } from '@/components/sections/ContactForm'; // We'll create this client component

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Inventyk. Reach out for inquiries, collaborations, or to discuss your next project. Find our office location and contact details.',
};

// Server action to handle form submission
export async function handleContactSubmit(formData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  "use server";
  try {
    await addDoc(collection(db, 'contacts'), {
      ...formData,
      submittedAt: serverTimestamp(),
    });
    console.log("Contact Form Submitted to Firestore:", formData);
    return { success: true, message: "Your message has been sent successfully! We'll get back to you soon." };
  } catch (error) {
    console.error("Error submitting contact form to Firestore:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
    return { success: false, message: `Failed to send message: ${errorMessage}` };
  }
}

export default function ContactPage() {
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
            <ContactForm onSubmitAction={handleContactSubmit} />
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
                  <span>inventykaipoweredsolution@gmail.com</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
