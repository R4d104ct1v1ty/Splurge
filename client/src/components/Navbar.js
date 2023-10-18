import {Link} from 'react-router-dom';
import userImage from '../images/userImage.png'
import cartLogo from '../images/Cart.png'
import logoutButton from '../images/logout.png'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" style={{fontSize: "1.65rem", marginLeft: "5%"}}><b>SPLURGE</b></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-link">Products</Link>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0"> 
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                </form>
            </div>
        </nav>
    );
}
 
export default Navbar;