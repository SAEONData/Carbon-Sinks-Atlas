import React from 'react';
import { Row, Col, Button } from 'mdbreact'
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
            <h1>Carbon Stocks Model</h1>
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container-fluid mt-4 pt-5 pb-0">
            
            
            <div className="row mb-5 greenbg-4-8 align-items-center pb-4">
              <div className="col-md-4">
                <h5>Key Findings</h5>
                <p>Most of South Africa's organic carbon is to be found in the SOC pool, which accounts for over 75% of all terrestrial organic carbon.</p>
                <p>It is the <strong>grasslands and savanna systems which contain the largest share</strong> of this carbon, accounting for approximately 1/3 of the national total carbon stock each.</p>
                <p>Deserts, due to their aridity and small spatial area, have the smallest carbon stock of all biomes, with forests and azonal vegetation, both having only about 1% of terrestrial carbon stocks each.</p>
                <p>In South Africa there is very limited carbon stock change as a consequence of land cover change, with the large change being observed between 2014 and 2018 being a consequence of changes in land cover measurements rather than actual “on-the-ground” change. In particular the addition of a new fallow land cover class is responsible for most of the observed change. </p>
                <button className="btn btn-secondary" onClick={(event) => {event.preventDefault(); window.open("#");}}><i class="fa fa-info-circle" aria-hidden="true"></i> Read the technical report here</button>
                <div className="row mt-4 no-gutters">
                  <div className="col-md-2"><img src={photog1} /></div>
                  <div className="col-md-2"><img src={photog2} /></div>
                  <div className="col-md-2"><img src={photog3} /></div>
                  <div className="col-md-2"><img src={photog4} /></div>
                  <div className="col-md-2"><img src={photog5} /></div>
                  <div className="col-md-2"><img src={photog6} /></div>
                </div>
              </div>
              <div className="col-md-8">
                <p>All carbon pools are calculated based on individual land units (LU) of 1 km by 1 km. The total carbon within South Africa, or within any specific sub-region of South Africa such as a biome or province, is calculated by summing all the land units within that biome or province.</p>
                <img src={photog7} />
                <p className="text-small mt-3">Three land cover products, NLC1990, NLC 2014 and NLC 2018 were used in calculating total terrestrial carbon stocks. These were run using two different soil organic carbon estimates. </p>
              </div>
            </div>

            <div className="row mb-0 greybg-4-8 align-items-center pb-5">
              <div className="col-md-4">
                <h5>Carbon Stocks Model</h5>
                <p>Total ecosystem organic carbon (TEOC) is calculated as the sum of a number of individual organic pools.</p>
                <img className="light-border mb-2" src={photog8}  />
                <p className="text-small">Summary of the individual carbon pools that will be combined to give the total ecosystem organic carbon. TEOC = Total Ecosystem Organic Carbon, SOC = Soil Organic Carbon, AGB = Above Ground Biomass, BGB = Below Ground Biomass, AGL = Above Ground Litter (which will include Dead Wood). </p>
                <p className="text-small">TEOC = SOC + (AGB[woody] +BGB[woody]  + DW + AGB[herb] +BGB[herb] + AGL)*CF </p>
                <h5>Data model</h5>
                <table className="table table-bordered table-hover table-striped dataTable">
                  <tr><th colspan="3">Common conversion factors</th></tr>
                  <tr><td>1 gC/m2  = 0.01  tC/ha</td><td>:</td><td>1 tC/ha = 100 gC/m2</td></tr>
                  <tr><td>1 kg/m2 = 10 t/ha</td><td>:</td><td>1 t/ha = 0.1 kg/m2</td></tr>
                  <tr><td>1km2 = 100 ha</td><td>:</td><td>1 ha = 0.01 km2</td></tr>
                  <tr><td>1 tonne = 0.000001 Tg</td><td>:</td><td>1 Tg = 1 000 000 t</td></tr>
                </table>
              </div>
              <div className="col-md-8 text-center">
                <img src={imageModel} />
              </div>
            </div>

            
          </div>
        </section>
      </>
    )
  }
}

export default ModelCSA