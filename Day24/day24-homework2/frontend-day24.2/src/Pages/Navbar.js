import React, { useState, useContext } from 'react';
import { NavbarContainer, LeftContainer, RightContainer, NavbarInner, NavbarExtended, NavbarLinkContainer, NavbarLink, OpenLinkButton, NavbarLinkExtended } from "../Styles/Navbar.style"
import { CurrencyContext } from "../CurrencyContext";

function Navbar(props) {
    const [extendNavbar, setExtendNavbar] = useState(false);
    const token = useContext(CurrencyContext)

    return <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInner>
            <LeftContainer>
                <NavbarLinkContainer>
                    {token ? (<>
                        <NavbarLink to="/profile"> Profile</NavbarLink>
                        <NavbarLink to="/dashboard"> Dashboard</NavbarLink>
                        <NavbarLink to="/stock"> Stock Management</NavbarLink>
                        <NavbarLink to="/warehouse"> Warehouse Management</NavbarLink>
                        <NavbarLink to="/logout"> Log Out</NavbarLink>
                    </>
                    ) : (<><NavbarLink to="/dashboard"> Dashboard</NavbarLink>
                         <NavbarLink to="/login"> Login</NavbarLink></>)}

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
                {token ? (<>
                <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
                <NavbarLinkExtended to="/dashboard"> Dashboard</NavbarLinkExtended>
                <NavbarLinkExtended to="/stock"> Stock Management</NavbarLinkExtended>
                <NavbarLinkExtended to="/warehouse"> Warehouse Management</NavbarLinkExtended>
                <NavbarLinkExtended to="/logout"> Log Out</NavbarLinkExtended>
                </>
                 ) : (<><NavbarLinkExtended to="/dashboard"> Dashboard</NavbarLinkExtended>
                 <NavbarLinkExtended to="/login"> Login</NavbarLinkExtended></>)}
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