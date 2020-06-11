import React from 'react';
import DistrictNav from '../../navigation/distric-nav.jsx'

import Eden1 from '../../../../Images/districts/Eden1.png';
import Eden2 from '../../../../Images/districts/Eden2.png';

import EdenPDF from '../../../../content/pdfs/districts/Eden.pdf'

class DistrictEden extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full csa-districts">
          <div className="container-fluid mt-4">
            <DistrictNav />
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container mt-4 pt-5 pb-5">
  
            <div className="row mb-4 align-items-center">
              <div className="col-md-8">
                <h1>Eden</h1>
                <h2>Organic carbon pools</h2>
              </div>
              <div className="col-md-4">
              <a class="btn btn-ea-green btn-rounded w-100" href={EdenPDF} target="_blank"><i class="fa fa-file-pdf-o"></i> Download this document</a>
              </div>
            </div>

         
          
          <div className="row align-items-center">
            <div className="col-md-7">
              <img src={Eden1} />
              <small>Figure 1. Split of organic carbon by carbon pool. </small>
            </div>
            
            <div className="col-md-5">
              <p>Organic carbon pools within the district of Eden are estimated to be 251 Tg and distributed per carbon pool as depicted in the Figure (1) above. Most carbon is to be found as soil organic carbon (SOC).  The models that estimate the proposition of carbon as above ground woody carbon (AGW) are based on satellite imagery and do not differentiate between natural woody vegetation or planted trees. </p><p>Below ground woody (BGW) carbon is based on AGW and varies across the country based on climate. </p><p>Above ground herb (AGH) and below ground herb (BGH) is based on both natural vegetation and crop fields, on the proportional split per 1 km2 land unit. Litter is based on biome level estimates. </p>

            </div>
          </div>
          <h3 className="mt-5 mb-3">Land cover classes in 2018 (from national land cover map</h3>
          <div className="row align-items-center">
            <div className="col-md-6">

            <p>Land cover is used to determine changes in carbon stocks, and land cover change is seen as one of the key drivers for change in terrestrial carbon. Data from three national land cover products, NLC 1990, NLC 2014 and NLC 2018 are compared against 17 (or 18) land cover classes. Only the 2018 land cover includes fallow land, which was mapped as natural land or agricultural land in earlier land cover products. </p><p>The bare ground land cover classes was found to show large changes in extent between land cover products, possibly as a consequence of that years rainfall. </p><p>Figure 2 gives a summary of land cover classes as mapped in the 2018 NLC. </p><p>Table 1 summarises important changes in land cover for the district. </p>
            

            </div>
            <div className="col-md-6">
              <img src={Eden2} />
                <small>Figure 2. Estimates of the proportion of the district in each land cover class based on 2018 NLC data. </small>
            </div>
          </div>
          

          </div>
          
        </section>
        <section className="light-grey-bg pt-5 pb-4">
          <div className="container">
            <p>Eden is the <strong>23rd highest rate of land lost to urbanisation</strong> between 1990 and 2018 out of the 52 South African districts, with 100 km2 of natural or agricultural land converted to urban expansion. </p>
            <p>Eden has the <strong>20th highest rate of land lost to irrigation</strong> between 1990 and 2018 out of the 52 South African districts.</p>
            <p>Eden lost <strong>143 ha of dryland agricultural land</strong> between 1990 and 2018.</p>
          </div>
        </section>
        <section className="light-bg pt-5 pb-4">
          <div className="container">
            <h3>Table 1. Drivers of change based on national land cover data from 1990, 2014 and 2018</h3>
            <table className="table table-bordered table-hover table-striped ZA-EC">
            <tbody><tr><td>&nbsp;</td><td colspan="3">Area in km2</td><td colspan="3">% of total land area</td><td>Area lost (-) or gained (+) 1990 to 2018</td><td>Area lost (-) or gained (+) 1990 to 2018</td></tr><tr><td>&nbsp;</td><td>1990</td><td>2014</td><td>2018</td><td>1990</td><td>2014</td><td>2018</td><td>Km2</td><td>% of total area</td></tr><tr><td>Water</td><td>103</td><td>118</td><td>119</td><td>0</td><td>1</td><td>1</td><td>16</td><td>0</td></tr><tr><td>Wetlands</td><td>394</td><td>254</td><td>196</td><td>2</td><td>1</td><td>1</td><td>-198</td><td>-1</td></tr><tr><td>Indigenous Forest</td><td>545</td><td>551</td><td>566</td><td>2</td><td>2</td><td>2</td><td>22</td><td>0</td></tr><tr><td>Natural Vegetation</td><td>17280</td><td>17263</td><td>16331</td><td>74</td><td>74</td><td>70</td><td>-950</td><td>-4</td></tr><tr><td>Commercial Agriculture</td><td>3546</td><td>3517</td><td>3092</td><td>15</td><td>15</td><td>13</td><td>-453</td><td>-2</td></tr><tr><td>Pivot&nbsp; Agriculture</td><td>12</td><td>84</td><td>443</td><td>0</td><td>0</td><td>2</td><td>430</td><td>2</td></tr><tr><td>Orchards</td><td>56</td><td>60</td><td>64</td><td>0</td><td>0</td><td>0</td><td>8</td><td>0</td></tr><tr><td>Viticulture</td><td>21</td><td>17</td><td>15</td><td>0</td><td>0</td><td>0</td><td>-6</td><td>0</td></tr><tr><td>Pineapple</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Subsistence Agriculture</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Sugarcane Irrigated</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Sugarcane Dry</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Plantation Forest</td><td>740</td><td>547</td><td>563</td><td>3</td><td>2</td><td>2</td><td>-177</td><td>-1</td></tr><tr><td>Mines</td><td>4</td><td>4</td><td>6</td><td>0</td><td>0</td><td>0</td><td>2</td><td>0</td></tr><tr><td>Bare degraded</td><td>485</td><td>747</td><td>1184</td><td>2</td><td>3</td><td>5</td><td>698</td><td>3</td></tr><tr><td>Built-up</td><td>159</td><td>185</td><td>259</td><td>1</td><td>1</td><td>1</td><td>100</td><td>0</td></tr><tr><td>Fallow</td><td>0</td><td>0</td><td>508</td><td>0</td><td>0</td><td>2</td><td>508</td><td>2</td></tr></tbody></table>
          
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
                <tbody><table width="100%"><tbody><tr><td>&nbsp;</td><td colspan="3">Estimated loss (-) or gain (+) in soil organic carbon due to land use.Tg C</td><td colspan="3">Estimated potential 20 year gains from conservation agriculture, assuming a 25%, 50% or 75%&nbsp; of lost SOC is regained Tg C</td></tr><tr><td>&nbsp;</td><td>Loss before 1990</td><td>Total loss by 2014*</td><td>Total loss by 2018*</td><td>25%</td><td>50%</td><td>75%</td></tr><tr><td>Commercial Agriculture</td><td>Commercial Agriculture</td><td>0.350</td><td>0.341</td><td>0.288</td><td>0.072</td><td>0.144</td></tr><tr><td>Pivot&nbsp; Agriculture</td><td>Pivot&nbsp; Agriculture</td><td>0.001</td><td>0.006</td><td>0.027</td><td>0.007</td><td>0.014</td></tr><tr><td>Orchards</td><td>Orchards</td><td>0.000</td><td>0.001</td><td>0.001</td><td>0.000</td><td>0.000</td></tr><tr><td>Viticulture</td><td>Viticulture</td><td>0.001</td><td>0.001</td><td>0.001</td><td>0.000</td><td>0.000</td></tr><tr><td>Pineapple</td><td>Pineapple</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td></tr><tr><td>Subsistence Agriculture</td><td>Subsistence Agriculture</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td></tr><tr><td>Sugarcane Irrigated</td><td>Sugarcane Irrigated</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td></tr><tr><td>Sugarcane Dry</td><td>Sugarcane Dry</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td><td>0.000</td></tr><tr><td>Bare degraded</td><td>Bare degraded</td><td>0.043</td><td>0.052</td><td>0.147</td><td>0.037</td><td>0.073</td></tr><tr><td>Fallow</td><td colspan="2">Not estimated in 1990 or 2014</td><td>0.012</td><td>0.072</td><td>0.024</td><td>0.036</td></tr><tr><td>Built-up</td><td colspan="6">Zero loss was assumed based on IPCC recommendations, but in reality this will depend on land use within the build-up area</td></tr><tr><td>Total</td><td>0.395</td><td>0.400</td><td>0.510</td><td>0.128</td><td>0.255</td><td>0.383</td></tr></tbody></table></tbody></table>
          <small>Note, total change might reduce within a class over time because land in that class reverts to a different land use class. Change between 2014 and 2018 is due to the inclusion of fallow land losses in the 2018 data, and should not be interpreted as a change between those two years.  The 1990 to 2014 change data should be used to best understand long-term rates of loss, as the methodology for these two data sets was very similar</small>
          </div>
        </section>
      </>
    )
  }
}

export default DistrictEden