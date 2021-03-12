import {Component} from 'react';
import './Form.css';
class Form extends Component{

    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            repeatPassword:'',
        }
        this.handleChange=this.handleChange.bind(this);
        this.submitChange = this.submitChange.bind(this)

    }
  handleChange(event){
this.setState({value:event.target.value})
  }
  submitChange(event){
      alert(`${this.state.value}+ state was changed`)
    
  }

    render(){
        return (
            <div className='form'>
            
                <form onSubmit={this.submitChange}>
                    <input type="text" name="name" placeholder='Name'onChange={this.handleChange} />
                    <br />
                    <input type="text" name="password" placeholder="Password" />
                    <br />
                    <input type="text" name="Repeatpassword" placeholder="Repeat Password" />
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
    
            </div >
        )
    }
}
export default Form