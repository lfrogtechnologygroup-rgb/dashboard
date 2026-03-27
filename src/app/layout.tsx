import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Creator Studio',
  description: 'Manage your content generation pipeline',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
