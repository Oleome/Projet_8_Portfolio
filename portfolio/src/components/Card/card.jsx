import '../../styles/home.scss'

function Card({img, pastille, title}) {
    return (
            
        <div className="card">
            <img className='card--img' src={img} alt="" />
            <div className='pastille'>
                <img className='pastille--tech' src={pastille} alt="" />
            </div>
            <div className="hover-image">
                <h3>{title}</h3>
                <button onClick={openModal}>Details</button>
            </div>
        </div>
     
    )
} 

export default Card