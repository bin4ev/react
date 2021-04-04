
import './FormContacts.css'

function FormContacts() {
  return (

      <form className='forms-contacts'>
        <div >
          <label forHtml="name">Name:</label>
          <input type="text" id="name" name="username" placeholder='Enter your name'/>
          <br />
          <label forHtml="mail">E-mail:</label>
          <input type="email" id="mail" name="useremail"  placeholder='examp@gmail.com'/>
          <br />
          <textarea resizde="none" id="msg" name="usermessage" placeholder='Please write your messages....'></textarea>
        </div>
        <input type="submit" value="Send" />
      </form>
  );
}

export default FormContacts;