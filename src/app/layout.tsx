import type { Metadata, Viewport } from 'next';
import { fontSans, fontMono } from '@/lib/fonts'; // Corrected import for fonts
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: {
    default: 'Inventyk - Innovate. Integrate. Inspire.',
    template: '%s | Inventyk',
  },
  description: 'Inventyk is a forward-thinking startup dedicated to providing cutting-edge digital solutions and services. We help businesses thrive in the modern technological landscape.',
  keywords: ['startup', 'tech', 'innovation', 'digital solutions', 'software development', 'cloud services'],
  authors: [{ name: 'Inventyk' }],
  creator: 'Inventyk',
  publisher: 'Inventyk',
  icons: {
    icon: "/favicon.ico", // Assuming you might add a favicon later
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F0F0F0' }, // Background color for light theme
    { media: '(prefers-color-scheme: dark)', color: '#0A0313' }, // Background color for dark theme (224 71% 4%)
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontMono.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
