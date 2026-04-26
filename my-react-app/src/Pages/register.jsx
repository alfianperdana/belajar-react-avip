import AuthLayout from "../components/Layouts/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister />
            <p className="text-center text-gray-600">
                Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
            </p>
        </AuthLayout>
    );
};

export default RegisterPage;