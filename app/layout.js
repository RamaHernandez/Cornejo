import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPage from "./about/page";
import AdvertisingPage from "./advertising/page";
import ContactPage from "./contact/page";
import MusicVideosPage from "./music-videos/page";
import NarrativePage from "./narrative/page";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />

        <AdvertisingPage />
        <MusicVideosPage />
        <NarrativePage />
        <AboutPage />
        <ContactPage />
        <Footer />
      </body>
    </html>
  );
}
