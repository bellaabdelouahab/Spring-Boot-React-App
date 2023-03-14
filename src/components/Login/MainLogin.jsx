// import HeaderLogin from "./headerlogin";
import FooterLogin from "./FooterLogin";
import LoginBody from "./LoginBody";
import HeaderLogin from './HeaderLogin';
import '../Login/log.css';


export default function Login() {
    return(
        <div className="container-login-panel">
            <HeaderLogin />
            <LoginBody />
            <FooterLogin />
        </div>
    )
}