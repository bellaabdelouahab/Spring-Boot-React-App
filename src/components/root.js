// import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from "react-router-dom";


export default function Root() {
    return (
        <div className='container'>
            <Navbar />
            <Outlet />
        </div>
    );
}