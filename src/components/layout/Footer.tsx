
import Link from 'next/link';
import { Linkedin, Instagram } from 'lucide-react';

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
        <div className="text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Inventyk. All rights reserved.</p>
          <p className="mt-1">Innovating the Future, Together.</p>
        </div>
      </div>
    </footer>
  );
}
