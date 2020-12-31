import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${props => `font-family: ${props.theme.primaryFont};`}
`

export const NavigationBar = styled.div`
    top: 0px;
    display: flex;
    width: 100%;
    ${props => `padding: ${props.theme.headerPadding};`}
    ${props => `background-color: ${props.theme.navBarColor};`}
    ${props => `position: ${props.theme.navBarPosition};`}
`

export const Link = styled.a`
    padding: 15px;
    margin-right: 15px;
    border-radius: 5px;
    text-decoration: none;
    ${props => `color: ${props.theme.navBarFontColor};`}
    ${props => `margin-right: ${props.theme.linkMarginRight};`}
    ${props => `border-radius: ${props.theme.linkBorderRadius};`}
    &:hover {
        background-color: black;
        color: white;
        ${props => `background-color: ${props.theme.highlightColor};`}
    }
`

export const ImageSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${props => props.image});
`

export const BlurCover = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    backdrop-filter: ${props => props.blur
        ? "blur(10px);"
        : "none;"
    }
    transition: ${props => props.blur
        ? "none;"
        : "filter 0.3s ease-out;"
    }
`

export const Portrait = styled.img`
    max-height: 200px;
    max-width: 200px;
    border-radius: 50%;
    align-self: center;
    margin-bottom: 50px;
`

export const HeaderText = styled.div`
    text-align: center;
    font-size: 45px;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    backdrop-filter: none;
    ${props => `font-family: ${props.theme.headerFont};`}
    ${props => `
        border-radius: ${props.theme.headerTextBorderRadius};
        backdrop-filter: ${props.theme.headerTextBackgroundFilter};
        padding: ${props.theme.headerTextPadding};
        text-shadow: ${props.theme.headerTextShadow};
    `}
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px;
    padding-left: 80px;
    padding-right: 80px;
    ${props => `color: ${props.theme.contentFontColor};`}
    ${props => `background-color: ${props.theme.contentColor};`}
`

export const Content = styled.div`
    font-size: 20px;
    ${props => `font-family: ${props.theme.contentFont};`}
`

export const ContactSectionWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    ${props => `background-color: ${props.theme.footerColor};`}
    ${props => `color: ${props.theme.footerFontColor};`}
`

export const ContactWrapper = styled.div`
    text-align: center;
`

export const StyledLink = styled.a`
    text-decoration: none;
    color: inherit;
    &:hover {
        color: #bdbbbb
    }
`

export const StyledIcon = styled(FontAwesomeIcon)``

export const ImageText = styled.div`
    text-align: center;
    font-size: 30px;
    color: white;
    padding-left: 15px;
    padding-right: 15px;
`
