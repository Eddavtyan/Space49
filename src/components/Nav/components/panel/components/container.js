import styled from "@emotion/styled";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;

  div > a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
  }

  div > a:not(:last-child) {
    padding-right: 2rem;
  }
  
  a {
    transition: all 300ms ease-out;
    :hover{
      color: black;
    }
  }


  @media (max-width: 900px) {
    display: none;
  }
`;
