import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const NavigationBar = styled.div`
    top: 0px;
    display: flex;
    padding: 10px;
    background-color: #91f2ff;
`

export const Link = styled.a`
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

export const ImageSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    width: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${props => props.image});
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
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px;
    padding-left: 80px;
    padding-right: 80px;
    color: #383838;
`

export const Content = styled.div`
    font-size: 20px;
`

export const ContactSectionWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: #3102a8;
    color: white;
`

export const ContactWrapper = styled.div`
    padding: 20px;
`

export const StyledLink = styled.a`
    text-decoration: none;
    color: inherit;
    &:hover {
        color: #bdbbbb
    }
`

export const StyledIcon = styled(FontAwesomeIcon)`

`