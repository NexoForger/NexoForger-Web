import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { CursorGlow } from '@/components/cursor-glow';

export const metadata: Metadata = {
  title: 'NexoForger',
  description: 'Empowering Enterprise with Cutting-Edge Tech Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
          {/* Site-wide Open Graph Tags */}
          <meta property="og:title" content="NexoForger" />
          <meta property="og:description" content="Forge Your Future with Next-Gen Tech Solutions." />
          <meta property="og:image" content="https://example.com/path/to/your/default-image.jpg" />
          <meta property="og:url" content="https://nexoforger.com" />
          <meta property="og:type" content="website" />

          {/* Site-wide Twitter Card Tags */}
          {/*<meta name="twitter:card" content="summary_large_image" />*/}
          {/*<meta name="twitter:title" content="Your Site Title" />*/}
          {/*<meta name="twitter:description" content="A brief description of your site." />*/}
          {/*<meta name="twitter:image" content="https://example.com/path/to/your/default-image.jpg" />*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <CursorGlow />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
