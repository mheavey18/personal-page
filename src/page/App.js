import {
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'


import {
    PageWrapper,
    NavigationBar,
    Link,
    HeaderText,
    ContentWrapper,
    ContactSectionWrapper,
    ImageSection,
    Portrait,
    Content,
    ContactWrapper,
    StyledLink,
    StyledIcon,
} from "./style.js"


import clouds from "../images/clouds.jpg"
import foliage from "../images/foliage.jpg"
import portrait from "../images/square_crop.jpg"
import algae from "../images/algae.jpg"

export const App = () => {
    return (
        <PageWrapper>
            <NavigationBar>
                <Link href="#aboutme">
                    About Me
                </Link>
                <Link href="#contactinfo">
                    Contact Info
                </Link>
                {/* TODO: add different styles for website */}
            </NavigationBar>
            <ImageSection image={clouds}>
                <HeaderText>
                    Hi I'm Marty.
                </HeaderText>
            </ImageSection>
            <ContentWrapper id="aboutme">
                <Portrait src={portrait} />
                <Content>
                    I am currently located in Washington, D.C. working as a full-stack engineer at
                    <StyledLink href="https://quorum.us"> Quorum</StyledLink>.
                    I graduated from Harvard in 2020 with a degree in computer science with a minor in government. I enjoy aerial photography, 
                    sports, politics, and building things.
                </Content>
            </ContentWrapper>
            <ImageSection image={algae}/>
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
    );
}

export default App;
