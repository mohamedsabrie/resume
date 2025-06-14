import "../styles/globals.css";
import { NextSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ParticlesBackground from "../components/ParticlesBackground";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <NextSeo
        title="Mohamed Sabry"
        titleTemplate="Mohamed Sabry"
        defaultTitle="Mohamed Sabry"
        description="A front end web developer, who loves to develop beautiful websites and web apps . I have been coding for about +3 years now. I am professional using react.js-next.js "
        canonical="https://mohamed-sabry-portfolio.vercel.app/"
        openGraph={{
          url: "https://mohamed-sabry-portfolio.vercel.app/",
          title: "Mohamed Sabry",
          description:
            "A front end web developer, who loves to develop beautiful websites and web apps . I have been coding for about 2 years now. I am professional using react.js-next.js ",
          images: [
            {
              url: "/og-image.svg",
              width: 800,
              height: 420,
              alt: "Mohamed Sabry",
            },
          ],
        }}
      />
      <SpeedInsights />
      <Analytics />
      <ParticlesBackground />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
