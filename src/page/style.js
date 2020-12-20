import styled from 'styled-components'

export const PageWrapper = styled.div`

`

export const NavigationBar = styled.div`
    position: absolute:
    top: 0px;
    display: flex;
`

export const Link = styled.div`
    padding: 15px;
    margin-right: 15px;
`

export const ImageSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
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
    margin-bottom: 20px;
`

export const HeaderText = styled.div`
    text-align: center;
    font-size: 30px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const Content = styled.div`
    font-size: 20px;
`

export const ContactWrapper = styled.div`
    padding: 20px;
`