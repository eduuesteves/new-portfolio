import { Browsers, Bug, Coffee, Cursor, GithubLogo, GooglePodcastsLogo, LinkedinLogo, Stack, TerminalWindow } from "phosphor-react";
import "./style.scss";

export function Home() {
    return (
        <section className="section-home" id="home">
                <div className="left">
                    <div className="content">
                    <div className="text">
                        <p>Seja Bem Vindo{"("}a{")"}!</p>
                        <p>Me chamo,</p>
                        <strong>Eduardo Esteves</strong>
                        <p className="sub-text">Aqui você verá um pouco mais dos projetos que desenvolvi durante minha tragetória no desenvolvimento web.</p>
                    </div>
                    <div className="social">
                        <a target="_blank" href="https://github.com/eduuesteves">
                            <button>
                                <GithubLogo size={25} weight="duotone" className="img-social" />
                                Github
                            </button>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/eduardoesteves04/">
                            <button>
                                <LinkedinLogo size={25} weight="duotone" className="img-social" />
                                Linkdin
                            </button>
                        </a>
                        <button>
                            <Cursor size={25} weight="duotone" className="img-social" />
                            Projetos
                        </button>
                    </div>
                    </div>
                    <div className="bg-1">
                        <div className="sub-bg"></div>
                    </div>
                    <div className="bg-2">
                        <div className="sub-bg"></div>
                    </div>
                    <div className="bg-3">
                        <div className="sub-bg"></div>
    </div>
                </div>
                <div className="right">
                        <div className="text">
                        <span>
                            <Coffee size={32} weight="duotone" />
                            Ciência da Computação
                        </span>
                        <span>
                            <TerminalWindow size={32} weight="duotone" />
                            Desenvolvedor Web
                        </span>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M200,64V80H176a16,16,0,0,0-16,16v80H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H184A16,16,0,0,1,200,64Z" opacity="0.2"></path><path d="M224,72H208V64a24,24,0,0,0-24-24H40A24,24,0,0,0,16,64v96a24,24,0,0,0,24,24H152v8a24,24,0,0,0,24,24h48a24,24,0,0,0,24-24V96A24,24,0,0,0,224,72ZM40,168a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v8H176a24,24,0,0,0-24,24v72Zm192,24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Zm-96,16a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h40A8,8,0,0,1,136,208Zm80-96a8,8,0,0,1-8,8H192a8,8,0,0,1,0-16h16A8,8,0,0,1,216,112Z"></path></svg>
                            Pages Responsive
                        </span>
                        <span>
                            <Browsers size={32} weight="duotone" />
                            Front End
                        </span>
                        <span>
                            <Stack size={32} weight="duotone" />
                            FullStack
                        </span>
                        <span>
                            <Bug size={32} weight="duotone" />
                            Correção de Bugs
                        </span>
                        <strong>+ de {76} projetos desenvolvidos</strong>
                        </div>
                    <div className="bg-1">
                        <div className="sub-bg" />
                    </div>
                    <div className="bg-2">
                        <div className="sub-bg" />
                    </div>
                    <div className="bg-3">
                        <div className="sub-bg" />
                    </div>
                    <div className="bg-4" />
                </div>
            </section>
    )
}