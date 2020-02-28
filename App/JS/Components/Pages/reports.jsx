import React from 'react';
import { CardBody, Card } from 'mdbreact';
import textImage from '../../../Images/reports/test.jpg';
import pdfSynopsisreport from '../../../content/reports/nationalterrestrial_carbonsinks_synopsisreport.pdf';
import imgSynopsisreport from '../../../Images/reports/synopsisreport.jpg';

import pdfSect1 from '../../../content/reports/nationalterrestrial_carbonsinksassessment_sect1.pdf';
import imgSect1 from '../../../Images/reports/sect1.jpg';

import pdfFeb2016 from '../../../content/reports/Interpretation_of_National_Carbon_sinks_G_vonMaltitz_3_Feb2016.pdf';
import imgFeb2016 from '../../../Images/reports/Feb2016.jpg';

import pdf1 from '../../../content/reports/strategicplan2016_2020_afolusector_1.pdf';
import img1 from '../../../Images/reports/1.jpg';

import pdfReport from '../../../content/reports/climatechangeadaptation_plansforsouthafricanbiomes_report.pdf';
import imgReport from '../../../Images/reports/report.jpg';

import pdfBiocharreport2015 from '../../../content/reports/DEA_biocharreport2015.pdf';
import imgBiocharreport2015 from '../../../Images/reports/biocharreport2015.jpg';

import pdfMararakanye from '../../../content/articles/Mararakanye_Le Roux_gullymapping_report.pdf';

class TechReports extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h1>Technical Reports</h1>
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container mt-4 pt-5 pb-5">
          {/* <DataReports/> */}
          
            <Card className="ea-card p-0 mb-3">
              <CardBody>
              <div className="row">
                <div className="col-md-2">
                  <img src={imgSynopsisreport} />
                </div>
                <div className="col-md-7">
                  <h5 >
                    <b>Summary Report: South African National Carbon Sinks Assessment</b>
                  </h5>
                  <p>The National Terrestrial Carbon Sinks Assessment (NTCSA) is a first of its kind for South Africa and was commissioned following a directive from the National Climate Change Response Policy (NCCRP).</p>
                  <p>Given this, the aim was to assess the national carbon sinks in relation to afforestation, forest restoration, wetlands, agricultural practices and urban greening.</p>
                  <p>Furthermore, to assess all significant land use change and quantify the potential future carbon stocks under varying climate change and land use scenarios.</p>
                </div>
                <div className="col-md-3 d-flex align-items-center flex-row-reverse">
                  <a href={pdfSynopsisreport} target="_blank" className="btn btn-ea-green"><em className="fa fa-download icn-large mb-1"></em><br />Download PDF</a>
                </div>
              </div>
              </CardBody>
            </Card>

            <Card className="ea-card p-0 mb-3">
              <CardBody>
              <div className="row">
                <div className="col-md-2">
                  <img src={imgSect1} />
                </div>
                <div className="col-md-7">
                  <h5 >
                    <b>Full Report: South African National Carbon Sinks Assessment</b>
                  </h5>
                  <p>Global change through land use and cover change, climate
change and the increase in atmospheric carbon dioxide has
modified the structure and function of many ecosystems
throughout the world.</p>
<p>Such changes across the globe have
over the years altered the relationship between the natural
sources and sinks of carbon dioxide.</p>
<p> Similarly, in South
Africa, land use change and land degradation as a result
of conversion to croplands, urban areas, mines and roads
has modified the original geographical extent of vegetation
biomes</p>
                </div>
                <div className="col-md-3 d-flex align-items-center flex-row-reverse">
                  <a href={pdfSect1} target="_blank" className="btn btn-ea-green"><em className="fa fa-download icn-large mb-1"></em><br />Download PDF</a>
                </div>
              </div>
              </CardBody>
            </Card>

            <Card className="ea-card p-0 mb-3">
              <CardBody>
              <div className="row">
                <div className="col-md-2">
                  <img src={imgFeb2016} />
                </div>
                <div className="col-md-7">
                  <h5 >
                    <b>Guideline on Interpreting Data in the South African Carbon Sinks Atlas</b>
                  </h5>
                  <p>This document gives simple supplementary information to assist readers in understanding the issues
around options for carbon sequestration and emissions from the LULUC sector. </p>
                </div>
                <div className="col-md-3 d-flex align-items-center flex-row-reverse">
                  <a href={pdfFeb2016} target="_blank" className="btn btn-ea-green"><em className="fa fa-download icn-large mb-1"></em><br />Download PDF</a>
                </div>
              </div>
              </CardBody>
            </Card>

            <Card className="ea-card p-0 mb-3">
              <CardBody>
              <div className="row">
                <div className="col-md-2">
                  <img src={img1} />
                </div>
                <div className="col-md-7">
                  <h5 >
                    <b>Strategic Plan, Measurement, Reporting and Verification. AFOLU Sector: 2016-2020</b>
                  </h5>
                  <p>The long-term strategic objective for the development and implementation of the AFOLU sector
