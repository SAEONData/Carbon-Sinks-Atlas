import React from 'react';
import { Row, Col, Button } from 'mdbreact';
//import TestData from '../Pages/Data/testdatajs.json';
import TestData from '../Pages/Data/testdatajstwo.json';
import SouthAfricaMunicipalities from '../maps/southafricamunicipalities.jsx';

// Reusable JS map table function:
import '../../map_table';

//const socialMediaList = TestData;

const clickMe = (state, props) => {
  //var idofclicked = meh
  alert('test');
}
class MunProfiles extends React.Component {
  // clickMe(){
  //   alert('test');
  // }
  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h1>Provincial change in Carbon Stocks 1990-2018</h1>
            <Row>
            <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/municipality-profiles" }}>
              <em className="fa fa-chevron-right mr-1"></em> Local Municipalities</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/municipality-profiles-local" }}>
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

                {/* {TestData.map((postDetail, index) =>{
                return <h1 key={index}>{postDetail.title}</h1>
                })} */}

{/* {TestData.map(function(object, i){
               return <div className={"row"} key={i}> 
                          {[ object.content ,
                             // remove the key
                             <b className="fosfo" key={i}> {object.title} </b> , 
                             object.id
                          ]}
                         </div>; 
             })} */}


                {/* {socialMediaList.map(s => (<li>{s}</li>))} */}
                {/* {
                this.state.Data.map((item, index) =>{
                  <p>
                  <button onClick={this.clickMe.bind(this,item)}>
                    {item.url}
                  </button>
                  </p>
                })} */}
              </div>

              <SouthAfricaMunicipalities  onClick={() => {clickMe()} } />
            </div>
            
            <div className="col-md-5">
              <div className="stats-prov ZA-WC stats-active">
                
                <table id="muntable" className="table table-bordered table-hover table-striped dataTable statsTable statsTableProvince statsActive ZA-EC">
                <tbody>
                  <tr className="statsTableHeader"><th colSpan="4"><h5 id="provinces"><span id="xxx">name</span> | <span id="xxx">Eastern Cape</span><span className="float-right" id="FIELD20">-2902 <em className="fa fa-arrow-down"></em></span></h5>
                  <h6>Change in Carbon Stocks between 1990 and 2018</h6></th></tr>
                  <tr><th colSpan="4"><h6>By landcover type:</h6></th></tr>
                  																
                  <tr><td>Natural Vegetation</td><td id="nat_veg">-411354</td>
                  <td>Fallow</td><td id="fallow">29967</td></tr>
                  <tr><td>Bare degraded</td><td id="bare_deg">408747</td>
                  <td>Water</td><td id="water">-27982</td></tr>
                  <tr><td>Indigenous Forest</td><td id="indig_forest">3</td>
                  <td>Wetlands</td><td id="wetlands">-5594</td></tr>
                  <tr><th colSpan="4"><h6>By crop type:</h6></th></tr>
                  <tr><td>Commercial Agriculture</td><td id="com_agri">-2902</td>
                  <td>Orchards</td><td id="orchards">12</td></tr>
                  <tr><td>Pivot Agriculture</td><td id="piv_agri">400</td>
                  <td>Viticulture</td><td id="viticulture">0</td></tr>
                  <tr><td>Subsistence Agriculture</td><td id="subs_afri">126</td>
                  <td>Pineapple</td><td id="pineapple">0</td></tr>
                  <tr><td>Sugarcane Irrigated</td><td id="sugar_irri">0</td>
                  <td>Mines</td><td id="mines">307</td></tr>
                  <tr><td>Plantation Forest</td><td id="plant_forest">371</td>
                  <td>Sugarcane Dry</td><td id="sugar_dry">0</td></tr>	
                  </tbody>		
                </table>
              </div>

              <div className="stats-prov ZA-WC stats-active">
                <table className="table table-bordered table-hover table-striped dataTable statsTable statsTableProvince ZA-WC">
                <tbody>
                  <tr className="statsTableHeader"><th colSpan="4"><h5>Western Cape<span className="float-right">1927 <em className="fa fa-arrow-up"></em></span></h5>
                <h6>Change in Carbon Stocks between 1990 and 2018</h6></th></tr><tr><th colSpan="4"><h6>By landcover type:</h6></th></tr>
                  <tr><td>Natural Vegetation</td><td>354</td><td>Fallow</td><td>-9584</td></tr>
                  <tr><td>Bare degraded</td><td>-56</td><td>Water</td><td>3744</td></tr>
                  <tr><td>Indigenous Forest</td><td>3</td><td>Wetlands</td><td>-5594</td></tr>
                  <tr><th colSpan="4"><h6>By crop type:</h6></th></tr>
                  <tr><td>Commercial Agriculture</td><td>-5678</td><td>Orchards</td><td>-2</td></tr>
                  <tr><td>Pivot Agriculture</td><td>-34</td><td>Viticulture</td><td>1</td></tr>
                  <tr><td>Subsistence Agriculture</td><td>0</td><td>Pineapple</td><td>2</td></tr>
                  <tr><td>Sugarcane Irrigated</td><td>34</td><td>Mines</td><td>34</td></tr>
                  <tr><td>Plantation Forest</td><td>0</td><td>Sugarcane Dry</td><td>5</td></tr>
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