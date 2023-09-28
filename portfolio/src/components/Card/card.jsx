import { useState } from 'react';
import '../../styles/projet.scss';
import jsonData from '../../data/data.json';
import Modal from '../Modal/modal';

function Card({cover, pastille, title}) {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    };

    return (
        <>
         <div className="card">
            <img className='card--img' src={cover} alt="" />
            <div className='pastille'>
                <img className='pastille--tech' src={pastille} alt="" />
            </div>
            <div className="hover-image">
                <h3>{title}</h3>
                <button onClick={openModal}>Details</button>
            </div>
        </div>
         <Modal 
         showModal={showModal} 
         setShowModal={setShowModal} 
         firstPic={jsonData.cover}
         firstText='Le but de ce projet était de créez une application web de location immobilière avec React'
         secondPic={jsonData.cover}
         secondText='Avec comme support Create-react-app, ce projet m&apos;a permis de mieux appréhender les possibilités de React'
         thirdPic={jsonData.cover}
         thirdText='La réutilisation de composant ainsi que l&apos;utilisation de Sass m&apos;ont vraiment passionné'
     />
        </>    
       
     
    )
} 

export default Card