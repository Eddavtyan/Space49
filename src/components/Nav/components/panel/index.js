import {css} from "@emotion/react";
import {Container} from "components/Nav/components/panel/components/container";
import {Button} from "components/Nav/components/panel/components/button";

export const Panel = ({aboutRef, serviceRef, contactsRef}) => {
  const handleScroll = ref => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <div
        style={css`
          padding-right: 3.75rem
        `}
      >
        <a href='#' onClick={() => handleScroll(serviceRef)}>
          Services
        </a>
        <a href='#' onClick={() => handleScroll(aboutRef)}>
          About
        </a>
        <a href='#' onClick={() => handleScroll(contactsRef)}>
          Contacts
        </a>
      </div>
      {/*<Button href='#'>Openings</Button>*/}
    </Container>
  );
};
