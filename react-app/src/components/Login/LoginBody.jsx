import { useNavigate, Link } from "react-router-dom";
import React,{useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import AuthApi from "../../Api/AuthApi";
import config from "../../Api/ConfigApi";

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
          localStorage.setItem(
            "Auth",
            JSON.stringify(document.cookie)
          );
          // navigate("/admin/Dashboard");
          try {
            const { username, password } = values;
            console.log(values);
            const  data  = await axios.post(
              `${config.getApiPath()}/api/v1/auth/authenticate`,
              {
                email: username,
                password:password,
              }
            );
            // const data=AuthApi.AuthHandler(username,password);
            
            if (data.status === 200) {
              localStorage.setItem(
                "Auth",
                JSON.stringify(document.cookie)
              );
              navigate("/admin/Dashboard");
            }
            else{
              toast.error("There is an error plz check you're information", toastOptions);
            }
            }catch (error) {
              toast.error("Something going wrong", toastOptions);
          }
        }
      };


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