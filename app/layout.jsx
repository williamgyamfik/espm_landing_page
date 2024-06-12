import "./globals.css";
import Layout from "@/components/Layout";
import { Outfit } from "next/font/google";
import Footer from "../components/Footer";
const outfit = Outfit({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Espm",
  description: "euphoriasportsmgt, talent,management,soccer",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={outfit.className}>
          <Layout></Layout>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
