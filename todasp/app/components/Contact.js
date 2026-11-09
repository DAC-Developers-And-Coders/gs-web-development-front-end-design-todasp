"use client"

const Contact = () => {
    return(
        <>
            <section className="min-h-dvh flex flex-col gap-4 mt-10">
                <h2 className="text-3xl text-center justify-center text-slate-900">Contato</h2>
                <div className="flex flex-col gap-4 items-center justify-center text-center">
                    <p className="text-slate-700 text-balance text-xl">
                        Entre em contato conosco através do formulário abaixo:
                    </p>
                    <form className="flex flex-col gap-6 items-center justify-center text-center">
                        <input
                            type="text"
                            placeholder="Nome"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <textarea
                            placeholder="Mensagem"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;