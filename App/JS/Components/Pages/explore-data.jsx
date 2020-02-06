import React from 'react';
// import CSAComing from '/Projects/dev/carbon-sinks/App/JS/Components/layout/Coming-soon.jsx';

class ExploreData extends React.Component {

  render() {

    return (
      <>
        {/* <section className="ea-content-full">
        <div className="container-fluid mt-4">
            <h1>Explore Data</h1>
          </div>
        </section> */}
        <section className="ea-content-full light-bg explore-data" style={{ padding: "0"}}>
          <div className="pt-0 pb-0">
            <iframe src="https://gisportal.saeon.ac.za/portal/apps/webappviewer/index.html?id=732dfe12e242456bbe79cfb132b7757e" frame="none" border="none" style={{ width: "100%" , height: "800px" , border:"none"}} />
          </div>
        </section>
      </>
    )
  }
}

export default ExploreData