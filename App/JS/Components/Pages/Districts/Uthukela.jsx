import React from 'react';
import DistrictNav from '../../navigation/distric-nav.jsx'

import Uthukela1 from '../../../../Images/districts/Uthukela1.png';
import Uthukela2 from '../../../../Images/districts/Uthukela2.png';

import UthukelaPDF from '../../../../content/pdfs/districts/Uthukela.pdf'

class DistrictUthukela extends React.Component {

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
                <h1>Uthukela</h1>
                <h2>Organic carbon pools</h2>
              </div>
              <div className="col-md-4">
              <a class="btn btn-ea-green btn-rounded w-100" href={UthukelaPDF} target="_blank"><i class="fa fa-file-pdf-o"></i> Download this document</a>
              </div>
            </div>

         
          
          <div className="row align-items-center">
            <div className="col-md-7">
              <img src={Uthukela1} />
              <small>Figure 1. Split of organic carbon by carbon pool. </small>
            </div>
            
            <div className="col-md-5">
              <p>Organic carbon pools within the district of Uthukela are estimated to be 131 Tg and distributed per carbon pool as depicted in the Figure (1) above. Most carbon is to be found as soil organic carbon (SOC).  </p><p> The models that estimate  the proposition of carbon as above ground woody carbon (AGW) are based on satellite imagery and do not differentiate between natural woody vegetation or planted trees. </p><p> Below ground woody (BGW) carbon is based on AGW and varies across the country based on climate.</p><p> Above ground herb (AGH) and below ground herb (BGH) is based on both natural vegetation and crop fields, on the proportional split per 1 km2 land unit. Litter is based on biome level estimates. </p>

            </div>
          </div>
          <h3 className="mt-5 mb-3">Land cover classes in 2018 (from national land cover map)</h3>
          <div className="row align-items-center">
            <div className="col-md-6">

            <p>Land cover is used to determine changes is carbon stocks, and land cover change is seen as one of the key drivers for change in terrestrial carbon. Data from three national land cover products, NLC 1990, NLC 2014 and NLC 2018 are compared against 17 (or 18) land cover classes. Only the 2018 land cover includes fallow land, which was mapped as natural land or agricultural land in earlier land cover products. </p><p>The bare ground land cover classes was found to show large changes in extent between land cover products, possibly as a consequence of that years rainfall. </p><p>Figure 2 gives a summary of land cover classes as mapped in the 2018 NLC. </p><p>Table 1 summarises important changes in land cover for the district. </p>
            

            </div>
            <div className="col-md-6">
              <img src={Uthukela2} />
                <small>Figure 2. Estimates of the proportion of the district in each land cover class based on 2018 NLC data.</small>
            </div>
          </div>
          

          </div>
          
        </section>
        <section className="light-grey-bg pt-5 pb-4">
          <div className="container">
          <p>Uthukela is the <strong>44th highest rate of land lost to urbanisation</strong> between 1990 and 2018 out of the 52 South African districts, with 23 km2 of natural or agricultural land converted to urban expansion. </p>
          <p>Uthukela the <strong>41th highest rate of land lost to irrigation</strong> between 1990 and 2018 out of the 52 South African districts. </p>
          <p>Uthukela <strong>lost 183 ha of dryland agricultural land</strong> between 1990 and 2018.  </p>

