import { useNavigate } from "react-router-dom";

const NavigateLoginPage = (props) => {
    const { email, password, errorMessage } = props;
    const navigate = useNavigate();

    const onClickLogin = () => {
        if (email === "") {
            errorMessage("*Enter Your Email");
        } else if (password === "") {
            errorMessage("*Enter Your Password");
        } else {
            const loginDetails = {
                email,
                password,
            };
            localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
            navigate("/");
        }
    };
    return (
        <button onClick={onClickLogin} type="submit" className="login-btn">
            Login
        </button>
    );
};

export default NavigateLoginPage;
