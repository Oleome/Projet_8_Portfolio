import { useRef } from "react";
import emailjs from "@emailjs/browser";
import '../styles/contact.scss';


function Contact () {

    const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
    const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
    const publicId = process.env.REACT_APP_YOUR_PUBLIC_ID;
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(serviceId, templateId, form.current, publicId).then(
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
        <form ref={form} onSubmit={sendEmail} className="form">
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    )
}
  

export default Contact