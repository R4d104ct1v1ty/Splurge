const Navbar = () => {
    return ( 
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg" style={{padding: "3px"}}>
            <a className="navbar-brand" href="#" style={{margin: "15px"}}><h1 style={{fontSize: "28px"}}>Splurge</h1></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{position: "relative", marginLeft: "15px"}}>
                <ul className="navbar-nav mr-auto" style={{display: "flex", alignItems: "center"}}>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories 
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item" style={{marginLeft: "5px"}}>
                        <form className="form-inline my-2 my-lg-0" style={{marginLeft: "10px"}}>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <select name="in-categories" id="in-categories" style={{width: "fit-content", height: "31px", fontSize: "12px", backgroundColor: "#D8D9DA"}}>
                                    <option value="all">All</option>
                                    <option value="men's-wear">Men's Wear</option>
                                    <option value="women's-wear">Women's Wear</option>
                                    <option value="accessories">Accessories</option>
                                    <option value="electronics">Electronics</option>
                                </select>
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{height: "31px", borderRadius: 0}}/>
                                <button  type="submit" style={{border: "None", backgroundColor: "#61677A", height: "31px", borderTopRightRadius: "5px", borderBottomRightRadius: "5px"}}><svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="24px" height="31px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/></svg></button>
                            </div>  
                        </form>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
}
 
export default Navbar;