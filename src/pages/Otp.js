import React, { useState } from "react";
import { userService } from '../services/user';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Button } from "react-bootstrap"


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
          <Card>
            <Card.Body>
              <form onSubmit={(e) => { sendOtp(e) }}>
                <p className="h4 text-center mb-4">رمز یکبار مصرف</p>
                <label htmlFor="otp" className="grey-text">
                  کد
                </label>
                <input type="number" id="opt" className="form-control" onChange={(e) => setOtp(e.target.value)} />

                <div className="text-center mt-4">
                  <Button color="indigo" type="submit">ارسال</Button>
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => {
  return {

  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtpComponent);