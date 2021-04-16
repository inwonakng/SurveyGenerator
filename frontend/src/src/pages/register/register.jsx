import React from "react";
import "./register.css"

import { Container, Form, Button, Card } from "react-bootstrap"
import { toast } from 'react-toastify';

const registerPage = () => {
    const notify = () => toast.error("⚠️ Failed to register account", {position: toast.POSITION.TOP_CENTER, pauseOnHover: false})

    return(
        <div className="registerPageCSS">
            <Container fluid>
                <center>
                    <Card className="registerCard">
                        <center>
                            <Form className="registerCardFields">
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="johndoe"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="john@doe.com" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="********" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Retype Password</Form.Label>
                                    <Form.Control type="password" placeholder="********" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                                </Form.Group>
                                {/* <Button variant="success" type="submit" block onClick={notify}>Register</Button> */}
                            </Form>
                                <Button variant="success" type="submit" block onClick={notify}>Register</Button>

                        </center>
                    </Card>
                </center>
            </Container>
        </div>
    );
}


export default registerPage;