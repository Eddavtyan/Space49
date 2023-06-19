import styled from "@emotion/styled";
import {ArrowDown} from "react-bootstrap-icons";

const Container = styled.a`
  position: absolute;
  bottom: 4rem;
  left: calc(50% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0.25rem;
  z-index: 10;
  background-color: ${({theme}) => theme.colors.black};
  border: 2px solid ${({theme}) => theme.colors.black};
  cursor: pointer;
  transition: background-color 300ms ease-out;

  svg {
    color: white;
    transition: color 300ms ease-out;
  }

  :hover {
    background-color: white;

    svg {
      color: ${({theme}) => theme.colors.black};
    }
  }
`;

const Button = styled.button`
  border: 2px solid ${({theme}) => theme.colors.green};
  margin-top: 2rem;
  padding: 0.75rem 1rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  color: ${({theme}) => theme.colors.green};
  border-radius: 10px;
  display: block;
  background-color: white;

  :hover {
    color: #fff;
    text-decoration: none;
    background-color: ${({theme}) => theme.colors.green};
  }
`;

export const ArrowButton = () => (
  // <Button>Career opportunities</Button>
  <Container>
    <ArrowDown size={26} />
  </Container>
);
