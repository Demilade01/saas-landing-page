import "./globals.css";
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">
      <body className={""}>
        <NavigationBar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
