import { useNavigate } from "react-router-dom";

const Navigate = (props) => {
    const { onClickCancleLogout } = props;
    const navigate = useNavigate();

    const onClickCancle = () => {
        onClickCancleLogout();
    };

    const onClickLogoutBtn = () => {
        localStorage.removeItem("loginDetails");
        navigate("/login");
    };

    return (
        <div className="trans-form-div">
            <div className="logout-div">
                <h1>Are you sure want to logout ?</h1>
                <div>
                    <button onClick={onClickLogoutBtn}>Logout</button>
                    <button onClick={onClickCancle}>Cancle</button>
                </div>
            </div>
        </div>
    );
};

export default Navigate;
