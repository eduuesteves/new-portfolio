import { ArrowRight, Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";
import "./style.scss";

export function Contact() {
    return (
        <section className="section-contact" id="contact">
                    <h2>Contato</h2>
                    <div className="content">
                        <p>Olá, gostou do meu portfólio? Gostaria de trocar alguma informação? Me chamar para algum projeto? Sanar alguma dúvida?</p>
                        <p>Vamos conversar um pouco...</p>
                        <p>Caso queira falar comigo, basta me enviar um e-mail:</p>
                        <li>
                            <Envelope size={32} weight="duotone" />
                            esteves-dorta@hotmail.com
                        </li>
                        <p>Também pode me encontrar nas seguintes redes:</p>
                        <div>
                            <a target="_blank" href="https://github.com/eduuesteves">
                                <li>
                                    <GithubLogo size={32} weight="duotone" />
                                    Github
                                </li>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/eduardoesteves04/">
                                <li>
                                    <LinkedinLogo size={32} weight="duotone" />
                                    Linkdin    
                                </li>
                            </a>
                        </div>
                    </div>
            </section>
    )
}