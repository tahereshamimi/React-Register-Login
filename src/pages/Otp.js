import React, { useState } from "react";
import { userService } from '../services/user';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import OtpInput from 'react-otp-input';


// get otp and send request to verify
// if success request redirect to info page
// token will be save in local storage
function OtpComponent(props) {
  const [otp, setOtp] = useState("")
  const sendOtp = (e) => {
    e.preventDefault();
    userService.confirmOTP(otp)
      .then(res => {
        props.history.push('/info');
        localStorage.setItem("token", res.data.token)
      })
  }

  return (
    <Container>
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <Card className={"full-height"}>
            <Card.Body className={"flex-position"}>
              <div>
                <form onSubmit={(e) => { sendOtp(e) }}>
                  <p className="h4 text-center mb-4">Verification code</p>
                  <hr />
                  <h4 className="text-center">Enter verification code</h4>
                  <br />
                  <p className={"text-center"}>we just send a verification code to <br /> {props.mobile}</p>
                  <br />
                  {/* <input type="number" id="opt" className="form-control" onChange={(e) => setOtp(e.target.value)} /> */}
                  <OtpInput
                    containerStyle={"otp-container"}
                    inputStyle={"otp-input"}
                    value={otp}
                    onChange={(code) => setOtp(code)}
                    numInputs={4}
                    separator={<span> </span>}
                  />


                </form>
              </div>
              <div>
                <div className="text-center mt-4">
                  <button className={"submitButton"} type="submit" onClick={(e) => { sendOtp(e) }}>Send</button>
                </div>
              </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    mobile: state.mobile
  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtpComponent);