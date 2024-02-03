import { EnvelopeSimple, GithubLogo, HouseSimple, Kanban, LinkedinLogo, User } from "phosphor-react";
import "./style.scss";

interface IMenu {
    open: boolean;
}

export function Menu({ open }: IMenu) {
    return (
        <nav className={ open ? "menu" : "none"}>
                <div className="hover">
                    <li>
                        <HouseSimple size={35} color="#fe5b3a" weight="fill" />
                        Início
                    </li>
                </div>
                <div className="hover">
                    <li>
                        <User size={35} color="#007fff" weight="fill" />
                        Sobre mim
                    </li>
                </div>
                <div className="hover">
                    <li>
                        <Kanban size={35} color="#51c679" weight="fill" />
                        Projetos
                    </li>
                </div>
                <div className="hover">
                    <li>
                        <EnvelopeSimple size={35} color="#010d22" weight="fill" />
                        Contato
                    </li>
                </div>
                <hr />
                <div className="social">
                    <strong>Você também pode me encontrar<br />nas redes sociais:</strong>
                    <div className="sub-social">
                        <a target="_blank" href="https://github.com/eduuesteves">
                            <button>
                                <GithubLogo size={35} className="icon" weight="bold" />
                                Github
                            </button>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/eduardoesteves04/">
                            <button>
                                <LinkedinLogo className="icon" size={35} weight="duotone" />
                                Linkedin
                            </button>
                        </a>
                    </div>
                </div>
            </nav>
    )
}