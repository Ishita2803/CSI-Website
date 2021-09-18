import React, {useState, useEffect} from 'react'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavBtnMenu } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';

const Navbar = ({ toggle }) => {

    const history = useHistory();

    const [pageViewCount, setPageViewCount] = useState(0)

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    function toRegister() {
        setPageViewCount(pageViewCount + 1)
        if (pageViewCount > 1) {
            history.replace("/register")
            setPageViewCount(0)
        }
        else {
            history.push("/register")
            setPageViewCount(0)
        }
        
    }

    function toLogin() {
        setPageViewCount(pageViewCount + 1)
        if (pageViewCount > 1) {
            history.replace("/login")
            setPageViewCount(0)
        }
        else {
            history.push("/login")
            setPageViewCount(0)
        }
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to="home">Innovations</NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="faq">FAQ's</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="schedule">Schedule</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="sponsors">Our Sponsors</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtnMenu>
                        <NavBtn>
                            <NavBtnLink onClick={toLogin} >Login</NavBtnLink>
                        </NavBtn>
                        <NavBtn>
                            <NavBtnLink onClick={toRegister} >Register</NavBtnLink>
                        </NavBtn>
                    </NavBtnMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
