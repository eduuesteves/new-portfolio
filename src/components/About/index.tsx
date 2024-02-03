import { Browsers, Bug, Code, Coffee, Cpu, Cursor, Database, GitBranch, Stack, TerminalWindow, TreeStructure } from "phosphor-react";
import "./style.scss";

export function About() {
    const url = "https://avatars.githubusercontent.com/u/40532597?v=4";

    return (
        <section className="section-normal about-me" id="about-me">
                    <div className="title">
                        <h2>Sobre mim</h2>
                    </div>
                    <div className="sub-about">

                    <img loading="lazy" src={url} alt="Foto de perfil do Eduardo Esteves" className="photo" />
                    <div className="text">
                        <p>Olá, sou o Eduardo e tenho 28 anos.</p><p>Ingressei na programação web a quase 2 anos e nesse período já desenvolvi mais de {76} projetos.</p>
                        <p>Sou uma pessoa curiosa e auto didata, por isso a área web se tornou relativamente fácil para mim, pois estou sempre tentando me aperfeiçoar, reinventar e aprender maneiras seguras e performáticas de desenvolver sistemas.</p>
                        <p>Formado em ciência da computação.</p>
                        <p>Apaixonado pela internet, programação e tecnologias.</p>
                    </div>
                    <div className="icons">
                        <Coffee size={40} weight="duotone" />
                        <TerminalWindow size={40} weight="duotone" />
                        <Cpu size={40} weight="duotone" />
                        <Browsers size={40} weight="duotone" />
                        <Stack size={40} weight="duotone" />
                        <Bug size={40} weight="duotone" />
                        <TreeStructure size={40} weight="duotone" />
                        <GitBranch size={40} weight="duotone" />
                        <Code size={40} weight="duotone" />
                        <Database size={40} weight="duotone" />
                        <button>
                            <Cursor weight="duotone" size={32} />
                            Projetos
                        </button>
                    </div>
                    </div>
            </section>
    )
}