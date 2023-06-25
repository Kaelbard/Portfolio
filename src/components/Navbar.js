// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-pink-500 top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about">
          <img src="./DEFUSE.svg" />
          </a>
        </a>
        <div className="ml-auto">
        <nav className="text-lg font-sans flex flex-wrap items-end text-white justify-end">
          <a href="#projects" className="mr-5 hover:text-pink-200">
            Sobre Nós
          </a>
          <a href="#skills" className="mr-5 hover:text-pink-200">
            O que fazemos
          </a>
          <a href="#testimonials" className="mr-5 hover:text-pink-200">
           Como fazemos
          </a>
          <a href="#testimonials" className="mr-5 hover:text-pink-200">
            Contato
          </a>
        </nav>
        </div>
      </div>
    </header>
  );
}