import '../styles/error.scss';

function Error() {
    return (
        <div className='error__div'>
            <h2>ERROR 404</h2>
            <span>Oups! La page que vous demandez n'existe pas.</span>
            <a href="/">Retourner sur la page d'accueil</a>
        </div>
    )
}
 
export default Error