          </div>
        </section>
        <section className="light-bg pt-5 pb-4">
          <div className="container">
            <h3>Table 1. Drivers of change based on national land cover data from 1990, 2014 and 2018</h3>
            <table className="table table-bordered table-hover table-striped ZA-EC">
            <tbody><tr><td>&nbsp;</td><td colspan="3">Area in km2</td><td colspan="3">% of total land area</td><td>Area lost (-) or gained (+) 1990 to 2018</td><td>Area lost (-) or gained (+) 1990 to 2018</td></tr><tr><td>&nbsp;</td><td>1990</td><td>2014</td><td>2018</td><td>1990</td><td>2014</td><td>2018</td><td>Km2</td><td>% of total area</td></tr><tr><td>Water</td><td>79</td><td>81</td><td>108</td><td>1</td><td>1</td><td>1</td><td>30</td><td>0.3</td></tr><tr><td>Wetlands</td><td>141</td><td>115</td><td>171</td><td>1</td><td>1</td><td>2</td><td>30</td><td>0.3</td></tr><tr><td>Indigenous Forest</td><td>46</td><td>59</td><td>43</td><td>0</td><td>1</td><td>0</td><td>-3</td><td>0.0</td></tr><tr><td>Natural Vegetation</td><td>8777</td><td>8504</td><td>7805</td><td>79</td><td>77</td><td>70</td><td>-972</td><td>-8.7</td></tr><tr><td>Commercial Agriculture</td><td>674</td><td>684</td><td>527</td><td>6</td><td>6</td><td>5</td><td>-147</td><td>-1.3</td></tr><tr><td>Pivot&nbsp; Agriculture</td><td>75</td><td>227</td><td>307</td><td>1</td><td>2</td><td>3</td><td>232</td><td>2.1</td></tr><tr><td>Orchards</td><td>5</td><td>7</td><td>5</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0.0</td></tr><tr><td>Viticulture</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0.0</td></tr><tr><td>Pineapple</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0.0</td></tr><tr><td>Subsistence Agriculture</td><td>356</td><td>518</td><td>506</td><td>3</td><td>5</td><td>5</td><td>150</td><td>1.3</td></tr><tr><td>Sugarcane Irrigated</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0.0</td></tr><tr><td>Sugarcane Dry</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0.0</td></tr><tr><td>Plantation Forest</td><td>139</td><td>150</td><td>166</td><td>1</td><td>1</td><td>1</td><td>27</td><td>0.2</td></tr><tr><td>Mines</td><td>4</td><td>4</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0.0</td></tr><tr><td>Bare degraded</td><td>198</td><td>172</td><td>250</td><td>2</td><td>2</td><td>2</td><td>52</td><td>0.5</td></tr><tr><td>Built-up</td><td>618</td><td>591</td><td>641</td><td>6</td><td>5</td><td>6</td><td>23</td><td>0.2</td></tr><tr><td>Fallow</td><td>0</td><td>0</td><td>579</td><td>0</td><td>0</td><td>5</td><td>579</td><td>5.2</td></tr></tbody></table>
          
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
                <tbody><tr><td><p>&nbsp;</p></td><td colspan="3"><p>Estimated loss (-) or gain (+) in soil organic carbon due to land use.</p><p>Tg C</p></td><td colspan="3"><p>Estimated potential 20 year gains from conservation agriculture, assuming a 25%, 50% or 75%&nbsp; of lost SOC is regained Tg C</p></td></tr><tr><td><p>&nbsp;</p></td><td><p>Loss before 1990</p></td><td><p>Total loss by 2014*</p></td><td><p>Total loss by 2018*</p></td><td><p>25%</p></td><td><p>50%</p></td><td><p>75%</p></td></tr><tr><td><p>Commercial Agriculture</p></td><td><p>0.140</p></td><td><p>0.137</p></td><td><p>0.104</p></td><td><p>0.026</p></td><td><p>0.052</p></td><td><p>0.078</p></td></tr><tr><td><p>Pivot&nbsp; Agriculture</p></td><td><p>0.011</p></td><td><p>0.030</p></td><td><p>0.040</p></td><td><p>0.010</p></td><td><p>0.020</p></td><td><p>0.030</p></td></tr><tr><td><p>Orchards</p></td><td><p>0.001</p></td><td><p>0.001</p></td><td><p>0.001</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td></tr><tr><td><p>Viticulture</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td></tr><tr><td><p>Pineapple</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td></tr><tr><td><p>Subsistence Agriculture</p></td><td><p>0.071</p></td><td><p>0.104</p></td><td><p>0.103</p></td><td><p>0.026</p></td><td><p>0.051</p></td><td><p>0.077</p></td></tr><tr><td><p>Sugarcane Irrigated</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td></tr><tr><td><p>Sugarcane Dry</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td><td><p>0.000</p></td></tr><tr><td><p>Bare degraded</p></td><td><p>0.028</p></td><td><p>0.025</p></td><td><p>0.035</p></td><td><p>0.009</p></td><td><p>0.017</p></td><td><p>0.026</p></td></tr><tr><td><p>Fallow</p></td><td colspan="2"><p>Not estimated in 1990 or 2014</p></td><td><p>0.113</p></td><td><p>0.028</p></td><td><p>0.057</p></td><td><p>0.085</p></td></tr><tr><td><p>Built-up</p></td><td colspan="6"><p>Zero loss was assumed based on IPCC recommendations, but in reality this will depend on land use within the build-up area</p></td></tr><tr><td><p>Total</p></td><td><p>0.250</p></td><td><p>0.297</p></td><td><p>0.395</p></td><td><p>0.099</p></td><td><p>0.198</p></td><td><p>0.296</p></td></tr></tbody></table>
          <small>Note, total change might reduce within a class over time because land in that class reverts to a different land use class. Change between 2014 and 2018 is due to the inclusion of fallow land losses in the 2018 data, and should not be interpreted as a change between those two years.  The 1990 to 2014 change data should be used to best understand long-term rates of loss, as the methodology for these two data sets was very similar.</small>
          </div>
        </section>
      </>
    )
  }
}

export default DistrictUthukela