import React from 'react';
import { Row, Col, Button } from 'mdbreact';
//import TestData from '../Pages/Data/testdatajs.json';
import TestData from '../Pages/Data/testdatajstwo.json';
import SouthAfricaMunicipalities from '../maps/southafricamunicipalities.jsx';

// Reusable JS map table function:
import '../../map_table';

//const socialMediaList = TestData;


class MunProfiles extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h1>Provincial change in Carbon Stocks 1990-2018</h1>
            <Row>
            <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/municipality-profiles" }}>
              <em className="fa fa-chevron-right mr-1"></em> Local Municipalities</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/sa-districts" }}>
              <em className="fa fa-chevron-right mr-1"></em> Districts</Button></Col>
            </Row>
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container-fluid mt-4 pt-5 pb-5">
          <div className="row">
            <div className="col-md-7">
            <h5>Select a municipality:</h5>

              <span>
                Select the province below to view details:
              </span>
              <div className="inine-btn-group">
                <div className="btn-group form-group">
                  <input type="search" placeholder="search" id="munsearch" className="form-control" />
                  <button className="btn btn-ea-green" id="searchmun" >
                  search <em className="fa fa-search"></em></button>
                  <div id="munlisting"></div>
              </div>
              </div>

              <SouthAfricaMunicipalities />
            </div>
            
            <div className="col-md-5">
              <div className="stats-prov ZA-WC stats-active">
                
                <table id="muntable" className="table table-bordered table-hover table-striped dataTable statsTable statsTableProvince statsActive ZA-EC">
                <tbody>
                  <tr className="statsTableHeader"><th colSpan="4"><h5><span id="name"></span> | <span id="provinces"></span><span className="float-right" id="FIELD20"> <em className="fa fa-arrow-down"></em></span></h5>
                  <h6>Change in Carbon Stocks between 1990 and 2018</h6></th></tr>
                  <tr><th colSpan="4"><h6>By landcover type:</h6></th></tr>
                  																
                  <tr><td>Natural Vegetation</td><td id="nat_veg"></td>
                  <td>Fallow</td><td id="fallow"></td></tr>
                  <tr><td>Bare degraded</td><td id="bare_deg"></td>
                  <td>Water</td><td id="water"></td></tr>
                  <tr><td>Indigenous Forest</td><td id="indig_forest"></td>
                  <td>Wetlands</td><td id="wetlands"></td></tr>
                  <tr><th colSpan="4"><h6>By crop type:</h6></th></tr>
                  <tr><td>Commercial Agriculture</td><td id="com_agri"></td>
                  <td>Orchards</td><td id="orchards"></td></tr>
                  <tr><td>Pivot Agriculture</td><td id="piv_agri"></td>
                  <td>Viticulture</td><td id="viticulture"></td></tr>
                  <tr><td>Subsistence Agriculture</td><td id="subs_afri"></td>
                  <td>Pineapple</td><td id="pineapple"></td></tr>
                  <tr><td>Sugarcane Irrigated</td><td id="sugar_irri"></td>
                  <td>Mines</td><td id="mines"></td></tr>
                  <tr><td>Plantation Forest</td><td id="plant_forest"></td>
                  <td>Sugarcane Dry</td><td id="sugar_dry"></td></tr>	
                  </tbody>		
                </table>
              </div>

              <div className="stats-prov ZA-WC stats-active">
                <table className="table table-bordered table-hover table-striped dataTable statsTable statsTableProvince ZA-WC">
                <tbody>
                  <tr className="statsTableHeader"><th colSpan="4"><h5><span className="float-right"> <em className="fa fa-arrow-up"></em></span></h5>
                <h6>Change in Carbon Stocks between 1990 and 2018</h6></th></tr><tr><th colSpan="4"><h6>By landcover type:</h6></th></tr>
                  <tr><td>Natural Vegetation</td><td>354</td><td>Fallow</td><td></td></tr>
                  <tr><td>Bare degraded</td><td>-56</td><td>Water</td><td></td></tr>
                  <tr><td>Indigenous Forest</td><td>3</td><td>Wetlands</td><td></td></tr>
                  <tr><th colSpan="4"><h6>By crop type:</h6></th></tr>
                  <tr><td>Commercial Agriculture</td><td></td><td>Orchards</td><td></td></tr>
                  <tr><td>Pivot Agriculture</td><td></td><td>Viticulture</td><td></td></tr>
                  <tr><td>Subsistence Agriculture</td><td></td><td>Pineapple</td><td></td></tr>
                  <tr><td>Sugarcane Irrigated</td><td></td><td>Mines</td><td></td></tr>
                  <tr><td>Plantation Forest</td><td></td><td>Sugarcane Dry</td><td></td></tr>
                  </tbody>		
                </table>
              </div>

            </div>
          </div>
          

          </div>
          
        </section>
      </>
    )
  }
}

export default MunProfiles