import React from 'react';
import { Row, Col, Button } from 'mdbreact';
import LocalMunicipalitiesData from '../Pages/Data/localMunicipalitiesData.jsx';
//import LocalMunicipalitiesDataCrop from '../Pages/Data/localMunicipalitiesDataCrop.jsx';

class MunProfilesLocal extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h1>Local Municipality changes in Carbon Stocks 1990-2018</h1>
            <Row>
            <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/municipality-profiles" }}>
              <em className="fa fa-chevron-right mr-1"></em> Provinces</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/municipality-profiles-local" }}>
              <em className="fa fa-chevron-right mr-1"></em> Local Municipalities</Button></Col>
            </Row>
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container-fluid mt-4 pt-2 pb-5">
            {/* <h2 className="mt-3 mb-3">SAWS Products and Services</h2> */}
            <div className="d-block mt-5"></div>
            <LocalMunicipalitiesData />
            {/* <div className="container-fluid ea-tabs">
            <ul className="nav nav-tabs md-tabs" id="myTabMD" role="tablist">
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link active" tab-link="tab-reports" >Change in landcover type</a>
              </li>
              <li className="nav-item waves-effect waves-light">
                <a className="nav-link" tab-link="tab-tracking" >Change in crop type</a>
              </li>
            </ul>
            <div className="tab-content card pt-5" id="mymdbTabContentMD">
              <div className="tab-pane show" id="tab-type" >
                <LocalMunicipalitiesData />
              </div>
              <div className="tab-pane" id="tab-crop">
              
              </div>
            </div>
          </div> */}
              
          
          </div>
        </section>
      </>
    )
  }
}

export default MunProfilesLocal