import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";

const Example = () => (
    <Container className="mt-4">
        <Jumbotron>
            <h1 className="display-3">👨‍💻 Laravel React Starter</h1>
            <p className="lead">
                Simple app with Laravel + React + Redux + Router
            </p>
            <hr className="my-2" />
            <p>🚀 Kickstart your project with Laravel React Starter</p>
            <p className="lead">
                <Button
                    href="https://github.com/PJijin/Laravel-React-Starter"
                    target="_BLANK"
                    color="primary">
                    <i className="fab fa-github" /> Github
                </Button>
            </p>
        </Jumbotron>
    </Container>
);

export default Example;
