"use client"

const Contact = () => {
    return(
        <>
            <section id="contact" className="min-h-dvh grid grid-cols-1 gap-3 pt-20">
                <h2 className="flex text-3xl pt-4 text-center justify-center items-center text-slate-900 md:text-4xl">Contato</h2>
                <div className="flex flex-col gap-8 items-center justify-center text-center">
                    <p className="text-slate-700 text-balance text-xl md:text-3xl">
                        Entre em contato conosco através do formulário abaixo:
                    </p>
                    <form className="flex flex-col gap-6 items-center justify-center text-center">
                        <input
                            type="text"
                            placeholder="Nome"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 md:text-lg"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 md:text-lg"
                        />
                        <textarea
                            placeholder="Mensagem"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 md:text-lg"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md md:text-2xl"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
                <footer className=" bg-slate-900 w-full h-15 mt-auto grid grid-cols-2 gap-2 items-center justify-items-center">
                    <img className="w-15 md:w-20 lg:w-25 xl:w-30" src="./assets/images/DAC_logo_mini.png" alt="Dac icon"/>
                    <a href="https://www.fiap.com.br/" target="_blank"><img className="w-15 md:w-20 lg:w-25 xl:w-30" src="./assets/images/fiap_logo.png" alt="fiap icon" /></a>
                </footer>
            </section>
        </>
    )
}

export default Contact;