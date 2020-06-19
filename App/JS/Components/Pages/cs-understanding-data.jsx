import React from 'react';
import { Row, Col, Button } from 'mdbreact';
import data1 from './../../../Images/Other/data1.png';
import data2 from './../../../Images/Other/data2.png';
import data3 from './../../../Images/Other/data3.png';
import techreport from './../../../content/pdfs/Carbon_Atlas_summary_for_policy_makers_final.pdf';
class CsUnderstandingData extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h1>2019 National Terrestrial Carbon Sinks Assessment for South Africa | Understanding the Data</h1>
            <Row>
            <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/municipality-profiles" }}>
              <em className="fa fa-chevron-right mr-1"></em> Local Municipalities</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/sa-districts" }}>
              <em className="fa fa-chevron-right mr-1"></em> Districts</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/cs-understanding-data" }}>
              <em className="fa fa-chevron-right mr-1"></em> Understanding the Data</Button></Col>
            </Row>
          </div>
        </section>
        <section className="ea-content-full light-bg districtsvg">
          <div className="container mt-4 pt-2 pb-5">

         
            <h5>Additional notes to assist in understanding the district fact sheets. Please consult the <a href={techreport} target="_blank" >full technical report</a> for more detail. </h5>

              <span>
                Select the note below of interest:
              </span>
              
            
            
            
          </div>
        </section>
        <section className="light-grey-bg pt-4 pb-4">
              <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="border-light-radius shadow-bg light-bg h-100 scrolllink" bookmark="#note1">
                    <strong>Note 1.</strong><br/>
                    <p><em>Understanding Figure 1.</em></p>
                    <p className="txt-small">This short note is to assist in understanding the data used in Figure 1 of the district profiles. It gives an overview of the methods.</p>
                  </div>
                  </div>
                <div className="col-md-3">
                <div className="border-light-radius shadow-bg light-bg h-100 scrolllink" bookmark="#note2">
                  <strong>Note 2. </strong><br/>
                  <p><em>Understanding the use of land cover and land cover classes in the NTCSA 2020</em></p>
                  <p className="txt-small">This short note is to assist in understanding how the use of land cover classes was used in the NTCSA 2020, and how these relate to the NLC products.  It gives an overview of the methods.</p>
                </div>
                </div>
                <div className="col-md-3">
                <div className="border-light-radius shadow-bg light-bg h-100 scrolllink" bookmark="#note3">
                  <strong>Note 3. </strong><br/>
                  <p><em>Understanding Table 1.</em></p>
                  <p className="txt-small">This short note is to assist in understanding how the Table 1 of the District data was derived, to aid in understanding the results.</p>
                </div>
                </div>
                <div className="col-md-3">
                <div className="border-light-radius shadow-bg light-bg h-100 scrolllink" bookmark="#note4">
                <strong>Note 4.</strong><br/>
                  <p><em>Understanding Table 2.</em></p>
                  <p className="txt-small">This short note is to assist in understanding how Table 2 of the District data was derived, to aid in understanding the results. It should be read in conjunction with Note 3 which explains how land cover data was used to understand land use change.</p>
                </div>
                </div>
              </div>
              </div>
              </section>

              <div className="light-bg">
              <div className="container">
              <section id="note1" className="pt-4 pb-3">
                <h1>Note 1.</h1>
                <h4>Understanding Figure 1.</h4>
                <div className="row">
                  <div className="col-md-6">
                    <img className="mb-3" src={data1} />
                    <p className="txt-small"><strong>Figure A.</strong><br />Components of a generalized terrestrial carbon cycle, with box sizes (representing stocks) and arrows (representing fluxes) roughly indicative of their relative size in South Africa, where <strong>NEE </strong>= Net Ecosystem Exchange; <strong>NEP</strong> = Net Ecosystem Productivity; <strong>NBP</strong> = Net Biome Productivity; <strong>GPP </strong>= Gross Primary Production; <strong>Ra </strong>= Autotrophic Respiration; <strong>Rh</strong> = Heterotrophic Respiration; <strong>Re</strong> = Ecosystem Respiration; <strong>Rfire</strong> = Fire Emissions (Department of Environmental Affairs, 2015)</p>
                  </div>
                  <div className="col-md-6">
                  <p>This short note is to assist in understanding the data used in <strong>Figure 1 </strong>of the district profiles. It gives an <strong>overview of the methods</strong>, with full details available in the <strong>full technical report. </strong></p>
                  <p>Carbon is the basis of <strong>all living organisms</strong>, and in the <strong>case of vegetation</strong>, carbon molecules typically constitute <strong>between 40% and 50%</strong> of the <strong>oven dry biomass</strong>. This carbon is referred to as terrestrial <strong>ecosystem organic carbon</strong> (which for simplicity will be refer to as <strong>&ldquo;organic carbon&rdquo;</strong>). It excludes the fossilized carbon stocks <strong>found in coal and oil reserves</strong>. &nbsp;Photosynthesis results in plants <strong>absorbing CO<sub>2</sub> from the atmosphere</strong> and converting it <strong>into vegetation</strong>. Some of this <strong>vegetation is eaten by animals,</strong> some is lost to <strong>respiration,</strong> and some <strong>eventually becomes trapped in the soil</strong> as Soil Organic Carbon <strong>(SOC).</strong> &nbsp;Over time the amount of organic carbon found at any <strong>specific terrestrial location tends</strong> to reach a relatively <strong>constant equilibrium</strong> in regard to the quantity of carbon found in the different <strong>carbon pools.</strong> A disturbance to any one of the carbon pools tends to have <strong>ripple effects</strong> through all <strong>the carbon pools</strong>. For instance loss of vegetation (e.g. through clearing natural vegetation to form a crop field) will result in loss of SOC. The key carbon pools and fluxes are summarised in Figure A.</p>
                  </div>
                </div>
                <p>The terrestrial ecosystem organic carbon stock can be divided into a number of carbon pools (see Figure A).&nbsp; A common approach, as used within the National Terrestrial Carbon Sinks Assessment 2020 (NTCSA 2020), is to <strong>separate the organic carbon</strong> into <strong>carbon contained in vegetation</strong> and carbon found as <strong>soil organic carbon (SOC).</strong> The &nbsp;vegetation carbon can be separated into the carbon found in <strong>trees</strong> (including tree crops such as commercial plantain forestry, fruit trees and grape vines) and carbon stocks from <strong>herbaceous vegetation</strong> (grass, forbs, annual food crops). Further is useful to divide <strong>vegetation biomass</strong> (and its related carbon stocks) between the <strong>above ground biomass</strong> that can be seen and observed and the <strong>below ground biomass</strong> (roots) that is not visible and harder to assess. Finally, there is carbon in the <strong>dead plant material</strong> found on <strong>top of the soil</strong> and referred to as <strong>litter</strong>. Carbon found in the animal fauna is not considered due to it being insignificant compared to the other carbon pools.</p>
                <p>NTCSA 2020 calculated the <strong>total organic carbon stock</strong> per municipality by summing the carbon in the <strong>various carbon pools.</strong> The full methodology on how the carbon within each carbon pool was estimated given in the technical report, and summarized briefly below.</p>
                <p><strong><u>Soil Organic Carbon (SOC) </u></strong></p>
                <p>The <strong>ISRIC 250m</strong> resolution <strong>soil carbon map</strong> was used to give <strong>a reference soil carbon.</strong> By reference we mean the <strong>SOC values that would be expected in <u>un-disturbed natural </u>vegetation</strong> <strong>at that specific location</strong>. The National Land Cover maps <strong>(1990, 2014 and 2018)</strong> were used to understand the proportion of land that had been converted <strong>from natural vegetation to another land cover.</strong> If land had been converted from natural land to an alternate land cover, <strong>then conversion factors</strong> were applied to the <strong>ISRIC reference soil carbon</strong> to estimate <strong>how much SOC would have been lost.</strong> These conversion factors differed based <strong>on land use,</strong> <strong>climate and biome</strong> and were derived <strong>from published and unpublished field data</strong> <strong>for South Africa.</strong> In situations <strong>where no South African data </strong>was available to estimate loss of SOC as a result of land use, <strong>IPCC default values</strong> were used. &nbsp;</p>
                <p><strong><u>Tree biomass and carbon</u></strong></p>
                <p><strong>Tree biomass</strong> was estimated based on <strong>satellite based Radar data</strong>, lower lever <strong>Lidar data</strong> and <strong>ground verification data</strong>. A model of <strong>tree biomass</strong> for the entire country was developed for the year 2014 <strong>and this is used as the tree biomass data.</strong> Carbon was assumed to be <strong>42% of the entire tree biomass.</strong> Root biomass was assumed to be a set <strong>ratio of above ground</strong> <strong>biomass,</strong> with this <strong>ratio changing along a rainfall gradient.</strong></p>
                <p><strong>Herbaceous biomass and carbon</strong></p>
                <p><strong>Herbaceous biomass</strong> was assumed to be a <strong>function of mean annual rainfall</strong> and the same mean value <strong>is used for all time periods.</strong> <strong>Below ground (root) biomass</strong> is assumed to be a fixed proportion of <strong>above ground biomass.</strong> Where <strong>crop fields</strong> have replaced <strong>natural vegetation</strong>, herbaceous biomass was based on <strong>district level mean crop yields per crop varietie</strong>, with crop biomass determined by the <strong>length of the growing season</strong> and mean <strong>mass of crop</strong> at <strong>harvest.</strong> Carbon was assumed to be <strong>42% of biomass.</strong></p>
                <p><strong><u>Litter biomass</u></strong></p>
                <p>There are exceptionally few studies on the amount <strong>of litter biomass in South Africa</strong> and how this varies over space. Mean values per biome were based on <strong>available literature</strong> and a <strong>single value was used for the entire biome</strong> of each of South Africa&rsquo;s nine Biomes. In addition litter was assumed to include <strong>dead wood,</strong> which was assumed as 2% of standing woody biomass in areas of communal land tenure (with their high fuelwood demand) and 10% standing woody biomass in all other areas. &nbsp;</p>
              </section>
              <section id="note2" className="light-border-top">
                <h1>Note 2. </h1>
                <h4>Understanding the use of land cover and land cover classes in the NTCSA 2020</h4>
                <p>This short note is to assist in understanding how the <strong>use of land cover</strong> classes was used in the NTCSA 2020, and how these <strong>relate to the NLC products.</strong> &nbsp;It gives an overview of the methods, with full details available in the full technical report.</p>
                <p>South Africa has a number of National Land Cover products, with three, <strong>1990, 2014 and 2018</strong> being designed to be reasonably compatible <strong>for use in time series analysis.</strong> All three products have about <strong>72 land cover classes</strong>, but although these are identical in the <strong>1990 and 2014 product,</strong> the <strong>2018 NLC uses a different set of land covers</strong> (see Table A). The classes as used in the NLC are hierarchical and by choosing lower level classes (or by combining classes) it is possible to find what can be considered as the <strong>&ldquo;lowest common denominator&rdquo; </strong>i.e. classes that are relatively <strong>consistent between all three land cover products.</strong> Further, the numerous sub-classes within the settlement land cover class, are combined &nbsp;the NTCSA 2020 as we currently have no available data on their individual SOC profiles.</p>
                <p>The NLC products are extremely accurate in differentiating between some land covers, but very inaccurate when it comes to <strong>differentiating between others.</strong> Differentiating transformed land cover, such as an <strong>agricultural field</strong>, from <strong>natural vegetation</strong>, is something that the NLC products can <strong>do very well,</strong> both in <strong>space and between different time periods</strong>. Differentiating between different classes of <strong>natural vegetation</strong>, for instance between <strong>low shrubland, thicket and woodland</strong> has proved difficult and <strong>has low accuracy.</strong> This differentiation between natural vegetation classes has low certainty within a NLC classification <strong>(when compared to on the ground control points)</strong> but also is very unreliable when comparing <strong>between two time periods.</strong> Further, there is <strong>not consistency</strong> of how these classes are defined between the <strong>1990/2014</strong> versus <strong>the 2018 classification.</strong></p>
                <p>Using the above considerations<strong>, 17 land cover classes were decided on for use in the NTCSA </strong>based on the <strong>&ldquo;lowest common denominator&rdquo;</strong> approach to find common classes from the <strong>1990, 2014 and 2018 </strong>NLC products. Of these only three represent natural vegetation, with the remainder representing transformed land use. The water class being an exception as it covers both <strong>natural and man-made water bodies. </strong></p>
                <p><strong>The NTCSA uses a wall-to-wall approach to monitoring woodiness</strong> (i.e. standing tree biomass and tree canopy cover), and as such, there is no need to attempt to distinguish between different NLC types of natural vegetation, although wetland have been maintained as a separate category. The exception is that closed-canopy indigenous forest (as defined as forest in South African Biome classifications, Mucina and Rutherford 2006) has been maintained as a land cover class of its own since it represents a biome. All other land cover classes representing natural land &nbsp;are analysed as a single land cover class, but stratified based on biomes.</p>
                <p>Bare ground is an exception as it is seen as a degradation of natural vegetation rather than a transformation. However, bare ground (as identified on satellite imagery) is natural in very arid biomes such as the desert and karoo. NTCSA2020 has regarded bare ground as a degradation in all biomes except in the Desert and Karoo where it is treated as natural vegetation.</p>
                <p>Table A. The 17 land cover classes used in NTCSA2020 and how they relate to the 1990/2014 and 2018 NLC classes. Full descriptions of the classes are available NLC reports.</p>
                <table width="100%" className="table table-bordered table-hover table-striped"><tbody><tr><td><strong>Class2014</strong></td><td><strong>Class 2018</strong></td><td><strong>Class used in NTCSA 2020 </strong></td></tr><tr><td>1, 2</td><td>14 - 21</td><td>Water</td></tr><tr><td>3</td><td>22 23 73</td><td>Wetlands</td></tr><tr><td>4</td><td>1</td><td>Indigenous forest</td></tr><tr><td>10 11 12</td><td>40</td><td>Commercial agriculture no irrigation / dryland</td></tr><tr><td>5 - 9</td><td>2 3 4 8 9 10 11 12 13 24</td><td>Natural vegetation</td></tr><tr><td>42-46</td><td>Fallow</td></tr><tr><td>22</td><td>35</td><td>Pineapple</td></tr><tr><td>13 14 15</td><td>38 39</td><td>Pivot agriculture and other irrigated</td></tr><tr><td>16- 18</td><td>32</td><td>Orchards</td></tr><tr><td>19-21</td><td>33</td><td>Viticulture</td></tr><tr><td>23 - 25</td><td>41</td><td>Subsistence agriculture</td></tr><tr><td>26-27</td><td>34</td><td>Sugarcane irrigated</td></tr><tr><td>28-31</td><td>36 37</td><td>Sugarcane dry</td></tr><tr><td>32-34</td><td>5 6 7</td><td>Plantation forests</td></tr><tr><td>35-39</td><td>68-72</td><td>Mine11s</td></tr><tr><td>41-40</td><td>25 26 27 28 29 30 31</td><td>Bare</td></tr><tr><td>42-72</td><td>47-67</td><td>Build up classes</td></tr></tbody></table>
                <p>Three national land cover products (NLC 1990. 2014 and 2018) were used to track changes over time in land use and the resultant impacts of land use on Soil Organic Carbon (SOC).  </p>
              </section>
              <section id="note3" className="light-border-top pt-3 pb-3">
                <h1>Note 3.</h1>
                <h4>Understanding Table 1.</h4>
                <p>This short note is to assist in understanding how the Table 1 of the District data was derived, to aid in understanding the results. Full details are available in the full technical report.</p>
                <p>Land use change is used as the key driver of organic carbon stock (SOC) change in the NTCSSA 2020. A secondary loss of organic carbon can occur through degradation of vegetation which is not visible on the national land cover products.</p>
                <p>The <strong>reference</strong> land cover is a hypothetical land cover that we would expect if no human induced land use change has taken place. In other words, it is the natural vegetation that would be expected in the area. The reference land cover has no specific date but is assumed to be the land cover that existed at some point in the past before man made transformations took place. In the NTCSA the reference landcover is assumed to be the &ldquo;other natural vegetation&rdquo; land cover class unless the area is &ldquo;indigenous forest&rdquo; or &ldquo;wetland&rdquo;. Although both natural indigenous forest and wetlands may have changed over time, there is no historic data showing their spatial extent, and therefore current extent is assumed.</p>
                <p>Three national land cover (NLC) products are used, giving detailed mapping of land cover in the year 1990, 2014 and 2018. These are discussed in more detail in Note 2. A hypothetical illustration of this land cover change is shown graphically in Figure B. Table 1 summarises the change in land cover from 1990 to 2018. From Table 1 it can be seen which land cover classes have reduced and which have expanded during this time period</p>
                <img src={data2} />
                <p className="txt-small"><strong>Figure B.</strong><br/>Hypothetical change in a parcel of land from the reference period until 2018 as recorded by national land cover data. During the reference period there is only natural vegetation, by 1990 some of the land is cleared to form agricultural fields (grey). By 2014 the agricultural fields have expanded and some land is taken up by settlement. By 2018 both settlement and agriculture have expanded and the amount of natural vegetation is greatly reduced. </p>
              </section>
              <section id="note4" className="light-border-top pb-4">
                <h1>Note 4. </h1>
                <h4>Understanding Table 2.</h4>
                <p>This short note is to assist in understanding how Table 2 of the District data was derived, to aid in understanding the results. It should be read in conjunction with Note 3 which explains how land cover data was used to understand land use change. Full details are available in the full technical report.</p>
                <p>The soil organic carbon (SOC) reference value is the SOC that is anticipated within the natural vegetation. The SOC data used in NTCSA2020 is the global SoilGrids dataset, curated out of ISRIC/World Soil Resources in Wageningen (ISRIC)<a href="#_ftn1" name="_ftnref1">[1]</a>. ISRIC data was derived used a modelling approach to extrapolate SOC based on soil pit samples and climatic and terrain features. It provides a 250m resolution estimate of the reference soil carbon stock for the entire country.</p>
                <p>Changes in land cover (for instance from a natural grassland to an agricultural field) results in changes in SOC. In most cases a change from the natural vegetation to transformed land results in the loss of SOC. The amount of SOC loss is dependent on the vegetation type of the natural vegetation, the soil type, the nature of the land cover change and climatic variables.</p>
                <p>The NTCSA2020 did an extensive review of available South African data on levels of change in SOC as a consequence of land cover change. Based on this, change factors were identified for different land cover changes. The country was divided into areas of similar rainfall and vegetation (i.e. by biome) with change factors identified for each rainfall class per vegetation type.</p>
                <p>&nbsp;</p>
                <p>[1] <a href="https://www.isric.org/">https://www.isric.org/</a></p>
                <p>The NLC 1990, 2014 and 2018 land cover products were used to estimate SOC loss compared to the baseline. This was calculated for ever 1km<sup>2</sup> land unit of South Africa. This resulted in four sets of national level SOC data, a reference value, a 1990 value, a 2014 value and a 2018 value.</p>
                <p>The difference in SOC from the reference until 1990 represents the total loss in SOC that had happened before 1990. This loss will have happened over a few hundred years as agriculture and settlement expansion took place. Most of this loss is found in agricultural fields, some of which have been abandoned. Most agricultural expansion in South Africa took place prior to 1990 (Figure C).</p>
                <div className="row">
                  <div className="col-md-6"><img src={data3} /></div>
                  <div className="col-md-6"><p className="txt-small"><strong>Figure C.</strong> Estimations of change in the area of agricultural and plantation forestry land in South Africa between 1911 and 1993 (Biggs and Scholes 2002) </p></div>
                </div>
                <p>Loss (or gain) between 1990 and 2014 can be calculated by subtracting the 2014 data from the 1990 data. Since this loss took place over 24 years it is also possible to find the mean yearly rate of loss. Similarly loss between 2014 and 2018 or between 1990 and 2018 can also be calculated.</p>
                <p>The 2018 land cover data has a unique land cover class not found in earlier land cover datasets, this is the class of &ldquo;fallow land&rdquo;. Fallow land is land that was previously agricultural land and as such would have lost a large proportion of its SOC. Some of this carbon may have been regained since agriculture ceased. The dynamics of carbon in fallow land is poorly researched in South Africa, but for the NTCSA we have assumed that fallow land has not regained all its lost carbon. What this means is that the 2018 data will show a large loss of carbon from fallow land, but this loss is not reflected in the 1990 or 2014 data, despite the fact that the fallow land may well have already existed during these time periods.</p>
                <p>From the NTCSA 2020 it is clear that the single biggest loss of terrestrial environmental organic carbon in the South African context relates to loss of SOC in dryland crop agriculture. As such, restoration of SOC in agricultural fields (including abandoned agricultural fields), represents a huge mitigation opportunity. The full extent to which carbon can be reclaimed through processes such as conservation agriculture is still unclear, so Table 2 &nbsp;considers gains that could potentially be made using three scenarios, a 25, 50 and 75% recovery of the lost SOC as a consequence of the introduction of sustainable agriculture. &nbsp;It further makes the assumption that these gains would require about 20 years. &nbsp;</p>
                <p className="txt-small">[1] <a href="https://www.isric.org/">https://www.isric.org/</a><br />
[1] Biggs, R. and Scholes, R.J. 2002. Land cover changes in South Africa 1911 &ndash; 1993. South African Journal of Science. 98. 420-424</p>
              </section>
              </div>
              </div>
      </>
    )
  }
}

export default CsUnderstandingData