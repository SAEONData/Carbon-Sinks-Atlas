import React from 'react';

import DistrictNav from '../../navigation/distric-nav.jsx'

import AlfredNzo1 from '../../../../Images/districts/AlfredNzo1.png';
import AlfredNzo2 from '../../../../Images/districts/AlfredNzo2.png';



class DistrictAlfredNzo extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full csa-districts">
          <div className="container-fluid mt-4">
            <h1>Alfred Nzo District changes in Carbon Stocks 1990-2018</h1>
            <DistrictNav />
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container mt-4 pt-5 pb-5">
  
            <div className="row mb-4 align-items-center">
              <div className="col-md-8">
                <h1>Alfred Nzo</h1>
                <h2>Organic carbon pools</h2>
              </div>
              <div className="col-md-4">
              <a class="btn btn-ea-green btn-rounded w-100" href="xxx" target="_blank"><i class="fa fa-file-pdf-o"></i> Download this document</a>
              </div>
            </div>

         
          
          <div className="row align-items-center">
            <div className="col-md-7">
              <img src={AlfredNzo1} / >
              <small>Figure 1. Split of organic carbon by carbon pool. </small>
            </div>
            
            <div className="col-md-5">
              <p>Organic carbon pools within the district of Alfred Nzo are estimated to be 165 Tg and distributed per carbon pool as depicted in the Figure (1) left.</p>
              <p>Most carbon is to be found as soil organic carbon (SOC).</p>
              <p>The models that estimate the proposition of carbon as above ground woody carbon (AGW) are based on satellite imagery and do not differentiate between natural woody vegetation or planted trees.</p>
              <p>Below ground woody (BGW) carbon is based on AGW and varies across the country based on climate.</p>
              <p>Above ground herb (AGH) and below ground herb (BGH) is based on both natural vegetation and crop fields, on the proportional split per 1 km2 land unit. Litter is based on biome level estimates. </p>

            </div>
          </div>
          <h3 className="mt-5 mb-3">Land cover classes in 2018 (from national land cover map)</h3>
          <div className="row align-items-center">
            <div className="col-md-6">
            
            <p>Land cover is used to determine changes in carbon stocks, and land cover change is seen as one of the key drivers for change in terrestrial carbon.</p>
            <p>Data from three national land cover products, NLC 1990, NLC 2014 and NLC 2018 are compared against 17 (or 18) land cover classes.</p>
            <p>Only the 2018 land cover includes fallow land, which was mapped as natural land or agricultural land in earlier land cover products.</p>
            <p>The bare ground land cover classes was found to show large changes in extent between land cover products, possibly as a consequence of that years rainfall.</p>
            <p>Figure 2 gives a summary of land cover classes as mapped in the 2018 NLC.</p>
            <p>Table 1 summarises important changes in land cover for the district.</p>
            

            </div>
            <div className="col-md-6">
              <img src={AlfredNzo2} / >
                <small>Figure 2. Estimates of the proportion of the district in each land cover class based on 2018 NLC data. </small>
            </div>
          </div>
          

          </div>
          
        </section>
        <section className="light-grey-bg pt-5 pb-4">
          <div className="container">
            <p>Alfred Nzo is the <strong>45 highest rate</strong> of land lost to <strong>urbanisation</strong> between 1990 and 2018 out of the 52 South African districts, with 23 km2 of natural or agricultural land converted to urban expansion. </p>
            <p>Alfred Nzo has the <strong>47 highest rate</strong> of land lost to <strong>irrigation</strong> between 1990 and 2018 out of the 52 South African districts.</p>
            <p>Alfred Nzo <strong>gained 127 ha of dryland agricultural</strong> land between 1990 and 2018.</p>
          </div>
        </section>
        <section className="light-bg pt-5 pb-4">
          <div className="container">
            <h3>Table 1. Drivers of change based on national land cover data from 1990, 2014 and 2018</h3>
            <table className="table table-bordered table-hover table-striped ZA-EC">
            <tbody><tr><td>&nbsp;</td><td colspan="3">Area in km2</td><td colspan="3">% of total land area</td><td>Area lost (-) or gained (+) 1990 to 2018</td><td>Area lost (-) or gained (+) 1990 to 2018</td></tr><tr><td>&nbsp;</td><td>1990</td><td>2014</td><td>2018</td><td>1990</td><td>2014</td><td>2018</td><td>Km2</td><td>% of total area</td></tr><tr><td>Water</td><td>27</td><td>18</td><td>62</td><td>0</td><td>0</td><td>1</td><td>36</td><td>0.3</td></tr><tr><td>Wetlands</td><td>276</td><td>172</td><td>178</td><td>3</td><td>2</td><td>2</td><td>-97</td><td>-0.9</td></tr><tr><td>Indigenous Forest</td><td>19</td><td>48</td><td>69</td><td>0</td><td>0</td><td>1</td><td>50</td><td>0.5</td></tr><tr><td>Natural Vegetation</td><td>7072</td><td>7217</td><td>6058</td><td>66</td><td>67</td><td>57</td><td>-1014</td><td>-9.5</td></tr><tr><td>Commercial Agriculture</td><td>321</td><td>327</td><td>228</td><td>3</td><td>3</td><td>2</td><td>-93</td><td>-0.9</td></tr><tr><td>Pivot Agriculture</td><td>10</td><td>38</td><td>46</td><td>0</td><td>0</td><td>0</td><td>36</td><td>0.3</td></tr><tr><td>Orchards</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0.0</td></tr><tr><td>Viticulture</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0.0</td></tr><tr><td>Pineapple</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0.0</td></tr><tr><td>Subsistence Agriculture</td><td>1501</td><td>1567</td><td>1543</td><td>14</td><td>15</td><td>14</td><td>41</td><td>0.4</td></tr><tr><td>Sugarcane Irrigated</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0.0</td></tr><tr><td>Sugarcane Dry</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0.0</td></tr><tr><td>Plantation Forest</td><td>120</td><td>114</td><td>181</td><td>1</td><td>1</td><td>2</td><td>61</td><td>0.6</td></tr><tr><td>Mines</td><td>3</td><td>1</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0.0</td></tr><tr><td>Bare degraded</td><td>204</td><td>121</td><td>270</td><td>2</td><td>1</td><td>3</td><td>66</td><td>0.6</td></tr><tr><td>Built-up</td><td>1170</td><td>1097</td><td>1193</td><td>11</td><td>10</td><td>11</td><td>23</td><td>0.2</td></tr><tr><td>Fallow</td><td>0</td><td>0</td><td>891</td><td>0</td><td>0</td><td>8</td><td>891</td><td>8.3</td></tr></tbody></table>
          
          <h3 className="mt-5 mb-3">Land cover classes in 2018 (from national land cover map)</h3>
          <div className="row">
            <div className="col-md-6">
            <p>Soil organic carbon loss is based on estimates of loss due to land cover change. Estimates of the total loss of SOC in the district based on both historic and recent land cover is given in table 2. In addition crude estimates are given on total carbon gains that might be possible from changed farming practices. Actual gains that can be realised will require local data based on local research, local crop choices, local farming practices and soil and climatic conditions.</p>
            </div>
            <div className="col-md-6">
            <p>Table 2. Estimated Soil Organic Carbon (SOC) loss due to agricultural activities and estimates of potential gains if all land cover was converted to conservation agriculture.</p>
            <p>Note: the extent to which conservation agriculture can restore SOC has not been established for the municipality, but will depend of crop choice, managements methods, soil type and climate.</p>
            </div>
          </div>
          <table className="table table-bordered table-hover mt-3 table-striped">
                <tbody><tr><td>&nbsp;</td><td colspan="3"><p>Estimated loss (-) or gain (+) in soil organic carbon due to land use.</p><p>Tg C</p></td><td colspan="3"><p>Estimated potential 20 year gains from conservation agriculture, assuming a 25%, 50% or 75%&nbsp; of lost SOC is regained Tg C</p></td></tr><tr><td>&nbsp;</td><td><p>Loss before 1990</p></td><td><p>Total loss by 2014*</p></td><td><p>Total loss by 2018*</p></td><td><p>25%</p></td><td><p>50%&nbsp;</p></td><td><p>75%&nbsp;</p></td></tr><tr><td><p>Commercial Agriculture</p></td><td><p>0.063</p></td><td><p>0.064</p></td><td><p>0.045</p></td><td><p>0.011</p></td><td><p>0.023</p></td><td><p>0.034</p></td></tr><tr><td><p>Pivot&nbsp; Agriculture</p></td><td><p>0.001</p></td><td><p>0.005</p></td><td><p>0.006</p></td><td><p>0.001</p></td><td><p>0.003</p></td><td><p>0.004</p></td></tr><tr><td><p>Orchards</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td></tr><tr><td><p>Viticulture</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td></tr><tr><td><p>Pineapple</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td></tr><tr><td><p>Subsistence Agriculture</p></td><td><p>0.412</p></td><td><p>0.437</p></td><td><p>0.423</p></td><td><p>0.106</p></td><td><p>0.212</p></td><td><p>0.318</p></td></tr><tr><td><p>Sugarcane Irrigated</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td></tr><tr><td><p>Sugarcane Dry</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td></tr><tr><td><p>Bare degraded</p></td><td><p>0.038</p></td><td><p>0.022</p></td><td><p>0.046</p></td><td><p>0.011</p></td><td><p>0.023</p></td><td><p>0.034</p></td></tr><tr><td><p>Fallow</p></td><td colspan="2"><p>Not estimated in 1990 or 2014</p></td><td><p>0.068</p></td><td><p>0.011</p></td><td><p>0.136</p></td><td><p>0.205</p></td></tr><tr><td><p>Built-up</p></td><td colspan="6"><p>Zero loss was assumed based on IPCC recommendations, but in reality this will depend on land use within the build-up area</p></td></tr><tr><td><p>Total</p></td><td><p>0.515</p></td><td><p>0.527</p></td><td><p>0.793</p></td><td><p>0.198</p></td><td><p>0.397</p></td><td><p>0.595</p></td></tr></tbody></table>
          <small>Note, total change might reduce within a class over time because land in that class reverts to a different land use class. Change between 2014 and 2018 is due to the inclusion of fallow land losses in the 2018 data, and should not be interpreted as a change between those two years.  The 1990 to 2014 change data should be used to best understand long-term rates of loss, as the methodology for these two data sets was very similar. </small>
          </div>
        </section>
      </>
    )
  }
}

export default DistrictAlfredNzo