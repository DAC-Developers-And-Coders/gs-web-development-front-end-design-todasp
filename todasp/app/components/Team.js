"use client"

const Team = () => {

    const team = [
        {id: 1, name:"ANDRÉ VICTOR NASCIMENTO", rm:"RM 570567", text:"Responsável pelo desenvolvimento do sistema em Python, documentação e Team Leader, auxiliando na organização, planejamento e evolução do projeto."},
        {id: 2, name:"DAVI DIAS DE SOUZA FREITAS", rm:"RM 574089", text:"Responsável pelo desenvolvimento do sistema em Python, contribuindo para a implementação e aprimoramento das principais funcionalidades."},
        {id: 3, name:"DAVID MIKAEL DIAS DA SILVA", rm:"RM 571637", text:"Responsável pelo desenvolvimento do sistema em Python, contribuindo para a implementação e aprimoramento das principais funcionalidades."},
        {id: 4, name:"GABRIEL NOVAGA PEREIRA", rm:"RM 573196", text:"Responsável pelo desenvolvimento em HTML, CSS e JavaScript, além de atuar como Team Leader, coordenando tarefas e decisões técnicas."},
        {id: 5, name:"MATHEUS MONTEIRO DA SILVA", rm:"RM 573842", text:"Auxilia no desenvolvimento do site, contribuindo com ideias, melhorias visuais e implementação de recursos para aprimorar a experiência dos usuários."}
    ]

    return(
        <>
            <section id="team" className="min-h-dvh grid grid-cols-1 gap-3 pt-20 mx-4">
                <h2 className="text-3xl justify-center text-center text-slate-900 md:text-4xl 2xl:text-5xl">Equipe</h2>
                <div className="flex flex-col gap-4 items-center justify-center text-center">
                    <p className="text-slate-700 text-balance text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
                        Conheça a equipe por trás do projeto TodaSP, formada por desenvolvedores e coders dedicados a tornar sua escolha de moradia e hospedagem mais simples e segura:
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-5 p-4">
                    {team.map((member) => (
                        <div key={member.id} className="w-full h-auto border-2 bg-white rounded-2xl p-2 flex flex-col gap-2 md:w-[calc(33.3%-1.5rem)]">
                            <h2 className="text-lg text-wrap font-bold md:text-xl md:text-center xl:text-3xl 2xl:text-4xl">{member.name}</h2>
                            <h3 className="text-md text-wrap md:text-lg md:text-center xl:text-xl 2xl:text-2xl">{member.rm}</h3>
                            <p className="text-sm text-wrap md:text-lg md:text-center xl:text-xl 2xl:text-2xl">{member.text}</p> 
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Team;