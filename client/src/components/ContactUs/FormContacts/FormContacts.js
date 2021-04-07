import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import './FormContacts.css';
import validatorsSchema from '../../../utils/validatorsSchema';
import api from '../../../services/apiContact';
import notification from '../../../utils/notification';

function FormContacts({
  history,
}) {
  const [notif, setNotif] = useState('');
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validatorsSchema.formContacts)
  })

  const submitForm = (formInfo) => {

    api.formContacts(formInfo)
      .then(() => {
        setNotif('Thank you for your feedback!')
        setTimeout(() => {
          history.push('/')
        }, 2000)
      })

      .catch(err => console.log(err))
  }
  return (

    < form className = 'forms-contacts' onSubmit = { handleSubmit(submitForm) } >
          {notification(notif)}
      <div >
        <label forhtml="username">Name:</label>
        <input type="text" id="name" name="username" placeholder='Enter your name' ref={register} />
        <p>{errors.username?.message}</p>
        <label forhtml="email">E-mail:</label>
        <input type="email" id="email" name="useremail" placeholder='examp@gmail.com' ref={register} />
        <p>{errors.useremail?.message}</p>
        <textarea resizde="none" id="msg" name="usermessage" placeholder='Please write your messages....' ref={register}></textarea>
        <p>{errors.usermessage?.message}</p>
      </div>
      <input type="submit" value="Send" />
    </form >
  );
}

export default withRouter(FormContacts);