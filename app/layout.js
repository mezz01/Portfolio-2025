import Header from "@/components/header";
import "./globals.css";
import { Inter, Climate_Crisis } from 'next/font/google'

export const climate_crisis = Climate_Crisis({
  subsets:['latin'],
  display:'swap'
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="mt-0">
      <body className={climate_crisis.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
