import Header from "../../components/Header";
import React from 'react';
import Typist from 'react-typist';
import { toast } from 'react-toastify'

import './apresentation.css'


const Apresentation = () => {
    return (
        <section id="apresentation">
            <Header />
            <div className="container">
                <div className="row" data-aos-duration="1000" data-aos-easing="ease-out-cubic" data-aos="flip-left" id="arrow-animation">
                    <h3 className="text-center mt-5 row" id="welcome" onClick={() => toast.success("Seja muito bem vindo 😉")}>
                        Bem vindo ao meu portifolio
                    </h3>
                </div>

                <div className="row mt-5">
                    <div className="aboutMe col">
                        <Typist>
                            <div id="apresentationAnimation">
                                <h2 id="myName" className="display-3 gs-0 ms-0 text-break">Luan, </h2>
                                <Typist.Backspace delay={100} />
                                <Typist.Delay ms={800} />
                                <h3 id="text" className="display-3 gs-0 ms-0 text-break">Dev FullStack</h3>
                            </div>
                        </Typist>

                        <p>

                        👋 Sou o Luan, desenvolvedor Front-end, sou entusiasta quando o assunto é programação, gosto tanto de desenvolvedor quanto de resolver bugs que aparecem durante o desenvolvimento, sempre praticando e me aperfeiçoando cada vez mais na área.</p>
                    </div>
                    <div className="col-5" id="svg"></div>
                </div>
            </div>
        </section>
    )
}

export default Apresentation