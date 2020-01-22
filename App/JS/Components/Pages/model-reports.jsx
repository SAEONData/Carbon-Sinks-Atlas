import React from 'react';
import { Row, Col, Button } from 'mdbreact'
import imageModel from '../../../Images/model.png';
import photog1 from '../../../Images/Other/photos/1.jpg';
import photog2 from '../../../Images/Other/photos/2.jpg';
import photog3 from '../../../Images/Other/photos/3.jpg';
import photog4 from '../../../Images/Other/photos/4.jpg';
import photog5 from '../../../Images/Other/photos/5.jpg';
import photog6 from '../../../Images/Other/photos/6.jpg';

class ModelCSA extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h1>Carbon Sinks Model</h1>
          </div>
        </section>
        <section className="ea-content-full light-bg">
          <div class="container-fluid mt-4 pt-5 pb-5">
            <div className="row">
              <div className="col-md-4">
                <h5>Data model</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a libero viverra, cursus mi vel, facilisis massa. Ut mattis, lacus sed tempus accumsan, sapien dolor viverra nulla, sed aliquet massa elit aliquet erat.</p>
                <div className="row">
                  <div className="col-md-4"><img src={photog1} /></div>
                  <div className="col-md-4"><img src={photog2} /></div>
                  <div className="col-md-4"><img src={photog3} /></div>
                  </div><div className="row mt-4">
                  <div className="col-md-4"><img src={photog4} /></div>
                  <div className="col-md-4"><img src={photog5} /></div>
                  <div className="col-md-4"><img src={photog6} /></div>
                </div>
              </div>
              <div className="col-md-8 text-center"><img src={imageModel} /></div>
            </div>
            
          </div>
        </section>
      </>
    )
  }
}

export default ModelCSA