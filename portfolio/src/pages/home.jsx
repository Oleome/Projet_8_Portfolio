import '../styles/home.scss'; 
import me from '../assets/me.png';
import { NavLink } from 'react-router-dom';

function Home() {
    return (

        <main className='main--home'>
            <div className="typewriter">
                <p>Bonjour</p>
                <p>Je suis Pierre Pillot</p>
                <p>Développeur Web</p>
            </div>
            <div className='home--pic'>
                <img src={me} alt="" />
            </div>
            <NavLink className='projets' to="projets">Mes projets</NavLink>
        </main>
    )
}

export default Home






