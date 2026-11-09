"use client"

const Problem = () => {
    return(
        <>
            <section id="problem" className="min-h-dvh flex flex-col gap-6 justify-center mx-4">
                    <h2 className="text-3xl text-center justify-center text-slate-900 pt-10 md:text-4xl">O Problema</h2>
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <div className="justify-center">
                            <img src="../assets/images/problemas.png" alt="Problema"
                            className="size-85"></img>
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <h2 className="text-lg text-center text-slate-900 md:text-xl">
                                Escolher um imóvel ou hospedagem apenas pelas fotos de um anúncio frequentemente esconde a real infraestrutura do bairro. A maioria das pessoas só descobre os gargalos da região após assinar o contrato ou fazer o check-in:
                            </h2>
                            <div className="grid grid-cols-1 items-center justify-center gap-4">
                                <div className="flex flex-col gap-2 border-4 border-amber-200 rounded-2xl p-6 bg-white">
                                    <h2 className="text-lg font-bold text-slate-900 md:text-xl">Mobilidade Prejudicada</h2>
                                    <p className="text-sm text-slate-700 text-wrap md:text-lg">Pontos de ônibus distantes e estações de metrô inacessíveis ou superlotadas.</p>
                                </div>

                                <div className="flex flex-col gap-2 border-4 border-amber-200 rounded-2xl p-6 bg-white">
                                    <h2 className="text-lg font-bold text-slate-900 md:text-xl">Insegurança e Saúde</h2>
                                    <p className="text-sm text-slate-700 text-wrap md:text-lg">Ausência de postos de saúde, falta de policiamento e altos índices de criminalidade local.</p>
                                </div>

                                <div className="flex flex-col gap-2 border-4 border-amber-200 rounded-2xl p-4 bg-white">
                                    <h2 className="text-lg font-bold text-slate-900 md:text-xl">Desconforto e Infraestrutura</h2>
                                    <p className="text-sm text-slate-700 text-wrap md:text-lg">Poluição sonora frequente, pouca arborização, ilhas de calor e vulnerabilidade a alagamentos ou quedas de energia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Problem;