import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

class TopNav extends React.Component {

  onLogout() {
    console.log('退出');
  }

  render() {
    return (
      <div className="navbar navbar-default top-navbar" role="navigation">
        <div className="navbar-header">
          <Router>
            <Link className="navbar-brand" to="/"><b>JD·</b>TMALL</Link>
          </Router>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          
          <li className="dropdown">
            <a className="dropdown-toggle" href="javascript:;">
              <i className="fa fa-user fa-fw" />
              <span>欢迎，adminxxx</span>
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a href="javascript:;" onClick={() => this.onLogout()}>
                  <i className="fa fa-sign-out fa-fw" />退出登录
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopNav;
