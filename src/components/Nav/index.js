import {Container} from "components/Nav/components/container";
import {Panel} from "components/Nav/components/panel";
import logo from "assets/logo.svg";

export const Nav = (props) => (
  <Container>
    <img src={logo} />
    <Panel {...props}/>
  </Container>
);
