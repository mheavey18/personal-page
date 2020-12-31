import styled from 'styled-components'

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    z-index: 100;
`

export const MenuTrigger = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
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

export const Menu = styled.nav`
    border-radius: 5px;
    position: absolute;
    width: 100px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    ${props => `background-color: ${props.theme.highlightColor};`}
    ${props => `border-radius: ${props.theme.linkBorderRadius};`}
    ${props => props.isActive && `
        opacity: 1;
        visibility: visible;
        transform: translateY(85px);
    `}
`

export const UnorderedList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 5px;
    ${props => `border-radius: ${props.theme.linkBorderRadius};`}
    ${props => `background-color: ${props.theme.navBarColor};`}
    ${props => `color: ${props.theme.navBarFontColor};`}
`

export const ListItem = styled.li`
    padding: 10px;
    border-radius: 5px;
    ${props => `border-radius: ${props.theme.linkBorderRadius};`}
    &:hover {
        cursor: pointer;
        color: white;
        ${props => `background-color: ${props.theme.highlightColor};`}
    }
`