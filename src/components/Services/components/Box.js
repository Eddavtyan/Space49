import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  border-radius: 24px;
  height: 100%;
  background-color: ${({theme}) => theme.colors.grey};

  h4 {
    margin-top: 1.5rem;
  }

  p {
    margin-top: 0.5rem;
  }

  h4,
  p {
    text-align: left;
    color: ${({theme}) => theme.colors.black};
    ${({theme}) => theme.shadow.text}
  }
`;

export const Box = ({icon, text, heading}) => (
  <Container>
      <img src={icon} alt="#"/>
    <h4>{heading}</h4>
    <p>{text}</p>
  </Container>
);
