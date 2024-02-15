import { Component } from "react";
import "./index.css";
import NavigateLoginPage from "../NavigateLoginPage";
import NavigateSignupPage from "../NavigateSignupPage";

class LoginPage extends Component {
    state = {
        isLogin: true,
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        errorMsg: "",
    };

    handleLoginAndSignIn = () => {
        this.setState((prevState) => ({ isLogin: !prevState.isLogin }));
    };
    onChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    };
    onChangePassword = (event) => {
        this.setState({ password: event.target.value });
    };
    onChangeFirstName = (event) => {
        this.setState({ firstName: event.target.value });
    };
    onChangeLastName = (event) => {
        this.setState({ lastName: event.target.value });
    };
    onChangeMobile = (event) => {
        this.setState({ mobile: event.target.value });
    };

    errorMessage = (msg) => {
        this.setState({ errorMsg: msg });
    };

    render() {
        const { isLogin, firstName, lastName, email, password, mobile, errorMsg } = this.state;
        return (
            <div className="login-main-container">
                {isLogin ? (
                    <>
                        <div className="login-sub-container">
                            <img src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1707831638/Credit_card-bro_mxywdt.png" alt="login" />
                            <form className="login-details-container">
                                <label>Email</label>
                                <input value={email} required onChange={this.onChangeEmail} type="text" placeholder="Enter Your Email" />
                                <label>Password</label>
                                <input
                                    value={password}
                                    required
                                    onChange={this.onChangePassword}
                                    type="password"
                                    placeholder="Enter Your Password"
                                />
                                <p className="error">{errorMsg}</p>
                                <NavigateLoginPage email={email} password={password} errorMessage={this.errorMessage} />
                            </form>
                        </div>
                        <div className="login-sub-container2">
                            <h1>Don't have an account ? </h1>
                            <button onClick={this.handleLoginAndSignIn}>SIGN UP</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="login-sub-container">
                            <form className="login-details-container a1">
                                <label>First Name</label>
                                <input
                                    value={firstName}
                                    required
                                    onChange={this.onChangeFirstName}
                                    type="text"
                                    placeholder="Enter Your First Name"
                                />
                                <label>Last Name</label>
                                <input
                                    value={lastName}
                                    required
                                    onChange={this.onChangeLastName}
                                    type="text"
                                    placeholder="Enter Your Last Name"
                                />
                                <label>Mobile Number</label>
                                <input
                                    value={mobile}
                                    required
                                    onChange={this.onChangeMobile}
                                    type="number"
                                    placeholder="Enter Your Mobile Number"
                                />
                                <label>Email</label>
                                <input value={email} required onChange={this.onChangeEmail} type="text" placeholder="Enter Your Email" />
                                <label>Password</label>
                                <input
                                    value={password}
                                    required
                                    onChange={this.onChangePassword}
                                    type="password"
                                    placeholder="Enter Your Password"
                                />
                                <p className="error">{errorMsg}</p>
                                <NavigateSignupPage
                                    firstName={firstName}
                                    lastName={lastName}
                                    mobile={mobile}
                                    email={email}
                                    password={password}
                                    errorMessage={this.errorMessage}
                                />
                            </form>
                        </div>
                        <div className="login-sub-container2">
                            <h1>Already have an account ? </h1>
                            <button onClick={this.handleLoginAndSignIn}>SIGN IN</button>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default LoginPage;
