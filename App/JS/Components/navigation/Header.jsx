import React from 'react'
import { Col, Row } from 'mdbreact';


//Images
import environmental_affairs_logo from '../../../images/DEA/environmental_affairs_logo.png'
import sa_flag from '../../../images/Other/sa_flag.jpg'

class Header extends React.Component {

  constructor(props) {
    super(props);

  }
 
  render() {

    return (
      <>
      <div style={{ backgroundColor: "white" }}>
        <Row className="align-items-center" style={{ /*marginBottom: "15px",*/ height: 100 }}>
          <Col md="2" className="d-none d-md-block">
            <img
              onClick={() => window.open("http://www.environment.gov.za/")}
              src={environmental_affairs_logo}
              style={{
                height: 80,
                marginLeft: 5,
                cursor: "pointer"
              }}
              align="left"
            />
          </Col>
          <Col md="1"/>
          <Col md="6">
            <div>
              <h1 style={{ textAlign: "center", letterSpacing: "2px", color: "#2e7d32" }}>
                <b>SA Carbon Sinks Atlas</b>

              </h1>
              <p></p>
              <h5 style={{ textAlign: "center", letterSpacing: "2px", marginTop: "-8px", color: "grey" }}>
                <b>Carbon stocks and fluxes across South Africa</b>
              </h5>
            </div>
          </Col>
          <Col md="1"/>
          <Col md="2" className="d-none d-md-block">
            <img
              src={sa_flag}
              style={{
                height: 80,
                marginRight: 5
              }}
              align="right"
            />
          </Col>
        </Row>
        <div>

        </div>
      </div>
      </>
    )
  }

}

export default Header