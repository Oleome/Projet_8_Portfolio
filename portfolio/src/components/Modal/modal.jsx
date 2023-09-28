import { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import './modal.scss';
import { MdClose } from 'react-icons/md';

function Modal({ showModal, setShowModal, pics, texts }) {
  
    const modalRef = useRef();

    const animation = useSpring({
        config: { duration: 250 },
        opacity: showModal ? 1 : 0,
        transform: showModal ? 'translateY(0%)' : 'translateY(100%)'
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
        setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false);
        }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    if (!showModal) {
        return null;
    }

    return (
        <div className="modal--background" ref={modalRef} onClick={closeModal}>
        <animated.div className="animated--div" style={animation}>
            <div className="modal--wrapper">
            <div className="modal--content">
                <div className="modal--content--container">
                    <img src={pics[0]} alt="pic project" className="modal--img" />
                    <p>{texts[0]}</p>
                </div>
                <div className="modal--content--container">
                    <p>{texts[1]}</p>
                    <img src={pics[1]} alt="pic project" className="modal--img" />
                </div>
                <div className="modal--content--container">
                    <img src={pics[0]} alt="pic project" className="modal--img" />  
                    <p>{texts[2]}</p>
                </div>
            </div>
            <MdClose
                className="close__modal--button"
                aria-label="Close modal"
                onClick={() => setShowModal(false)}
            />
            </div>
        </animated.div>
        </div>
    );
}

export default Modal;
