import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/aboutstate" className="nav-link" activeclassname="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <Link to="/useeffect" className="nav-link">UseEffect</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/opositebutton" className="nav-link">OpositeButton</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/incrementoption" className="nav-link">IncrementOption</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/headercomponent" className="nav-link">HeaderComponent</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}