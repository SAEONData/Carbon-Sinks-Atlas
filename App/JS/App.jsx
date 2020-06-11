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
import TestPage from './Components/Pages/test-page.jsx';

import ModelCSA from './Components/Pages/model-reports.jsx';
import ModelWorks from './Components/Pages/model-works.jsx';
import ModelCalc from './Components/Pages/model-calc.jsx';

import TechReports from './Components/Pages/reports.jsx';

import DataQgis from './Components/Pages/data-qgis.jsx';
import ExploreData from './Components/Pages/explore-data.jsx';
import MunProfiles from './Components/Pages/municipality-profiles.jsx';
import MunProfilesLocal from './Components/Pages/municipality-profiles-local.jsx';
import HelpAcronyms from './Components/Pages/help-acronyms.jsx';
import HelpGlossary from './Components/Pages/help-glossary.jsx';
import HelpQgis from './Components/Pages/help-qgis.jsx';

import DOCdisclaimer from './Components/Pages/doc-disclaimer.jsx';
import DOCconditions from './Components/Pages/doc-conditions.jsx';
import DOCprivacy from './Components/Pages/doc-privacy.jsx';

import DistrictsListing from './Components/Pages/sa-districts.jsx';
// Districts
import DistrictAlfredNzo from './Components/Pages/Districts/alfred-nzo.jsx';
import DistrictAmajuba from './Components/Pages/Districts/Amajuba.jsx';
import DistrictAmathole from './Components/Pages/Districts/Amathole.jsx';
import DistrictBojanala from './Components/Pages/Districts/Bojanala.jsx';
import DistrictBuffaloCity from './Components/Pages/Districts/Buffalo-City.jsx';
import DistrictCacadu from './Components/Pages/Districts/Cacadu.jsx';
import DistrictCapeWinelands from './Components/Pages/Districts/Cape-Winelands.jsx';
import DistrictCapricorn from './Components/Pages/Districts/Capricorn.jsx';
import DistrictCentralKaroo from './Components/Pages/Districts/Central-Karoo.jsx';
import DistrictChrisHani from './Components/Pages/Districts/Chris-Hani.jsx';
import DistrictCityofJohannesburg from './Components/Pages/Districts/City-of-Johannesburg.jsx';
import DistrictCityofCapeTown from './Components/Pages/Districts/City-of-Cape-Town.jsx';
import DistrictCityofCapeTshwane from './Components/Pages/Districts/City-of-Cape-Tshwane.jsx';
import DistrictDrKennethKaunda from './Components/Pages/Districts/Dr-Kenneth-Kaunda.jsx';
import DistrictDrRuthSegomotsiMompati from './Components/Pages/Districts/Dr-Ruth-Segomotsi-Mompati.jsx';
import DistrictEden from './Components/Pages/Districts/Eden.jsx';
import DistrictEhlanzeni from './Components/Pages/Districts/Ehlanzeni.jsx';
import DistrictEkurhuleni from './Components/Pages/Districts/Ekurhuleni.jsx';
import DistricteThekwini from './Components/Pages/Districts/eThekwini.jsx';
import DistrictFezileDabi from './Components/Pages/Districts/Fezile-Dabi.jsx';
import DistrictFrancesBaard from './Components/Pages/Districts/Frances-Baard.jsx';
import DistrictGertSibande from './Components/Pages/Districts/Gert-Sibande.jsx';
import DistrictHarryGwala from './Components/Pages/Districts/Harry-Gwala.jsx';
import DistrictiLembe from './Components/Pages/Districts/iLembe.jsx';
import DistrictJoeGqabi from './Components/Pages/Districts/Joe-Gqabi.jsx';
import DistrictJohnTaoloGaetsewe from './Components/Pages/Districts/John-Taolo-Gaetsewe.jsx';
import DistrictLejweleputswa from './Components/Pages/Districts/Lejweleputswa.jsx';
import DistrictMangaung from './Components/Pages/Districts/Mangaung.jsx';
import DistrictMopani from './Components/Pages/Districts/Mopani.jsx';
import DistrictNamakwa from './Components/Pages/Districts/Namakwa.jsx';
import DistrictNelsonMandelaBay from './Components/Pages/Districts/Nelson-Mandela-Bay.jsx';
import DistrictNgakaModiriMolema from './Components/Pages/Districts/Ngaka-Modiri-Molema.jsx';
import DistrictNkangala from './Components/Pages/Districts/Nkangala.jsx';
import DistrictORTambo from './Components/Pages/Districts/OR-Tambo.jsx';
import DistrictOverberg from './Components/Pages/Districts/Overberg.jsx';
import DistrictPixleykaSeme from './Components/Pages/Districts/Pixley-ka-Seme.jsx';
import DistrictSedibeng from './Components/Pages/Districts/Sedibeng.jsx';
import DistrictSekhukhune from './Components/Pages/Districts/Sekhukhune.jsx';
import DistrictThaboMofutsanyane from './Components/Pages/Districts/Thabo-Mofutsanyane.jsx';
import DistrictUgu from './Components/Pages/Districts/Ugu.jsx';
import DistrictUmgungundlovu from './Components/Pages/Districts/Umgungundlovu.jsx';
import DistrictUmkhanyakude from './Components/Pages/Districts/Umkhanyakude.jsx';
import DistrictUmzinyathi from './Components/Pages/Districts/Umzinyathi.jsx';
import DistrictUthukela from './Components/Pages/Districts/Uthukela.jsx';
import DistrictUthungulu from './Components/Pages/Districts/Uthungulu.jsx';
import DistrictVhembe from './Components/Pages/Districts/Vhembe.jsx';
import DistrictWaterberg from './Components/Pages/Districts/Waterberg.jsx';
import DistrictWestCost from './Components/Pages/Districts/West-Cost.jsx';
import DistrictWestRand from './Components/Pages/Districts/West-Rand.jsx';
import DistrictXhariep from './Components/Pages/Districts/Xhariep.jsx';
import DistrictZFMgcawu from './Components/Pages/Districts/ZF-Mgcawu.jsx';
import DistrictZululand from './Components/Pages/Districts/Zululand.jsx';
                  


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
      ReactGA.initialize('UA-157886362-1');
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
                  <Route path="/reports" component={TechReports} />
                  <Route path="/data-qgis" component={DataQgis} />
                  <Route path="/explore-data" component={ExploreData} />
                  <Route path="/municipality-profiles" component={MunProfiles} />
                  <Route path="/municipality-profiles-local" component={MunProfilesLocal} />
                  <Route path="/help-acronyms" component={HelpAcronyms} />
                  <Route path="/help-glossary" component={HelpGlossary} />
                  <Route path="/help-qgis" component={HelpQgis} />
                  <Route path="/doc-disclaimer" component={DOCdisclaimer} />
                  <Route path="/doc-conditions" component={DOCconditions} />
                  <Route path="/doc-privacy" component={DOCprivacy} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/coming-soon" component={ComingSoon} />
                  <Route path="/test-page" component={TestPage} />

                  <Route path="/sa-districts" component={DistrictsListing} />

                  {/* Districts */}
                  <Route path="/districts/alfred-nzo" component={DistrictAlfredNzo} />
                  <Route path="/districts/Amajuba" component={DistrictAmajuba} />
                  <Route path="/districts/Amathole" component={DistrictAmathole} />
                  <Route path="/districts/Bojanala" component={DistrictBojanala} />
                  <Route path="/districts/Buffalo-City" component={DistrictBuffaloCity} />
                  <Route path="/districts/Cacadu" component={DistrictCacadu} />
                  <Route path="/districts/Cape-Winelands" component={DistrictCapeWinelands} />
                  <Route path="/districts/Capricorn" component={DistrictCapricorn} />
                  <Route path="/districts/Central-Karoo" component={DistrictCentralKaroo} />
                  <Route path="/districts/Chris-Hani" component={DistrictChrisHani} />
                  <Route path="/districts/City-of-Johannesburg" component={DistrictCityofJohannesburg} />
                  <Route path="/districts/City-of-Cape-Town" component={DistrictCityofCapeTown} />
                  <Route path="/districts/City-of-Cape-Tshwane" component={DistrictCityofCapeTshwane} />
                  <Route path="/districts/Dr-Kenneth-Kaunda" component={DistrictDrKennethKaunda} />
                  <Route path="/districts/Dr-Ruth-Segomotsi-Mompati" component={DistrictDrRuthSegomotsiMompati} />
                  <Route path="/districts/Eden" component={DistrictEden} />
                  <Route path="/districts/Ehlanzeni" component={DistrictEhlanzeni} />
                  <Route path="/districts/Ekurhuleni" component={DistrictEkurhuleni} />
                  <Route path="/districts/eThekwini" component={DistricteThekwini} />
                  <Route path="/districts/Fezile-Dabi" component={DistrictFezileDabi} />
                  <Route path="/districts/Frances-Baard" component={DistrictFrancesBaard} />
                  <Route path="/districts/Gert-Sibande" component={DistrictGertSibande} />
                  <Route path="/districts/Harry-Gwala" component={DistrictHarryGwala} />
                  <Route path="/districts/iLembe" component={DistrictiLembe} />
                  <Route path="/districts/Joe-Gqabi" component={DistrictJoeGqabi} />
                  <Route path="/districts/John-Taolo-Gaetsewe" component={DistrictJohnTaoloGaetsewe} />
                  <Route path="/districts/Lejweleputswa" component={DistrictLejweleputswa} />
                  <Route path="/districts/Mangaung" component={DistrictMangaung} />
                  <Route path="/districts/Mopani" component={DistrictMopani} />
                  <Route path="/districts/Namakwa" component={DistrictNamakwa} />
                  <Route path="/districts/Nelson-Mandela-Bay" component={DistrictNelsonMandelaBay} />
                  <Route path="/districts/Ngaka-Modiri-Molema" component={DistrictNgakaModiriMolema} />
                  <Route path="/districts/Nkangala" component={DistrictNkangala} />
                  <Route path="/districts/OR-Tambo" component={DistrictORTambo} />
                  <Route path="/districts/Overberg" component={DistrictOverberg} />
                  <Route path="/districts/Pixley-ka-Seme" component={DistrictPixleykaSeme} />
                  <Route path="/districts/Sedibeng" component={DistrictSedibeng} />
                  <Route path="/districts/Sekhukhune" component={DistrictSekhukhune} />
                  <Route path="/districts/Thabo-Mofutsanyane" component={DistrictThaboMofutsanyane} />
                  <Route path="/districts/Ugu" component={DistrictUgu} />
                  <Route path="/districts/Umgungundlovu" component={DistrictUmgungundlovu} />
                  <Route path="/districts/Umkhanyakude" component={DistrictUmkhanyakude} />
                  <Route path="/districts/Umzinyathi" component={DistrictUmzinyathi} />
                  <Route path="/districts/Uthukela" component={DistrictUthukela} />
                  <Route path="/districts/Uthungulu" component={DistrictUthungulu} />
                  <Route path="/districts/Vhembe" component={DistrictVhembe} />
                  <Route path="/districts/Waterberg" component={DistrictWaterberg} />
                  <Route path="/districts/West-Cost" component={DistrictWestCost} />
                  <Route path="/districts/West-Rand" component={DistrictWestRand} />
                  <Route path="/districts/Xhariep" component={DistrictXhariep} />
                  <Route path="/districts/ZF-Mgcawu" component={DistrictZFMgcawu} />
                  <Route path="/districts/Zululand" component={DistrictZululand} />
                  
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
