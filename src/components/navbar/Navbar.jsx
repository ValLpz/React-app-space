import {Link} from "react-router-dom";
import AstroLogo from "/astronaut.svg";
import "./Navbar.css";

function Navbar({links}) {
    console.log(links)
    const navStyles={
        backgroundColor: "rgba (36, 9, 98, .4)",
    };
    return (
        <nav className="nav-container" style={navStyles}>
            <img className="nav-logo" src={AstroLogo} alt="space-app logo"/>
            <div className="links-container">
            {
                links.map((item) => (
                    <Link key={item.id} to={item.href}> 
                    {item.text} 
                    </Link>
                ))}
            </div>
         </nav>
    );
}

export default Navbar;
