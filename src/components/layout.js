import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layout = () => {
    return (
        <div className="">
            <Navbar expand="md lg" className="bg-body-tertiary fixed-top">
                <Container>
                    <Link to='/' className="d-flex text-decoration-none">
                        <div className="d-flex">
                            <h1 className="text-white p-2 rounded" style={{ backgroundColor: '#6610f2' }}>TR</h1>
                            <h1 className="fs-5 w-25 ps-1 mt-2" style={{ color: '#6610f2' }}>Travel Reservation</h1>
                        </div>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className="text-decoration-none fw-bold text-primary-emphasis px-3" to="/about">About</Link>
                            <Link className="text-decoration-none fw-bold text-primary-emphasis px-3" to="/pricing">Pricing</Link>
                            <Link className="text-decoration-none fw-bold text-primary-emphasis px-3" to="/blog">Blog</Link>
                        </Nav>
                        <Link className="text-decoration-none fw-bold text-primary-emphasis">Log in</Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
        // <div>
        //     <nav className="pt-1 d-flex fixed-top" style={{ backgroundColor: '#f5f5f5' }}>
        //         <Link to='/' className="text-decoration-none ms-3">
        //             <div className="d-flex">
        //                 <h1 className="text-white p-2 rounded" style={{ backgroundColor: '#6610f2' }}>TR</h1>
        //                 <h1 className="fs-5 w-50 ps-1 mt-2" style={{ color: '#6610f2' }}>Travel Reservation</h1>
        //             </div>
        //         </Link>
        //         <ul className="d-flex list-unstyled mx-auto mt-3 fw-semibold">
        //             <li className="px-4">
        //                 <Link to='about' className="text-decoration-none text-secondary">About</Link>
        //             </li>
        //             <li className="px-4">
        //                 <Link to='pricing' className="text-decoration-none text-secondary">Pricing</Link>
        //             </li>
        //             <li className="px-4">
        //                 <Link to='blog' className="text-decoration-none text-secondary">Blog</Link>
        //             </li>
        //         </ul>
        //         <Link to='login' className="text-secondary text-decoration-none ms-auto mt-3 pe-4 fw-semibold">Login</Link>
        //     </nav>
        //     <Outlet />
        // </div>
    )
}

export default Layout;

// function BasicExample() {
//     return (
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Container>
//                 <Navbar.Brand>
//                     <Link to='/' className="d-flex">
//                         <h1 className="text-white p-2 rounded" style={{ backgroundColor: '#6610f2' }}>TR</h1>
//                         <h1 className="fs-5 w-50 ps-1 mt-2" style={{ color: '#6610f2' }}>Travel Reservation</h1>
//                     </Link>
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link href="#home">About</Nav.Link>
//                         <Nav.Link href="#link">Pricing</Nav.Link>
//                         <Nav.Link href="#link">Blog</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default BasicExample;