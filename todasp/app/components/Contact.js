"use client"

const Contact = () => {

    const contacts = [
        {id: 1, name:"Gabriel Novaga", image:"./assets/images/LinkedIn.jpg", alt:"Gmail icon", link: "https://www.linkedin.com/in/gabrielnovagapereira/"},
        {id: 2, name:"Nosso Email", image:"./assets/images/Email.jpg", alt:"LinkedIn icon", link: "mailto:developersandcodersfiap@gmail.com"},
        {id: 3, name:"André Nascimento", image:"./assets/images/LinkedIn.jpg", alt:"Gmail icon", link: "https://www.linkedin.com/in/andrevictorgoncalvesnascimento/"}
    ]

    return(
        <>
            <section id="contact" className="min-h-dvh grid grid-cols-1 gap-3 pt-20">
                <h2 className="flex text-3xl pt-4 text-center justify-center items-center text-slate-900 md:text-4xl 2xl:text-5xl">Contato</h2>
                <div className="flex flex-col gap-8 items-center justify-center text-center">
                    <p className="text-slate-700 text-balance text-xl md:text-3xl 2xl:text-4xl">
                        Entre em contato conosco através do formulário abaixo:
                    </p>
                    <div className="grid grid-cols-1 bg-white gap-3 mx-10 md:justify-items-center xl:grid-cols-3 xl:gap-6 2xl:gap-8">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="border-3 rounded-2xl transition-all duration-700 hover:scale-102 p-3 flex flex-col gap-1 items-center text-center md:w-70 lg:w-100">
                            <a href={contact.link} target="_blank">
                                <img className="size-40 lg:size-65 2xl:size-70" src={contact.image}></img>
                            </a>
                            <h2 className="text-xl lg:text-3xl 2xl:text-4xl">{contact.name}</h2>
                        </div>
                    ))}
                    </div>
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