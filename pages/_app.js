import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mohamed Sabry Resume | Front End Developer</title>
        <meta name="keywords" content="Front, React, Next" />
        <meta
          name="description"
          content=" I am a Front End developer with industry experience building websites and web apps. I specialize in JavaScript and have professional experience working with React.js,
          Next.js, and Tailwind.css. I also have experience working with Redux, TypeScript, and Firebase"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
