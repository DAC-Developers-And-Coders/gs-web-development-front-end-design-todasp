"use client"

const Form = () => {
    return (
        <>
            <section id="form" className="min-h-dvh grid grid-cols-1 gap-3 pt-20">
                <h2 className="text-3xl text-slate-900 pt-4 text-center md:text-4xl 2xl:text-5xl">Anotações</h2>
                <div className="flex flex-col gap-8 items-center text-center">
                    <p className="text-slate-700 text-balance text-xl md:text-3xl 2xl:text-4xl">
                        Adicione suas anotações sobre a região selecionada:
                    </p>
                    <form className="grid grid-cols-1 gap-4 bg-white p-10 rounded-lg border-2 border-black w-full max-w-md">
                        <input type="text" placeholder="Título" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-red-500" />
                        <textarea placeholder="Observações" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-yellow-300" />
                        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-2xl border-2 border-green-600 hover:bg-green-400 transition duration-500">
                            Salvar
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Form;