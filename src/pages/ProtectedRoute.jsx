import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {

    // const token = localStorage.getItem("accessToken");

    return children;


    // if (!token) {
    //     return <Navigate to="/login" />;
    // }

    // try {
    //     const decoded = jwtDecode(token);

    //     if (decoded.exp * 1000 < Date.now()) {
    //         localStorage.removeItem("accessToken");
    //         return <Navigate to="/login" />;
    //     }

    //     return children;
    // } catch {
    //     return <Navigate to="/login" />;
    // }
};

export default ProtectedRoute;