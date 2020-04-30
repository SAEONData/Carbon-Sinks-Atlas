import React from 'react';
import { Row, Col, Button } from 'mdbreact';
import LocalMunicipalitiesData from './Data/localMunicipalitiesData.jsx';
//import LocalMunicipalitiesDataCrop from '../Pages/Data/localMunicipalitiesDataCrop.jsx';

class DistrictsListing extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h1>districts</h1>
            <Row>
            <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/municipality-profiles" }}>
              <em className="fa fa-chevron-right mr-1"></em> Provinces</Button></Col>
            <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/municipality-profiles-local" }}>
              <em className="fa fa-chevron-right mr-1"></em> Local Municipalities</Button></Col>
            </Row>
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container-fluid mt-4 pt-2 pb-5">
            <h2 className="mt-3 mb-3">South African Districts</h2>
            
            <ul>
            <li onClick={() => { location.hash = "/districts/Alfred-Nzo"}}>	AlfredNzo	</li>
            <li onClick={() => { location.hash = "/districts/Amajuba"}}>	Amajuba	</li>
            <li onClick={() => { location.hash = "/districts/Amathole"}}>	Amathole	</li>
            <li onClick={() => { location.hash = "/districts/Bojanala"}}>	Bojanala	</li>
            <li onClick={() => { location.hash = "/districts/Buffalo-City"}}>	BuffaloCity	</li>
            <li onClick={() => { location.hash = "/districts/Cacadu"}}>	Cacadu	</li>
            <li onClick={() => { location.hash = "/districts/Cape-Winelands"}}>	CapeWinelands	</li>
            <li onClick={() => { location.hash = "/districts/Capricorn"}}>	Capricorn	</li>
            <li onClick={() => { location.hash = "/districts/Central-Karoo"}}>	CentralKaroo	</li>
            <li onClick={() => { location.hash = "/districts/Chris-Hani"}}>	ChrisHani	</li>
            <li onClick={() => { location.hash = "/districts/City-of-Johannesburg"}}>	CityofJohannesburg	</li>
            <li onClick={() => { location.hash = "/districts/City-of-Cape-Town"}}>	CityofCapeTown	</li>
            <li onClick={() => { location.hash = "/districts/City-of-Cape-Tshwane"}}>	CityofCapeTshwane	</li>
            <li onClick={() => { location.hash = "/districts/Dr-Kenneth-Kaunda"}}>	DrKennethKaunda	</li>
            <li onClick={() => { location.hash = "/districts/Dr-Ruth-Segomotsi-Mompati"}}>	DrRuthSegomotsiMompati	</li>
            <li onClick={() => { location.hash = "/districts/Eden"}}>	Eden	</li>
            <li onClick={() => { location.hash = "/districts/Ehlanzeni"}}>	Ehlanzeni	</li>
            <li onClick={() => { location.hash = "/districts/Ekurhuleni"}}>	Ekurhuleni	</li>
            <li onClick={() => { location.hash = "/districts/eThekwini"}}>	eThekwini	</li>
            <li onClick={() => { location.hash = "/districts/Fezile-Dabi"}}>	FezileDabi	</li>
            <li onClick={() => { location.hash = "/districts/Frances-Baard"}}>	FrancesBaard	</li>
            <li onClick={() => { location.hash = "/districts/Gert-Sibande"}}>	GertSibande	</li>
            <li onClick={() => { location.hash = "/districts/Harry-Gwala"}}>	HarryGwala	</li>
            <li onClick={() => { location.hash = "/districts/iLembe"}}>	iLembe	</li>
            <li onClick={() => { location.hash = "/districts/Joe-Gqabi"}}>	JoeGqabi	</li>
            <li onClick={() => { location.hash = "/districts/John-Taolo-Gaetsewe"}}>	JohnTaoloGaetsewe	</li>
            <li onClick={() => { location.hash = "/districts/Lejweleputswa"}}>	Lejweleputswa	</li>
            <li onClick={() => { location.hash = "/districts/Mangaung"}}>	Mangaung	</li>
            <li onClick={() => { location.hash = "/districts/Mopani"}}>	Mopani	</li>
            <li onClick={() => { location.hash = "/districts/Namakwa"}}>	Namakwa	</li>
            <li onClick={() => { location.hash = "/districts/Nelson-Mandela-Bay"}}>	NelsonMandelaBay	</li>
            <li onClick={() => { location.hash = "/districts/Ngaka-Modiri-Molema"}}>	NgakaModiriMolema	</li>
            <li onClick={() => { location.hash = "/districts/Nkangala"}}>	Nkangala	</li>
            <li onClick={() => { location.hash = "/districts/OR-Tambo"}}>	ORTambo	</li>
            <li onClick={() => { location.hash = "/districts/Overberg"}}>	Overberg	</li>
            <li onClick={() => { location.hash = "/districts/Pixley-ka-Seme"}}>	PixleykaSeme	</li>
            <li onClick={() => { location.hash = "/districts/Sedibeng"}}>	Sedibeng	</li>
            <li onClick={() => { location.hash = "/districts/Sekhukhune"}}>	Sekhukhune	</li>
            <li onClick={() => { location.hash = "/districts/Thabo-Mofutsanyane"}}>	ThaboMofutsanyane	</li>
            <li onClick={() => { location.hash = "/districts/Ugu"}}>	Ugu	</li>
            <li onClick={() => { location.hash = "/districts/Umgungundlovu"}}>	Umgungundlovu	</li>
            <li onClick={() => { location.hash = "/districts/Umkhanyakude"}}>	Umkhanyakude	</li>
            <li onClick={() => { location.hash = "/districts/Umzinyathi"}}>	Umzinyathi	</li>
            <li onClick={() => { location.hash = "/districts/Uthukela"}}>	Uthukela	</li>
            <li onClick={() => { location.hash = "/districts/Uthungulu"}}>	Uthungulu	</li>
            <li onClick={() => { location.hash = "/districts/Vhembe"}}>	Vhembe	</li>
            <li onClick={() => { location.hash = "/districts/Waterberg"}}>	Waterberg	</li>
            <li onClick={() => { location.hash = "/districts/West-Cost"}}>	West-Cost	</li>
            <li onClick={() => { location.hash = "/districts/West-Rand"}}>	WestRand	</li>
            <li onClick={() => { location.hash = "/districts/Xhariep"}}>	Xhariep	</li>
            <li onClick={() => { location.hash = "/districts/ZF-Mgcawu"}}>	ZF-Mgcawu	</li>
            <li onClick={() => { location.hash = "/districts/Zululand"}}>	Zululand	</li>
            </ul>
            
              
          
          </div>
        </section>
      </>
    )
  }
}

export default DistrictsListing