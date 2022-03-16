import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.5s;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #ffffff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarWrapper = styled.div`
    color: #ffffff;
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.5s;
    color: #ffffff;
    cursor: pointer;

    &:hover{
        color: #01bf71;
        color: #F55431;
    }
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    background: #F55431;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: .5s;
    text-decoration: none;

    &:hover{
        background: #fff;
        color: #010606;
        border: none;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`