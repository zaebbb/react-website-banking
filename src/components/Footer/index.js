import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconsLink,
    SocialMedia
} from './Footer'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                            О компании
                            </FooterLinkTitle>
                                <FooterLink
                                to="/signin" >
                                Как это работает
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Рекомендации
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Карьера
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Инвесторы
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Условия
                                </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                            Видео
                            </FooterLinkTitle>
                                <FooterLink
                                to="/signin" >
                                Смотреть видео
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Послы
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Агентство
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Наполнитель
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Криптовалюта
                                </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                            Контакты
                            </FooterLinkTitle>
                                <FooterLink
                                to="/signin" >
                                Контакты
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Поддержка
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Деньги онлайн
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Искажения
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Спонсорство
                                </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                            Социальные сети
                            </FooterLinkTitle>
                                <FooterLink
                                to="/signin" >
                                Instagram
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Facebook
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                YouTube
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Twitter
                                </FooterLink>
                                <FooterLink
                                to="/signin" >
                                Linkedin
                                </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo
                        to="/"
                        onClick={toggleHome}>
                        DEVPROGER
                        </SocialLogo>
                        <WebsiteRights>
                        © {new Date().getFullYear()} Vladimir DEVPROGER. All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconsLink
                            href='/'
                            target="_blank"
                            aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink
                            href='/'
                            target="_blank"
                            aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconsLink>
                            <SocialIconsLink
                            href='/'
                            target="_blank"
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink
                            href='/'
                            target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                            <SocialIconsLink
                            href='/'
                            target="_blank"
                            aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
