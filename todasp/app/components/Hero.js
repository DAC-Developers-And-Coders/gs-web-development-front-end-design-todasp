"use client"

const Hero = () => {
    return(
        <>
            <section id="hero" className="min-h-dvh grid grid-cols-1 m-4">
                <div className="flex flex-col gap-4 items-center justify-center text-center">
                    <h1 className="text-4xl font-bold text-slate-900 pt-4 md:text-5xl">Developers and Coders apresenta</h1>
                    <img src="../assets/images/logo-todasp.png" alt="Logo TodaSP" className="w-150 h-auto"></img>
                    <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl xl:text-4xl">Tornando sua escolha de moradia e hospedagem mais simples e segura!</h2>
                    <p className="text-xl text-slate-900 md:text-xl xl:text-2xl">Em uma das maiores metrópoles do mundo, conectar pessoas ao lugar ideal 
  não precisa ser um desafio.</p>
                </div>
                <div className="flex gap-6 items-baseline justify-center text-center xl:items-center">
                    <a href="#problem">
                        <button className="bg-green-500 border-2 border-green-800 rounded-xl py-2 px-4 text-sm transition duration-500 hover:scale-105 hover:bg-green-300 md:text-xl xl:text-3xl">Conheça o TodaSP</button>
                    </a>
                    <a>
                        <button className="bg-red-500 border-2 font-extrabold text-white border-red-800 rounded-xl py-2 px-4 text-sm transition duration-500 hover:scale-105 hover:bg-red-300 md:text-xl xl:text-3xl">Comece a explorar</button>
                    </a>
                    <a href="#contact">
                        <button className="bg-yellow-300 border-2 border-yellow-800 rounded-xl py-2 px-4 text-sm transition duration-500 hover:scale-105 hover:bg-yellow-200 md:text-xl xl:text-3xl">Entre em contato</button>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Hero;