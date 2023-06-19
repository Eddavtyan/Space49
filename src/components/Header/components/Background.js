import styled from "@emotion/styled";
import background from "assets/Header/green.svg";
import white from "assets/Header/white.svg";
import cosmo from "assets/Header/cosmo.svg";

export const Background = styled.div`
  height: 130vh;
  position: relative;
  display: flex;
  align-items: center;
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-image: url(${white});
    background-size: cover;
    background-repeat: no-repeat;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 6%;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-image: url(${cosmo});
    //background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
  }
`;
