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
                    <h3 className="text-center mt-5 row" id="welcome" onClick={() => toast.success("Be very welcome ;)")}>
                        Welcome to my portfolio
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

                            👋 Hello, my name is Luan, I'm a FullStack Developer, I finished ADS college at the end of 2021, constantly training every day to improve and evolve more and more in the programming universe, which by the way I'm an enthusiast😁.</p>
                    </div>
                    <div className="col-5" id="svg"></div>
                </div>
            </div>
        </section>
    )
}

export default Apresentation