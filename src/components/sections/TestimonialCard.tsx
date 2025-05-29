import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  avatarUrl?: string;
  avatarHint?: string;
}

export function TestimonialCard({ quote, name, company, avatarUrl, avatarHint }: TestimonialCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card">
      <CardContent className="p-6 flex flex-col flex-grow items-center text-center">
        <Quote className="w-10 h-10 text-accent mb-4 transform rotate-180" />
        <CardDescription className="text-base text-foreground/80 italic mb-6 flex-grow">
          "{quote}"
        </CardDescription>
        <div className="flex flex-col items-center mt-auto">
          {avatarUrl && (
            <Image
              src={avatarUrl}
              alt={`Avatar of ${name}`}
              width={72}
              height={72}
              className="rounded-full mb-3 border-2 border-primary/20 object-cover"
              data-ai-hint={avatarHint || "person avatar"}
            />
          )}
          <CardTitle className="text-lg font-semibold text-primary">{name}</CardTitle>
          <p className="text-sm text-accent">{company}</p>
        </div>
      </CardContent>
    </Card>
  );
}
