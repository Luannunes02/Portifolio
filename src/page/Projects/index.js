import './projects.css';
import Bootstrap from '../../imgs/bootstrap.jpg';
import React, { useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useState } from 'react';
import API from '../../api/projects-api.json'


const Projects = () => {

    const options = {
        scale: 1.0,
        speed: 1000,
        max: 30
    };

    function Tilt(props) {
        const { options, ...rest } = props;
        const tilt = useRef(null);

        useEffect(() => {
            VanillaTilt.init(tilt.current, options);
        }, [options]);

        return <div ref={tilt} {...rest} />;
    }

    //const [projectFile, setProjectFile] = useState([]);
    let projectsFile = API.projects;

    useEffect(() => {


        /*
        async function loadProjects() {
                        
            fetch(API)
            .then((result) => result.json())
            .then((json)=>{
                setProjectFile(json)
                console.log(json)
            });
        }

        loadProjects();
        */
    }, [])


    return (
        <section className='container-fluid' id='projectsSection'>
            <div className='container'>
                <div className='row'>
                    <h1 className='col' id='projectsTitle' data-aos="fade-up" data-aos-duration="2000">Projetos</h1>
                </div>
                <div className='row'>
                    <div className='col' id='cardProjectsContainer'>

                        {projectsFile.map((project) => {
                            return (
                                <div id='card' key={project.id}>
                                    <div id='controlTilt'>
                                        <Tilt option={options}>
                                            <div className="card bg-dark" id='cardProject' data-aos-duration="1500" data-aos="fade-right">
                                                <img src={project.capa} className="card-img-top" alt={project.nome} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{project.nome}</h5>
                                                    <p className="card-text">{project.descricao}</p>
                                                    <button data-bs-toggle="modal" data-bs-target={"#" + project.nome} id='openModalBtn'>Saiba mais</button>
                                                </div>
                                            </div>
                                        </Tilt>
                                    </div>

                                    <div className="modal fade" id={project.nome} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-xl">
                                            <div className="modal-content bg-dark">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">{project.nome}</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <img src={project.linkyoutube} className="card-img-top" alt="" />
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" data-bs-dismiss="modal" id='closeModalBtn'>Close</button>
                                                    <a type="button" id='acessSiteLink' href={project.githubLink} target='_blank'>GitHub</a>
                                                    <a type="button" id='acessSiteLink' href={project.deploy} target='_blank'>Acessar o site</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects