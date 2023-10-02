import React, { useEffect, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import About from "./About.js";
import Portfolio from "./Portfolio.js"
import Type from "./Type";
import AnimatedLetters from "../AnimatedLetters";
import Resume from "./Resume.js"
import Contact from "./Contact.js"

function Home() {

  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['a', 'm', 'z', 'a']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);


  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> HAMZA KHAMISSA </strong>
  </h1> */}

              <h1 className ="short-header" style={{padding: 10, textAlign: "left"}}>
              <span className={letterClass}>Hi there</span>
              <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              <br />
              <span className={`${letterClass} _18`}>I'm H</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={20}
              />
              <br />
            </h1>

            <div className="scrolling" style={{ padding: 10, textAlign: "left"}}>
            <Type />
            </div>
          
            </Col>
            

            <Col  style={{ paddingBottom: 20}} className="img-fluid">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
      
          </Row>
        </Container>
      </Container>
      <Resume />
      <Portfolio />
      <About />
      <Contact />

    </section>
  );
}

export default Home;
