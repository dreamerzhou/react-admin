import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/title/index.js';
import TableList from 'util/tablelist/index.js';
import Pagination from 'util/pagination/index.js';

import MUtil from 'util/mm.js';
import User from 'service/user.js';

const _mm = new MUtil();
const _user = new User();

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      list: []
    }
  }
  componentDidMount() {
    this.loadUserList();
  }
  loadUserList() {
    _user.getUserList(this.state.pageNum).then((res) => {
      this.setState(res);
    }, (errMsg) => {
      this.setState({
        list: []
      });
      _mm.errorTips(errMsg);
    });
  }
  // 页数发生变化时
  onPageNumChange(pageNum) {
    this.setState({
      pageNum: pageNum
    }, () => {
      this.loadUserList();
    });
  }
  render() {
    let listBody = this.state.list.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{new Date(user.createTime).toLocaleString()}</td>
        </tr>
      );
    });
    let listError = (
      <tr>
        <td colSpan="5" className="text-center">
          {this.state.firstLoading ? '正在加载数据...' : '没有找到相应的结果~'}
        </td>
      </tr>   
    );
    let tableBody = this.state.list.length > 0 ? listBody : listError; 
    return (
      <div id="page-wrapper">
        <Title title="用户列表"/>
        
        <TableList tableHeads={['ID', '用户名', '邮箱', '电话', '注册时间']}>
          {listBody}
        </TableList>

        <Pagination current={this.state.pageNum}
          total={this.state.total}
          onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
      </div>
    );
  }
}

export default UserList;