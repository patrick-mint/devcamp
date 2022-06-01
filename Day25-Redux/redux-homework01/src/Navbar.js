import React, { useState } from 'react';
import { NavbarContainer, LeftContainer, RightContainer, NavbarInner, NavbarExtended, NavbarLinkContainer, NavbarLink, OpenLinkButton, NavbarLinkExtended } from "./Styles/Navbar.style"

function Navbar(props) {
    const [extendNavbar, setExtendNavbar] = useState(false);

    return <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInner>
            <LeftContainer>
                <NavbarLinkContainer>
                        <NavbarLink to="/profile"> Product List</NavbarLink>
                        <NavbarLink to="/dashboard"> Cart</NavbarLink>
                        <NavbarLink to="/stock"> Profile</NavbarLink>
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
        {extendNavbar && (
            <NavbarExtended>
                <NavbarLinkExtended to="/"> Product List</NavbarLinkExtended>
                <NavbarLinkExtended to="/dashboard"> Cart</NavbarLinkExtended>
                <NavbarLinkExtended to="/stock"> Profile</NavbarLinkExtended>
            </NavbarExtended>
        )}
    </NavbarContainer>;
}

export default Navbar;

// const [extendNavbar, setExtendNavbar] = useState(false);

//     return <NavbarContainer extendNavbar={extendNavbar}>
//         <NavbarInner>
//         <LeftContainer>
//             <NavbarLinkContainer>
//             <NavbarLink to ="/"> Home</NavbarLink>
//             <NavbarLink to ="/dashboard"> Dashboard</NavbarLink>
//             <NavbarLink to ="/stock"> Stock Management</NavbarLink>
//             <NavbarLink to ="/warehouse"> Warehouse Management</NavbarLink>
//             <OpenLinkButton 
//             onClick={() => { 
//                 setExtendNavbar((current) => !current);
//             }}
//             > 
//             {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
//             </OpenLinkButton>
//             </NavbarLinkContainer>
//         </LeftContainer>
//         <RightContainer></RightContainer>
//         </NavbarInner>
//         {extendNavbar &&(
//         <NavbarExtended>
//             <NavbarLinkExtended to ="/"> Home</NavbarLinkExtended>
//             <NavbarLinkExtended to ="/dashboard"> Dashboard</NavbarLinkExtended>
//             <NavbarLinkExtended to ="/stock"> Stock Management</NavbarLinkExtended>
//             <NavbarLinkExtended to ="/warehouse"> Warehouse Management</NavbarLinkExtended>
//         </NavbarExtended>
//         )}
//     </NavbarContainer>;