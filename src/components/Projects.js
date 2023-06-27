import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-cover bg-center" style={{ backgroundImage: `url('./quem_somos.png')` }}>
      <div className="container px-6 pt-20 mx-auto text-center lg:px-40 justify-center ">
        <div className="flex flex-col w-full mb-20 items-center">
          <div className=" px-14 py-3 justify-center bg-pink-500 items-center ">
            <h1 className="sm:text-4xl font-medium title-font mb-0 text-white">
              Quem somos nós
            </h1>
          </div>
          <div className="column-2">
            <div className="">
              <p>Olá</p>
            </div>
            <div className="">
              <p>Olá</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}