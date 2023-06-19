import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

import outstaff from "assets/Interview/Outstaff.svg";
import reporter from "assets/Interview/Reporter.svg";
import technical from "assets/Interview/Technical.svg";
import {Col, Container, Row} from "react-bootstrap";

const Wrapper = styled.div`
  position: relative;
  margin-top: 10rem;

  p {
    margin: 2rem 0 4rem 0;
    font-weight: 600;
  }

  h3 {
    font-weight: 700;
  }

  h3,
  p {
    color: ${({theme}) => theme.colors.darkPink};
  }
`;

export const Interview = () => (
  <Wrapper>
    <Container>
      <Fade bottom>
        <Row className='align-items-center justify-content-between mt-5'>
          <Col xs={7}>
            <h3>Technical Interview</h3>
            <p>
              IT professionals from our team conduct a preliminary technical interview to exclude
              inappropriate candidates and save time for both - our customers and the candidates
              involved. This allows them to easily classify the talent pool into different sections
              and thus makes it easier for them to match talent with the right opportunity!
            </p>
          </Col>
          <Col xs={5}>
            <img src={technical} alt='#' />
          </Col>
        </Row>
      </Fade>
      <Fade bottom>
        <Row className='align-items-center mt-5'>
          <Col xs={5}>
            <img src={outstaff} alt='#' />
          </Col>
          <Col xs={7}>
            <h3>Why should you outstaff?</h3>
            <p>
              You’ll enjoy greater flexibility since you’ll be able to increase or decrease the
              number of hired contractors offering development services. You can easily navigate any
              emergencies in your workforce by outstaffing a reputable and skilled developer.
              Furthermore, you have complete control when you outstaff and can enjoy cost-effective
              services. To top it all off, you’ll be working with a skilled developer and won’t have
              to worry about the logistics.
            </p>
          </Col>
        </Row>
      </Fade>
      <Fade bottom>
        <Row className='align-items-center mt-5'>
          <Col xs={7}>
            <h3>Check out our success</h3>
            <p>
              As a rapidly expanding recruitment platform, our primary goal is to facilitate the
              process of connecting businesses with the right talent, while simultaneously assisting
              skilled professionals in securing their next exciting career opportunity. Since our
              inception, we have achieved impressive milestones that reflect our commitment to
              excellence and continuous improvement.
            </p>
          </Col>
          <Col xs={5}>
            <img src={reporter} alt='#' />
          </Col>
        </Row>
      </Fade>
    </Container>
  </Wrapper>
);
