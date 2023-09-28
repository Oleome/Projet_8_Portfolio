import { useState } from 'react';
import '../../styles/projet.scss';
import jsonData from '../../data/data.json';
import Modal from '../Modal/modal';

function Card({cover, pastille, title, item}) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    };

    return (
        <div className="card">
            <img className='card--img' src={cover} alt="" />
            <div className='pastille'>
                <img className='pastille--tech' src={pastille} alt="" />
            </div>
            <div className="hover-image">
                <h3>{title}</h3>
                <button onClick={() => openModal(item)}>Details</button>
            </div>
        </div>                          
    )
} 

export default Card