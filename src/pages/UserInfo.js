import React, { useEffect } from 'react';
import { userService } from '../services/user';
import { connect } from 'react-redux'
import { setUserInfo } from '../redux/actions';
import { Container, Row, Col, Card } from "react-bootstrap"


// user info
function UserInfo(props) {
    useEffect((props) => {
        userService.userInfo()
            .then(res => {
                props.setUserInfo(res.data)
            })
    }, [])

    return (
        <Container>
            <Row>
                <Col lg={{ span: 6, offset: 3 }}>
                    <Card>
                    <Card.Img variant="top" src={props.info.avatar_path} />

                        <Card.Body>
                            <Card className={"p-3"}>
                            <Row className={"p-3"}>
                                <Col xs={3}>
                                    نام:
                                </Col>
                                <Col xs={8}>{props.info.name}</Col>
                            </Row>
                            <Row className={"p-3"}>
                                <Col xs={3}>
                                    تلفن:
                                </Col>
                                <Col xs={8}>{props.info.mobile}</Col>
                            </Row>
                            </Card>
                            
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
