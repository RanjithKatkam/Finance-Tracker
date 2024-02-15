import { useNavigate } from "react-router-dom";

const NavigateSignupPage = (props) => {
    const { email, password, firstName, lastName, mobile, errorMessage } = props;
    const navigate = useNavigate();

    const onClickLogin = () => {
        if (email === "") {
            errorMessage("*Enter Your Email");
        } else if (password === "") {
            errorMessage("*Enter Your Password");
        } else if (firstName === "") {
            errorMessage("*Enter Your First Name");
        } else if (lastName === "") {
            errorMessage("*Enter Your Last Name");
        } else if (mobile === "") {
            errorMessage("*Enter Your Mobile Number");
        } else {
            const loginDetails = {
                email,
                password,
                firstName,
                lastName,
                mobile,
            };
            localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
            navigate("/");
        }
    };
    return (
        <button onClick={onClickLogin} className="login-btn">
            Create Account
        </button>
    );
};

export default NavigateSignupPage;
