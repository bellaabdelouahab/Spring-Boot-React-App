import { useNavigate } from "react-router-dom";
import React,{useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

export default function SignupBody() {
    
    const toastOptions = {
        position: "top-right",
        autoClose: 8000,  
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const [values, setValues] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };
    
      const validateForm = () => {
        const { username, password } = values;
        if (username === "") {
          toast.error("Email and Password is required.", toastOptions);
          return false;
        } else if (password === "") {
          toast.error("Password is required.", toastOptions);
          return false;
        }
        return true;
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
          const { username,email, password,confpassword } = values;
          console.log(values);
          if (password !== confpassword) {
            toast.error("Password is not match", toastOptions);
          } else if (password === confpassword){
            try {
              const { data } = await axios.post(
                "http://localhost:8081/api/v1/auth/register",
                {
                  firstname: username,
                  email: email,
                  password:password,
                }
              );
              document.cookie = data.token;
              localStorage.setItem(
                "Auth",
                JSON.stringify(data.token)
              );
              navigate("/login");
            }
            catch (error){
              toast.error("Something going wrong", toastOptions);
          }}
            
          }
        }


    return(
        <div>
            <div className="form-container-login">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <input type='text' placeholder="You're username" name="username" onChange={(e) => handleChange(e)}/><br/>
                    <input type='email' placeholder="You're email" name="email" onChange={(e) => handleChange(e)}/><br/>
                    <input type='password' placeholder="You're password" name="password" onChange={(e) => handleChange(e)}/><br/>
                    <input type='password' placeholder="Confirmed password" name="confpassword" onChange={(e) => handleChange(e)}/><br/>
                    <button type='submit'>Sign Up</button><br />
                </form>
            </div>
            <ToastContainer />
            
        </div>
    )

}