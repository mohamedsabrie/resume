import "../styles/globals.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <NextSeo
        title="Mohamed Sabry"
        titleTemplate="Mohamed Sabry"
        defaultTitle="Mohamed Sabry"
        description="A front end web developer, who loves to develop beautiful websites and web apps . I have been coding for about 2 years now. I am professional using react.js-next.js "
        canonical="https://mohamed-sabry-portfolio.vercel.app/"
        openGraph={{
          url: "https://mohamed-sabry-portfolio.vercel.app/",
          title: "Mohamed Sabry",
          description: "A front end web developer, who loves to develop beautiful websites and web apps . I have been coding for about 2 years now. I am professional using react.js-next.js ",
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
