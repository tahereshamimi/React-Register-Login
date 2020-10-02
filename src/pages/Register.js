import React, { useState } from "react";
import { userService } from '../services/user'
import { connect } from 'react-redux'
import { registerSuccess, setMobile } from '../redux/actions'
import { Container, Row, Col, Card ,Button} from "react-bootstrap"
import {Link} from 'react-router-dom'

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
            <Card>
              <Card.Body>
                <form onSubmit={(e) => { registerRequest(e, registerInfo) }}>
                  <p className="h4 text-center mb-4">ثبت نام</p>
                  <label htmlFor="phoneNumber" className="grey-text">
                    موبایل
                  </label>
                  <input type="number" id="phoneNumber" className="form-control" onChange={(e) => setRegisterInfo({ ...registerInfo, mobile: e.target.value })} />
                  <br />
                  <label htmlFor="name" className="grey-text">
                    نام
                  </label>
                  <input type="test" id="name" className="form-control" onChange={(e) => setRegisterInfo({ ...registerInfo, name: e.target.value })} />
                  <div className="text-center mt-4">
                    <Button variant="primary" type="submit">Register</Button>
                  </div>
                  <div>
                    اگر ثبت نام کرده اید
                    <Link to="/login">وارد شوید</Link>
                  </div>
                  {/* <Link to="/login">login</Link> */}
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
    registerSuccess: (data) => dispatch(registerSuccess(data)),
    setMobile: (mobile) => dispatch(setMobile(mobile))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);