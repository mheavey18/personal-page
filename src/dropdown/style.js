import styled from 'styled-components'

export const MenuContainer = styled.div`
    position: relative;
`

export const MenuTrigger = styled.div`
    padding: 15px;
    margin-right: 15px;
    border-radius: 5px;
    color: black;
    text-decoration: none;
    &:hover {
        background-color: black;
        color: white;
    }
`

export const Menu = styled.nav`
    background: #ffffff;
    border-radius: 5px;
    position: absolute;
    width: 100px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    ${props => props.isActive && `
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    `}
`

export const UnorderedList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    ${props => `background-color: ${props.theme.headerColor};`}
    border-radius: 5px;
`

export const ListItem = styled.li`
    padding: 10px;
    border-radius: 5px;
    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
`