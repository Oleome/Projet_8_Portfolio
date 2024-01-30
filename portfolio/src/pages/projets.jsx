import '../styles/projets.scss';
import ordi from '../assets/ordi.png';
import { useState } from 'react';
import Modal from '../components/Modal/modal';
import projectsData from '../data/projects.json';
import projectsInProgress from '../data/projectsInProgress.json';
import Card from '../components/Card/card';

function Projets() {
    const [projectShown, setProjectShown] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = (project) => {
        setProjectShown(project);
        setShowModal(true);
    };

    const closeModal = () => {
        setProjectShown(null);
        setShowModal(false);
    };

    return (
        <main>
            <nav className='projects'>
                <a href='#projets'>Projets</a>
                <a href='#projets-en-cours'>Projets en cours</a>
            </nav>
            <section className="main--projet" id='projets'>
                <div className="title--container">
                    <h2 className="projets">Mes projets</h2>
                    <img src={ordi} alt="une icône d'ordinateur" />
                </div>
                <div className="container">
                    {projectsData.map((project) => (
                        <Card
                            key={project.id}
                            id={project.id}
                            cover={project.cover}
                            pastille={project.pastille}
                            title={project.title}
                            description={project.description}
                            onClick={() => openModal(project)}
                        />
                    ))}
                </div>
                {showModal && (
                    <Modal
                        key={projectShown.id}
                        id={projectShown.id}
                        showModal={showModal}
                        setShowModal={closeModal}
                        pics={projectShown.pics}
                        texts={projectShown.texts}
                    />
                )}
            </section>
            <section className="main--projet" id='projets-en-cours'>
                <div className="title--container">
                    <h2 className="projets">Mes projets en cours</h2>
                    <img src={ordi} alt="une icône d'ordinateur" />
                </div>
                <div className="container">
                    {projectsInProgress.map((project) => (
                        <Card
                            key={project.id}
                            id={project.id}
                            cover={project.cover}
                            pastille={project.pastille}
                            title={project.title}
                            description={project.description}
                            onClick={() => openModal(project)}
                        />
                    ))}
                </div>
                {showModal && (
                    <Modal
                        key={projectShown.id}
                        id={projectShown.id}
                        showModal={showModal}
                        setShowModal={closeModal}
                        pics={projectShown.pics}
                        texts={projectShown.texts}
                    />
                )}
            </section>
        </main>
        
    );
}

export default Projets;
