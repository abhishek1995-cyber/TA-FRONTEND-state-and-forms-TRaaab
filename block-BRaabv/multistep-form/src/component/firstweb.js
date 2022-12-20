import React from 'react';


class First extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            address:'',
            email:'',
            dateofbirth:'',
            firstname:'',
            lastname:'',
            emailerr:'',
            firstnameerr:''
        }
    }

    formValidate = (cb) => {
        const { email, firstname } = this.state;
        if(firstname.length === 0){
            this.setState({
                firstnameerr: "Firstname can't be empty"
            })
            cb(false);
        }else {
            this.setState({
                firstnameerr: ''
            })
            cb(true);
        }
        if(!this.validateEmail(email)) {
            this.setState({
                emailerr: 'Email is not valid'
            })
            cb(false) 
        } else {
            this.setState({
                emailerr: ''
            })
            cb(true)
        }
    }

    validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      handleInput = ({target}) =>{

        const {name, value} = target

        this.setState({
            [name]:value
        })
      }


      handleNext = (event) =>{
        event.preventDefault();
        const { emailerr, firstnameerr } = this.state;
        this.formValidate((succeed) => {
            if(succeed) {
                this.props.handleStep()
            }
        }) ;

      }


    render(){
        return (
            <>
           <div className='first-container'>
            <h2>Sign Up</h2>
          
                    <form className='form-first'>
                        <div className='form'>
                        <label htmlFor='first-name'>First Name</label>
                        <input 
                        className='input-first'
                         type='text'
                        onChange={this.handleInput}
                        id='first-name'
                        name='firstname'
                        />
                         {
                        this.state.firstnameerr && (
                        <span>{this.state.firstnameerr}</span>
                       )
                    }
                        <label htmlFor='last-name'>Last Name</label>
                        <input type='text'
                        className='input-first'
                        onChange={this.handleInput}
                        id='last-name'
                        name='lastname'
                        />
                        </div>
                        <div className='form'>
                        <label htmlFor='dob'>Date of Birth</label>
                        <input type='date'
                        className='input-first'
                        onChange={this.handleInput}
                        id='dob'
                        name='dateofbirth'
                        />
                        <label htmlFor='email'>Email</label>
                        <input type='email'
                        className='input-first'
                        onChange={this.handleInput}
                        id='email'
                        name='email'
                        />
                             {
                        this.state.emailerr && (
                        <span>{this.state.emailerr}</span>
                       )
                    }
                    </div>
                        <div className='form'>
                        <label htmlFor='address'>Address</label>
                        <input type='text'
                        className='input-first'
                        onChange={this.handleInput}
                        id='address'
                        name='address'
                        />
                        </div>       
                    </form>
                    <div className='footer'>
                       <button className='btn-footer' onClick={this.handleNext}>
                            Next Step
                        </button>
                    </div>
           </div>
            </>
        )
    }
}

export default First