import { Outlet, Link } from "react-router-dom";
const Layout = () =>{
    return (
        <div>
           <nav className="pt-1 d-flex fixed-top" style={{backgroundColor:'#f5f5f5'}}>
                <Link to='/' className="text-decoration-none ms-3">
                    <div className="d-flex">
                        <h1 className="text-white p-2 rounded" style={{backgroundColor:'#6610f2'}}>TR</h1>
                        <h1 className="fs-5 w-50 ps-1 mt-2" style={{color:'#6610f2'}}>Travel Reservation</h1>
                    </div>
                </Link>    
                <ul className="d-flex list-unstyled mx-auto mt-3 fw-semibold">
                    <li className="px-4">
                        <Link to='about'className="text-decoration-none text-secondary">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to='blog' className="text-decoration-none text-secondary">Blog</Link>
                    </li>
                    <li className="px-4">
                        <Link to='pricing' className="text-decoration-none text-secondary">Pricing</Link>
                    </li>
                </ul>
                <Link to='login' className="text-secondary text-decoration-none ms-auto mt-3 pe-4 fw-semibold">Login</Link>
           </nav> 
           <Outlet/>
        </div>
    )
}

export default Layout;