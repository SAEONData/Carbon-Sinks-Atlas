'use strict'

import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import logoSaeon from '../../../Images/Other/nrf-saeon-logo.gif';
import environmental_affairs_logo from '../../../images/DEA/environmental_affairs_logo.png'
import logoCsir from '../../../Images/logo-csir.png';


const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNav: payload => {
      dispatch({ type: "NAV", payload })
    }
  }
}

class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateNav(location.hash)
  }

  render() {

    return (
      <>
       <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h1>Contact the South African Carbon Sinks Atlas</h1>
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container mt-4 pt-5 pb-5">
          <div className="row contact-items">
            <div className="col-md-4">
              <div className="ea-card">
              <div className="text-center"><img src={logoSaeon} /></div>
              <h4><strong>SAEON Contact:</strong></h4>
              <p><strong>Claire Davis-Reddy</strong><br/>QGIS plugin and data queries</p>
              <a href="mailto:claire@saeon.ac.za">claire@saeon.ac.za</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ea-card">
              <div className="text-center"><img src={environmental_affairs_logo} /></div>
              <h4><strong>DEFF Contact:</strong></h4>
              <p><strong>Hlengiwe Mbatha</strong><br/>Queries about the project</p>
              <a href="mailto:HMbatha@environment.gov.za">HMbatha@environment.gov.za</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ea-card">
              <div className="text-center"><img src={logoCsir} /></div>
              <h4><strong>CSIR Contact:</strong></h4>
              <p><strong>Dr Oscar Mokotedi</strong><br/>Queries about the model development and carbon fluxes</p>
              <a href="mailto:OMokotedi@csir.co.za" >OMokotedi@csir.co.za</a>
              </div>
            </div>
            
          </div>
          </div>
          </section>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)