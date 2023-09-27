import icone from '../assets/icone.png';
import iconeslanguages from '../assets/icone-3.png';
import '../styles/services.scss';

function Services () {
    return (
        <main className='services--container'>
            <div className="card">
                <div className='icone'>
                    <img src={icone} alt="icone d'ordinateur" />
                </div>
                <div className='skills'>
                    <h2>Développement web</h2>
                    <p>Développement d&apos;applications React, sites vitrines, optimisation et débug de site, création backend</p>
                </div>
                <div className='languages'>
                    <h2>Languages utilisés</h2>
                    <img src={iconeslanguages} alt="icônes de language informatique"  width={500}/>
                </div>
            </div>
        </main>
    )
}

export default Services