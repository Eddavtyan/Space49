import Fade from "react-reveal/Fade";

import {Background} from "components/Header/components/Background";
import {Content} from "components/Header/components/Content";
import {Nav} from "components/Nav";
import {ArrowButton} from "components/Header/components/ArrowButton";

export const Header = (props) => (
  <Background>
    <Nav {...props}/>
    <Content>
      <Fade bottom>
        <h2>INTELLIGENT TALENT MATCHING</h2>
      </Fade>
      <Fade bottom>
        <p>
          We connect companies with technically sound and cultural-fit professionals. Our dedicated
          recruiters will find matching candidates to cover your open positions. For job seekers,
          there are open job positions. We also offer development outstaffing services!
        </p>
      </Fade>
    </Content>
    <ArrowButton />
  </Background>
);
