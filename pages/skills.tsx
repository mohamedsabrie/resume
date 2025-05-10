import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";

function SkillsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header active={3} />
      <div className="flex-1 flex flex-col justify-between">
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default SkillsPage;
