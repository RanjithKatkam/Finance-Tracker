import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavigateHomePage() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/login");
    }, [navigate]);
}

export default NavigateHomePage;
