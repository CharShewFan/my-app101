import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {useTransition,animated} from 'react-spring';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link //link has a props : to ,send us to the link we want
  }from "react-router-dom"; // avoid typing BrowserRouter by using this,just <Router/>
import NavMenu from "./NavMenu";






function Navigation(){
    const [showMenu,setShowMenu] = useState(false); //conditional redening
    
    const menuTransitions = useTransition(showMenu, null,{
        from:{position:'absolute',opacity:0},
        enter:{opacity:1},
        leave:{opacity:0},
    })
    const maskTransitions = useTransition(showMenu, null,{
        from:{opacity:0,transform:"translateX(-100%)"},//slide from lefthand side of the screen
        enter:{opacity:1,transform:"translateX(0%)"},
        leave:{opacity:0,transform:"translateX(-100%)"},//back to the lefthand side of the screen
    })

    return (
        <nav>
            <span className='text-xl'>
            <FontAwesomeIcon                 
            icon={faBars}
                onClick={()=>setShowMenu(!showMenu)}/>

            </span>


            {
                maskTransitions.map(({item,key,props})=>
                    item &&
                    <animated.div
                        key={{key}}
                        style={props}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={()=>setShowMenu(false)}>
                        
                        this is menu

                    </animated.div>)
            }

            {
                menuTransitions.map(
                    ({item,key,props})=>
                item &&
                    <animated.div
                    key={{key}}
                    style={props}
                    className='fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3'> 
                    
                    

                    <NavMenu closeMenu={() => setShowMenu(!showMenu)}/>
                    </animated.div>
                    )
                    
            }

        </nav>
    )
}


export default Navigation;