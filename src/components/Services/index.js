import styled from "@emotion/styled";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import {Col, Container, Row} from "react-bootstrap";

import {Box} from "components/Services/components/Box";

import ai from "assets/Service/ai.svg";
import filtering from "assets/Service/filtering.svg";
import intelligente from "assets/Service/intelligente.svg";
import outstaffing from "assets/Service/outstaffing.svg";
import recruiters from "assets/Service/recruiters.svg";
import unique from "assets/Service/unique.svg";

const Wrapper = styled.div`
  margin-top: 6rem;
  padding: 0 4rem;
  text-align: center;

  > div > p {
    margin: 2rem 0 4rem 0;
    font-weight: 600;
  }

  > div > h2 {
    font-weight: 900;
  }

  > div > h2,
  > div > p {
    color: ${({theme}) => theme.colors.black};
  }
`;

export const Services = ({forwardRef}) => (
  <Wrapper ref={forwardRef}>
    <Container fluid>
      <Bounce bottom>
        <h2>What We Offer</h2>
      </Bounce>
      <Bounce bottom>
        <p>
          Space49 offers a full spectrum of IT services for the fulfillment of a variety of
          projects.
          <br />
          Deploy both critical IT processes through enterprise-scale services from development to
          management.
        </p>
      </Bounce>
      <Fade bottom>
        <Row>
          <Col xs={12} sm={4}>
            <Box
              icon={intelligente}
              heading='INTELLIGENT MATCHING'
              text='Our team reviews the best candidates to match them with job requirements. If you want to outstaff, we will look for a capable team that can cater to your needs!'
            />
          </Col>
          <Col xs={12} sm={4}>
            <Box
              icon={recruiters}
              heading='DEDICATED RECRUITERS'
              text='We offer dedicated professionals that will work with you. So whether you’re looking for talent or outstaffing, we are here to support you!'
            />
          </Col>
          <Col xs={12} sm={4}>
            <Box
              icon={ai}
              heading='AI ALGORITHMS'
              text='We are also working on an AI service for matching jobs and candidates to help with technical recruitment and outstaffing.'
            />
          </Col>
        </Row>
      </Fade>
      <Fade bottom>
        <Row className='mt-4'>
          <Col>
            <Box
              icon={filtering}
              heading='TECHNICAL FILTERING'
              text='IT professionals from our team will do a technical interview to understand how candidates meet expectations.'
            />
          </Col>
          <Col>
            <Box
              icon={unique}
              heading='UNIQUE APPROACH'
              text='We believe it is important to approach various types of customers in different ways to succeed in business.'
            />
          </Col>
          <Col>
            <Box
              icon={outstaffing}
              heading='OUTSTAFFING SERVICES'
              text='You will be able to hire professional developers that will continue working at their regular workplace, but they’ll be directly reporting to you!'
            />
          </Col>
        </Row>
      </Fade>
    </Container>
  </Wrapper>
);
