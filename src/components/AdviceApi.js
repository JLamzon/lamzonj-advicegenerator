import React, { useEffect, useState } from "react";
import dividerDesktop from "../assets/dividerDesktop.svg";
import { Container, Row, Col, Button } from "react-bootstrap";
import dividerMobile from "../assets/dividerMobile.svg"


//this fetches 2 things needed for the webpage: the advice, and id of advice.
function AdviceApi() {
  const [generatedAdvice, setGeneratedAdvice] = useState("");
  const [generatedNumber, setGeneratedNumber] = useState();


  async function fetchAdvice() {
    const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json();
    
    const advice = data.slip.advice;
    const adviceNumber = data.slip.id;


    setGeneratedAdvice(advice);
    setGeneratedNumber(adviceNumber);
  }


  //loads the fetch when page opens.  great if yu have a website that fetches prompt from an api
  useEffect(() => {
    fetchAdvice()
  }, [])


  //this returns the value the fetch into sections of a webpage
  return (
    <div className="adviceCard">
      <Container className="adviceBox">
        <Row className="adviceNumberSpacing">
          <Col>
          <p className="text-center adviceNumber">ADVICE #{generatedNumber}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="adviceText">"{generatedAdvice}"</p>
          </Col>
        </Row>
        <Row className="divider">
          <Col>
            <img className="dividerDesktop dividerPosition" src={dividerDesktop} alt="middle divider"></img>
            <img className="dividerMobile dividerPosition" src={dividerMobile} alt="middle divider"></img>
          </Col>
        </Row>
        <Row>
          <Col>
          <Button className="button" onClick={fetchAdvice}></Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdviceApi;
