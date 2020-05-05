import React from 'react';
import DistrictNav from '../../navigation/distric-nav.jsx'

import Waterberg1 from '../../../../Images/districts/Waterberg1.png';
import Waterberg2 from '../../../../Images/districts/Waterberg2.png';



class DistrictWaterberg extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full csa-districts">
          <div className="container-fluid mt-4">
            <h1>Waterberg changes in Carbon Stocks 1990-2018</h1>
            <DistrictNav />
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container mt-4 pt-5 pb-5">
  
            <div className="row mb-4 align-items-center">
              <div className="col-md-8">
                <h1>Waterberg</h1>
                <h2>Organic carbon pools</h2>
              </div>
              <div className="col-md-4">
              <a class="btn btn-ea-green btn-rounded w-100" href="xxx" target="_blank"><i class="fa fa-file-pdf-o"></i> Download this document</a>
              </div>
            </div>

         
          
          <div className="row align-items-center">
            <div className="col-md-7">
              <img src={Waterberg1} />
              <small>Figure 1. Split of organic carbon by carbon pool. </small>
            </div>
            
            <div className="col-md-5">
              <p>Organic carbon pools within the district of Waterberg are estimated to be 287 Tg and distributed per carbon pool as depicted in the Figure (1) left. Most carbon is to be found as soil organic carbon (SOC). </p><p> The models that estimate the proposition of carbon as above ground woody carbon (AGW) are based on satellite imagery and do not differentiate between natural woody vegetation or planted trees. </p><p>Below ground woody (BGW) carbon is based on AGW and varies across the country based on climate. </p><p>Above ground herb (AGH) and below ground herb (BGH) is based on both natural vegetation and crop fields, on the proportional split per 1 km2 land unit. Litter is based on biome level estimates. </p>

            </div>
          </div>
          <h3 className="mt-5 mb-3">Land cover classes in 2018 (from national land cover map)</h3>
          <div className="row align-items-center">
            <div className="col-md-6">

            <p>Land cover is used to determine changes is carbon stocks, and land cover change is seen as one of the key drivers for change in terrestrial carbon. Data from three national land cover products, NLC 1990, NLC 2014 and NLC 2018 are compared against 17 (or 18) land cover classes. Only the 2018 land cover includes fallow land, which was mapped as natural land or agricultural land in earlier land cover products. </p><p>The bare ground land cover classes was found to show large changes in extent between land cover products, possibly as a consequence of that years rainfall. </p><p>Figure 2 gives a summary of land cover classes as mapped in the 2018 NLC. </p><p>Table 1 summarises important changes in land cover for the district. </p>
            

            </div>
            <div className="col-md-6">
              <img src={Waterberg2} />
                <small>Figure 2. Estimates of the proportion of the district in each land cover class based on 2018 NLC data.  </small>
            </div>
          </div>
          

          </div>
          
        </section>
        <section className="light-grey-bg pt-5 pb-4">
          <div className="container">
          <p>Waterberg is the <strong>6th highest rate of land lost to urbanisation</strong> between 1990 and 2018 out of the 52 South African districts, with 240 km2 of natural or agricultural land converted to urban expansion. </p>
          <p>Waterberg the <strong>5th highest rate of land lost to irrigation</strong> between 1990 and 2018 out of the 52 South African districts</p>
          <p>Waterberg <strong>lost 1793 ha of dryland agricultural land</strong> between 1990 and 2018. </p> 

          </div>
        </section>
        <section className="light-bg pt-5 pb-4">
          <div className="container">
            <h3>Table 1. Drivers of change based on national land cover data from 1990, 2014 and 2018</h3>
            <table className="table table-bordered table-hover table-striped ZA-EC">
            <tbody><tr><td><p>&nbsp;</p></td><td colspan="3"><p>Area in km2</p></td><td colspan="3"><p>% of total land area</p></td><td><p>Area lost (-) or gained (+) 1990 to 2018</p></td><td><p>Area lost (-) or gained (+) 1990 to 2018</p></td></tr><tr><td><p>&nbsp;</p></td><td><p>1990</p></td><td><p>2014</p></td><td><p>2018</p></td><td><p>1990</p></td><td><p>2014</p></td><td><p>2018</p></td><td><p>Km2</p></td><td><p>% of total area</p></td></tr><tr><td><p>Water</p></td><td><p>29</p></td><td><p>41</p></td><td><p>74</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>45</p></td><td><p>0.1</p></td></tr><tr><td><p>Wetlands</p></td><td><p>382</p></td><td><p>282</p></td><td><p>289</p></td><td><p>1</p></td><td><p>1</p></td><td><p>1</p></td><td><p>-92</p></td><td><p>-0.2</p></td></tr><tr><td><p>Indigenous Forest</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0.0</p></td></tr><tr><td><p>Natural Vegetation</p></td><td><p>37647</p></td><td><p>38087</p></td><td><p>35909</p></td><td><p>84</p></td><td><p>85</p></td><td><p>80</p></td><td><p>-1739</p></td><td><p>-3.9</p></td></tr><tr><td><p>Commercial Agriculture</p></td><td><p>5304</p></td><td><p>4365</p></td><td><p>3457</p></td><td><p>12</p></td><td><p>10</p></td><td><p>8</p></td><td><p>-1847</p></td><td><p>-4.1</p></td></tr><tr><td><p>Pivot&nbsp; Agriculture</p></td><td><p>318</p></td><td><p>689</p></td><td><p>743</p></td><td><p>1</p></td><td><p>2</p></td><td><p>2</p></td><td><p>425</p></td><td><p>0.9</p></td></tr><tr><td><p>Orchards</p></td><td><p>41</p></td><td><p>51</p></td><td><p>23</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>-18</p></td><td><p>0.0</p></td></tr><tr><td><p>Viticulture</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0.0</p></td></tr><tr><td><p>Pineapple</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0.0</p></td></tr><tr><td><p>Subsistence Agriculture</p></td><td><p>508</p></td><td><p>519</p></td><td><p>562</p></td><td><p>1</p></td><td><p>1</p></td><td><p>1</p></td><td><p>54</p></td><td><p>0.1</p></td></tr><tr><td><p>Sugarcane Irrigated</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0.0</p></td></tr><tr><td><p>Sugarcane Dry</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0.0</p></td></tr><tr><td><p>Plantation Forest</p></td><td><p>32</p></td><td><p>12</p></td><td><p>46</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>14</p></td><td><p>0.0</p></td></tr><tr><td><p>Mines</p></td><td><p>114</p></td><td><p>124</p></td><td><p>93</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>-21</p></td><td><p>0.0</p></td></tr><tr><td><p>Bare degraded</p></td><td><p>88</p></td><td><p>125</p></td><td><p>361</p></td><td><p>0</p></td><td><p>0</p></td><td><p>1</p></td><td><p>272</p></td><td><p>0.6</p></td></tr><tr><td><p>Built-up</p></td><td><p>426</p></td><td><p>592</p></td><td><p>666</p></td><td><p>1</p></td><td><p>1</p></td><td><p>1</p></td><td><p>240</p></td><td><p>0.5</p></td></tr><tr><td><p>Fallow</p></td><td><p>0</p></td><td><p>0</p></td><td><p>2663</p></td><td><p>0</p></td><td><p>0</p></td><td><p>6</p></td><td><p>2663</p></td><td><p>5.9</p></td></tr></tbody></table>
          
          <h3 className="mt-5 mb-3">Loss in soil organic carbon (SOC) over time </h3>
          <div className="row">
            <div className="col-md-6">
            <p>Soil organic carbon loss is based on estimates of loss due to land cover change. Estimates of the total loss of SOC in the district based on both historic and recent land cover is given in table 2. In addition crude estimates are given on total carbon gains that might be possible from changed farming practices. Actual gains that can be realised will require local data based on local research, local crop choices, local farming practices and soil and climatic conditions.  </p>
            </div>
            <div className="col-md-6">
            <p>Table 2. Estimated Soil Organic Carbon (SOC) loss due to agricultural activities and estimates of potential gains if all land cover was converted to conservation agriculture. Note: the extent to which conservation agriculture can restore SOC has not been established for the municipality, but will depend of crop choice, managements methods, soil type and climate. </p>
            </div>
          </div>
          <table className="table table-bordered table-hover mt-3 table-striped">
                <tbody><tr><td>&nbsp;</td><td colspan="3">Estimated loss (-) or gain (+) in soil organic carbon due to land use.Tg C</td><td colspan="3">Estimated potential 20 year gains from conservation agriculture, assuming a 25%, 50% or 75%&nbsp; of lost SOC is regained Tg C</td></tr><tr><td>&nbsp;</td><td>Loss before 1990</td><td>Total loss by 2014*</td><td>Total loss by 2018*</td><td>25%</td><td>50%</td><td>75%</td></tr><tr><td>Commercial Agriculture</td><td>0.755</td><td>0.629</td><td>0.504</td><td>0.126</td><td>0.252</td><td>0.378</td></tr><tr><td>Pivot&nbsp; Agriculture</td><td>0.019</td><td>0.048</td><td>0.052</td><td>0.013</td><td>0.026</td><td>0.039</td></tr><tr><td>Orchards</td><td>0.003</td><td>0.003</td><td>0.002</td><td>0.000</td><td>0.001</td><td>0.001</td></tr><tr><td>Viticulture</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td></tr><tr><td>Pineapple</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td></tr><tr><td>Subsistence Agriculture</td><td>0.051</td><td>0.047</td><td>0.051</td><td>0.013</td><td>0.025</td><td>0.038</td></tr><tr><td>Sugarcane Irrigated</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td></tr><tr><td>Sugarcane Dry</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td></tr><tr><td>Bare degraded</td><td>0.007</td><td>0.010</td><td>0.040</td><td>0.010</td><td>0.020</td><td>0.030</td></tr><tr><td>Fallow</td><td colspan="2">Not estimated in 1990 or 2014</td><td>0.328</td><td>0.082</td><td>0.164</td><td>0.246</td></tr><tr><td>Built-up</td><td colspan="6">Zero loss was assumed based on IPCC recommendations, but in reality this will depend on land use within the build-up area</td></tr><tr><td>Total</td><td>0.834</td><td>0.737</td><td>0.977</td><td>0.244</td><td>0.488</td><td>0.733</td></tr></tbody></table>
          <small>Note, total change might reduce within a class over time because land in that class reverts to a different land use class. Change between 2014 and 2018 is due to the inclusion of fallow land losses in the 2018 data, and should not be interpreted as a change between those two years.  The 1990 to 2014 change data should be used to best understand long-term rates of loss, as the methodology for these two data sets was very similar.</small>
          </div>
        </section>
      </>
    )
  }
}

export default DistrictWaterberg