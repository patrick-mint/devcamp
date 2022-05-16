import React, {useState} from 'react';
import {NavbarContainer,LeftContainer, RightContainer, NavbarInner, NavbarExtended, NavbarLinkContainer, NavbarLink, OpenLinkButton, NavbarLinkExtended} from "../Styles/Navbar.style"

function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);

    return <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInner>
        <LeftContainer>
            <NavbarLinkContainer>
            <NavbarLink to ="/"> Home</NavbarLink>
            <NavbarLink to ="/employee"> Employee List</NavbarLink>
            <NavbarLink to ="/department"> Department List</NavbarLink>
            <OpenLinkButton 
            onClick={() => { 
                setExtendNavbar((current) => !current);
            }}
            > 
            {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinkButton>
            </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer></RightContainer>
        </NavbarInner>
        {extendNavbar &&(
        <NavbarExtended>
            <NavbarLinkExtended to ="/"> Home</NavbarLinkExtended>
            <NavbarLinkExtended to ="/employee"> Shop</NavbarLinkExtended>
            <NavbarLinkExtended to ="/department"> Warehouse</NavbarLinkExtended>
        </NavbarExtended>
        )}
    </NavbarContainer>;
}

export default Navbar;

