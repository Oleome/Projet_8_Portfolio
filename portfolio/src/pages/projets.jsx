import '../styles/projet.scss';
import ordi from '../assets/ordi.png';
import { useState } from 'react';
import Modal from '../components/Modal/modal';
import jsonData from '../data/data.json';
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
        <main className="main--projet">
            <div className="title--container">
                <h2 className="projets">Mes projets</h2>
                <img src={ordi} alt="une icône d'ordinateur" />
            </div>
            <div className="container">
                {jsonData.map((project) => (
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
        </main>
    );
}

export default Projets;
