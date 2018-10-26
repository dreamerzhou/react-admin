import React, { Component } from 'react';

import Title from 'components/title/index.js';

class Home extends Component {
  
  render() {
    return (
      <div id="page-wrapper">
        <Title title="首页"/>
        <div className="row">
          <div className="col-md-12">
              body
          </div>
        </div>
      </div>
    );
  }
}

export default Home;