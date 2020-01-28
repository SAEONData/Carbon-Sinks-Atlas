'use strict'

import { Button, Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Fa, Navbar as MDBNavbar, NavbarNav, NavbarToggler, NavItem, NavLink } from 'mdbreact';
import React from 'react';
import { connect } from 'react-redux';
import { DEAGreen } from "../../config/colours.js";
import { ssoBaseURL, ccrdSiteBaseURL, ndaoSiteBaseURL } from '../../../js/config/serviceURLs.js';
import NCCRD from '../pages/Tools/NCCRD.jsx';
import { data as NavData } from '../../../data/sideNavData';
import IconList from '../Iconlist/index.jsx'
import QGISmanual from '../../../Content/QGIS-plugin-user-manual-quick-start.pdf';
import EASearch from '../search/search.jsx';



const _gf = require('../../globalFunctions')

const mapStateToProps = (state, props) => {
  let user = state.oidc.user
  let { general: { showSideNav } } = state
  let { navigation: { locationHash } } = state
  return { user, locationHash, showSideNav }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSideNav: payload => {
      dispatch({ type: "TOGGLE_SIDENAV", payload })
    }
  }
}

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      collapse: false,
      isWideEnough: false,
      listsDropOpen: false,
      showDASL: false,
      showLRT: false,
      showNCCRD: false,
      showNWIS: false,
      showSARVA: false,
      showNDMC: false
    }

    this.onClick = this.onClick.bind(this)
    this.listsDropToggle = this.listsDropToggle.bind(this)
  }

  // componentDidUpdate(){
  //   let { user } = this.props
  //   if(user){
  //     console.log("USER", user)
  //   }
  // }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  listsDropToggle() {
    this.setState({
      listsDropOpen: !this.state.listsDropOpen
    });
  }

  render() {

    let { locationHash, user, showSideNav, toggleSideNav } = this.props
    let { showDASL, showLRT, showNCCRD, showNWIS, showSARVA, showNDMC } = this.state

    return (
      <>
        <MDBNavbar
          size="sm"
          color="white"
          light
          expand="md"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 15px 10px -15px",
            borderTop: "1px solid rgba(0, 0, 0, 0.3)",
            paddingTop: 2,
            paddingBottom: 2,
            zIndex: 3
          }}
        >

          {!this.state.isWideEnough && <NavbarToggler style={{ backgroundColor: DEAGreen }} onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>

            {/* LEFT */}
            <NavbarNav left>

              {
                NavData.enabled &&
                <Button size="sm" color="grey" onClick={() => { toggleSideNav(!showSideNav) }}
                  style={{ width: "45px", marginLeft: "0px", marginRight: "15px", paddingLeft: "18px" }}>
                  <Fa icon="bars" />
                </Button>
              }
              <NavItem>
                <Button size="sm"  onClick={() => { location.hash = "/" }}
                  style={{ 
                    width: "45px", marginLeft: "0px", marginRight: "0px", paddingLeft: "18px", float: "left",
                    color: "#000",
                    boxShadow: "none",
                    fontSize: "20px",
                    padding: "0"
                    }}>
                  <Fa icon="home" />
                </Button>
              </NavItem>
              
               {/* Menu item */}
              <NavItem>
                <NavLink to="/About">
                <b>About</b>
                </NavLink>
              </NavItem>
              
               {/* Menu item */}
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <b>Model</b>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => { location.hash = "model-reports" }}>
                      Model
                    </DropdownItem>
                    <DropdownItem onClick={() => { location.hash = "coming-soon" }}>
                      Technical reports
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

              {/* Menu item */}
              <NavItem>
                <NavLink to="/explore-data">
                <b>Explore data</b>
                </NavLink>
              </NavItem>

              {/* Menu item */}
              {/* <NavItem>
                <a className="nav-link Ripple-parent" target="_blank" href="https://saeon.atlassian.net/servicedesk/customer/portal/7">
                <b>Documents</b>
                </a>
              </NavItem> */}

               {/* Menu item */}
              <NavItem>
                <NavLink to="/data-qgis">
                <b>Download data</b>
                </NavLink>
              </NavItem>

               {/* Menu item */}
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <b>Help</b>
                  </DropdownToggle>
                  <DropdownMenu>
                    
                    <button className="dropdown-item"  onClick={(event) => {event.preventDefault(); window.open(QGISmanual);}}>
                      QGIS plugin manuals
                      </button>
                    
                    <DropdownItem onClick={() => { location.hash = "help-glossary" }}>
                      Glossary
                    </DropdownItem>
                    <DropdownItem onClick={() => { location.hash = "help-acronyms" }}>
                      Acronyms
                    </DropdownItem>
                    <DropdownItem onClick={(event) => {event.preventDefault(); window.open("https://saeon.atlassian.net/servicedesk/customer/portal/7");}}>
                      Log an issue
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

            </NavbarNav>
            {/* RIGHT */}
            <NavbarNav right>
              {/* <NavItem>
                <EASearch />
              </NavItem> */}
              
              <NavItem>
                <IconList></IconList>
              </NavItem>
              {/* Username */}
              {(user && !user.expired) &&
                <NavItem style={{ marginRight: "15px" }}>
                  <NavLink to="#" disabled>
                    <b style={{ color: DEAGreen }}>
                      {"Hello, " + user.profile.email}
                    </b>
                  </NavLink>
                </NavItem>
              }
             
            </NavbarNav>

          </Collapse>

          {
            showNCCRD &&
            <NCCRD
              query={`?navbar=hidden&daoid=hidden&readonly=true&popin=hidden`}
              // closeCallback={() => { this.setState({ showNCCRD: false }) }}
            />
          }

        </MDBNavbar >

      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)