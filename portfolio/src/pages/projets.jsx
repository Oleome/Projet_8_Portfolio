import kasa from '../assets/Kasa.png';
import nina from '../assets/nina.png';
import grimoire from '../assets/monvieuxgrimoire.png';
import shader from '../assets/shader.png';
import '../styles/projet.scss';
import react from '../assets/react.png';
import node from '../assets/nodejs.png';
import light from '../assets/light.png';
import ordi from '../assets/ordi.png';
import kasaaccueil from '../assets/kasa_accueil.png';
import kasaapropos from '../assets/kasa_a_propos.png';
import kasadetails from '../assets/kasa_details.png';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: '35%',
      marginRight: '-60%',
      marginBottom: '-20%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  let subtitle;
  
  Modal.setAppElement('#root');

function Projets () {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <main className='main--projet'>
            <div className="title--container">
                <h2 className='projets'>Mes projets</h2>
                <img src={ordi} alt="une icône d'ordinateur" />
            </div>
            <div className="container">
                <div className="card">
                    <img className='card--img' src={kasa} alt="image du site kasa" />
                    <div className='pastille'>
                        <img className='pastille--tech' src={react} alt="logo de react" />
                    </div>
                    <div className="hover-image" onClick={openModal}>
                        <h3>Création du site Kasa avec React</h3>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Informations Modal"
                    >
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Kasa</h2>
                        <div className="kasa--accueil">
                            <img src={kasaaccueil} alt="page d'accueil de Kasa" />
                        </div>
                        <div className="kasa--a_propos">
                            <img src={kasaapropos} alt="page à propos de Kasa" />
                        </div>
                        <div className="kasa--details">
                            <img src={kasadetails} alt="page détails de Kasa" />
                        </div>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste molestiae, dolore minus, a perspiciatis excepturi officiis, ducimus itaque autem minima nesciunt non sed aliquid nostrum molestias nam iusto provident! Voluptatum?
                        Dolorum iste repellat ullam sed delectus voluptatem laboriosam? Delectus, facere. Odit blanditiis cupiditate laudantium magnam sint ad ipsum corporis optio repellat aspernatur, quisquam doloribus itaque ullam reprehenderit maiores quibusdam accusamus.
                        Iusto, aliquam delectus! Facilis quis rerum deleniti, dolorum veniam labore maiores magnam praesentium nemo? Earum doloremque dignissimos laborum, ut magni cumque enim sapiente quibusdam officiis facilis sed qui. Ducimus, corrupti.
                        </p>
                        <button onClick={closeModal}>close</button>
                    </Modal>
                </div>
                <div className="card">
                    <img className='card--img' src={grimoire} alt="" />
                    <div className='pastille'>
                        <img className='pastille--tech' src={node} alt="" />
                    </div>
                    <div className="hover-image" onClick={openModal}>
                        <h3>Backend du site Mon vieux grimoire</h3>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Informations Modal"
                    >
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Informations</h2>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste molestiae, dolore minus, a perspiciatis excepturi officiis, ducimus itaque autem minima nesciunt non sed aliquid nostrum molestias nam iusto provident! Voluptatum?
                        Dolorum iste repellat ullam sed delectus voluptatem laboriosam? Delectus, facere. Odit blanditiis cupiditate laudantium magnam sint ad ipsum corporis optio repellat aspernatur, quisquam doloribus itaque ullam reprehenderit maiores quibusdam accusamus.
                        Iusto, aliquam delectus! Facilis quis rerum deleniti, dolorum veniam labore maiores magnam praesentium nemo? Earum doloremque dignissimos laborum, ut magni cumque enim sapiente quibusdam officiis facilis sed qui. Ducimus, corrupti.
                        </p>
                        <button onClick={closeModal}>close</button>
                    </Modal>
                </div>
                <div className="card">
                    <img className='card--img' src={nina} alt="" />
                    <div className='pastille'>
                        <img className='pastille--tech' src={light} alt="" />
                    </div>
                    <div className="hover-image" onClick={openModal}>
                        <h3>Débug du portfolio de Nina Carducci</h3>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Informations Modal"
                    >
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Informations</h2>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste molestiae, dolore minus, a perspiciatis excepturi officiis, ducimus itaque autem minima nesciunt non sed aliquid nostrum molestias nam iusto provident! Voluptatum?
                        Dolorum iste repellat ullam sed delectus voluptatem laboriosam? Delectus, facere. Odit blanditiis cupiditate laudantium magnam sint ad ipsum corporis optio repellat aspernatur, quisquam doloribus itaque ullam reprehenderit maiores quibusdam accusamus.
                        Iusto, aliquam delectus! Facilis quis rerum deleniti, dolorum veniam labore maiores magnam praesentium nemo? Earum doloremque dignissimos laborum, ut magni cumque enim sapiente quibusdam officiis facilis sed qui. Ducimus, corrupti.
                        </p>
                        <button onClick={closeModal}>close</button>
                    </Modal>
                </div>
                <div className="card">
                    <img className='card--img' src={shader} alt="" />
                    <div className='pastille'>
                        <img className='pastille--tech' src={react} alt="" />
                    </div>
                    <div className="hover-image" onClick={openModal}>
                        <h3>Création application React pour un streamer twitch créant des shaders OBS</h3>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Informations Modal"
                    >
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Informations</h2>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste molestiae, dolore minus, a perspiciatis excepturi officiis, ducimus itaque autem minima nesciunt non sed aliquid nostrum molestias nam iusto provident! Voluptatum?
                        Dolorum iste repellat ullam sed delectus voluptatem laboriosam? Delectus, facere. Odit blanditiis cupiditate laudantium magnam sint ad ipsum corporis optio repellat aspernatur, quisquam doloribus itaque ullam reprehenderit maiores quibusdam accusamus.
                        Iusto, aliquam delectus! Facilis quis rerum deleniti, dolorum veniam labore maiores magnam praesentium nemo? Earum doloremque dignissimos laborum, ut magni cumque enim sapiente quibusdam officiis facilis sed qui. Ducimus, corrupti.
                        </p>
                        <button onClick={closeModal}>close</button>
                    </Modal>
                </div>
            </div>
            
        </main>
    )
}

export default Projets