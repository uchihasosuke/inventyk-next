'use client';

import Image from 'next/image';
import { useState } from 'react';

interface TechStackCardProps {
  name: string;
  icon: string;
  category: string;
}

export function TechStackCard({ name, icon, category }: TechStackCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col items-center p-4 bg-card shadow-md rounded-lg hover:shadow-xl transition-shadow">
      {!imageError ? (
        <Image
          src={icon}
          alt={`${name} logo`}
          width={36}
          height={36}
          className="mb-2"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-9 h-9 mb-2 text-muted-foreground flex items-center justify-center">
          ?
        </div>
      )}
      <p className="text-sm font-medium text-primary">{name}</p>
      <p className="text-xs text-muted-foreground">{category}</p>
    </div>
  );
} 