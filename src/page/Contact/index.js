import './contact.css'
import Instagram from '../../imgs/social/instagram.png';
import Github from '../../imgs/social/github.png'
import Gmail from '../../imgs/social/gmail.png';
import Linkedin from '../../imgs/social/linkedin.png'

const Contact = () => {
    return (
        <section className='container-fluid' id='contactSection'>
            <div className='container'>
                <div className='row'>
                    <h1 className='col fw-bold' id='projectsTitle'  data-aos="fade-right"data-aos-duration="2000">Contact</h1>
                </div>
                <div className='row'>
                    <span className='text-center mt-3' data-aos="fade-up" data-aos-duration="1000">Contact me via the links below</span>
                </div>
                <div className="row" id='socialGroup' data-aos="zoom-out-right" data-aos-duration="2000">
                    <ul className="social-icons col-2">
                        <li><a href="https://www.instagram.com/luan_nunees/" target='_blank'><i className="fa fa-facebook" aria-hidden="true"> <img src={Instagram} alt="facebook"/></i></a></li>
                        <li><a href="https://github.com/Luannunes02" target='_blank'><i className="fa fa-github" aria-hidden="true"> <img src={Github} alt="github"/> </i></a></li>
                        <li><a href="mailto:nunesesbaltar.luan02@gmail.com" target='_blank'><i className="fa fa-gmail" aria-hidden="true"> <img src={Gmail} alt="gmail"/> </i></a></li>
                        <li><a href="https://www.linkedin.com/in/luan-nunes-esbaltar/" target='_blank'><i className="fa fa-linkedin" aria-hidden="true"> <img src={Linkedin} alt="linkedin"/> </i></a></li>
                    </ul>
                    <div className='col-7' id='svgContact'>                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact