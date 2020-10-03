import React, { useEffect } from 'react';
import { userService } from '../services/user';
import { connect } from 'react-redux'
import { setUserInfo } from '../redux/actions';
import { Container, Row, Col, Card } from "react-bootstrap"


// user info
function UserInfo(props) {
    useEffect(() => {
        userService.userInfo()
            .then(res => {
                props.setUserInfo(res.data)
            })
    }, [])

    return (
        <Container>
            <Row>
                <Col lg={{ span: 6, offset: 3 }}>
                    <Card className={"full-height"}>
                        <Card.Body className={"flex-position"}>
                            <div>
                                <h4 className="text-center mb-4">More about you</h4>
                                <hr />
                                <h4 className="text-center">Upload your profile picture</h4>
                                <br />
                                <Card.Img className={"avatar rounded-circle mx-auto d-block"} variant="top" src={props.info.avatar_path} />
                                <p className="text-center"> Btw. You look great :)</p>
                                <br />
                                <Card className={"p-3"}>
                                    <Row className={"p-3"}>
                                        <Col xs={3}>
                                            Name:
                                </Col>
                                        <Col xs={8}>{props.info.name}</Col>
                                    </Row>
                                    <Row className={"p-3"}>
                                        <Col xs={3}>
                                            Number:
                                </Col>
                                        <Col xs={8}>{props.info.mobile}</Col>
                                    </Row>
                                </Card></div>
                            <div><Row>
                                <Col><button className={"later-button"}>may be later</button></Col>
                                <Col><button className={"submitButton"} >Continue</button></Col>
                            </Row></div>



                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        info: state.info
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setUserInfo: (info) => dispatch(setUserInfo(info)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
