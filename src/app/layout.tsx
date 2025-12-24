import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/common/Navbar";
import { Sidebar } from "@/components/common/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MENTOR IP - Intellectual Property Law Firm",
  description: "Specialized IP Law Firm in Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            <div className="flex flex-col min-h-screen">
              <Navbar />
              
              <div className="flex-1 flex flex-col">
                <main className="max-w-[1920px] mx-auto w-full px-4 py-8 flex-1">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar - Desktop only here, Mobile in Navbar Sheet */}
                    <div className="hidden lg:block w-[280px] flex-shrink-0">
                      <div className="sticky top-24">
                        <Sidebar />
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 min-w-0">
                      {children}
                    </div>
                  </div>
                </main>
              </div>

              {/* Global Footer */}
              <footer className="bg-card border-t py-8 text-sm text-muted-foreground">
                <div className="max-w-[1920px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; 2025 MENTOR IP. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
              </footer>
            </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
