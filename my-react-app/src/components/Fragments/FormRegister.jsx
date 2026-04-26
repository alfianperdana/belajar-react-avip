import Button from "../Elements/Button";
import InputForm from "../Elements/Input";  
const FormRegister = () => {
    return(
        <form action="">
          <InputForm 
            label="Full Name" 
            type="text" 
            placeholder="Enter your full name" 
            name="fullname"
          />
          <InputForm 
            label="Email" 
            type="email" 
            placeholder="example@mail.com" 
            name="email"
          />
          <InputForm 
            label="Password" 
            type="password" 
            placeholder="********" 
            name="password"
          />
          <InputForm 
            label="Confirm Password" 
            type="password" 
            placeholder="********" 
            name="confirmPassword"
          />
          <Button classname="bg-blue-600 hover:bg-blue-700 w-full">Register</Button>
        </form>
    );
};

export default FormRegister