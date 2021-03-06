import React, { Component } from 'react';
import { register } from './UserFunctions';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) { 
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
            if(res){
                this.props.history.push('/login');
            }
        })
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit} >
                            <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input className="form-control" type="text" name="name" placeholder="Enter Name" 
                                        value={this.state.name} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input className="form-control" type="email" name="email" placeholder="Enter Email" 
                                        value={this.state.email} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input className="form-control" type="password" name="password" placeholder="Enter Password" 
                                        value={this.state.password} onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Register;