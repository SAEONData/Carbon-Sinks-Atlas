import React from 'react';
import { Row, Col, Button, MDBCarousel, MDBCard, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import logoQGIS from '../../../Images/Other/logo-qgis.gif';
import logoSaeon from '../../../Images/Other/nrf-saeon-logo.gif';
import logoGis from '../../../Images/logo-giz.gif';
import logoCsir from '../../../Images/logo-csir.png';


class AboutCSA extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h1>About the South African Carbon Sinks Atlas</h1>
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container-fluid mt-4 pt-5 pb-5">
          <div className="row">
            {/* <div className="col-md-2 pb-5 m-border-r">
            <h5>Funders: </h5>
            <img src={logoGis} />
            <h5 className="mt-5">Project leads: </h5>
            <img className="mt-3" src={logoCsir} />
            <h5 className="mt-5">Development, Model Specification, and Data Collection and Analysis: </h5>
            <img className="mt-3" src={logoSaeon} />
            </div> */}
            <div className="col-md-12">{/* <div className="col-md-10 mpl-3"> */}
            <h1>The foundation</h1>
            <p>South Africa's National Climate Change Response Policy (NCCRP) highlighted the need to assess the national carbon sinks related to forest restoration, wetlands, agricultural practice, all significant changes in land use and to quantify the potential future carbon stocks under varying climate change scenarios and land use change.</p>
            <p>In 2014 the CSIR (in partnership with a number of other organisations) produced the National Terrestrial Carbon Sinks Assessment for South Africa. The CSIR in collaboration with SAEON later converted the NTCSA outputs into atlas format to make the data more widely accessible - the South African Carbon Sinks Atlas.</p>
            <hr className="mt-5 mb-3" />
            <div className="row pt-4">
              <div className="col-md-6">
                <h5>2019 National Terrestrial Carbon Sinks Assessment for South Africa</h5>
                <p>Since the development of the NTCSA 2014 there has been a number of changes and developments. Most importantly the land cover of the country has changed, and as such, there is an associated change in carbon stocks. There has also been a great deal of development around some of the uncertainties associated with the 2014 NTCSA. For instance, the CSIR has created updated maps of above-ground woody biomass for the savanna biomes that are far more detailed and accurate than the maps used in the 2014 NTCSA. There has also been ongoing research in many of the components relating to the initial assumptions on which the NTCSA was based.</p>
                <h5 className="mt-4">Open Source Developments</h5>
                <p>The web-based Carbon Sinks Atlas and associated Plugins have been developed by and is hosted by The South African Environmental Observation Network (SAEON). To facilitate collaboration, all the development code and algorithms are open source projects. <a href="https://github.com/SAEON-uLwazi/Carbon-Sinks" target="_blank">Please click here to access our Github Carbon Sinks Code Repository</a>. </p>
              </div>
              <div className="col-md-6">
                <h5>Achievements </h5>
                <p>Through funding provided by GIZ, the CSIR in collaboration with SAEON and the Department of Environmental Affairs have been working to update the NTCSA and the web-based Carbon Atlas. Improvements to the previous version include:</p>
                <ul>
                  <li>Updated functionality and usability of the Carbon Sinks Atlas user interface for faster and more advanced data queries allowing you to search, subset, and download the data directly in your QGIS desktop application using our new plugin.</li>
                  <li>Updated search and discovery of data.</li>
                  <li>Updated carbon stocks maps and baseline datasets at 1x1km resolution based on new data sources including newly available soil organic carbon datasets.</li>
                  <li>Revised model runs using the updated data including changes in land cover since the original runs-since the model assumptions and datasets are improved, the model was run for both the new as well as the original land cover data.</li>
                  <li>Revised modelling / algorithm builder interface that can be configured and run in your QGIS desktop application using our new plugin.</li>
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

export default AboutCSA