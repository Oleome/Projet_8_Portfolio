import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import '../styles/contact.scss';
import email from  '../assets/email.png';


function Contact () {

    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ytihh2f', 'template_eot844h', form.current, '5cJt0RjWMDCjOXVvG')
        .then(
          (result) => {
            console.log(result.text);
            setMessageSent(true);
            setTimeout(() => {
              setMessageSent(false);
            }, 2000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      <div className="container--contact">
        <div className="contact--pic">
          <h2>Pour me contacter, envoyez moi un message via ce formulaire</h2>
          <img src={email} alt="un dessin d'email" />
        </div>
        <div className="form--container">
          <form ref={form} onSubmit={sendEmail} className="form">
            <label>Nom</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <button type="submit">Envoyer</button>
          </form>
          {messageSent && (
            <div className="success-message">
              Votre message a bien été envoyé !
            </div>
          )}
        </div>
      </div>
    )
}
  

export default Contact