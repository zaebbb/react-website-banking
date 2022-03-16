import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './Navbar';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            changeNav()
        })
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider 
        value={{color: "#fff"}} >
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo  
                    to="/"
                    onClick={toggleHome}>
                        DEVPROGER
                    </NavLogo>
                    <MobileIcon
                    onClick={toggle}
                    >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                            activeClass="active">
                                О компании
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="discover"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}>
                                Контакты
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}>
                                Услуги
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}>
                                Регистрация
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink
                        to="/signin"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}>
                        Авторизация
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
