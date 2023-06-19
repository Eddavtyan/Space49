import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

const Copyright = styled.div`
  background-color: black;
  padding: 0.5rem;

  h5 {
    text-align: center;
    font-size: 1rem;
    margin-top: 0.25rem;
    color: white;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 4rem;
  background-color: ${({theme}) => theme.colors.black};
  background-size: cover;
  width: 100%;

  h4 {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
  }

  h4,
  p{
    color: white;
  }
`;

export const Footer = () => (
  <>
    <Wrapper>
      <Fade bottom>
        <h4>Contacts</h4>
      </Fade>
      <Fade bottom>
        <p>+37499875577</p>
      </Fade>
      <Fade bottom>
        <p>Phone</p>
      </Fade>
      <Fade bottom>
        <p>Email</p>
      </Fade>
      <Fade bottom>
        <p>hey@space49.co</p>
      </Fade>
      <Fade bottom>
        <p>Address</p>
      </Fade>
      <Fade bottom>
        <p>Vratsakan St, 17/32 Yerevan, Armenia</p>
      </Fade>
    </Wrapper>
    <Copyright>
      <h5>© 2023, Start49. All rights reserved.</h5>
    </Copyright>
  </>
);
