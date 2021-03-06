import React from 'react'
import "./my_surveys.css"

import { Card, Accordion } from "react-bootstrap"
import { Link } from "react-router-dom";

function mySurveys() {
    return (
        <div>
            {

                /* Add a function */
            }
        <Accordion>
            <Card bg="dark" text="light">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div className="cardHeader">
                        <span className="surveyTitle">Why are brownies delicious?</span>
                        <Link to="/edit/1/survey"><b><span className="surveyCompletion">EDIT SURVEY</span></b></Link>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <b>Prompt of the survey:</b> Why are brownies delicious?
                        <br></br>
                        <b>Number of responses to the survey:</b> 200
                        <br></br>
                        <b>Date created:</b> 02/17/2001
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
            <Accordion>
            <Card bg="dark" text="light">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div className="cardHeader">
                        <span className="surveyTitle">Why are brownies delicious?</span>
                        <Link to="/edit/1/survey"><b><span className="surveyCompletion">EDIT SURVEY</span></b></Link>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <b>Prompt of the survey:</b> Why are brownies delicious?
                        <br></br>
                        <b>Number of responses to the survey:</b> 200
                        <br></br>
                        <b>Date created:</b> 02/17/2001
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        
        </Accordion>
        </div>
    )
}

export default mySurveys
