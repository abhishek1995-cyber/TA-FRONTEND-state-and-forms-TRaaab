import React from 'react';


class User extends React.Component {
    constructor(props){
        super()
        this.state = {
            username: '',
            password:'',
            email:'',
            confirmpassword:'',
            usrErr: '',
            passErr: '',
            emailErr: '',
            pass2Err: '',
    }
    }

    formValidate = () => {
        const { username, email, password, confirmpassword } = this.state;
        if(username.length < 3) {
           this.setState({
            usrErr: 'Username must be at least 3 characters.'
           })
        } else {
            this.setState({
                usrErr: ''
            })
        }
        if(!this.validateEmail(email)) {
            this.setState({
                emailErr: 'Email is not valid'
            })
             
        } else {
            this.setState({
                emailErr: ''
            })
        }
        if(password.length < 6) {
            this.setState({
                passErr: 'Password must be at least 6 characters'
            })
        } else {
            this.setState({
                passErr: ''
            })
        }
        if(!confirmpassword) {
            this.setState({
                pass2Err: 'Password2 is required'
            })
        } else {
            this.setState({
                pass2Err: ''
            })
        }

    }

    validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    handleInput = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.formValidate()
       
        // alert(this.state.username);
        // alert(this.state.email);
        // alert(this.state.password);
    };


    

    render(){
        
        return (
            <>
             <form onSubmit={this.handleSubmit}>
                <label htmlFor='user'>Username</label>
                <input
                onChange={this.handleInput}
                name='username'
                type='text'
                id='user'
                />
                {
                    this.state.usrErr && (
                        <span>{this.state.usrErr}</span>
                    )
                }
               <label htmlFor='email'>Email</label>
                <input
                onChange={this.handleInput}
                name='email'
                type='email'
                id='email'
                />
                   {
                    this.state.emailErr && (
                        <span>{this.state.emailErr}</span>
                    )
                }

                <label htmlFor='password'>Password</label>
                <input
                onChange={this.handleInput}
                name='password'
                type='password'
                id='password'
                />
                   {
                    this.state.passErr && (
                        <span>{this.state.passErr}</span>
                    )
                }
            <label htmlFor='password'>Confirm Password</label>
                <input
                onChange={this.handleInput}
                name='confirmpassword'
                type='password'
                id='password'
                />
                   {
                    this.state.pass2Err && (
                        <span>{this.state.pass2Err}</span>
                    )
                }
                <input type='submit' value='submit' />
             </form>
            </>
        )
    }
}

export default User