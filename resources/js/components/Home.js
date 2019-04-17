import React, { Component } from "react";
import { fetchItems } from "../actions/dataActions";
import { connect } from "react-redux";
import {
    Container,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from "reactstrap";

class Home extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        const { data } = this.props.items;
        return (
            <Container className="mt-4">
                <h3>Laravel + React + Redux Starter</h3>

                <div className="row">
                    <div className="col-md-4">
                        <Card>
                            <CardImg
                                top
                                width="100%"
                                src={data.avatar_url}
                                alt="Avatar"
                            />

                            <CardBody>
                                <CardTitle>{data.name}</CardTitle>
                                <CardSubtitle className="mt-2">
                                    <i className="fas fa-flag" />{" "}
                                    {data.location}
                                </CardSubtitle>
                                <CardSubtitle className="mt-2">
                                    <i className="fas fa-building" />{" "}
                                    {data.company}
                                </CardSubtitle>
                                <CardText className="mt-3">{data.bio}</CardText>
                                <a
                                    className="mb-3"
                                    href="https://twitter.com/PJijin"
                                    target="_BLANK">
                                    <i className="fab  fa-twitter" />
                                </a>

                                <a
                                    className="mb-3 ml-3"
                                    href="https://stackoverflow.com/users/3211944/jijin-p"
                                    target="_BLANK">
                                    <i className="fab  fa-stack-overflow" />
                                </a>

                                <a
                                    className="mb-3 ml-3"
                                    href="https://www.linkedin.com/in/pjijin/"
                                    target="_BLANK">
                                    <i className="fab fa-linkedin" />
                                </a>

                                <a
                                    className="mb-3 ml-3"
                                    href={data.html_url}
                                    target="_BLANK">
                                    <i className="fab fa-github" />
                                </a>

                                <Button
                                    block
                                    className="mt-4"
                                    href={data.html_url}
                                    target="_BLANK">
                                    Follow
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    items: state.data
});

export default connect(
    mapStateToProps,
    { fetchItems }
)(Home);
