import React from 'react'
import { Col, Row, Modal, ModalBody, ModalHeader } from 'mdbreact';
import { DEAGreen, DEAGreenDark } from '../../config/colours.js'

import { footerContent } from '../../../data/footerConfig'
import loader from '../../../images/Other/loader.gif'
import logoGis from '../../../Images/logo-giz.gif';
import logoCsir from '../../../Images/logo-csir.png';
import logoSaeon from '../../../Images/Other/nrf-saeon-logo.gif';

class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this)
    this.renderLinks = this.renderLinks.bind(this)
    this.handleResize = this.handleResize.bind(this)

    this.state = {
      showModal: false,
      modalHeader: "",
      modalSrc: "",
      isNarrowDisplay: false
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  handleResize() {
    this.setState({
      isNarrowDisplay: (window.innerWidth < 900)
    })
  }

  toggleModal(state, header = "", src = "") {
    this.setState({
      showModal: state,
      modalHeader: header,
      modalSrc: src
    })
  }

  renderSections(data) {

    let sections = []

    for (let i = 0; i < 4; i++) {
      let section = data.sections[i]
      sections.push(
        <Col key={`section_${i + 1}`} md="3">
          <h4 style={{ marginBottom: "15px" }}><b>{section.text}</b></h4>
          {this.renderLinks(section)}
        </Col>
      )
    }

    return sections
  }


  renderLinks(section) {

    let links = []

    for (let i = 0; i < section.links.length; i++) {

      let link = section.links[i]
      if (link.text) {
        links.push(
          <div
            key={`link_${i + 1}`}
            style={{
              cursor: link.link ? "pointer" : "default",
              fontWeight: link.link ? "400" : "regular"
            }}
            onClick={() => {
              if (link.link) {
                this.toggleModal(true, link.text, link.link)
              }
            }}>
            {link.text}
          </div>
        )
      }
      else if (link.src) {
        links.push(
          <img
            key={`link_${i + 1}`}
            src={link.src}
            style={{
              width: link.width,
              cursor: link.link ? "pointer" : "default"
            }} />
        )
      }
    }

    return links
  }

  render() {

    let { showModal, modalHeader, modalSrc, isNarrowDisplay } = this.state

    return (
      <>
        <div className="CSA-footer" style={{
          padding: "5px 45px 5px 45px",
          borderTop: "1px solid gainsboro",
          borderLeft: "1px solid gainsboro",
          borderRight: "1px solid gainsboro",
          backgroundColor: "white",
          color: "black"
        }}>
          <br />
          <div className="row">
    <div className="col-md-3">
        <h4><b>Technology</b></h4>
        <div >DEFF NCCIS uses open source, government funded facilities provided by SAEON. The DSI and NRF funds the SAEON Open Data Platform (ODP) and associated portals. Developed by SAEON on behalf of DSI, DEFF, DARDLR, and other stakeholders.</div>
    </div>
    <div className="col-md-3">
        <h4><b>Legal</b></h4>
        <div><a onClick={() => { location.hash = "/doc-disclaimer" }}><b>Disclaimer</b></a></div>
        <div><a onClick={() => { location.hash = "/doc-conditions" }}> <b>Conditions of use</b></a></div>
        {/* <div><a className="text-dark" href="https://docs.google.com/document/d/e/2PACX-1vT8ajcogJEEo0ZC9BGIej_jOH2EV8lMFrwOu8LB4K9pDq7Tki94mUoVxU8hGM-J5EL8V3w5o83_TuEl/pub" target="link"><b>Data Licenses</b></a></div>
        <div><a onClick={() => { location.hash = "/doc-privacy" }}> <b>Privacy policy</b></a></div> */}
    </div>
    <div className="col-md-3">
        <h4><b>SAEON ODP</b></h4>
        <a onClick={(event) => {event.preventDefault(); window.open("https://ulwazi.saeon.ac.za/projects/open-data-platform/");}}><img src={logoSaeon} style={{maxHeight: '82px', marginBottom: '15px', marginLeft: '-30px'}} /></a>
        <div><a className="text-dark" href="https://ulwazi.saeon.ac.za/projects/open-data-platform/" target="link"><b>Open Data Platform</b></a></div>
        {/* <div><a className="text-dark" href="http://app01.saeon.ac.za/dev/UI_footside/page_contribute.html" target="link"><b>Contribute</b></a></div> */}
        {/* <div><a className="text-dark" href="https://ulwazi.saeon.ac.za/contact/" target="link"><b>Contact Us</b></a></div> */}
    </div>
    <div className="col-md-3 footer-funding">
        <h4><b>Funding</b></h4>
        <div className="row align-items-center">
        {/* <div className="col-md-8"><img src="https://ccis.environment.gov.za/df4a473d960cba109f32b0bfc40ad717.jpg" /></div> */}
        <div className="col-md-4"><img src={logoCsir} /></div>
        </div>
        <img src={logoGis} className="w-100" />
        </div>
</div>

            {/* {this.renderSections(footerContent)} */}

          
          <br />
        </div>

        <div className="CSA-footer" style={{
          padding: "10px 45px 10px 45px",
          backgroundColor: DEAGreen,
          color: "white"
        }}>
          <Row>
            <Col md="12">

              <b>
                <a onClick={() => { location.hash = "/doc-disclaimer" }}><b>Disclaimer</b></a> | 
                <a onClick={() => { location.hash = "/doc-conditions" }}> <b>Conditions of use</b></a> | 
                <a onClick={() => { location.hash = "/doc-privacy" }}> <b>Privacy policy</b></a> | 
                Created by
                <span> <a style={{ color: "white" }} href="http://www.saeon.ac.za" target="saeon"><strong>SAEON</strong></a> </span>
                using SAEON Open Data Platform APIs.
              </b>
              <br />
              Copyright &copy; {(new Date().getFullYear())}
            </Col>
          </Row>
        </div>

        <Modal isOpen={showModal} toggle={() => this.toggleModal(false)} size="fluid" fullHeight position="bottom" style={{ width: "95%" }} >
          <ModalHeader toggle={() => this.toggleModal(false)}>{modalHeader}</ModalHeader>
          <ModalBody>
            <iframe
              style={{
                width: "100%",
                height: "83vh", //"500px",
                margin: "0px",
                border: "1px solid gainsboro",
                // backgroundImage: `url(${loader})`,
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "50% 50%"
              }}
              src={modalSrc}
            />
          </ModalBody>
        </Modal>
      </>
    )
  }
}

export default Footer