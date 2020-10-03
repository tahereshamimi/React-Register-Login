import React, { useState } from "react";
import { userService } from '../services/user'
import { connect } from 'react-redux'
import { loginSuccess, setMobile } from '../redux/actions';
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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
            .catch(() => {
                props.history.push('/')
            })


    }

    return (
        <>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Card className={"full-height"}>
                            <Card.Body className={"flex-position"}>
                                <div>
                                    <form onSubmit={(e) => { loginRequest(e, loginInfo) }}>
                                        <h4 className="text-center mb-4">Login</h4>
                                        <hr />
                                        <h4 className="text-center">what is your mobile number?</h4>
                                        <br />

                                        <PhoneInput
                                            disableCountryCode={true}
                                            inputClass={"w-100 mobileInput"}
                                            country={'ir'}
                                            placeholder="Mobile number"
                                            onlyCountries={['ir']}
                                            // value={registerInfo}
                                            onChange={(mobile) => setLoginInfo({ mobile })}
                                        />
                                        <br />


                                    </form>
                                </div>
                                <div>
                                    <div className="text-center mt-4">
                                        <button className={"submitButton"} type="submit" onClick={(e) => { loginRequest(e, loginInfo) }}>Request Code</button>
                                    </div>
                                </div>

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