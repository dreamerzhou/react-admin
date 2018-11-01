import React from 'react';

import TopNav from 'components/topnav/index.js';
import SideNav from 'components/sidenav/index.js';

import './theme.css';
import './index.scss';

class Layout extends React.Component {
  
  render() {
    return (
      <div id="wrapper">
        <TopNav />
        <SideNav />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;