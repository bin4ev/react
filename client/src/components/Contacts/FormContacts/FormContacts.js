
import './FormContacts.css'

function FormContacts() {
  return (

      <form className='forms-contacts'>
        <div >
          <label for="name">Name:</label>
          <input type="text" id="name" name="user_name" placeholder='Enter your name'/>
          <br />
          <label for="mail">E-mail:</label>
          <input type="email" id="mail" name="user_email"  placeholder='examp@gmail.com'/>
          <br />
          <textarea resizde="none" id="msg" name="user_message" placeholder='Please write your messages....'></textarea>
        </div>
        <input type="submit" value="Send" />
      </form>
  );
}

export default FormContacts;