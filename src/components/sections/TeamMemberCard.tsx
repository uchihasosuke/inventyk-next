import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface TeamMemberCardProps {
  imageUrl: string;
  name: string;
  role: string;
  bio: string;
  imageHint?: string;
}

export function TeamMemberCard({ imageUrl, name, role, bio, imageHint }: TeamMemberCardProps) {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="items-center">
        <Image
          src={imageUrl}
          alt={`Photo of ${name}`}
          width={120}
          height={120}
          className="rounded-full mb-4 border-4 border-primary/20 object-cover"
          data-ai-hint={imageHint || "person portrait"}
        />
        <CardTitle className="text-xl text-primary">{name}</CardTitle>
        <CardDescription className="text-accent font-medium">{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/80">{bio}</p>
      </CardContent>
    </Card>
  );
}
