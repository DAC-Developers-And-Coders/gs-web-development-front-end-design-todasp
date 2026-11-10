"use client"

const Solution = () => {
    return(
        <>
            <section id="solution" className="min-h-dvh flex flex-col gap-6 mx-4 justify-center xl:gap-2">
                <h2 className="text-3xl text-center justify-center text-slate-900 md:text-4xl">A Solução</h2>
                <div className="flex flex-col gap-4 items-center justify-center xl:flex-row">
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <h2 className="text-lg text-slate-900 text-center md:text-xl xl:text-2xl xl:text-left">
                            Nossa plataforma fornece informações detalhadas sobre a infraestrutura do bairro, permitindo que os usuários façam escolhas mais informadas ao alugar um imóvel ou hospedagem.
                        </h2>
                        <div className="grid grid-cols-1 items-center justify-center gap-4">
                            <div className="flex flex-col gap-2 border-4 border-green-200 rounded-2xl p-6 bg-white">
                                <h2 className="text-lg font-bold text-slate-900 md:text-xl xl:text-3xl xl:text-left">Mobilidade</h2>
                                <p className="text-sm text-slate-700 text-wrap md:text-lg xl:text-2xl ">Informações sobre a localização de ônibus, metrô e outras opções de transporte.</p>
                            </div>

                            <div className="flex flex-col gap-2 border-4 border-green-200 rounded-2xl p-6 bg-white">
                                <h2 className="text-lg font-bold text-slate-900 md:text-xl xl:text-3xl">Segurança</h2>
                                <p className="text-sm text-slate-700 text-wrap md:text-lg xl:text-2xl">Dados sobre a presença de postos de saúde, policiamento e índices de criminalidade.</p>
                            </div>

                            <div className="flex flex-col gap-2 border-4 border-green-200 rounded-2xl p-6 bg-white">
                                <h2 className="text-lg font-bold text-slate-900 md:text-xl xl:text-3xl">Conforto</h2>
                                <p className="text-sm text-slate-700 text-wrap md:text-lg xl:text-2xl">Informações sobre poluição sonora, arborização, ilhas de calor e vulnerabilidade a alagamentos ou quedas de energia.</p>
                            </div>
                        </div>
                    </div>
                    <img src="../assets/images/aprovado.png" alt="Solução" className="max-xl:hidden"/>
                </div>
            </section>
        </>
    )
}

export default Solution;