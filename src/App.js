import React from "react";
import './App.css';
import Logo from "./logo.jpg"




function App() {
    return (
        <div className="App">
            <div className="content">
                <div className="container">

                    <div className="showcase-contents">
                        <div className="first-showcase">
                            <img src={Logo} alt="logo" />
                            <h2>Facebook helps you connect and share with the people in your life.</h2>
                        </div>
                    </div>
                    <div className="showcase-card">
                        <div className="showcase-card-content">
                            <form className="forms">
                                <div className="form-control">
                                    <input type="text" name="email" placeholder="Email address or phone number" />
                                </div>
                                <div className="form-control">
                                    <input type="password" name="password" placeholder="Password" />
                                </div>
                                <div className="form-control">
                                    <input className="input-btn"  type="button" value="Log In" />
                                </div>
                            </form>
                            <div className="button">
                                <div className="anchor-div">
                                     <a className="a" href="#">Forgotten Password? </a>
                                </div>
                                <button className="btn">Create New Account.</button>
                            </div>
                        </div>
                        <p><strong>Create a Page</strong> for a celebrity, band or business.</p>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default App;