import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  padding: 3.75rem 4rem 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  img {
    max-width: 300px;
  }
  
  @media (max-width: 900px) {
    justify-content: center;
  }
`;
