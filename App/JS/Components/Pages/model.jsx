import React from 'react';
import CSAComing from '/Projects/dev/carbon-sinks/App/JS/Components/layout/Coming-soon.jsx';

class ModelCSA extends React.Component {

  render() {

    return (
      <>
        <section className="ea-content-full">
          <div className="container-fluid mt-4">
            <h5>Carbon stock models</h5>
            <CSAComing />
          </div>
        </section>
      </>
    )
  }
}

export default ModelCSA