import creditcard from '../../assets/images/logo.png';

export default function HeaderSign() {
    return (
        <div>
            <div className="logo-panel-header">
                <img src={creditcard} alt="logo" width="65px"/>
                <div>Stock Management</div>
            </div>
        </div>
    )
}