import React from 'react';
import { Row, Col, Button } from 'mdbreact';
import imageModel from '../../../Images/model.png';
import photog1 from '../../../Images/Other/photos/1.jpg';
import photog2 from '../../../Images/Other/photos/2.jpg';
import photog3 from '../../../Images/Other/photos/3.jpg';
import photog4 from '../../../Images/Other/photos/4.jpg';
import photog5 from '../../../Images/Other/photos/5.jpg';
import photog6 from '../../../Images/Other/photos/6.jpg';
import photog7 from '../../../Images/Other/7.gif';
import photog8 from '../../../Images/Other/8.gif';

class ModelCalc extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
          <Row>
            <Col md="auto"><Button type="button" className="btn btn-tsuccess btn-lg" onClick={() => { location.hash = "/model-reports" }}>
            <em className="fa fa-chevron-right mr-1"></em> Key Findings</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-tsuccess btn-lg" onClick={() => { location.hash = "/model-works" }}>
            <em className="fa fa-chevron-right mr-1"></em> How the Model Works</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-tsuccess-active btn-lg" onClick={() => { location.hash = "/model-calc" }}>
            <em className="fa fa-chevron-right mr-1"></em> Calculating Total Ecosystem Organic Carbon</Button></Col>
          </Row>
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container-fluid mt-4 pt-5 pb-0">
            
            
            
            <div className="row mb-0 pb-5">
              <div className="col-md-4 m-border-r">
                <table className="table table-bordered table-hover table-striped dataTable">
                  <tr><th colSpan="3">Common conversion factors</th></tr>
                  <tr><td>1 gC/m2  = 0.01  tC/ha</td><td>:</td><td>1 tC/ha = 100 gC/m2</td></tr>
                  <tr><td>1 kg/m2 = 10 t/ha</td><td>:</td><td>1 t/ha = 0.1 kg/m2</td></tr>
                  <tr><td>1km2 = 100 ha</td><td>:</td><td>1 ha = 0.01 km2</td></tr>
                  <tr><td>1 tonne = 0.000001 Tg</td><td>:</td><td>1 Tg = 1 000 000 t</td></tr>
                </table>
              </div>
              <div className="col-md-8 pl-3">
                <h5>Carbon Stocks Model</h5>
                <p>Total ecosystem organic carbon (TEOC) is calculated as the sum of a number of individual organic pools.</p>
                <img className="light-border mb-2" src={photog8}  />
                <p>Summary of the individual carbon pools that will be combined to give the total ecosystem organic carbon. TEOC = Total Ecosystem Organic Carbon, SOC = Soil Organic Carbon, AGB = Above Ground Biomass, BGB = Below Ground Biomass, AGL = Above Ground Litter (which will include Dead Wood). </p>
                <p>TEOC = SOC + (AGB[woody] +BGB[woody]  + DW + AGB[herb] +BGB[herb] + AGL)*CF </p>
                
              </div>
            </div>

            
          </div>
        </section>
      </>
    )
  }
}

export default ModelCalc