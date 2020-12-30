import {
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
    useState,
} from 'react'
import { ThemeProvider } from 'styled-components'


import {
    PageWrapper,
    NavigationBar,
    Link,
    HeaderText,
    ContentWrapper,
    ContactSectionWrapper,
    Portrait,
    Content,
    ContactWrapper,
    StyledLink,
    StyledIcon,
    ImageText,
} from "./style.js"
import BlurredUpImage from "../BlurredUpImage"

import DropdownMenu from "../dropdown"
import themes from "./themes"
import portrait from "../images/square_crop.jpg"

export const App = () => {
    const initialTheme = themes[Math.floor((Math.random() * Object.keys(themes).length) + 1)]
    const [theme, setTheme] = useState(initialTheme)

    return (
        <ThemeProvider theme={theme}>
            <PageWrapper>
                <NavigationBar>
                    <Link href="#aboutme">
                        About Me
                    </Link>
                    <Link href="#contactinfo">
                        Contact Info
                    </Link>
                    <DropdownMenu setTheme={setTheme}/>
                </NavigationBar>
                <BlurredUpImage smallImage={theme.image1Mini} largeImage={theme.image1}>
                    <HeaderText>
                        Hi I'm Marty.
                    </HeaderText>
                </BlurredUpImage>
                <ContentWrapper id="aboutme">
                    <Portrait src={portrait} />
                    <Content>
                        I am currently located in Washington, D.C. working as a full-stack engineer at
                        <StyledLink href="https://quorum.us"> Quorum</StyledLink>.
                        I graduated from Harvard in 2020 with a degree in computer science with a minor in government. I enjoy
                        <StyledLink href="https://www.over-view.com/daily"> aerial photography</StyledLink>,
                        sports, politics, and building things.
                    </Content>
                </ContentWrapper>
                <BlurredUpImage smallImage={theme.image2Mini} largeImage={theme.image2}>
                    <ImageText>
                        Try refreshing the page or choosing a theme from the drop-down at the top of the page.
                    </ImageText>
                </BlurredUpImage>
                <ContactSectionWrapper id="contactinfo">
                    <ContactWrapper>
                        {"GitHub: "}
                        <StyledLink href="https://github.com/mheavey18">
                            <StyledIcon icon={faGithub} className="fa-lg"/>
                        </StyledLink>
                    </ContactWrapper>

                    <ContactWrapper>
                        {"martyheavey@gmail.com: "}
                        <StyledLink href="mailto: martyheavey@gmail.com">
                            <StyledIcon icon={faEnvelope} className="fa-lg"/>
                        </StyledLink>
                    </ContactWrapper>
                    
                    <ContactWrapper>
                        {"LinkedIn: "}
                        <StyledLink href="https://www.linkedin.com/in/marty-heavey/">
                            <StyledIcon icon={faLinkedin} className="fa-lg"/>
                        </StyledLink>
                    </ContactWrapper>
                </ContactSectionWrapper>
            </PageWrapper>
        </ThemeProvider>
    )
}

export default App;
