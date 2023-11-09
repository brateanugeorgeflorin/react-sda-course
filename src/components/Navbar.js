import { NavLink } from 'react-router-dom';
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
                        <NavLink to="/useeffect" className="nav-link" activeclassname="active">UseEffect</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/opositebutton" className="nav-link" activeclassname="active">OpositeButton</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/incrementoption" className="nav-link" activeclassname="active">IncrementOption</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/headercomponent" className="nav-link" activeclassname="active">HeaderComponent</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}