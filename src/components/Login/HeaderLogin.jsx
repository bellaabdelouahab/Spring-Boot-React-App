import creditcard from '../../assets/images/logo.png';
// import './login.css';

export default function HeaderLogin() {
    return (
        <div>
            <div className="logo-panel-header">
                <img src={creditcard} alt="logo" width="65px"/>
                <div>Stock Management</div>
            </div>
        </div>
    )
}