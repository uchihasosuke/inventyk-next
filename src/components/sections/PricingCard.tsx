
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  title: string;
  price: string;
  pricePeriod?: string;
  features: string[];
  buttonText: string;
  buttonLink?: string; // Link for the button, if it's a direct navigation
  isFeatured?: boolean;
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "link";
  onButtonClick?: () => void; // For custom actions like scrolling
}

export function PricingCard({
  title,
  price,
  pricePeriod = '/month',
  features,
  buttonText,
  buttonLink, // Removed default to handle it based on onButtonClick presence
  isFeatured = false,
  buttonVariant = "default",
  onButtonClick,
}: PricingCardProps) {
  const effectiveButtonVariant = isFeatured ? "default" : (buttonVariant === "default" ? "outline" : buttonVariant);
  const buttonClasses = isFeatured 
    ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
    : (effectiveButtonVariant === "outline" ? 'border-primary text-primary hover:bg-primary/10' : 'bg-primary hover:bg-primary/90 text-primary-foreground');


  return (
    <Card className={`shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full ${isFeatured ? 'border-2 border-accent relative' : 'border-border'}`}>
      {isFeatured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-3 py-1 text-sm font-semibold rounded-full shadow-md">
          Most Popular
        </div>
      )}
      <CardHeader className="text-center pt-10">
        <CardTitle className={`text-2xl font-bold ${isFeatured ? 'text-accent' : 'text-primary'}`}>{title}</CardTitle>
        <CardDescription className="text-4xl font-extrabold text-foreground mt-2">
          {price}
          {price !== "Custom" && <span className="text-sm font-normal text-muted-foreground">{pricePeriod}</span>}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow p-6">
        <ul className="space-y-3 mb-8 text-foreground/80 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {onButtonClick ? (
          <Button 
            size="lg" 
            variant={effectiveButtonVariant}
            className={`w-full mt-auto ${buttonClasses}`}
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        ) : buttonLink ? (
          <Button asChild size="lg" variant={effectiveButtonVariant} className={`w-full mt-auto ${buttonClasses}`}>
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        ) : (
           <Button 
            size="lg" 
            variant={effectiveButtonVariant}
            className={`w-full mt-auto ${buttonClasses}`}
            // Default action if no link and no onClick provided
            onClick={() => {
              const contactSection = document.getElementById('contact-us-section');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
