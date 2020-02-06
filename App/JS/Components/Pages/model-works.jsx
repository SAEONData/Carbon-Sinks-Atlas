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

class ModelWorks extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
          <Row>
            <Col md="auto"><Button type="button" className="btn btn-tsuccess btn-lg" onClick={() => { location.hash = "/model-reports" }}>
            <em className="fa fa-chevron-right mr-1"></em> Key Findings</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-tsuccess-active btn-lg" onClick={() => { location.hash = "/model-works" }}>
            <em className="fa fa-chevron-right mr-1"></em> How the Model Works</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-tsuccess btn-lg" onClick={() => { location.hash = "/model-calc" }}>
            <em className="fa fa-chevron-right mr-1"></em> Calculating Total Ecosystem Organic Carbon</Button></Col>
          </Row>
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container-fluid mt-4 pt-5 pb-0">
            
            
           

            <div className="row mb-0 pb-5">
              <div className="col-md-3 m-border-r">
                <h5>The conceptual framework</h5>
                <p>The national carbon stock consists of a set of linked and interacting sub-stocks (called ‘pools’) which change over time: slowly in the case of soil carbon, moderately quickly in the case of woody biomass, and rapidly in the case of herbaceous and litter carbon. The carbon flows between the pools, and between the land and the atmosphere, land an ocean, and land and human systems are called fluxes.</p>
                <p>Components of a generalized terrestrial carbon cycle, with box sizes (representing stocks) and arrows (representing fluxes) roughly indicative of their relative size in South Africa, where NEE = Net Ecosystem Exchange; NEP = Net Ecosystem Productivity; NBP = Net Biome Productivity; GPP = Gross Primary Production; Ra = Autotrophic Respiration; Rh Heterotrophic Respiration; Re = Ecosystem Respiration; Rfire = Fire Emissions (Department of Environmental Affairs, 2015). </p>
              </div>
              <div className="col-md-9 pl-3 text-center">
                <img className="cust1" src={imageModel} />
                
              </div>
            </div>

            <div className="row pb-4">
              <div className="col-md-3 m-border-r">
              <p>All carbon pools are calculated based on individual land units (LU) of 1 km by 1 km. The total carbon within South Africa, or within any specific sub-region of South Africa such as a biome or province, is calculated by summing all the land units within that biome or province.</p>
              <p className="mt-3">Three land cover products, NLC1990, NLC 2014 and NLC 2018 were used in calculating total terrestrial carbon stocks. These were run using two different soil organic carbon estimates. </p>
                
              </div>
              <div className="col-md-9 pl-3">
                <img className="cust1"  src={photog7} />
              </div>
            </div>

            
          </div>
        </section>
      </>
    )
  }
}

export default ModelWorks