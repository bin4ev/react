import { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './RegisterForm.css';
import api from '../../../services/api';



class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state ={};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        api.registerUserRequest('http://localhost:5000/user/register', this.state)
        .then(()=>this.props.history.push('./login'))
        .catch(err=>console.log(err))
        
    }

    render() {
        return (
                <div className='form'>
                    <form onSubmit={this.handleSubmit}  >
                        <input type="text" name="username" placeholder='Username' onChange={this.handleChange} />
                        <br />
                        <input type="text" name="password" placeholder="Password" onChange={this.handleChange} />
                        <br />
                        <input type="text" name="Repeatpassword" placeholder="Repeat Password" onChange={this.handleChange} />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div >
        )
    }

}
export default withRouter(RegisterForm);