import { useState } from "react";
import { Hamburger, X } from "phosphor-react";
import { Menu } from "../Menu";

import "./style.scss";

export function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function funcMenuOpen(state: boolean) {
        setIsOpen(state);
    }
    
    return (
        <header className="header">
            <div className="left">
                <h1 className="logo">{"<"}Portfolio{" />"}</h1>
            </div>
            <div className="right">
                <button id="Menu" title="Menu" onClick={() => setIsOpen(!isOpen)}>
                <span>Menu</span>
                {
                    isOpen ?
                    <X size={45} color="#000" weight="bold" className="iconMenu" /> 
                    :
                    <Hamburger size={45} color="#000" weight="duotone" className="iconMenu" />    
                }
                </button>
            </div>
            <Menu isOpenChildren={funcMenuOpen}  open={isOpen} />
        </header>
    )
}