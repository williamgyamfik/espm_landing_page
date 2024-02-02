import "./globals.css";
import Layout from "@/components/Layout";
import { Roboto } from "next/font/google";
import Footer from "../components/Footer";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Espm",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={roboto.className}>
          <Layout></Layout>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
