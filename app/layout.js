import Header from "@/components/header";
import "./globals.css";
import { Inter, Climate_Crisis } from 'next/font/google'
import Footer from "@/components/footer";

export const metadata = {
  title: "Mezzat Mohamed Amine",
  description: "Mezzat portfolio website, I am a web developer with an eye on design",
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
