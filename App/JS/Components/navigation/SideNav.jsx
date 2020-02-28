'use strict'

import React from 'react'
import { connect } from 'react-redux';
import { Fa, Row, Col, Button } from 'mdbreact'
import { Drawer, Collapse } from 'antd'
import { DEAGreen } from '../../config/colours.js'
import environmental_affairs_logo from '../../../images/DEA/environmental_affairs_logo.png'

import './SideNav.css'

const Panel = Collapse.Panel

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSideNav: payload => {
      dispatch({ type: "TOGGLE_SIDENAV", payload })
    }
  }
}

class SideNav extends React.Component {

  constructor(props) {
    super(props)


    this.toggleNav = this.toggleNav.bind(this)

    this.state = { navOpen: [], width: 0, height: 0, showContent: false, contentLink: "", contentTitle: "" }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  toggleNav(key) {
    let { navOpen } = this.state

    if (navOpen.includes(key)) {
      navOpen = navOpen.filter(x => x !== key)
    }
    else {
      navOpen.push(key)
    }

    this.setState({ navOpen })
  }

  closeModal() {
    this.setState({ showContent: false, contentLink: "" })
  }


  render() {

    let { isOpen, data } = this.props
    let { width, showContent, contentLink, contentTitle } = this.state

    const sideNavWidth = width < 325 ? "100%" : 325

    return (
      <>
        <Drawer
          placement="left"
          closable={true}
          onClose={() => this.props.toggleSideNav(false)}
          visible={isOpen}
          width={sideNavWidth}
          bodyStyle={{ paddingLeft: 0, paddingRight: 0, overflowX: 'hidden' }}
        >
<img
  onClick={() => window.open("http://www.environment.gov.za/")}
  src={environmental_affairs_logo}
  style={{
    height: 80,
    marginLeft: 5,
    cursor: "pointer"
  }}
  className="pl-3 pt-3"
  align="center"
/>
<hr className="mt-4 mb-4" />
<ul className="ea-side-nav pl-3 pr-3">
    <li><a href="http://ccis.environment.gov.za/" target="_blank" onClick={()=> { this.props.toggleSideNav(false) }}>Back to NCCIS</a></li>
    <li><a href="https://ccis.environment.gov.za/nccrd" target="_blank" onClick={()=> { this.props.toggleSideNav(false) }}>Submit Project to NCCRD</a></li>
    <li><a href="https://ccis.environment.gov.za/#/cic" target="_blank" onClick={()=> { this.props.toggleSideNav(false) }}>Climate Resources</a></li>
    <li><a href="https://ccis.environment.gov.za/#/" target="_blank" onClick={()=> { this.props.toggleSideNav(false) }}>Climate Data</a></li>
    <li><a href="#" target="_blank" onClick={() => { location.hash = "/contact" }}>Contact</a></li>
    
</ul>
<hr className="mt-4" />
        </Drawer>
      </>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)