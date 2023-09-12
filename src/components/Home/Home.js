import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import About from "./About.js";
import Portfolio from "./Portfolio.js"
import Type from "./Type";
import AnimatedLetters from "../AnimatedLetters";

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

              <h1 className ="short-header" style={{padding: 50, textAlign: "left"}}>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i&nbsp;</span>
              <span className={`${letterClass} _13`}> t</span>
              <span className={`${letterClass} _14`}>h</span>
              <span className={`${letterClass} _15`}>e</span>
              <span className={`${letterClass} _16`}>r</span>
              <span className={`${letterClass} _17`}>e</span>
              <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              <br />
              <span className={`${letterClass} _18`}>I</span>
              <span className={`${letterClass} _19`}>'m&nbsp; </span>
              <span className={`${letterClass} _20`}>H</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={20}
              />
              <br />
            </h1>

            <div className="scrolling" style={{ padding: 50, textAlign: "left"}}>
            <Type />
            </div>

            </Col>
            

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Portfolio />
      <About />

    </section>
  );
}

export default Home;
