import React from "react";
 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link //link has a props : to ,send us to the link we want
  }from "react-router-dom";

function NavMenu(props){
    return(
        <div>
            <span className="font-bold">
                        The Menu 
                    </span>
                    
                    <ul>
                        <li>
                            <Link 
                        to="/" 
                        className="text-blue-500"
                        onClick={props.closeMenu}
                        >Home</Link>
                        </li>

                        <li><Link to="/about" className="text-blue-500" onClick={props.closeMenu}>About</Link></li>
                        <li><Link to="/views" className="text-blue-500" onClick={props.closeMenu}>Views</Link></li>
                    </ul>
        </div>
    )
}

export default NavMenu;