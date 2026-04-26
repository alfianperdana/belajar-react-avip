import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
            <p className="text-center text-gray-600">
                Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
            </p>
        </AuthLayout>
    );
};

export default LoginPage;