import Header from "@/components/header";
import "./globals.css";
import { Inter, Climate_Crisis } from 'next/font/google'
import Footer from "@/components/footer";

export const metadata = {
  title: "Mezzat Mohamed Amine | Astro, Next creative Web developer",
  description: "Mezzat portfolio website, A full-stack web developer mainly using Next, astro and .NET core to build cool projects and great software",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" className="mt-0">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
