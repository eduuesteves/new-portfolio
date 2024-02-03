import { useState } from "react";
import { Hamburger, X } from "phosphor-react";
import "./style.scss";
import { Menu } from "../Menu";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <header className="header">
            <div className="left">
                <h1 className="logo">{"<"}Portfolio{" />"}</h1>
            </div>
            <div className="right">
                <button onClick={() => setIsOpen(!isOpen)}>
                <span>Menu</span>
                {
                    isOpen ?
                    <X size={45} color="#000" weight="bold" className="iconMenu" /> 
                    :
                    <Hamburger size={45} color="#000" weight="duotone" className="iconMenu" />    
                }
                </button>
            </div>
            <Menu open={isOpen} />
        </header>
    )
}