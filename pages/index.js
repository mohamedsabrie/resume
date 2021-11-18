import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import { useEffect } from "react";


export default function Home() {

  return (
    <div>
      <Head>
        <title>Mohamed Sabry</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div>
        <HeroSection />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
