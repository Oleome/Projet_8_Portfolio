import kasa from '../assets/Kasa.png';
import nina from '../assets/nina.png';
import grimoire from '../assets/monvieuxgrimoire.png';
import shader from '../assets/shader.png';
import '../styles/projet.scss';
import react from '../assets/react.png';
import node from '../assets/nodejs.png';
import light from '../assets/light.png';
import ordi from '../assets/ordi.png';
import { useState } from 'react';
import Modal from '../components/Modal/modal';

function Projets () {

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev)
    };

    return (
        <main className='main--projet'>
            <div className="title--container">
                <h2 className='projets'>Mes projets</h2>
                <img src={ordi} alt="une icône d'ordinateur" />
            </div>
            <div className="container">
                <div className="card">
                    <img className='card--img' src={kasa} alt="page d'accueil du site kasa" />
                    <div className='pastille'>
                        <img className='pastille--tech' src={react} alt="logo de react" />
                    </div>
                    <div className="hover-image">
                        <h3>Création du site Kasa avec React</h3>
                        <button onClick={openModal}>Details</button>
                        <Modal showModal={showModal} setShowModal={setShowModal} />
                    </div>
                </div>
                <div className="card">
                    <img className='card--img' src={grimoire} alt="" />
                    <div className='pastille'>
                        <img className='pastille--tech' src={node} alt="" />
                    </div>
                    <div className="hover-image">
                        <h3>Backend du site Mon vieux grimoire</h3>
                    </div>
                </div>
                <div className="card">
                    <img className='card--img' src={nina} alt="" />
                    <div className='pastille'>
                        <img className='pastille--tech' src={light} alt="" />
                    </div>
                    <div className="hover-image">
                        <h3>Débug du portfolio de Nina Carducci</h3>
                    </div>
                </div>
                <div className="card">
                    <img className='card--img' src={shader} alt="" />
                    <div className='pastille'>
                        <img className='pastille--tech' src={react} alt="" />
                    </div>
                    <div className="hover-image">
                        <h3>Création application React pour un streamer twitch créant des shaders OBS</h3>
                    </div>
                </div>
            </div>           
        </main>
    )
}

export default Projets