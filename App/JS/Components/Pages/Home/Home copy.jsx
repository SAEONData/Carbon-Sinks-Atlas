import React from 'react';
import { Row, Col, Button, MDBCarousel, MDBCard, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import Home1 from '../../../../Images/LandingPage/carbon.jpg';
import Home2 from '../../../../Images/LandingPage/system-screens.jpg';
import Home3 from '../../../../Images/LandingPage/world-ways.svg';
import Home4 from '../../../../Images/LandingPage/home-intro.jpg';
class Home extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full pt-0 light-bg">
          <div className="bg-image-bl">
            <img src={Home4} className="bg-imge-el" />
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                {/* CTA START */}
  
              <div className="row mb-3">
              <div className="col-1">
                <i className="fa fa-home icn-home"></i>
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">Explore the data online</h5>
                <p className="grey-text">The online atlas allows you to:</p>
                <ul className="grey-text">
                  <li>View the collection of carbon sinks related datasets;</li>
                  <li>View the metadata records and DOI for each data layer;</li>
                  <li>Export the online view for use in reports;</li>
                  <li>Download an individual dataset of interest. </li>
                </ul>
                <button type="button" className="btn btn-ea-green btn-rounded">Design your site now</button>
              </div>
          </div>
          {/* CTA END */}

          {/* CTA START */}

              <div className="row mb-3">
              <div className="col-1">
                <i className="fa fa-home icn-home"></i>
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">Download the data using QGIS</h5>
                <p className="grey-text">The ready to use QGIS Plugin searches the Carbon Sinks Data Collection and fetches the data from relevant SAEON databases and loads the data into your QGIS map view. The Plugin provides services for <strong>querying, sub-setting, and downloading data</strong>. A custom algorithm builder (‘model’) has been developed to house all the latest Carbon Sinks algorithms and datasets and allows you to test, run, or customise Carbon Sinks algorithms within the QGIS environment. </p>
                <button type="button" className="btn btn-ea-green btn-rounded">Design your site now</button>
              </div>
          </div>
          {/* CTA END */}

          {/* CTA START */}
              <div className="row mb-3">
              <div className="col-1">
                <h5><i className="fa fa-home icn-home"></i></h5>
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">Read more about the project</h5>
                <ul className="grey-text">
                  <li>Background information on the project including the methodologies and datasets used.</li>
                  <li>Read or download the QGIS manuals</li>
                  <li>View the Glossary</li>
                  <li>View the list of Acronyms</li>
                </ul>
                <button type="button" className="btn btn-ea-green btn-rounded">Design your site now</button>
              </div>
          </div>
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
      </>
    )
  }
}

export default Home