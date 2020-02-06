import React from 'react';
import { Row, Col, Button, Modal, MDBCarousel, MDBCard, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import logoQGIS from '../../../Images/Other/logo-qgis.gif';
import logoSaeon from '../../../Images/Other/nrf-saeon-logo.gif';
import QGIS1 from '../../../Images/QGIS/4.gif';
import QGIS2 from '../../../Images/QGIS/5.gif';
import QGIS3 from '../../../Images/QGIS/6.gif';
import QGISmanual from '../../../Content/QGIS-plugin-user-manual-quick-start.pdf';
import QGISconfig from '../../../Content/config.zip';
import QGISplugin from '../../../Content/carbon_sinks.zip';
import QGIS4 from '../../../Images/QGIS/model_flow2.jpg';

class DataQgis extends React.Component {
  


  render() {



    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h1>Download Data</h1>
            <p>The QGIS plugin allows you to search SAEON's Carbon Sinks data repository, and enables you to calculate the different carbon pools for the national carbon sinks assessment.</p>
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
            {/* <h1>Carbon Sinks QGIS Plugin</h1>
            <p>QGIS is a free and open-source cross-platform desktop geographic information system application <a href="https://www.qgis.org/en/site/" target="_blank">https://www.qgis.org/en/site/</a></p>
            <button className="btn btn-primary"><i className="fa fa-cloud-download" aria-hidden="true"></i> Download the latest plugin version</button>
            <hr className="mt-5 mb-3" /> */}
            <h1>Getting started</h1>
            <p>The system will run on any PC loaded with <a href="https://www.qgis.org/en/site/" target="_blank">QGIS 3.8 and below</a>. In the plugin menu item of QGIS, click the 'Manage and Install Plugins…' to open the plugins dialog. Navigate to the settings option and make sure 'Show also experimental plugins' is checked, then choose the 'Install from zip' option and select the 'carbon_sinks.zip' file. Click the 'Install Plugin' button to install the plugin.</p>
            <p>The plugin has two main interfaces:</p>
            <ul>
              <li>The Carbon Sinks window (a search and discovery interface which opens when the plugin is clicked); and </li>
              <li>The Model builder (accessible from the ‘Model’ button in the main Carbon Sinks window).</li>
            </ul>
            <a className="btn btn-secondary" href={QGISplugin}><i className="fa fa-cloud-download" aria-hidden="true"></i> Download the plugin</a>
            <a className="btn btn-ea-green btn-rounded" href={QGISconfig} target="_blank">Download the config file</a>
            <button className="btn btn-ea-green btn-rounded modalshow" type="button" >Learn more</button>




      <div className="modal modalqgis"  role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">QGIS Plugin</h5>
        <button type="button" className="close modalhide" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <img src={QGIS4} />
      </div>
    </div>
  </div>
</div>


            <hr className="mt-5 mb-3" />
            <div className="row pt-4">
              <div className="col-md-6">
                <h5>Installation</h5>
                <ul>
                  <li>Open your <a href="https://www.qgis.org/en/site/" target="_blank">QGIS installation</a></li>
                  <li>Navigate to plugins</li>
                  <li>Install the <a href={QGISplugin} target="_blank">plugin file</a></li>
                </ul>
                <a className="btn btn-ea-green btn-rounded" href={QGISmanual} target="_blank"><i className="fa fa-cogs"></i> Installation manual</a>
              </div>
              <div className="col-md-6">
                <h5>Features</h5>
                <ul>
                  <li>Download raw data</li>
                  <li>Draw custom layers</li>
                  <li>Run multiple expressions</li>
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