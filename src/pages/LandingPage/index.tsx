import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import { Header } from "../../components/Header";
import { Home } from "../../components/Home";
import { Project } from "../../components/Project";
import { Skills } from "../../components/Skills";
import "./style.scss";

export function LandingPage() {
    return (
        <>
            <Home />
            <Skills />
            <About />
            <Project />
            <Contact />
        </>
    )
}