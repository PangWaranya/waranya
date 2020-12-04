import React, {components}from 'react'; 
import '../App.css';
import {Nav, NavItem, NavLink  }  from 'reactstrap';


const Pofile = (props) => {

    return (
        <div className='pofile'>
          <Nav tabs>  
   
            <NavItem>
              <NavLink className='fonthead' disabled href="#">WARANYA TANUASIN</NavLink>
           </NavItem> 
            <NavItem>
              <NavLink href="#">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Personal project</NavLink>
            </NavItem>
          </Nav>
       
        </div>
    
     
      );
    }
export default Pofile;