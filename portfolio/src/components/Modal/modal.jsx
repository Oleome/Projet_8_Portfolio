import { useRef, useEffect, useCallback } from 'react';
import {useSpring, animated} from 'react-spring';
import './modal.scss';
import { MdClose } from 'react-icons/md';

function Modal ({ showModal, setShowModal, pic }) {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transition: showModal ? `translateY(0%)` : `translateY(100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    };

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    return(
        <>
            { showModal ? (
                <div className="modal--background" ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <div className="modal--wrapper" showModal={showModal}>
                            <img src={pic} alt="pic project" className="modal--img" />
                            <div className="modal--content">
                                <h2>coucou</h2>
                                <p>lorem</p>
                                <button>au revoir</button>
                            </div>
                            <MdClose className="close__modal--button" aria-label='Close modal' onClick={setShowModal (prev => !prev)} />
                        </div>
                    </animated.div>             
                </div>
            ) : null }      
        </>
    )
}

export default Modal