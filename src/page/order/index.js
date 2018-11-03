import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/title/index.js';
import ListSearch from './index-list-search.js';
import TableList from 'util/tablelist/index.js';
import Pagination from 'util/pagination/index.js';

import MUtil from 'util/mm.js';
import Order from 'service/order.js';

const _mm = new MUtil();
const _order = new Order();

class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      list: [],
      listType: 'list'  // list  or search
    }
  }
  componentDidMount() {
    this.loadOrderList();
  }
  loadOrderList() {
    let listParam = {};
    listParam.listType = this.state.listType;
    listParam.pageNum = this.state.pageNum;

    if (this.state.listType === 'search') {
      listParam.orderNo = this.state.orderNumber;
    }

    _order.getOrderList(listParam).then((res) => {
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
      this.loadOrderList();
    });
  }
  onSearch(orderNumber) {
    let listType = orderNumber === '' ? 'list' : 'search';
    this.setState({
      listType: listType,
      pageNum: 1,
      orderNumber: orderNumber
    }, () => {
      this.loadOrderList();
    });
  }
  render() {
    let tableHeads = ['订单号', '收件人', '订单状态', '订单总价', '创建时间', '操作'];
    return (
      <div id="page-wrapper">
        <Title title="订单列表" />
        <ListSearch onSearch={(orderNumber) => {this.onSearch(orderNumber)}}/>
        <TableList tableHeads={tableHeads}>
          {
            this.state.list.map((order, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Link to={`/order/detail/${order.orderNo}`}>{order.orderNo}</Link>
                  </td>
                  <td>{order.receiverName}</td>
                  <td>{order.statusDesc}</td>
                  <td>{order.payment}</td>
                  <td>{order.createTime}</td>
                  <td>
                    <Link to={`/order/detail/${order.orderNo}`}>详情</Link>
                  </td>
                </tr>
              )
            })
          }
        </TableList>
        <Pagination current={this.state.pageNum}
          total={this.state.total}
          onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
      </div>
    );
  }
}

export default OrderList;