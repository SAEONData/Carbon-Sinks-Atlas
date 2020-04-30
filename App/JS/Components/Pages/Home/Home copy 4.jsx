import React from 'react';
// import { Row, Col, Button, MDBCarousel, MDBCard, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBIcon } from 'mdbreact'
// import Home1 from '../../../../Images/LandingPage/carbon.jpg';
// import Home2 from '../../../../Images/LandingPage/system-screens.jpg';
// import Home3 from '../../../../Images/LandingPage/world-ways.svg';
// import Home4 from '../../../../Images/LandingPage/home-intro.jpg';


import Home5 from '../../../../Images/LandingPage/homebg.gif';
import Home6 from '../../../../Images/LandingPage/home-diagram.png';
import Home7 from '../../../../Images/LandingPage/home-diagram-mobile.png';
import photog1 from '../../../../Images/Other/photos/1.jpg';
import photog2 from '../../../../Images/Other/photos/2.jpg';
import photog3 from '../../../../Images/Other/photos/3.jpg';
import photog4 from '../../../../Images/Other/photos/4.jpg';
import photog5 from '../../../../Images/Other/photos/5.jpg';
import photog6 from '../../../../Images/Other/photos/6.jpg';
class Home extends React.Component {

  render() {


    return (
      <>
        <section className="ea-content-full pt-0 light-bg">

            
            <div className="row">
              <div className="col-md-6 bg-hm-img">
                <div className="row mt-4 no-gutters">
                  <div className="col-md-4"><img src={photog1} /></div>
                  <div className="col-md-4"><img src={photog2} /></div>
                  <div className="col-md-4"><img src={photog3} /></div>
                  <div className="col-md-4"><img src={photog4} /></div>
                  <div className="col-md-4"><img src={photog5} /></div>
                  <div className="col-md-4"><img src={photog6} /></div>
                </div>
              </div>
              <div className="col-md-6 hm-points">
                {/* CTA START */}
                
  
              <div className="row mb-5">
              <div className="hm-points-line"></div>
              <div className="col-1">
                <i className="fa fa-map-o icn-home"></i>
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">Explore the data</h5>
                <ul className="grey-text">
                  <li>View the collection of carbon sinks related datasets;</li>
                  <li>View the metadata records and DOI for each data layer;</li>
                  <li>Export the online view for use in reports;</li>
                  <li>Download an individual dataset of interest. </li>
                </ul>
                <button type="button" className="btn btn-ea-green btn-rounded" onClick={() => { location.hash = "explore-data" }}>
                  South Africa</button>
                <button type="button" className="btn btn-ea-green btn-rounded" onClick={() => { location.hash = "/municipality-profiles" }}>
                  Municipalities</button>
                <button type="button" className="btn btn-ea-green btn-rounded" onClick={(event) => {event.preventDefault(); window.open("http://www.sasdi.net/search.aspx?guid=d4fd3bfc-b26e-6b1e-9318-5266144a65c5&control=hide&noframe=true&tab=Results");}}>
                  Search Data</button>
              </div>
          </div>
          {/* CTA END */}

          {/* CTA START */}

              <div className="row mt-3 ">
              <div className="col-1">
                <i className="fa fa-cloud-download icn-home"></i>
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">Download the data using QGIS</h5>
                <p className="grey-text">The ready to use QGIS Plugin searches the Carbon Sinks Data Collection and fetches the data from relevant SAEON databases and loads the data into your QGIS map view. The Plugin provides services for querying, sub-setting, and downloading data.</p>
                <button type="button" className="btn btn-ea-green btn-rounded" onClick={() => { location.hash = "/data-qgis" }}>Get the plugin</button>
              </div>

          {/* CTA END */}

          {/* CTA START */}

          {/* <div className="row mt-3">
              <div className="col-1">
                <i className="fa fa-area-chart icn-home"></i>
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">View District Municiple Profiles</h5>
                <p className="grey-text">Get an in depth  understanding on what the key messages are from the carbon sinks atlas at the local level. These include charts and summaries of recent land-cover changes, and carbon losses and gains.</p>
                
              </div>
          </div> */}
          {/* CTA END */}

          {/* CTA START */}
              {/* <div className="row mb-3">
              <div className="col-1">
                <h5><i className="fa fa-home icn-home"></i></h5>
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">Read more about the project</h5>
                <p className="grey-text">
                  Background information on the project including the methodologies and datasets used, Read or download the QGIS manuals, view the Glossary, view the list of Acronyms
                </p>
                <button type="button" className="btn btn-ea-green btn-rounded" onClick={() => { location.hash = "About" }}>Read more</button>
              </div>
          </div> */}
          {/* CTA END */}
              </div>
            </div>
          </div>

          {/* <div className="container-fluid mt-4 pt-5 pb-5">
          <div className="row">
            <div className="col-md-4">
              <img src={Home2} />
              <h5>Explore the data online</h5>
              <p>The online atlas allows you to:</p>
              <ul>
                <li>View the collection of carbon sinks related datasets;</li>
                <li>View the metadata records and DOI for each data layer;</li>
                <li>Export the online view for use in reports;</li>
                <li>Download an individual dataset of interest. </li>
              </ul>
              <button type="button" className="btn btn-deep-purple btn-rounded">Design your site now</button>
            </div>
            <div className="col-md-4">
              <h5>Download the data using QGIS</h5>
              <p>The ready to use QGIS Plugin searches the Carbon Sinks Data Collection and fetches the data from relevant SAEON databases and loads the data into your QGIS map view. The Plugin provides services for <strong>querying, sub-setting, and downloading data</strong>. A custom algorithm builder (‘model’) has been developed to house all the latest Carbon Sinks algorithms and datasets and allows you to test, run, or customise Carbon Sinks algorithms within the QGIS environment. </p>
              <button type="button" className="btn btn-deep-purple btn-rounded">Design your site now</button>
              <img src={Home1} />
            </div>
            <div className="col-md-4">
            <img src={Home3} />
              <h5>Read more about the project</h5>
              <ul>
                <li>Background information on the project including the methodologies and datasets used.</li>
                <li>Read or download the QGIS manuals</li>
                <li>View the Glossary</li>
                <li>View the list of Acronyms</li>
              </ul>
              <button type="button" className="btn btn-deep-purple btn-rounded">Design your site now</button>
            </div>
          </div>
          </div> */}
          
        </section>
        <section className="pt-5 pb-5">
          <div className="container mb-5">
            <h5 className="mt-3 text-center text-large">What's new?</h5>
          <p className="text-center">The Carbon Sinks Atlas is a web-based data and information tool aimed at providing the spatial distribution of carbon stocks and fluxes across South Africa.</p>
          <p className="mt-3 text-center">Improvements to the previous version include:</p>
          <div className="row">
            <div className="col-md-3 text-center">
              <div className="ea-card bg-ea-green">
            <i className="fa fa-database icn-home"></i>
            <p>Updated carbon stocks maps and baseline datasets at 1x1km resolution including newly available soil organic carbon datasets. Approximately <strong>100 new datasets</strong> are now available. </p> 
            </div></div>
            <div className="col-md-3 text-center">
            <div className="ea-card bg-ea-green">
            <i className="fa fa-space-shuttle icn-home"></i>
            <p>Updated functionality for faster and more advanced data queries allowing you to search, subset, and download the data directly in your QGIS desktop application using our new plugin. </p>
            </div></div>
            <div className="col-md-3 text-center">
            <div className="ea-card bg-ea-green">
            <i className="fa fa-globe icn-home"></i>
            <p>Revised algorithm builder interface that can be configured and run in your QGIS desktop application using our new plugin. </p>
            </div></div>
            <div className="col-md-3 text-center">
            <div className="ea-card bg-ea-green">
            <i className="fa fa-search icn-home"></i>
            <p>Updated search and discovery of data.</p>
            </div></div>
          </div>
          </div>
        </section>
      </>
    )
  }
}

export default Home