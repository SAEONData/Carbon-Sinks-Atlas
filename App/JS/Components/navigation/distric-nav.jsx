import React from 'react';
import { Row, Col, Button } from 'mdbreact';




class DistrictNav extends React.Component {

  render() {

    return (
      <>
        <h1>2019 National Terrestrial Carbon Sinks Assessment for South Africa</h1>
        <Row>
            <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/municipality-profiles" }}>
              <em className="fa fa-chevron-right mr-1"></em> Local Municipalities</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/sa-districts" }}>
              <em className="fa fa-chevron-right mr-1"></em> Districts</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/cs-understanding-data" }}>
              <em className="fa fa-chevron-right mr-1"></em> Understanding the Data</Button></Col>
        </Row>
      </>
    )
  }
}

export default DistrictNav