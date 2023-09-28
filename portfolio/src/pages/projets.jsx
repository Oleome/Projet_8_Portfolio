import '../styles/projet.scss';
import ordi from '../assets/ordi.png';
import { useState } from 'react';
import Modal from '../components/Modal/modal';
import jsonData from '../data/data.json';
import Card from '../components/Card/card';

function Projets () {

    const [showModal, setShowModal] = useState(false);
    const [projectShown, setProjectShown] = useState({}); 
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
                
                {jsonData.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        cover={item.cover}
                        pastille={item.pastille}
                        title={item.title}
                    />
                    ))}
                                
              
                {/* <div className="card">
                    <img className='card--img' src={jsonData.cover} alt="page d'accueil du site kasa" />
                    <div className='pastille'>
                        <img className='pastille--tech' src={jsonData.pastille} alt="logo de react" />
                    </div>
                    <div className="hover-image">
                        <h3>{jsonData.title}</h3>
                        <button onClick={openModal}>Details</button>
                    </div>
                </div> */}
                {/* <div className="card">
                    <img className='card--img' src={grimoire} alt="" />
                    <div className='pastille'>
                        <img className='pastille--tech' src={node} alt="" />
                    </div>
                    <div className="hover-image">
                        <h3>Backend du site Mon vieux grimoire</h3>
                        <button onClick={openModal}>Details</button>
                    </div>
                </div>
                <div className="card">
                    <img className='card--img' src={nina} alt="" />
                    <div className='pastille'>
                        <img className='pastille--tech' src={light} alt="" />
                    </div>
                    <div className="hover-image">
                        <h3>Débug du portfolio de Nina Carducci</h3>
                        <button onClick={openModal}>Details</button>
                    </div>
                </div>
                <div className="card">
                    <img className='card--img' src={shader} alt="" />
                    <div className='pastille'>
                        <img className='pastille--tech' src={react} alt="" />
                    </div>
                    <div className="hover-image">
                        <h3>Création application React pour un streamer twitch créant des shaders OBS</h3>
                        <button onClick={openModal}>Details</button>
                    </div>
                </div> */}
            </div>   
            {/* <Modal 
                showModal={showModal} 
                setShowModal={setShowModal} 
                firstPic={accueil}
                firstText='Le but de ce projet était de créez une application web de location immobilière avec React'
                secondPic={details}
                secondText='Avec comme support Create-react-app, ce projet m&apos;a permis de mieux appréhender les possibilités de React'
                thirdPic={apropos}
                thirdText='La réutilisation de composant ainsi que l&apos;utilisation de Sass m&apos;ont vraiment passionné'
            /> */}
        </main>
    )
}

export default Projets