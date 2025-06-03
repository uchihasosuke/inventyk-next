'use client';

import { useEffect } from 'react';

export function PricingContactSection() {
  useEffect(() => {
    // Remove any existing Fillout scripts
    const existingScripts = document.querySelectorAll('script[src="https://server.fillout.com/embed/v1/"]');
    existingScripts.forEach(script => script.remove());

    // Add the script dynamically
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      script.remove();
    };
  }, []);

  return (
    <section 
      id="contact-us-section" 
      className="text-center py-12 bg-primary/5 rounded-lg"
      dangerouslySetInnerHTML={{
        __html: '<div style="width:100%;height:500px;" data-fillout-id="wdzmmSgaZpus" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div>'
      }}
    />
  );
}
