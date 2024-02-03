import { EnvelopeSimple, GithubLogo, HouseSimple, Kanban, LinkedinLogo, User } from "phosphor-react";
import "./style.scss";

interface IMenu {
    open: boolean;
    isOpenChildren: (state: boolean) => void;
}

export function Menu({ open, isOpenChildren }: IMenu) {

    function handleClick() {
        isOpenChildren(false);
    }
    return (
        <nav className={ open ? "menu" : "none"}>
                <div className="hover" onClick={handleClick}>
                    <a id="inicio" href="home">
                        <HouseSimple size={35} color="#fe5b3a" weight="fill" />
                        Início
                    </a>
                </div>
                <div className="hover" onClick={handleClick} >
                    <a id="Sobre mim" href="#about-me">
                        <User size={35} color="#007fff" weight="fill" />
                        Sobre mim
                    </a>
                </div>
                <div className="hover" onClick={handleClick}>
                    <a id="projetos" href="#project">
                        <Kanban size={35} color="#51c679" weight="fill" />
                        Projetos
                    </a>
                </div>
                <div className="hover" onClick={handleClick}>
                    <a id="contato" href="#contact">
                        <EnvelopeSimple size={35} color="#010d22" weight="fill" />
                        Contato
                    </a>
                </div>
                <hr />
                <div className="social">
                    <strong>Você também pode me encontrar<br />nas redes sociais:</strong>
                    <div className="sub-social">
                        <a target="_blank" href="https://github.com/eduuesteves" onClick={handleClick}>
                            <button>
                                <GithubLogo size={35} className="icon" weight="duotone" />
                                Github
                            </button>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/eduardoesteves04/" onClick={handleClick}>
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