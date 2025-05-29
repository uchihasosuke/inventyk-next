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
          onClick={() => window.location.href = 'mailto:inventyktraining@gmail.com?subject=Training Program Inquiry'}
        >
          <Mail className="w-5 h-5 mr-2" />
          Email Us
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10"
          onClick={() => window.open('https://wa.me/7020048730?text=Hi%20Inventyk%2C%0A%0AI%20am%20interested%20in%20your%20training%20programs.%20I%20would%20like%20to%20learn%20more%20about%20the%20courses%20and%20fees.%0A%0ARegards%2C&send=true', '_blank')}
        >
          <Phone className="w-5 h-5 mr-2" />
          Message on WhatsApp
        </Button>
      </div>
    </div>
  );
} 