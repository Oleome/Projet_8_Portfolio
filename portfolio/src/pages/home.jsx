import '../styles/home.scss'; 
import me from '../assets/me.png';
import { NavLink } from 'react-router-dom';

function Home() {
    return (

        <main className='main--home'>
            <div className='home--container'>
                <div className="typewriter">
                    <p>Bonjour</p>
                    <p>Je suis Pierre Pillot</p>
                    <p>Développeur Web</p>
                </div>
                <div className='home--pic'>
                    <img src={me} alt="dessin de développeur" />
                </div>
            </div>
            <div className="projets--button">
                <NavLink className='projets' to="projets">Mes projets</NavLink>
            </div>  
        </main>
    )
}

export default Home






