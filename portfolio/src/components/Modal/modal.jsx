import './modal.scss';

function Modal ({ showModal, setShowModal }) {
    return(
        <>{showModal ? <div>Modal</div> : null}</>
    )
}

export default Modal