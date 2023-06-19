import styled from "@emotion/styled";
import {Col, Container, Row} from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Wrapper = styled.div`
  margin-top: 14rem;
`;

const Item = styled.div`
  border-radius: 5px;
  padding: 2rem 1.5rem;
  background-color: white;
  ${({theme}) => theme.shadow.item2};
  margin: 1.5rem 0.5rem;

  p,
  h4 {
    color: ${({theme}) => theme.colors.darkPink};
  }

  p {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export const Vacancy = () => (
  <Wrapper>
    <Container>
      <Row>
        <Col>
          <Fade bottom>
            <Item>
              <h4>Senior GOLANG Developer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt dolore earum
                eius esse, facilis itaque mollitia nemo quas quidem quis, quod rerum, sequi sunt
                temporibus velit veniam. Minus, non.
              </p>
            </Item>
          </Fade>
          <Fade bottom>
            <Item>
              <h4>Senior GOLANG Developer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt dolore earum
                eius esse, facilis itaque mollitia nemo quas quidem quis, quod rerum, sequi sunt
                temporibus velit veniam. Minus, non.
              </p>
            </Item>
          </Fade>
          <Fade bottom>
            <Item>
              <h4>Senior GOLANG Developer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt dolore earum
                eius esse, facilis itaque mollitia nemo quas quidem quis, quod rerum, sequi sunt
                temporibus velit veniam. Minus, non.
              </p>
            </Item>
          </Fade>
          <Fade bottom>
            <Item>
              <h4>Senior GOLANG Developer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt dolore earum
                eius esse, facilis itaque mollitia nemo quas quidem quis, quod rerum, sequi sunt
                temporibus velit veniam. Minus, non.
              </p>
            </Item>
          </Fade>
          <Fade bottom>
            <Item>
              <h4>Senior GOLANG Developer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt dolore earum
                eius esse, facilis itaque mollitia nemo quas quidem quis, quod rerum, sequi sunt
                temporibus velit veniam. Minus, non.
              </p>
            </Item>
          </Fade>
        </Col>
        <Col>
          <Fade bottom>
            <Item>
              <h4>Senior GOLANG Developer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt dolore earum
                eius esse, facilis itaque mollitia nemo quas quidem quis, quod rerum, sequi sunt
                temporibus velit veniam. Minus, non.
              </p>
            </Item>
          </Fade>
          <Fade bottom>
            <Item>
              <h4>Senior GOLANG Developer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt dolore earum
                eius esse, facilis itaque mollitia nemo quas quidem quis, quod rerum, sequi sunt
                temporibus velit veniam. Minus, non.
              </p>
            </Item>
          </Fade>
          <Fade bottom>
            <Item>
              <h4>Senior GOLANG Developer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt dolore earum
                eius esse, facilis itaque mollitia nemo quas quidem quis, quod rerum, sequi sunt
                temporibus velit veniam. Minus, non.
              </p>
            </Item>
          </Fade>
          <Fade bottom>
            <Item>
              <h4>Senior GOLANG Developer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt dolore earum
                eius esse, facilis itaque mollitia nemo quas quidem quis, quod rerum, sequi sunt
                temporibus velit veniam. Minus, non.
              </p>
            </Item>
          </Fade>
          <Fade bottom>
            <Item>
              <h4>Senior GOLANG Developer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt dolore earum
                eius esse, facilis itaque mollitia nemo quas quidem quis, quod rerum, sequi sunt
                temporibus velit veniam. Minus, non.
              </p>
            </Item>
          </Fade>
        </Col>
      </Row>
    </Container>
  </Wrapper>
);
