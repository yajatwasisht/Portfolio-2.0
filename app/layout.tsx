import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YAJAT — PORTFOLIO",
  description:
    "A Frontend Engineer passionate about crafting next-gen software. I drive growth by crafting user experiences that blend aesthetics with functionality through my design and development skills. I thrive on turning ideas into seamless digital solutions.",
  keywords: [
    "frontend",
    "yajat wasisht",
    "yajat",
    "wasisht",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "developer portfolio",
    "creative development",
    "india",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
  ],
  openGraph: {
    title: "YAJAT - PORTFOLIO",
    description:
      "Frontend Engineer at Bluechip Technologies, passionate about crafting next-gen software. I drive growth by crafting user experiences that blend aesthetics with functionality through my design and development skills. I thrive on turning ideas into seamless digital solutions.",
    url: "https://www.yajatportfolio.com",
    siteName: "Yajat Portfolio",
    images: [
      {
        url: "/yajat logo.png",
        width: 1200,
        height: 630,
        alt: "Yajat Portfolio Logo",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yajat Portfolio — Software Engineer",
    description:
      "My passion lies in creating powerful solutions that drive website growth. Whether it’s developing a website to increase visibility or implementing software that automates manual processes, I enjoy helping websites evolve from their initial stage to a fully optimized, high-performing platform",
    creator: "@YajatDeveloper",
    images: ["/yajat logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>YAJAT — PORTFOLIO</title>
        {/* Favicon */}
        <link rel="icon" href="/yajat logo.png?v=1" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/yajat logo.png" />
        <meta name="theme-color" content="#317EFB" />
        {/* Metadata */}
        <meta
          name="description"
          content="A Frontend Engineer passionate about crafting next-gen software. I thrive on turning ideas into seamless digital solutions through aesthetic and functional design."
        />
      </head>
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <div className="video-container">
          <video
            className="background-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/bg2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
