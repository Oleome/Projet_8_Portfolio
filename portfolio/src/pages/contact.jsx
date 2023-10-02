import { useRef } from "react";
import emailjs from "@emailjs/browser";
import '../styles/contact.scss';
import email from  '../assets/email.png';


function Contact () {

    const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
    const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
    const publicId = process.env.REACT_APP_YOUR_PUBLIC_ID;
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ytihh2f', 'template_eot844h', form.current, '5cJt0RjWMDCjOXVvG').then(
        (result) => {
          console.log(result.text);
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
        </div>
      </div>
    )
}
  

export default Contact