import React, { useState } from "react";
import { userService } from '../services/user'
import { connect } from 'react-redux'
import { registerSuccess, setMobile } from '../redux/actions'
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Register(props) {
  const [registerInfo, setRegisterInfo] = useState({ name: '', mobile: '' })

  // register user request
  // input:name and mobile
  // after success request otp will send to user 
  // redirect to otp page
  const registerRequest = (e, registerInfo) => {
    e.preventDefault();
    props.setMobile(registerInfo.mobile)
    userService.registerUser(registerInfo)
      .then(res => {
        props.registerSuccess(res.data);
        props.history.push('/otp')
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
                  <form onSubmit={(e) => { registerRequest(e, registerInfo) }}>
                    <p className="h4 text-center mb-4">Let's get started</p>
                    <hr />
                    <h4 className="text-center">what is your mobile number?</h4>
                    <br />
                    {/* <input type="number" id="phoneNumber" className="form-control" onChange={(e) => setRegisterInfo({ ...registerInfo, mobile: e.target.value })} /> */}
                    <PhoneInput
                      disableCountryCode={true}
                      inputClass={"w-100 mobileInput"}
                      country={'ir'}
                      placeholder="Mobile number"
                      onlyCountries={['ir']}
                      // value={registerInfo}
                      onChange={(mobile) => setRegisterInfo({ ...registerInfo, mobile })}
                    />
                    <br />

                    <input placeholder="Name" type="test" id="name" className="form-control mobileInput" onChange={(e) => setRegisterInfo({ ...registerInfo, name: e.target.value })} />

                    <br />
                    <div>
                      Registered before?
                    <Link to="/login">Login</Link>
                    </div>
                    {/* <Link to="/login">login</Link> */}
                  </form>
                </div>
                <div>
                  <div className="text-center mt-4">
                    <button className={"submitButton"} type="submit" onClick={(e) => { registerRequest(e, registerInfo) }}>Continue</button>
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
    registerSuccess: (data) => dispatch(registerSuccess(data)),
    setMobile: (mobile) => dispatch(setMobile(mobile))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);