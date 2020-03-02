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

class ModelCSA extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <Row>
            <Col md="auto"><Button type="button" className="btn btn-tsuccess-active btn-lg" onClick={() => { location.hash = "/model-reports" }}>
            <em className="fa fa-chevron-right mr-1"></em> Key Findings</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-tsuccess btn-lg" onClick={() => { location.hash = "/model-works" }}>
            <em className="fa fa-chevron-right mr-1"></em> How the Model Works</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-tsuccess btn-lg" onClick={() => { location.hash = "/model-calc" }}>
            <em className="fa fa-chevron-right mr-1"></em> Calculating Total Ecosystem Organic Carbon</Button></Col>
          </Row>
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container-fluid mt-4 pt-5 pb-0">
            
            
            <div className="row pb-4">
              <div className="col-md-12 ">
                <h5>Key Findings</h5>
                <p>Most of South Africa's organic carbon is to be found in the Soil Organic Carbon (SOC) pool, which accounts for over 75% of all terrestrial organic carbon.</p>
                <p>It is the <strong>grasslands and savanna systems which contain the largest share</strong> of this carbon, accounting for approximately 1/3 of the national total carbon stock each.</p>
                <p>Deserts, due to their aridity and small spatial area, have the smallest carbon stock of all biomes, with forests and azonal vegetation, both having only about 1% of terrestrial carbon stocks each.</p>
                <p>In South Africa there is very limited carbon stock change as a consequence of land cover change, with the large change being observed between 2014 and 2018 being a consequence of changes in land cover measurements rather than actual “on-the-ground” change. In particular the addition of a new fallow land cover class is responsible for most of the observed change. </p>
                <button className="btn btn-light" onClick={() => { location.hash = "coming-soon" }}><i className="fa fa-info-circle" aria-hidden="true"></i> Read the technical report here</button>
                <button className="btn btn-light" onClick={() => { location.hash = "municipality-profiles" }}><i className="fa fa-info-circle" aria-hidden="true"></i> View Summaries for District Municipalities</button>
                <div className="row mt-4 no-gutters">
                  <div className="col-md-2"><img src={photog1} /></div>
                  <div className="col-md-2"><img src={photog2} /></div>
                  <div className="col-md-2"><img src={photog3} /></div>
                  <div className="col-md-2"><img src={photog4} /></div>
                  <div className="col-md-2"><img src={photog5} /></div>
                  <div className="col-md-2"><img src={photog6} /></div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </>
    )
  }
}

export default ModelCSA