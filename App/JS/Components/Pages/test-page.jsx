import React from 'react';
import { Row, Col, Button } from 'mdbreact';
import TestData from '../Pages/Data/testdatajs.json';
import SouthAfricaMap from '../maps/southafrica.jsx';

const socialMediaList = TestData;


class TestPage extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h1>District Municipalities</h1>
            <Row>
            <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/test-page" }}>
              <em className="fa fa-chevron-right mr-1"></em> Provinces</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={() => { location.hash = "/test-page" }}>
              <em className="fa fa-chevron-right mr-1"></em> Districts</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/test-page" }}>
              <em className="fa fa-chevron-right mr-1"></em> Local Municipalities</Button></Col>
            </Row>
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container-fluid mt-4 pt-5 pb-5">
          <div className="row">
          <div className="col-md-3">
              {/* {socialMediaList.map(s => (<li>{s}</li>))} */}
              <h5>Provinces</h5>
              <h6>Change in Carbon Stocks between 1990 and 2018</h6>
              <table className="table table-bordered table-hover table-striped dataTable statsTable">
                <tr><td>Eastern Cape</td><td>-2902</td></tr>
                <tr><td>Free State</td><td>387</td></tr>
                <tr><td>Gauteng</td><td>2602</td></tr>
                <tr><td>KwaZulu-Natal</td><td>-203</td></tr>
                <tr><td>Limpopo</td><td>-1919</td></tr>
                <tr><td>Mpumalanga</td><td>11049</td></tr>
                <tr><td>North West</td><td>-3352</td></tr>
                <tr><td>Northern Cape</td><td>-2967</td></tr>
                <tr><td>Western Cape</td><td>1927</td></tr>
              </table>
            </div>
            <div className="col-md-5 text-center pt-5">
              <SouthAfricaMap />
            </div>
            
            <div className="col-md-4">
            <h5>Eastern Cape</h5>
            <h6>Change in Carbon Stocks between 1990 and 2018</h6>
              <table className="table table-bordered table-hover table-striped dataTable statsTable">
                <tr><th colSpan="4"><h6>By landcover type:</h6></th></tr>
                <tr><td>Natural Vegetation</td><td>-411354</td><td>Fallow</td><td>29967</td></tr>
                <tr><td>Bare degraded</td><td>408747</td><td>Water</td><td>-27982</td></tr>
                <tr><td>Indigenous Forest</td><td>3</td><td>Wetlands</td><td>-5594</td></tr>
                <tr><th colSpan="4"><h6>By crop type:</h6></th></tr>
                <tr><td>Commercial Agriculture</td><td>-2902</td><td>Orchards</td><td>12</td></tr>
                <tr><td>Pivot Agriculture</td><td>400</td><td>Viticulture</td><td>0</td></tr>
                <tr><td>Subsistence Agriculture</td><td>126</td><td>Pineapple</td><td>0</td></tr>
                <tr><td>Sugarcane Irrigated</td><td>0</td><td>Mines</td><td>307</td></tr>
                <tr><td>Plantation Forest</td><td>371</td><td>Sugarcane Dry</td><td>0</td></tr>			
              </table>
            </div>
          </div>
          

          </div>
          
        </section>
      </>
    )
  }
}

export default TestPage