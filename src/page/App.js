import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faFile,
} from '@fortawesome/free-solid-svg-icons'


import {
  PageWrapper,
  NavigationBar,
  Link,
  HeaderText,
  ContentWrapper,
  ContactWrapper,
  ImageSection,
  Portrait,
  Content
} from "./style.js"


import clouds from "../clouds.jpg"
import foliage from "../foliage.jpg"
import portrait from "../square_crop.jpg"

export const App = () => {
  return (
    <PageWrapper>
      <NavigationBar>
        <Link>
          About Me
        </Link>
        <Link>
          Contact Info
        </Link>
        {/* TODO: add different styles for website */}
      </NavigationBar>
      <ImageSection image={clouds}>
        <HeaderText>
          Hi I'm Marty.
        </HeaderText>
      </ImageSection>
      <ContentWrapper>
        <Portrait src={portrait} />
        <Content>
          I am currently located in Washington, D.C. working as a full-stack engineer at <a href="https://quorum.us">Quorum</a>. 
          I graduated from Harvard in 2020 with a degree in Computer Science with a minor in government. I enjoy aerial photography, 
          sports, politics, and building things.
        </Content>
      </ContentWrapper>
      <ImageSection image={foliage}/>
      <ContactWrapper>
        <FontAwesomeIcon icon={faGithub} />
        <a href="https://github.com/mheavey18">mheavey18</a>
        <FontAwesomeIcon icon={faEnvelope} />
        martyheavey@yahoo.com
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faFile} />


      </ContactWrapper>
    </PageWrapper>
  );
}

export default App;
