import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import game from '../../src/images/Game.png';
import {CardImg} from 'reactstrap';
class SignIn extends React.Component {
    constructor(props)
    {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
          e.preventDefault()
          console.log(this.state)
          axios({
            method: 'get',
            url: 'http://localhost:3000/users',
            validateStatus: (status) => {
              return true;
            },
          }).catch(error => {
                console.log(error)
          }).then(response => {
            var value = 0;
            for(var i = 0; i<response.data.length;i++)
            {
                if(response.data[i].email === this.state.email && response.data[i].password === this.state.password)
                    value++;
            }
            if(value === 1){
                this.props.handleSuccessfulLogin();
                this.props.history.push('/gamepage')
            }
            else
                document.getElementById("4").removeAttribute("hidden")
    })
}

    render() {
        const{email, password} = this.state
        return (
          <div className="card-group reg" >
              <div className="col-sm-4">
      <CardImg variant="top" src={game} />
              </div>
            <div className="col-sm-4">
                 <p id = "4" hidden = {true} style = {{color:'red'}}>Wrong mail or password</p>
            <Form onSubmit = {this.submitHandler}>
                <Form.Group controlId="formBasicText">
                    <Form.Label><i>E-Mail</i></Form.Label>
                    <Form.Control type="email" placeholder="Enter Mail Address" name = "email" value = {email} required onChange = {this.changeHandler}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label><i>Password</i></Form.Label>
                    <Form.Control type="password" placeholder="Password" name = "password" value = {password}  required minLength = "6" onChange = {this.changeHandler}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    <i>Login</i>
                </Button>
            </Form>
            </div>
            </div>
        );
    }
}

export default SignIn;
