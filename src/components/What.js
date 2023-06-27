import React from "react";

export default function What() {
    return (
        <section id="what" className= "flex-grow bg-white bg-cover bg-center" style={{ backgroundImage: `url('./background-what.png')` }}>
            <div className="container flex pl-72 py-40 md:flex-row flex-col items-center">
                <div className="lg:flex md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl mb-3 font-medium text-black text-left">
                    Se você ainda não investe em UX/UI, você está perdendo clientes!
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-20 leading-relaxed sm:text-lg text-black text-justify">
                    75% dos usuários julgam a credibiliade de uma empresa com base em seu design de site, de acordo com a pesquisa da Stanford University. Um estudo da Forrester concluiu que cada dólar investido em UX pode resultar em um retorno de investimento (ROI) de até 100 dólares. De acordo com a Nielsen Norman Group, a má experiência do usuário pode levar até 88% dos usuários a deixar um site ou aplicativo.</p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
            </div>
        </section>
    );
}