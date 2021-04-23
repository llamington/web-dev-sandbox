import React, { Component } from "react";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="container"> 
                    <LoginForm />
                </div>
            </React.Fragment>
            
        )
    }
}

export default App;