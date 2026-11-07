"use client"

const Hero = () => {
    return(
        <>
            <section className="min-h-dvh grid gap-3">
                <div className="flex flex-col gap-4 items-center justify-center text-center">
                    <h1 className="text-6xl font-bold">Developers and Coders apresenta</h1>
                    <img></img>
                    <h2 className="text-3xl font-semibold">Tornando sua escolha de moradia e hospedagem mais simples e segura!</h2>
                    <p className="text-2xl">Em uma das maiores metrópoles do mundo, conectar pessoas ao lugar ideal 
  não precisa ser um desafio.</p>
                </div>
                <div className="flex gap-6 items-center justify-center text-center">
                    <button className="bg-green-500 border-2 border-green-800 rounded-4xl py-2 px-4 text-xl transition duration-500 hover:scale-105 hover:bg-green-300">Conheça o TodaSP</button>
                    <button className="bg-red-500 border-2 border-red-800 rounded-4xl py-2 px-4 text-xl transition duration-500 hover:scale-105 hover:bg-red-300">Comece a explorar</button>
                    <button className="bg-yellow-300 border-2 border-yellow-800 rounded-4xl py-2 px-4 text-xl transition duration-500 hover:scale-105 hover:bg-yellow-200">Entre em contato</button>
                </div>
            </section>
        </>
    );
}

export default Hero;