import React from "react";
import About from "./components/About";
import Caminho from "./components/Caminho";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import What from "./components/What";

export default function App() {
  return (
    <main className="text-white bg-gray-900 body-font">
      <Navbar />
      <About />
      <Caminho />
      <What />
      <Projects />
      <Skills />
      <Testimonials />
      <Testimonials />
      <Testimonials />
      <Contact />
    </main>
  );
}