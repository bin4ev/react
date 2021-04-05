import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validatorsSchema from '../../../utils/validatorsSchema';
import './FormContacts.css';
import {withRouter} from 'react-router-dom';

import api from '../../../services/apiContact'


function FormContacts({
  history,
}) {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validatorsSchema.formContacts)
  })

  const submitForm = (formInfo) => {
  
    api.formContacts(formInfo)
      .then(()=>history.push('/'))
      .catch(err => console.log(err))
  }
  return (

    <form className='forms-contacts' onSubmit={handleSubmit(submitForm)}>
      <div >
        <label forHtml="username">Name:</label>
        <input type="text" id="name" name="username" placeholder='Enter your name' ref={register} />
        <p>{errors.username?.message}</p>
        <label forHtml="email">E-mail:</label>
        <input type="email" id="email" name="useremail" placeholder='examp@gmail.com' ref={register} />
        <p>{errors.useremail?.message}</p>
        <textarea resizde="none" id="msg" name="usermessage" placeholder='Please write your messages....' ref={register}></textarea>
        <p>{errors.usermessage?.message}</p>
      </div>
      <input type="submit" value="Send" />
    </form>
  );
}

export default withRouter(FormContacts);