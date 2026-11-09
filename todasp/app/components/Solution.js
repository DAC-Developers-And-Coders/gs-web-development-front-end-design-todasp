"use client"

const Solution = () => {
    return(
        <>
            <section className="min-h-dvh flex flex-col gap-2 mt-10">
                <h2 className="text-3xl text-center justify-center text-slate-900">A Solução</h2>
                <div className="flex flex-col gap-4 items-center justify-center text-center">
                    <div className="flex flex-col gap-4 items-center justify-center text-center mx-4">
                        <h2 className="text-xl text-slate-900 text-balance">
                            Nossa plataforma fornece informações detalhadas sobre a infraestrutura do bairro, permitindo que os usuários façam escolhas mais informadas ao alugar um imóvel ou hospedagem.
                        </h2>
                        <div className="grid grid-cols-1 items-center justify-center gap-4">
                            <div className="flex flex-col gap-2 border-4 border-green-200 rounded-2xl p-4 bg-white">
                                <h2 className="text-lg font-bold text-slate-900">Mobilidade</h2>
                                <p className="text-slate-700 text-balance">Informações sobre a localização de ônibus, metrô e outras opções de transporte.</p>
                            </div>

                            <div className="flex flex-col gap-2 border-4 border-green-200 rounded-2xl p-4 bg-white">
                                <h2 className="text-lg font-bold text-slate-900">Segurança</h2>
                                <p className="text-slate-700 text-balance">Dados sobre a presença de postos de saúde, policiamento e índices de criminalidade.</p>
                            </div>

                            <div className="flex flex-col gap-2 border-4 border-green-200 rounded-2xl p-4 bg-white">
                                <h2 className="text-lg font-bold text-slate-900">Conforto</h2>
                                <p className="text-slate-700 text-balance">Informações sobre poluição sonora, arborização, ilhas de calor e vulnerabilidade a alagamentos ou quedas de energia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solution;