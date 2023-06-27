import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-cover bg-center" style={{ backgroundImage: `url('./quem_somos.png')` }}>
      <div className="container px-6 pt-20 mx-auto text-center lg:px-40 justify-center ">
        <div className=" w-96 px-2 py-3 justify-center text-center mx-auto bg-pink-500 items-center ">
          <h1 className="sm:text-4xl font-medium title-font mb-0 text-white">
            Quem somos nós
          </h1>
        </div>
      </div>
      <div className=" w-screen mx-auto justify-center py-10 text-center items-center">
        <span class="inline-block w-96 text-left px-3 p-3 h-80 bg-white rounded-xl text-sm font-semibold text-gray-700 mr-2">
          <div>
            <div className="container w-2.5 h-2.5 left-0 top-0 absolute bg-red-500 rounded-full" />
            <div className="container w-2.5 h-2.5 left-[20px] top-0 absolute bg-yellow-300 rounded-full" />
            <div className="container w-2.5 h-2.5 left-[40px] top-0 absolute bg-lime-400 rounded-full" />
          </div>Tag 1</span>
        <span class="inline-block w-96 text-left px-3 p-3 h-80 bg-white rounded-xl text-sm font-semibold text-gray-700 mr-2">Tag 1</span>
      </div>
    </section>
  );
}