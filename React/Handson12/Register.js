import React, { Component } from 'react'
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors,a,b,c) => {
    let valid = true;
    let v=false
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    if(a=='' &&  b==''  && c=='')
    {
      v=false
    }

    return (valid && v);
  }
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fullName: null,
          email: null,
          password: null,
          errors: {
            fullName: '',
            email: '',
            password: '',
          }
        };
      }
      handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
      
        switch (name) {
          case 'fullName': 
            errors.fullName = 
              value.length < 5
                ? 'Full Name must be 5 characters long!'
                : '';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'password': 
            errors.password = 
              value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
            break;
          default:
            break;
        }
      
        // this.setState({errors, [name]: value}, ()=> {
        //     console.log(errors)
        // })
      }

      handleSubmit = (event) => {
        if(this.state.errors.fullName!='')
        {
            alert(this.state.errors.fullName)
        }
        if(this.state.errors.email!='')
        {
            alert(this.state.errors.email)
        }
        if(this.state.errors.password!='')
        {
            alert(this.state.errors.password)
        }
        event.preventDefault();
        if(validateForm(this.state.errors,this.state.fullName,this.state.email,this.state.password)) {
         alert('Valid Form')
        }else{
         alert('Invalid Form')
        }
      }
    render() {
        return (
            <div className="text-center mt-5">
                <h3 style={{color:"red"}}>Register Here</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <span>Name:</span>
                        <input type="text" onChange={this.handleChange} name="fullName" value={this.state.fullName}/>
                    </div><br/>
                    <div>
                        <span>Email:</span>
                        <input type="text" onChange={this.handleChange} name="email" value={this.state.email}/>
                    </div><br/>
                    <div>
                        <span>Password:</span>
                        <input type="password" onChange={this.handleChange} name="password" value={this.state.password}/>
                    </div><br/>
                    <div>
                        <input type="submit"  value="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register
