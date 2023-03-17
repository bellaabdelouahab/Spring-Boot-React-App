// import HeaderLogin from "./headerlogin";

import '../SignIn/signin.css';
import FooterSign from './FooterSign';
import HeaderSign from './HeaderSign';
import SignupBody from './SignupBody';


export default function Mainsign() {
    return(
        <div className="container-login-panel">
            <HeaderSign />
            <SignupBody />
            <FooterSign />
        </div>
    )
}