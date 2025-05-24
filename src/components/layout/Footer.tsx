
import Link from 'next/link';
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link
            href="https://www.linkedin.com/in/inventyk-ai-powered-solution-102056367"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Inventyk LinkedIn Profile"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.instagram.com/inventyk_ai_powered_solution?igsh=MWlhaHg4b2o0MTdqbA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Inventyk Instagram Profile"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </Link>
        </div>

        <div className="text-sm text-muted-foreground space-y-2 mb-6">
          <a href="mailto:inventykaipoweredsolution@gmail.com" className="flex items-center justify-center hover:text-primary transition-colors">
            <Mail className="h-4 w-4 mr-2" />
            inventykaipoweredsolution@gmail.com
          </a>
          <a href="tel:+919226366202" className="flex items-center justify-center hover:text-primary transition-colors">
            <Phone className="h-4 w-4 mr-2" />
            +91 9226366202
          </a>
          <p className="flex items-center justify-center">
            <MapPin className="h-4 w-4 mr-2" />
            Solapur - 413006, India
          </p>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Inventyk. All rights reserved.</p>
          <p className="mt-1">Innovating the Future, Together.</p>
        </div>
      </div>
    </footer>
  );
}
