import React, { useState } from 'react'
import { Icon, SidebarContainer, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
import { useHistory } from 'react-router-dom';
const Sidebar = ({ isOpen, toggle }) => {

    const history = useHistory();

    const [pageViewCount, setPageViewCount] = useState(0)

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
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About Us
                    </SidebarLink>
                    <SidebarLink to="faq" onClick={toggle}>
                        FAQ's
                    </SidebarLink>
                    <SidebarLink to="schedule" onClick={toggle}>
                        Schedule
                    </SidebarLink> 
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact Us
                    </SidebarLink>
                    <SidebarLink to="sponsors" onClick={toggle}>
                        Our Sponsors
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={toLogin}>Login</SidebarRoute>
                    <SidebarRoute onClick={toRegister} >Register</SidebarRoute>
                </SideBtnWrap>
                
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
