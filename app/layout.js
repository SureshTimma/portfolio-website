import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Suresh Timma - Portfolio",
  description:
    "Portfolio of Suresh Timma (Timma Suresh), full stack developer, NIAT, NxtWave alumnus. Explore projects, skills, and experience in software development, education, and technology.",
  keywords: [
    "Suresh Timma",
    "Timma Suresh",
    "NIAT",
    "NxtWave",
    "Portfolio",
    "Full Stack Developer",
    "Software Developer",
    "Projects",
    "Education",
    "Technology"
  ].join(", ")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Suresh Timma, Timma Suresh, NIAT, NxtWave, Portfolio, Full Stack Developer, Software Developer, Projects, Education, Technology" />
        <meta property="og:title" content="Suresh Timma - Portfolio | NIAT | NxtWave | Timma Suresh" />
        <meta property="og:description" content="Portfolio of Suresh Timma (Timma Suresh), full stack developer, NIAT founder, NxtWave alumnus. Explore projects, skills, and experience in software development, education, and technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sureshtimma.netlify.app/" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Suresh Timma - Portfolio | NIAT | NxtWave | Timma Suresh" />
        <meta name="twitter:description" content="Portfolio of Suresh Timma (Timma Suresh), full stack developer, NIAT founder, NxtWave alumnus." />
        <meta name="twitter:image" content="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Suresh Timma",
          "alternateName": "Timma Suresh",
          "url": "https://YOUR_DOMAIN_HERE",
          "sameAs": [
            "https://www.linkedin.com/in/sureshtimma/",
            "https://github.com/sureshtimma"
          ],
          "alumniOf": {
            "@type": "Organization",
            "name": "NxtWave"
          },
          "worksFor": {
            "@type": "Organization",
            "name": "NIAT"
          },
          "jobTitle": "Full Stack Developer"
        }) }} />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
