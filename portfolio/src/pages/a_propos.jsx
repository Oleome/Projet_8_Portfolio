import '../styles/apropos.scss';
import kayak from '../assets/kayak.jpg';

function APropos () {
    return (
        <main className='main--apropos'>
            <div className="container">
                <p>
                    <span>Passionné de développement web, je suis actuellement à la recherche d'une première mission après ma formation avec Openclassrooms.</span>
                </p>
                <p>
                    <span>J'aime particulièrement le développement web car c'est un milieu en perpétuel évolution qui permet un cadre de travail stimulant et un apprentissage continu.</span>
                </p>
                <p>
                    <span>Je suis également passionné de kayak et de pêche en mer, activités qui me permettent de m'épanouir et d'être créatif dans mon métier.</span>
                </p>
                <p>
                    <span>Ayant une forte appétence pour React, j'ai pour but d'intégrer une entreprise pour développer mes compétences et m'épanouir au sein d'une équipe.</span>
                </p>
            </div> 
            <div className='kayak--container'>
                <img src={kayak} alt="" />
            </div>  
        </main>   
    )
}

export default APropos
