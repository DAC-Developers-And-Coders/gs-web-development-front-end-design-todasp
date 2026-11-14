"use client"

const Statistics = () => {
    return (
        <section id="statistics" className="grid grid-cols-1 min-h-dvh mx-10">
            <h2 className="text-3xl text-center p-20 text-slate-900">Estatísticas</h2>
            <p className="text-2xl text-center">Será exibido abaixo as informações sobre a região que foi selencionado, permitindo você analisar os dados de forma mais eficiente.</p>
            <div className="grid grid-cols-1 gap-2">
                <div className="bg-white border-2 border-red-500 rounded-lg">
                    teste
                </div>

                <div className="bg-white border-2 border-b-yellow-300 rounded-lg">
                    teste
                </div>

                <div className="bg-white border-2 border-green-500 rounded-lg">
                    teste
                </div>

                
            </div>
        </section>
    )
}

export default Statistics;