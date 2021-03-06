import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import { useEffect, useLayoutEffect } from "react";
import gsap from 'gsap'
import ToTop from "../components/ToTop";
import Footer from "../components/Footer";


export default function Home() {
  
  // Initialise
  
  // useLayoutEffect(() => {

    
  // const t1 = gsap.timeline();
  // var mediaQuery = window.matchMedia("(min-width: 640px)");
 

    
  //   t1.from(".header_logo", {
  //     opacity: 0,
  //     x: -100,
  //     ease: "power4.out",
  //   },"+=1");

  //   function buildConditionalTween(mediaQuery){
  //     if(mediaQuery.matches){
  //       gsap.utils.toArray("header li").forEach((link) => {
  //         t1.from(link, {
  //           opacity: 0,
  //           x: 100,
  //           ease: "power4.out", 
  //         });
  //       });
  //     }else{
  //        t1.from(".menu_icon", {
  //         opacity: 0,
  //         x: 100,
  //         ease: "power4.out", 
  //        })
  //     }
  //   };
  //   buildConditionalTween(mediaQuery);
    
  //   t1.from(".name", {
  //     x: 100,
  //     opacity: 0,
  //     ease: "elastic",
  //   })
  //   .from(".job_title", {
  //     x: -100,
  //     opacity: 0, 
  //     ease: "power4.out",
  //   })
  //   .from(".hero_buttons", {
  //     y: 100,
  //     opacity: 0, 
  //     ease: "power3.out",
  //   })

  // }, [])

  return (
    <div>
      <Header />
      <div>
        <HeroSection />
        <About />
        <Projects />
        <Contact />
        <Footer />

        <ToTop />
      </div>
    </div>
  );
}
