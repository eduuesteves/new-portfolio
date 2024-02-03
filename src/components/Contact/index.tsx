import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";
import "./style.scss";

export function Contact() {
    return (
        <section className="section-contact" id="contact">
                    <h2>Contato</h2>
                    <div className="content">
                        <p>Olá, gostou do meu portfólio? Gostaria de trocar uma ideia ou informação? Me chamar para algum projeto?</p>
                        <p>Vamos conversar um pouco...</p>
                        <p>Caso queira falar comigo, basta um e-mail para:</p>
                        <span>
                            <Envelope size={32} weight="duotone" />
                            esteves-dorta@hotmail.com
                        </span>
                        <p>Também pode me encontrar nas seguintes redes:</p>
                        <div>
                            <a target="_blank" href="https://github.com/eduuesteves">
                                <span>
                                    <GithubLogo size={32} weight="duotone" />
                                    Github
                                </span>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/eduardoesteves04/">
                                <span>
                                    <LinkedinLogo size={32} weight="duotone" />
                                    Linkdin    
                                </span>
                            </a>
                        </div>
                    </div>
            </section>
    )
}