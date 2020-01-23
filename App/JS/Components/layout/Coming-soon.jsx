import React from 'react';
import { Card, CardBody } from 'mdbreact';

class CSAComing extends React.Component {

  render() {

    return (
          <Card className="mb-5 mt-3 test">
            <CardBody>
              <div
                style={{ backgroundColor: 'white', border: '1px solid gainsboro', borderRadius: 10, padding: '15px 15px 5px' }} >
                <h5 style={{ margin: 0 }}>
                  <b>Coming Soon</b>
                </h5>

                <hr style={{ marginTop: 10 }} />

                <p style={{ overflowY: 'auto', paddingRight: 15 }}>
                  This page will be online in our next release. Come back to check for feature additions
                </p>
              </div>
            </CardBody>
          </Card>
    )
  }
}

export default CSAComing