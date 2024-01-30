import '../../styles/projets.scss';

function Card({cover, pastille, title, onClick }) {
  

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
