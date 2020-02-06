//Styles - Ant.Design (has to be loaded before MDB so that MDB can replace all applicable styles)
import 'antd/lib/style/index.css'

//Styles - MDB
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import ReactGA from "react-ga"; //Google Analytics

//Components
import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home.jsx';
import Navbar from './components/navigation/Navbar.jsx';
import Footer from './components/navigation/Footer.jsx';
import LoadingPanel from './components/input/LoadingPanel.jsx';
import Header from './components/navigation/Header.jsx';
import SideNav from './components/navigation/SideNav.jsx';
import AboutCSA from './Components/Pages/about.jsx';
import Contact from './Components/Pages/contact.jsx';
import ComingSoon from './Components/Layout/Coming-soon.jsx';

import ModelCSA from './Components/Pages/model-reports.jsx';
import ModelWorks from './Components/Pages/model-works.jsx';
import ModelCalc from './Components/Pages/model-calc.jsx';

import DataQgis from './Components/Pages/data-qgis.jsx';
import ExploreData from './Components/Pages/explore-data.jsx';
import HelpAcronyms from './Components/Pages/help-acronyms.jsx';
import HelpGlossary from './Components/Pages/help-glossary.jsx';
import HelpQgis from './Components/Pages/help-qgis.jsx';

import DOCdisclaimer from './Components/Pages/doc-disclaimer.jsx';
import DOCconditions from './Components/Pages/doc-conditions.jsx';
import DOCprivacy from './Components/Pages/doc-privacy.jsx';




// import userManager from './components/authentication/userManager';
import '../css/custom.css';
import './custom';

//Data
const Oidc = require("oidc-client")
import { data as NavData } from '../data/sideNavData'
const _gf = require('./globalFunctions')

const mapStateToProps = (state, props) => {
  let { general: { loading, showSideNav } } = state
  return { loading, showSideNav }
}

//Enable OIDC Logging
Oidc.Log.logger = console
Oidc.Log.level = Oidc.Log.INFO

class App extends React.Component {

  constructor(props) {
    super(props);

    this.saveCurrentURL = this.saveCurrentURL.bind(this)

    let showNavbar = true
    if (location.toString().includes("navbar=hidden")) {
      showNavbar = false
    }

    this.state = {
      navbar: showNavbar,
      currentURL: ""
    }
  }

  async componentDidMount() {
    
    this.saveCurrentURL()
    window.onhashchange = this.saveCurrentURL
    // try {
    //   await userManager.signinSilent()
    // }
    // catch (ex) {
    //   console.warn("Sign-in-silent failed!", ex)
    // }
  }

  ignoreURL() {

    let ignore = false

    const ignoreURLs = [
      "#/login",
      "#/logout",
      "#/callback"
    ]

    ignoreURLs.forEach(x => {
      if (location.hash.includes(x) && !ignore) {
        ignore = true
      }
    })

    return ignore
  }

//   explorer(){
//     /* Explorer page */
// if ($(".ea-content-full").hasClass("explore-data")) {
//     setTimeout(function(){
//         console.log('explorer meh start');
//         $('#ea-header').addClass('explorer-scrollnav');
//         $('#app').addClass('full-explorer');
//         console.log('explorer meh end');
//       }, 4000);
//   }else{
//     $('#ea-header').removeClass('explorer-scrollnav');
//     $('#app').removeClass('full-explorer');
//   };
// };
  saveCurrentURL() {



    if (location.hash !== this.state.currentURL && !this.ignoreURL()) {
      console.log("NAV", location.hash);
      // this.explorer();
      // console.log("Test DONE");
      ReactGA.initialize('UA-145174772-1');
      ReactGA.pageview(location.hash);
      // console.log('test', window.location.pathname + window.location.search)


      var valuef = location.hash.substring(location.hash.lastIndexOf('#') + 1);
      var valueid = valuef.replace('#','')
      if (!valuef.includes("/")){
          var theelement = document.getElementById(valueid);
          theelement.setAttribute( 'class','bg-light')
          var theoffset = theelement.offsetTop;
          var theoffsetplus = parseInt(theoffset - 80);
          window.scrollTo(0,theoffsetplus);
      }else{
        window.scrollTo(0,0);
      };

      this.setState({ currentURL: location.hash })
      _gf.SaveCurrentUrl()
    }
  }

  render() {
    

    let { loading, showSideNav } = this.props
    let { navbar } = this.state

    return (
      <div style={{ backgroundColor: "white", overflowX: 'hidden' }}>
        <Router>
          <div>
            <header id="ea-header">
            {navbar && <Header />}
            {navbar && <Navbar />}
            </header>
            {
              NavData.enabled &&
              <SideNav data={NavData} isOpen={showSideNav} />
            }

            <section id="ea-body">
              <div id="ea-content">

                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/about" component={AboutCSA} />
                  <Route path="/model-reports" component={ModelCSA} />
                  <Route path="/model-works" component={ModelWorks} />
                  <Route path="/model-calc" component={ModelCalc} />
                  <Route path="/data-qgis" component={DataQgis} />
                  <Route path="/explore-data" component={ExploreData} />
                  <Route path="/help-acronyms" component={HelpAcronyms} />
                  <Route path="/help-glossary" component={HelpGlossary} />
                  <Route path="/help-qgis" component={HelpQgis} />
                  <Route path="/doc-disclaimer" component={DOCdisclaimer} />
                  <Route path="/doc-conditions" component={DOCconditions} />
                  <Route path="/doc-privacy" component={DOCprivacy} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/coming-soon" component={ComingSoon} />
                  <Redirect to="/" />
                </Switch>
              </div>
            

            <Footer />
            </section>
            <LoadingPanel enabled={loading} />

          </div>

        </Router>
      </div>
    );
    
  }
}

export default connect(mapStateToProps)(App)
