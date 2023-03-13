import { useNavigate, Link } from "react-router-dom";
import React,{useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

export default function LoginBody() {
    
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
          const { username, password } = values;
          console.log(values);
          const { data } = await axios.post("z", {
            username,
            password,
          });
    
            navigate("/");
          }
        }


    return(
        <div>
            <div className="form-container-login">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <input type='email' placeholder="You're email" name="username" onChange={(e) => handleChange(e)}/><br/>
                    <input type='password' placeholder="You're password" name="password" onChange={(e) => handleChange(e)}/><br/>
                    <button type='submit'>Log in</button><br /><br/>
                    <div className="signup-message-panel">
                        if You don't have Already an Account please <Link id='link' to={'/SignIn'}>Sign in</Link>
                    </div>
                </form>
            </div>
            <ToastContainer />
            
        </div>
    )
}