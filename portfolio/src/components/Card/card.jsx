import '../../styles/projet.scss';

function Card({cover, pastille, title}) {
    return (
            
        <div className="card">
            <img className='card--img' src={cover} alt="" />
            <div className='pastille'>
                <img className='pastille--tech' src={pastille} alt="" />
            </div>
            <div className="hover-image">
                <h3>{title}</h3>
            </div>
        </div>
     
    )
} 

export default Card