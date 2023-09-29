import { useState } from 'react';
import '../../styles/projet.scss';

function Card({cover, pastille, title, item, onClick }) {
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
                <button onClick={onClick}>Details</button>
            </div>
        </div>
    )
}

export default Card
