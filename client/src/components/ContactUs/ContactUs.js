
import './ContactUs.css';
import FormContacts from './FormContacts/FormContacts'
function ContactUs() {
  return (
    <div className="contacts-wrapper">
      <div className='content-wrap'>
        <h1>Let’s Get In Touch</h1>
        <p>Have a question or comment?
        We’d love to help! Just fill in the form below and someone from our team will reply back to you in no time.
        </p>
        <FormContacts />
      </div>

    
    </div>
    
  );
}

export default ContactUs;
