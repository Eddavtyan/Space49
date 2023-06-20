import {Col, Container, Row} from "react-bootstrap";
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import Fade from "react-reveal/Fade";

import img from "assets/Emails-bro.svg";

const inputStyles = css`
  padding: 0.75rem 1rem;
  width: 100%;
  display: block;
  border: none;
  border-radius: 10px;
  margin-top: 1rem;
`;

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.grey};
  padding: 8rem 0 12rem;
  position: relative;
  
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%);
  }
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.2s;
  color: white;
  border-radius: 10px;
  display: block;
  border: none;
  width: 100%;
  font-weight: bold;
  background-color: ${({theme}) => theme.colors.lightGreen};

  :hover {
    background-color: ${({theme}) => theme.colors.green};
  }
`;

const Input = styled.input`
  ${inputStyles};
  background-color: ${({theme}) => theme.colors.lightGrey};
`;

const TextArea = styled.textarea`
  ${inputStyles};
  background-color: ${({theme}) => theme.colors.lightGrey};
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Form = styled.form`
  padding: 4rem;
  background-color: white;
  border-radius: 20px;

  h3,
  p {
    color: ${({theme}) => theme.colors.black};
  }

  h3 {
    font-weight: 900;
  }

  p {
    font-weight: 600;
    margin-top: 1rem;
  }
`;

export const Email = ({forwardRef}) => (
  <Wrapper ref={forwardRef}>
    <Container className='mt-5'>
      <Fade bottom>
        <Form action="mailto:hey@space49.co" method="post" enctype="text/plain">
          <Row>
            <Col>
              <h3>Reach out now</h3>
              <p>
                Schedule a free consultation with us to work out your project roadmap. We will find
                the best solution for your needs.
              </p>
              <InputGroup>
                <Input name="name" placeholder='Name' />
                <Input name="company" placeholder='Company' />
              </InputGroup>
              <Input name="email" placeholder='Email' />
              <TextArea name="message" placeholder='Your message here' />
              <Button type="submit" value="Send">SEND MESSAGE</Button>
            </Col>
            <Col>
              <img src={img} alt='#' />
            </Col>
          </Row>
        </Form>
      </Fade>
    </Container>
  </Wrapper>
);
