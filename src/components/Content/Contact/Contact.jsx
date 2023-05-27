import FormContact from "./FormContact/FormContact";
import "./contact.scss";
export default function Contact() {
  return (
    <>
      <div className="contact-me-part " id="contactme">
        <div className="relative-bg"> </div>

        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text">Contact Me</span>
          <span className="why-text-sub mb-5">Lets Keep in Touch</span>
        </div>
        <FormContact />
      </div>
      ;
    </>
  );
}
