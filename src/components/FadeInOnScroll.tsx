"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utility for class concatenation

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function FadeInOnScroll({ children, className }: FadeInOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update isVisible when the element is in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Optionally set to false when it leaves the viewport
          // setIsVisible(false);
        }
      },
      {
        root: null, // relative to the viewport
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-1000 ease-out", // Base transition styles
        isVisible ? "opacity-100" : "opacity-0", // Opacity based on visibility
        className // Allow passing additional classes
      )}
    >
      {children}
    </div>
  );
}