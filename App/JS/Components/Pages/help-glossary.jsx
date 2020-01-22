import React from 'react';
import { Row, Col, Button, MDBCarousel, MDBCard, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import DataGlossary from '../Pages/Data/glossary.jsx';


class HelpGlossary extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h1>Glossary</h1>
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div className="container-fluid mt-4 pt-5 pb-5">
          <DataGlossary/>
          </div>
          
        </section>
      </>
    )
  }
}

export default HelpGlossary