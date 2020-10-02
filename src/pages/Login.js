import React, { useState } from "react";
import { userService } from '../services/user'
import { connect } from 'react-redux'
import { loginSuccess, setMobile } from '../redux/actions';
import { Container, Row, Col, Card, Button } from "react-bootstrap"

// login when have registered before
// it just need mobile number and send otp to number
function Login(props) {
    localStorage.clear()
    const [loginInfo, setLoginInfo] = useState({ mobile: '' })
    const loginRequest = (e, loginInfo) => {
        e.preventDefault();
        props.setMobile(loginInfo.mobile)
        userService.requestOTP(loginInfo.mobile)
            .then(res => {
                //   props.loginSuccess(res.data);
                props.history.push('/otp')
            })
            .catch(()=>{
                props.history.push('/')
            })


    }

    return (
        <>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Card>
                            <Card.Body>
                                <form onSubmit={(e) => { loginRequest(e, loginInfo) }}>
                                    <p className="h4 text-center mb-4"> ورود</p>
                                    <label htmlFor="phoneNumber" className="grey-text">
                                        موبایل
                                    </label>
                                    <input type="number" id="phoneNumber" className="form-control" onChange={(e) => setLoginInfo({ mobile: e.target.value })} />
                                    <br />

                                    <div className="text-center mt-4">
                                        <Button color="indigo" type="submit">درخواست کد</Button>
                                    </div>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </>
    );
}
const mapStateToProps = state => {
    return {
        mobile: state.mobile,
        data: state.data
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loginSuccess: (data) => dispatch(loginSuccess(data)),
        setMobile: (mobile) => dispatch(setMobile(mobile))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);