import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";

function SkillsPage() {
  return (
    <div>
      <Header active={3} />
      <div>
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default SkillsPage;
