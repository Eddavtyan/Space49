import styled from "@emotion/styled";

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: white;
  background-color: black;
  text-decoration: none;
  width: 126px;
  height: 48px;
  border-radius: 0.75rem;
  margin-left: 3.75rem;
  transition: all 300ms ease-out;

  :hover {
    background-color: white;
    color: black;
  }
`;
