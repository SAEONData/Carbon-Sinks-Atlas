import React from 'react';
import { Row, Col, Button } from 'mdbreact';
import SouthAfricanDistricts from '../maps/southafricandistricts.jsx';

import '../../map_table_districts';
class DistrictsListing extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h1>2019 National Terrestrial Carbon Sinks Assessment for South Africa | Districts</h1>
            <Row>
            <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/municipality-profiles" }}>
              <em className="fa fa-chevron-right mr-1"></em> Local Municipalities</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/sa-districts" }}>
              <em className="fa fa-chevron-right mr-1"></em> Districts</Button></Col>
            </Row>
          </div>
        </section>
        <section className="ea-content-full light-bg districtsvg">
          <div className="container-fluid mt-4 pt-2 pb-5">

          <div className="row">
            <div className="col-md-4">
            <h5>Select a district:</h5>

              <span>
                Select the district below to view the assessment:
              </span>
              <div className="inine-btn-group">
                <div className="btn-group form-group">
                  <input type="search" placeholder="search" id="districtsearch" className="form-control" />
                  <button className="btn btn-ea-green" id="searchmun" >
                  search <em className="fa fa-search"></em></button>
                  <div id="districtlisting" ></div>
              </div>
              </div>

              
            </div>
            
            <div className="col-md-8">

              <SouthAfricanDistricts />

            </div>
          </div>
            
          </div>
        </section>
      </>
    )
  }
}

export default DistrictsListing