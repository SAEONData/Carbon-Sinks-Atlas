
import React from 'react';
import './IconList.css'

class IconList extends React.Component {

    render() {
      return (
          <>
        <ul className="ea-links">
        {/* <li>
        <a onClick={() => { location.hash = "/info-events" }} title="Events and news" className="tooltip-ea tooltip-ea-r">
        <i className="fa fa-newspaper-o"></i>
        </a>
        </li> */}
        <li>
        <a onClick={() => { location.hash = "/contact" }} title="Contact us" className="tooltip-ea tooltip-ea-r">
        <i className="fa fa-envelope"></i>
        </a>
        </li>
        {/* <li>
        <a onClick={() => { location.hash = "/info-documents" }} title="List of climate documents" className="tooltip-ea tooltip-ea-r">
        <i className="fa fa-folder"></i>
        </a>
        </li> */}
        {/* <li>
        <a onClick={() => { location.hash = "/info-tools" }} title="Access useful climate tools" className="tooltip-ea tooltip-ea-r">
        <i className="fa fa-link"></i>
        </a>
        </li> */}
        </ul>
        </>
      );
    }
  }
export default IconList