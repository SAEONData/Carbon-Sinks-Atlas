import React from 'react';
import { Row, Col, Button, MDBCarousel, MDBCard, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import logoQGIS from '../../../Images/Other/logo-qgis.gif';
import logoSaeon from '../../../Images/Other/nrf-saeon-logo.gif';
import QGIS1 from '../../../Images/QGIS/1.gif';
import QGIS2 from '../../../Images/QGIS/2.gif';
import QGIS3 from '../../../Images/QGIS/3.gif';

class DataQgis extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h1>Download Data</h1>
            <p>Using QGIS x.x xx and the SAEON plugin you can now download, subset, and analyse Carbon Sinks data directly on your computer.</p>
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container-fluid mt-4 pt-5 pb-5">
          <div className="row">
            <div className="col-md-4 pb-5">
              <div className="row align-items-center">
              <div className="col-md-6"><img src={logoSaeon} /></div>
              <div className="col-md-6"><img src={logoQGIS} /></div>
              </div>

              
              <MDBCarousel
                activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem
                interval={900000} className="carouselPager"
              >
                <MDBCarouselInner>
                  
                  <MDBCarouselItem itemId="1" className="active">
                  <MDBRow>
                  <MDBCol>
                    <MDBCard className="mb-2 h-100 p-2">
                      <div className="text-center">
                      <img src={QGIS1} />
                      </div>
                    </MDBCard>
                  </MDBCol>
                  </MDBRow>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                  <MDBRow>
                  <MDBCol>
                    <MDBCard className="mb-2 h-100 p-2">
                    <div className="text-center">
                    <img src={QGIS2} />
                      </div>
                    </MDBCard>
                  </MDBCol>
                  </MDBRow>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                  <MDBRow>
                  <MDBCol>
                    <MDBCard className="mb-2 h-100 p-2">
                    <div className="text-center">
                    <img src={QGIS3} />
                      </div>
                    </MDBCard>
                  </MDBCol>
                  </MDBRow>
                  </MDBCarouselItem>
                  
                </MDBCarouselInner>
              </MDBCarousel>
            </div>
            <div className="col-md-8 mpl-3">
            <h1>Carbon Sinks QGIS Plugin</h1>
            <p>QGIS is a free and open-source cross-platform desktop geographic information system application <a href="https://www.qgis.org/en/site/" target="_blank">https://www.qgis.org/en/site/</a></p>
            <button className="btn btn-primary"><i class="fa fa-cloud-download" aria-hidden="true"></i> Download the latest plugin version</button>
            <hr className="mt-5 mb-3" />
            <div className="row pt-4">
              <div className="col-md-6">
                <h5>Features</h5>
                <ul>
                  <li>Download raw data</li>
                  <li>Draw layer selectors</li>
                  <li>Run expressions</li>
                  <li>Section specific data</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>Installation</h5>
                <ul>
                  <li>Download the <a href="#" target="_blank">plugin file</a>.</li>
                  <li>Open your <a href="https://www.qgis.org/en/site/" target="_blank">QGIS installation</a></li>
                  <li>Navigate to plugins</li>
                  <li>Upload the <a href="#" target="_blank">plugin file</a></li>
                </ul>
              </div>
            </div>
            </div>
          </div>
          </div>
          
        </section>
      </>
    )
  }
}

export default DataQgis