
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Keep Card imports
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react'; // Assuming GitHub for code link
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  videoUrl: string; // Changed from imageUrl to videoUrl
  tags: string[];
  liveLink?: string;
  codeLink?: string; // Optional link to GitHub or similar
}

export function ProjectCard({ title, description, videoUrl, tags, liveLink, codeLink }: ProjectCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader className="p-0 flex items-center justify-center overflow-hidden"> {/* Added overflow-hidden */}
        <video
          src={videoUrl} // Use videoUrl
          height={350} // Adjusted for a more typical card image ratio
          className="object-cover w-full h-48 md:h-56" // Fixed height for consistency
        />
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <CardTitle className="text-xl text-primary mb-2">{title}</CardTitle>
        <CardDescription className="text-sm text-foreground/80 mb-4 flex-grow">{description}</CardDescription> {/* Added closing tag */}
        
        <div className="mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="mr-2 mb-2 bg-accent/10 text-accent border-accent/20">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-4 border-t border-border">
          {liveLink && liveLink !== '#' && (
            <Button asChild variant="outline" size="sm" className="flex-1 min-w-[120px] border-primary text-primary hover:bg-primary/10">
              <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> View Live
              </Link>
            </Button>
          )}
          {codeLink && codeLink !== '#' && (
             <Button asChild variant="ghost" size="sm" className="flex-1 min-w-[120px] text-foreground/70 hover:text-primary hover:bg-primary/5">
              <Link href={codeLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Code
              </Link>
            </Button>
          )}
        </div>
         {(!liveLink || liveLink === '#') && (!codeLink || codeLink === '#') && (
            <p className="text-xs text-muted-foreground mt-2 text-center">Links coming soon.</p>
        )}
      </CardContent>
    </Card>
  );
}
