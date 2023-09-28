import '../styles/projet.scss';
import ordi from '../assets/ordi.png';
import { useState } from 'react';
import Modal from '../components/Modal/modal';
import jsonData from '../data/data.json';
import Card from '../components/Card/card';

function Projets () {

    const [projectShown, setProjectShown] = useState({}); 


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
                {jsonData.map((item) => (
                    <Card 
                        key={item.id}
                        id={item.id}
                        cover={item.cover}
                        pastille={item.pastille}
                        title={item.title}
                    />
                    ))}               
            </div>   
        </main>
    )
}

export default Projets