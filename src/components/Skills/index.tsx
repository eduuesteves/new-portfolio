import { CloudArrowDown, Database, FileCss, FileHtml, FileJs, FileTs, FileTsx, GitBranch, Intersect, Layout, ListDashes, Package, Path, TreeStructure } from "phosphor-react";
import "./style.scss";

export function Skills() {
    return (
        <section className="section-normal skills" id="skills">
                <h2>Habilidades</h2>
                <p className="skills-text">Habilidades que utilizado no desenvolvimento de sistemas e páginas web!</p>
                <div className="content">
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                            <strong>
                                <FileHtml size={32} weight="duotone" />
                                HTML
                            </strong>
                            <p>Utilizado para estruturar as páginas web</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                        <strong>
                            <FileCss size={32} weight="duotone" />
                            CSS
                        </strong>
                        <p>Estiliza as páginas web</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                        <strong>
                            <Layout size={32} weight="duotone" />
                            SASS
                        </strong>
                        <p>Pré Processador, tornando mais rápido as estilizações CSS</p>
                    </div>
                    </div>
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                        <strong>
                            <FileJs size={32} weight="duotone" />
                            JAVASCRIPT
                        </strong>
                        <p>Linguagem de programação mais famosa do mundo web</p>
                    </div>
                    </div>
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                        <strong>
                            <FileTs size={32} weight="duotone" />
                            TYPESCRIPT
                        </strong>
                        <p>Extensão do Javascript, mas com recursos para melhorar a segurança dos códigos</p>
                    </div>
                    </div>
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                        <strong>
                            <FileTsx size={32} weight="duotone" />
                            REACTJS
                        </strong>
                        <p>Umas das principais bibliotecas performáticas para client - server no mundo web</p>
                    </div>
                    </div>
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                        <strong>
                            <Package size={32} weight="duotone" />
                            NODEJS
                        </strong>
                        <p>Permite o desenvolvimento dos projetos web mais variados possíveis</p>
                    </div>
                    </div>
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                        <strong>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,88H152V32Z" opacity="0.2"></path><path d="M48,120a8,8,0,0,0,8-8V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM160,51.31,188.69,80H160ZM228,208a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h20A8,8,0,0,1,228,208ZM91.82,196.31a20.82,20.82,0,0,1-9.19,15.23C77.44,215,71,216,65.14,216A60.72,60.72,0,0,1,50,214a8,8,0,0,1,4.3-15.41c4.38,1.2,14.95,2.7,19.55-.36.89-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.55,20.55,0,0,1,9-14.95c11.84-8,30.72-3.31,32.83-2.76a8,8,0,0,1-4.08,15.48c-4.49-1.17-15.22-2.56-19.82.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.08,1.12,1.9,2.31,1.49,6.44,2.68,10.45,3.84C77.5,174.17,94.06,179,91.82,196.31Zm71,3.23A39.05,39.05,0,0,0,168,180c0-19.85-14.35-36-32-36s-32,16.15-32,36,14.35,36,32,36a29.18,29.18,0,0,0,15.9-4.78l2.44,2.44a8,8,0,0,0,11.31-11.32ZM136,200c-8.82,0-16-9-16-20s7.18-20,16-20,16,9,16,20a24.41,24.41,0,0,1-1.18,7.51l-1.17-1.17a8,8,0,1,0-11.31,11.32l1.68,1.67A12.93,12.93,0,0,1,136,200Z"></path></svg>
                            MYSQL
                        </strong>
                        <p>Um dos bancos de dados mais utilizados</p>
                    </div>
                    </div>
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                        <strong>
                            <Database size={32} weight="duotone" />
                            POSTGRESQL
                        </strong>
                        <p>Banco de dado gratuito mais utilizado no mundo web</p>
                    </div>
                    </div>
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                        <strong>
                            <Path size={32} weight="duotone" />
                            EXPRESS
                        </strong>
                        <p>Biblioteca para criação e manipulação do backend e CRUD</p>
                    </div>
                    </div>
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                        <strong>
                            <CloudArrowDown size={32} weight="duotone" />
                            AXIOS
                        </strong>
                        <p>Biblioteca para utilização de API</p>
                    </div>
                    </div>
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                        <strong>
                            <TreeStructure size={32} weight="duotone" />
                            PRISMA
                        </strong>
                        <p>Biblioteca para desenvolver e manipular tabela no banco de dados</p>
                    </div>
                    </div>
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                        <strong>
                            <ListDashes size={32} weight="duotone" />
                            API
                        </strong>
                        <p>Acesso e integração as informações dos dados no banco de dados</p>
                    </div>
                    </div>
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                        <strong>
                            <Intersect size={32} weight="duotone" />
                            VITE
                        </strong>
                        <p>Interpretador web extremamente rápido</p>
                    </div>
                    </div>
                    <div className="card">
                        <div className="colors">
                            <div className="red" />
                            <div className="yellow" />
                            <div className="green" />
                        </div>
                        <div className="sub-card">
                        <strong>
                            <GitBranch size={32} weight="duotone" />
                            Git
                        </strong>
                        <p>Controlar o versionamento do projeto</p>
                    </div>
                    </div>
                </div>
            </section>
    )
}