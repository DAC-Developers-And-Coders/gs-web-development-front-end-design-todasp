"use client"
import { useState } from "react";
import {Menu, X} from "lucide-react"

const Link = ({ texto, href }) => <li><a href={href}>{texto}</a></li>

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavBar = () => {
        setIsOpen(!isOpen)
    }

     const linkStrings = {
        link1: {href: "#hero", texto: "Início"},
        link2: {href: "#problem", texto: "Problema"},
        link3: {href: "#solution", texto: "Solução"},
        link4: {href: "#team", texto: "Nossa Equipe"},
        link5: {href: "#contact", texto: "Contato"},
    };

    const links = Object.entries(linkStrings).map(([key, link]) => (
        <Link key={key} texto={link.texto} href={link.href} />
    ));

    return(
        <>
            <header className="bg-amber-50 sticky top-0 z-50 left-0 right-0 w-full flex flex-wrap items-center justify-between px-8 h-20 md:h-15">
                <h2 className="text-sm md:text-xl 2xl:text-3xl">DAC</h2>

                <nav>
                    <ul className="hidden items-center sm:flex sm:gap-3 sm:text-xs md:gap-4 md:text-sm 2xl:text-lg">
                        {links}
                    </ul>
                    <button onClick={toggleNavBar} className="sm:hidden">
                        {isOpen ? <X /> : <Menu/>}
                </button>
                </nav>
                {isOpen && (
                    <ul className="flex gap-2 flex-row items-center text-sm list-none sm:hidden pb-2">
                        {links}
                    </ul>
                )}
            </header>
        </>
    );
}

export default Header;