"use client"

const Statistics = () => {
    return (
        <section id="statistics" className="grid grid-cols-1 min-h-dvh">
            <h2 className="text-3xl text-center p-20 text-slate-900">Estatísticas da região selecionada</h2>
            <div className="grid grid-cols-1 gap-2">
                <div className="bg-white border-2 border-red-500 rounded-lg">

                </div>

                <div className="bg-white border-2 border-b-yellow-300 rounded-lg">
                    
                </div>

                <div className="bg-white border-2 border-green-500 rounded-lg">
                    
                </div>
            </div>
        </section>
    )
}

export default Statistics;