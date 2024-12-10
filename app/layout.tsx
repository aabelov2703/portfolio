import type { Metadata } from "next";
import "./globals.css";
import { AppContextProvider } from "@/context/app-context";
import Footer from "@/components/footer";
import NavBar from "@/components/nav/nav-bar";

export const metadata: Metadata = {
  title: "Aleks's Portfolio",
  description: "Aleksandr Belov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center text-foreground scrollbar-hide bg-gradient-to-tr from-background via-primary-0 to-background brightness-105">
        <AppContextProvider>
          <NavBar />
          <main className="relative flex grow justify-center w-full min-w-[320px] max-w-lg sm:max-w-2xl md:max-w-5xl antialiased">
            {children}
          </main>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
