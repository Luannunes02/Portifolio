import './ability.css';
import CSS from '../../imgs/css3.png';
import HTML from '../../imgs/html5.png';
import Javascript from '../../imgs/javascript.png';
import Sass from '../../imgs/sass.png';
import Bootstrap from '../../imgs/bootstrap.jpg';
import Nodejs from '../../imgs/nodejs.png';
import Reactjs from '../../imgs/react.png';
import Typescript from '../../imgs/typescript.png'
import NextJs from '../../imgs/NextJs.png'

const Abilitys = () => {
    return (
        <section className='container-fluid' id='skillsSection'>
            <div className='container' id='skillsDiv' data-aos-duration="1000" data-aos="zoom-out">
                <div className='row'>
                    <div className='col'>
                        <h2 id='skillsTitle' data-aos="fade-right" data-aos-duration="2000">Habilidades</h2>
                    </div>
                </div>
                <div className='row'>
                    <p className='text-center' id='skillsText' data-aos-duration="2000" data-aos="flip-left">Abaixo estão as tecnologias que utilizo e que estou praticando e me aprimorando diariamente.</p>
                </div>
                <div className='row' data-aos="fade-up" data-aos-duration="1500">
                    <div className='col' id='skillsImgDiv'>
                        <img src={Typescript} alt='Typescript' id='skillImg'></img>
                        <img src={NextJs} alt='NextJS' id='skillImg'></img>
                        <img src={Javascript} alt='Javascript' id='skillImg'></img>
                        <img src={Sass} alt='Sass' id='skillImg'></img>
                        <img src={Bootstrap} alt='Bootstrap' id='skillImg'></img>
                        <img src={Nodejs} alt='Nodejs' id='skillImg'></img>
                        <img src={Reactjs} alt='Reactjs' id='skillImg'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Abilitys;