import React from 'react';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        const formData = {
            username: this.state.username,
            password: this.state.password
        }
        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(data => console.log(data)) // TODO set a timeout to refresh token
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="username" onChange={e => this.setState({username: e.target.value})}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={e => this.setState({password: e.target.value})} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
};

export default LoginForm;