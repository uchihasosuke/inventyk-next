"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

type NavLinkProps = ComponentProps<typeof Link> & {
  activeClassName?: string;
};

export function NavLink({ href, className, activeClassName = 'text-accent font-semibold', children, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/80 hover:text-foreground transition-colors",
        isActive && activeClassName,
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
