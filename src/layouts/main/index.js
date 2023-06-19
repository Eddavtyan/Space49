import {Header} from "components/Header";
import {Services} from "components/Services";
import {Interview} from "components/Interview";
// import {Vacancy} from "components/Vacancy";
import {Email} from "components/Email";
import {Footer} from "components/Footer";
import {About} from "components/About";
import {useRef} from "react";

export const Main = () => {
    const serviceRef = useRef(null);
    const aboutRef = useRef(null);
    const contactsRef = useRef(null);
  // const scrollPosition = useScrollPosition();
  // const fixed = scrollPosition > 200;

  return (
    <div>
      <Header serviceRef={serviceRef} aboutRef={aboutRef} contactsRef={contactsRef}/>
      <Services ref={serviceRef}/>
      <About ref={aboutRef}/>
      <Interview />
      {/*<Vacancy />*/}
      <Email ref={contactsRef}/>
      <Footer />
    </div>
  );
};
