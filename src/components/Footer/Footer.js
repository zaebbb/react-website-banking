import styled from 'styled-components';
import {Link} from 'react-scroll'

export const FooterContainer = styled.div`
    background: #101522;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0px auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 820px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media (max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    box-sizing: border-box;
    color: #ffffff;

    @media (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`   

export const FooterLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    transition: .5s;

    &:hover{
        color: #F55431;
    }
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media (max-width: 820px){
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #ffffff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    align-items: center;
    display: flex;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialMedia = styled.div`
    max-width: 1000px;
    width: 100%;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconsLink = styled.a`
    color: #ffffff;
    font-size: 24px;
    transition: .5s;

    &:hover{
        color: #F55431;
    }
`