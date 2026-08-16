import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { AppContextProvider } from "@/context/AppContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Astera — Turning Sparks Into Constellations",
  description:
    "A youth-led nonprofit empowering students through free, organized study materials worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <AppContextProvider>
          <ScrollReveal />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
