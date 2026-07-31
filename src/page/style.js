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
    ${props => `padding: ${props.theme.headerPadding};`}
    ${props => `background-color: ${props.theme.navBarColor};`}
    ${props => `position: ${props.theme.navBarPosition};`}
    ${props => `width: ${props.theme.navBarWidth};`}
    @media only screen and (max-width: 600px) {
        display: none;
    }
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
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const ContactWrapper = styled.div`
    text-align: center;
    @media only screen and (max-width: 600px) {
        padding-top: 10px;
        padding-bottom: 10px;
        flex-direction: column;
        font-size: 20px;
    }
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

export const Section = styled.div`
    padding: 50px 80px;
    ${props => `color: ${props.theme.contentFontColor};`}
    ${props => `background-color: ${props.theme.contentColor};`}
    @media only screen and (max-width: 600px) {
        padding: 30px 20px;
    }
`

export const SectionTitle = styled.h2`
    font-size: 28px;
    margin-top: 0;
    margin-bottom: 25px;
    ${props => `font-family: ${props.theme.headerFont};`}
`

export const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
`

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    border-radius: 10px;
    ${props => `background-color: ${props.theme.cardColor};`}
    ${props => `border: 1px solid ${props.theme.cardBorderColor};`}
`

export const ProjectName = styled.div`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 12px;
    ${props => `font-family: ${props.theme.headerFont};`}
`

export const ProjectDescription = styled.div`
    font-size: 17px;
    line-height: 1.5;
    flex-grow: 1;
    ${props => `font-family: ${props.theme.contentFont};`}
`

export const TagRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
`

export const Tag = styled.span`
    font-size: 13px;
    padding: 4px 10px;
    border-radius: 12px;
    ${props => `border: 1px solid ${props.theme.cardBorderColor};`}
`

export const ProjectLinkButton = styled.a`
    display: inline-block;
    align-self: flex-start;
    margin-top: 18px;
    padding: 10px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    color: white;
    ${props => `background-color: ${props.theme.accentColor};`}
    &:hover {
        opacity: 0.85;
    }
`

export const ExperienceList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    ${props => `font-family: ${props.theme.contentFont};`}
`

export const ExperienceHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 4px;
`

export const ExperienceRole = styled.div`
    font-size: 19px;
    font-weight: bold;
`

export const ExperienceMeta = styled.div`
    font-size: 15px;
    opacity: 0.75;
`

export const ExperienceSummary = styled.div`
    font-size: 17px;
    line-height: 1.5;
    margin-top: 6px;
`
