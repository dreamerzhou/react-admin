import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

import UTil from 'util/mm.js';
import User from 'service/user.js';

const _mm = new UTil();
const _user = new User();

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: _mm.getStorage('userInfo').username || ''
    }
  }
  // 退出登录
  onLogout() {
    _user.logout().then((res) => {
      _mm.removeStorage('userInfo');
      window.location.href = '/login';
    }, (errMsg) => {
      _mm.errorTips(errMsg);
    });
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
              {
                this.state.username
                ? <span>欢迎，{this.state.username}</span>
                : <span>欢迎您，请登录</span>
              }
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
