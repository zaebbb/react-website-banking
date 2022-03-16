// import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './Sidebar';

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer 
        isOpen={isOpen}
        onClick={toggle}>
            <Icon 
            onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                    to="about"
                    onClick={toggle}>
                    О компании
                    </SidebarLink>
                    <SidebarLink 
                    to="discover"
                    onClick={toggle}>
                    Контакты
                    </SidebarLink>
                    <SidebarLink 
                    to="services"
                    onClick={toggle}>
                    Услуги
                    </SidebarLink>
                    <SidebarLink 
                    to="signup"
                    onClick={toggle}>
                    Регистрация
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute 
                    to="/signin">
                    Авторизация  
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