MRV system is to enhance South Africa’s capacity to transparently monitor and report emissions
from land use and the impact of mitigation actions.</p>
<p>This objective can be further subdivided into
short-term objectives.</p>
                </div>
                <div className="col-md-3 d-flex align-items-center flex-row-reverse">
                  <a href={pdf1} target="_blank" className="btn btn-ea-green"><em className="fa fa-download icn-large mb-1"></em><br />Download PDF</a>
                </div>
              </div>
              </CardBody>
            </Card>

            <Card className="ea-card p-0 mb-3">
              <CardBody>
              <div className="row">
                <div className="col-md-2">
                  <img src={imgReport} />
                </div>
                <div className="col-md-7">
                  <h5 >
                    <b>Climate Change Adaptation Plans for South African Biomes</b>
                  </h5>
                  <p>In responding to the impact of climate change on biodiversity as required by the National Climate Change Response
Policy, the Department of Environment Affairs coordinated a national process, with participation from provincial, local
government and civil society, to develop Climate Change Adaptation Plans for South African Biomes.</p>
<p>The biome adaptation planning process has now culminated in the production of this report. This
report includes a review and prioritization of the most significant potential climate change risks and vulnerabilities for
each of the 9 biomes and an identification of potential adaptation responses measures. </p>
                </div>
                <div className="col-md-3 d-flex align-items-center flex-row-reverse">
                  <a href={pdfReport} target="_blank" className="btn btn-ea-green"><em className="fa fa-download icn-large mb-1"></em><br />Download PDF</a>
                </div>
              </div>
              </CardBody>
            </Card>

            <Card className="ea-card p-0 mb-3">
              <CardBody>
              <div className="row">
                <div className="col-md-2">
                  <img src={imgBiocharreport2015} />
                </div>
                <div className="col-md-7">
                  <h5 >
                    <b>Assessment of the Potential to Produce Biochar and Its Application to South African Soils as a Mitigation Measure</b>
                  </h5>
                  <p>Assessment of the potential to produce biochar
and its application to South African soils as a
mitigation measure</p>
<p>Biochar is gradually gaining interest globally as a climate
change mitigation measure in the agriculture forestry
and other land use (AFOLU) sector</p>
                </div>
                <div className="col-md-3 d-flex align-items-center flex-row-reverse">
                  <a href={pdfBiocharreport2015} target="_blank" className="btn btn-ea-green"><em className="fa fa-download icn-large mb-1"></em><br />Download PDF</a>
                </div>
              </div>
              </CardBody>
            </Card>
          
          <h1 className="mt-5 mb-4">Articles:</h1>
          <div className="row">
          <div className="col-md-3">
            <Card className="ea-card">
              <CardBody>
                <div>
                  <h5 >
                    <b>Gully Erosion</b>
                  </h5>
                  <hr  />
                  <p className="articleE">Manual Digitizing of Gully Erosion in South Africa Using High Resolution SPOT 5 Satellite Imagery at 1: 10000 Scale</p>
                  <a href={pdfBiocharreport2015} target="_blank" className="btn btn-ea-green w-100"><em className="fa fa-bookmark-o mr-2"></em>Read</a>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-3">
          <Card className="ea-card">
              <CardBody>
                <div>
                  <h5 >
                    <b>Vegetation</b>
                  </h5>
                  <hr  />
                  <p className="articleE">Impacts of Climate Change on the Vegetation of Africa: An Adaptive Dynamic Vegetation Modelling Approach</p>
                  <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1365-2486.2008.01838.x" target="_blank" className="btn btn-ea-green w-100"><em className="fa fa-bookmark-o mr-2"></em>Read</a>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-3">
          <Card className="ea-card">
              <CardBody>
                <div>
                  <h5 >
                    <b>SA Biomes</b>
                  </h5>
                  <hr  />
                  <p className="articleE">Understanding Global Change Impacts on South African Biomes Using Dynamic Vegetation Models</p>
                  <a href="https://www.sciencedirect.com/science/article/pii/S0254629915000265" target="_blank" className="btn btn-ea-green w-100"><em className="fa fa-bookmark-o mr-2"></em>Read</a>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-3">
          <Card className="ea-card">
              <CardBody>
                <div>
                  <h5 >
                    <b>Predicting Impacts</b>
                  </h5>
                  <hr  />
                  <p className="articleE">Revising the Biome Concept for Understanding and Predicting Global Change Impacts</p>
                  <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/jbi.12701" target="_blank" className="btn btn-ea-green w-100"><em className="fa fa-bookmark-o mr-2"></em>Read</a>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
          
          </div>
          
        </section>
      </>
    )
  }
}

export default TechReports