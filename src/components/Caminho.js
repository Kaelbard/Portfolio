// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Caminho() {
  return (
    <header className="bg-pink-500">
        <div className="container mx-auto flex flex-wrap p-16 flex-col md:flex-row items-center justify-center">
        <a className="mr-12">
          <img src="./passos-1.svg" />
        </a>
        <a className="mr-12">
          <img src="./passos-2.svg" />
        </a>
        <a className="mr-12">
          <img src="./passos-3.svg" />
        </a>
        <a className="mr-0">
          <img src="./passos-4.svg" />
        </a>
        </div>
    </header>
  );
}