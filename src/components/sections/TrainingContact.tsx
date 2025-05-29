'use client';

import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

export function TrainingContact() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-lg font-semibold text-primary">Training Inquiries:</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={() => window.location.href = 'mailto:training@inventyk.com?subject=Training Program Inquiry'}
        >
          <Mail className="w-5 h-5 mr-2" />
          Email Us
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10"
          onClick={() => window.location.href = 'tel:+919284089109'}
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Us
        </Button>
      </div>
    </div>
  );
} 