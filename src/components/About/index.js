import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

import background from "assets/rocket.svg";
import {Col, Container, Row} from "react-bootstrap";

const Wrapper = styled.div`
  margin: 8rem 0;
  padding: 8rem 4rem;
  width: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  display: flex;
  align-items: center;

  p {
    margin: 2rem 0 4rem 0;
    font-weight: 600;
  }

  h2 {
    font-weight: 900;
  }

  h2,
  p {
    color: ${({theme}) => theme.colors.white};
  }
`;

export const About = ({forwardRef}) => (
  <Wrapper ref={forwardRef}>
    <Container fluid className='align-items-center d-flex h-100'>
      <Fade bottom>
        <Row>
          <Col xs={5}>
            <h2>About Us</h2>
            <p>
              BumBleBee, established in 2021, is a cutting-edge recruitment platform designed to
              streamline the process of connecting employers with the ideal candidates for their job
              openings. Our company was founded by a team of seasoned IT professionals who have
              firsthand experience in both recruiting and being recruited. This unique perspective
              has enabled us to create a platform tailored to the needs of the modern job market.
            </p>
          </Col>
        </Row>
      </Fade>
    </Container>
  </Wrapper>
);
