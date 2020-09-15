import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';

function Navigation(){
    const [showmenu,setshowMenu] = useState(false); //conditional rederning
    let menu = <div>This is the menu</div>
    return (
        <nav>
            <span className='text-xl'>
            <FontAwesomeIcon>
                icon={faBars}
                onClick={()=>setshowMenu(!showmenu)};
            </FontAwesomeIcon>
            {menu}
            </span>
        </nav>
    )
}


export default Navigation;