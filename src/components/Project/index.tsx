import { ArrowBendDownRight, Code, PlusCircle } from "phosphor-react";
import "./style.scss";

import border from "../../assets/border.png";
import loopstudio from "../../assets/loopstudio.png";
import nftCard from "../../assets/nft-card.png";
import nozbooks from "../../assets/nozbooks.png";
import portfolioaxiosgithub from "../../assets/portfolioaxiosgithub.png";
import random from "../../assets/random.png";
import social from "../../assets/social.png";

export function Project() {
    return (
        <section className="section-normal project" id="project">
                <div className="title">
                    <h2>Projetos</h2>
                </div>
                <div className="content">
                        <div className="card">
                            <img src={portfolioaxiosgithub} alt="Portfolio Axios Github Layout" />
                            <div>
                                <h4>Portfólio do Github com Axios</h4>
                                <p>Nesse projeto, utilizei a biblioteca Axios para para buscar a API do Github no usuário solicitado e retornar um portfólio com os projetos desenvolvidos pelo desenvolvedor.</p>
                                <ul>
                                    <li>React</li>
                                    <li>Axios</li>
                                    <li>Typescript</li>
                                    <li>Vite</li>
                                    <li>Sass</li>
                                </ul>
                                <div className="options">
                                    <a target="_blank" href="https://portfolio-axios-github.vercel.app/">
                                    <button>
                                        <ArrowBendDownRight size={20} />
                                        Acessar Site
                                    </button>
                                    </a>
                                    <a target="_blank" href="https://github.com/eduuesteves/portfolio-axios-github">
                                    <button>
                                        <Code size={20} />
                                        Ver Código
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={nozbooks} alt="Noz Books Layout" />
                            <div>
                                <h4>Noz Books</h4>
                                <p>Esse é um projeto frontend que busca os dados de um backend. Durante o desenvolvimento, trabalhei com autenticação, paginação, requisição e estilização.</p>
                                <ul>
                                    <li>React</li>
                                    <li>API Rest</li>
                                    <li>Typescript</li>
                                    <li>Axios</li>
                                    <li>Sass</li>
                                    <li>Vite</li>
                                </ul>
                                <div className="options">
                                    <a target="_blank" href="https://github.com/eduuesteves/apirest-vite-react-typescript">
                                    <button>
                                        <Code size={20} />
                                        Ver Código
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={random} alt="Random Layout" />
                            <div>
                                <h4>Random Colors</h4>
                                <p>Esse foi um dos primeiros projetos que desenvolvi utilizando Javascript, com ele comecei a ter uma noção melhor sobre o poder da linguagem no mundo web. Nesse código você irá receber algumas cores aleatórias, mas que combinam quando utilizadas juntas no layout.</p>
                                <ul>
                                    <li>React</li>
                                    <li>Javascript</li>
                                    <li>CSS</li>
                                </ul>
                                <div className="options">
                                    <a target="_blank" href="https://random-background-js.vercel.app/">
                                    <button>
                                        <ArrowBendDownRight size={20} />
                                        Acessar Site
                                    </button>
                                    </a>
                                    <a target="_blank" href="https://github.com/eduuesteves/random-background-js">

                                    <button>
                                        <Code size={20} />
                                        Ver Código
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={nftCard} alt="NFT Card Layout" />
                            <div>
                                <h4>JSEasy</h4>
                                <p>Com esse projeto, estou desenvolvendo uma biblioteca que agrupa a estilização CSS dentro do Javascript</p>
                                <ul>
                                    <li>HTML</li>
                                    <li>Javascript</li>
                                    <li>CSS</li>
                                </ul>
                                <div className="options">
                                    <a target="_blank" href="https://jseasy-framework.vercel.app/">
                                    <button>
                                        <ArrowBendDownRight size={20} />
                                        Acessar Site
                                    </button>
                                    </a>
                                    <a target="_blank" href="https://github.com/eduuesteves/jseasy-framework">
                                    <button>
                                        <Code size={20} />
                                        Ver Código
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={border} alt="Loop Studio Layout" />
                            <div>
                                <h4>Card Dynamic</h4>
                                <p>Com esse projeto você pode ter uma noção para que serve algumas estilizações no CSS. Basta mudar os valores dos inputs e automaticamente o box será alterado.</p>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                </ul>
                                <div className="options">
                                    <a target="_blank" href="https://border-and-color-js.vercel.app/">
                                    <button>
                                        <ArrowBendDownRight size={20} />
                                        Acessar Site
                                    </button>
                                    </a>
                                    <a target="_blank" href="https://github.com/eduuesteves/border-and-color-js">

                                    <button>
                                        <Code size={20} />
                                        Ver Código
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={loopstudio} alt="Border Layout" />
                            <div>
                                <h4>Loop Studio</h4>
                                <p>Com esse projeto desenvolvi um layout utilizando o site FrontEnd Mentor, onde pude melhorar a noção de responsividade, cores, fontes e tamanho.</p>
                                <ul>
                                    <li>React</li>
                                    <li>Sass</li>
                                    <li>Typescript</li>
                                    <li>Vite</li>
                                </ul>
                                <div className="options">
                                    <a target="_blank" href="https://loopstudio-iota.vercel.app/">
                                    <button>
                                        <ArrowBendDownRight size={20} />
                                        Acessar Site
                                    </button>
                                    </a>
                                    <a target="_blank" href="https://github.com/eduuesteves/loopstudio">

                                    <button>
                                        <Code size={20} />
                                        Ver Código
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={social} alt="Social Layout" />
                            <div>
                                <h4>Feedback People</h4>
                                <p>Com esse projeto desenvolvi um layout utilizando o site FrontEnd Mentor, onde pude ter uma noção melhor de design.</p>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                                <div className="options">
                                    <a target="_blank" href="https://social-proof-section-master-eduddz.vercel.app/">
                                    <button>
                                        <ArrowBendDownRight size={20} />
                                        Acessar Site
                                    </button>
                                    </a>
                                    <a target="_blank" href="https://github.com/eduuesteves/social-proof-section-master">

                                    <button>
                                        <Code size={20} />
                                        Ver Código
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
                <a target="_blank" href="https://github.com/eduuesteves?tab=repositories">
                <button className="see-projects">
                    <PlusCircle size={32} />
                    Ver todos os projetos
                </button>
                </a>
            </section>
    )
}