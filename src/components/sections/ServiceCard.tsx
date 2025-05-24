import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="items-center text-center">
        <div className="p-4 bg-accent/10 rounded-full mb-4">
          <Icon className="w-10 h-10 text-accent" />
        </div>
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-foreground/80">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
