import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-dark" id="navbar" style={{backgroundColor: "#5C5470"}}>
            <a class="navbar-brand" href="#" style={{marginLeft: "7%", fontWeight: "400", fontSize: "1.5rem"}}>SPLURGE</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link to="/"><a class="nav-link">Home</a></Link>
            </li>
            <li class="nav-item">
                <Link to="/products"><a class="nav-link" href="#">Products</a></Link>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0" style={{display: "flex", marginLeft: "7px"}}>
            <input class="form-control mr-sm-2" type="search" placeholder="Search for products" aria-label="Search" />
            <button class="btn btn-dark" type="submit" style={{marginLeft: "5px", color: "#fff", border: "2px solid black"}}>Search</button>
            </form>
        </div>
        </nav>
    );
}
 
export default Navbar;