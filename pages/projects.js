import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";

function ProjectsPage() {
  return (
    <div>
      <Header active={2} />
      <div>
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default ProjectsPage;
