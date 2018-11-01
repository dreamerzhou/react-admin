import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/title/index.js';
import ListSearch from './index-list-search.js';
import TableList from 'util/tablelist/index.js';
import Pagination from 'util/pagination/index.js';

import MUtil from 'util/mm.js';
import Product from 'service/product.js';

import './index.scss';

const _mm = new MUtil();
const _product = new Product();

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      list: [],
      listType: 'list'
    }
  }
  componentDidMount() {
    this.loadProductList();
  }
  loadProductList() {
    let listParam = {};
    listParam.listType = this.state.listType;
    listParam.pageNum = this.state.pageNum;

    if (this.state.listType === 'search') {
      listParam.searchType = this.state.searchType;
      listParam.keyword = this.state.searchKeyword;
    }

    _product.getProductList(listParam).then((res) => {
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
      this.loadProductList();
    });
  }
  // 改变商品状态
  onSetProductStatus(e, productId, currentStatus) {
    let newStatus = currentStatus == 1 ? 2 : 1,
      confrimTips = currentStatus == 1 ? '确定下架该商品？' : '确定上架该商品？';
    if (window.confirm(confrimTips)) {
      _product.setProductStatus({
        productId: productId,
        status: newStatus
      }).then((res) => {
        _mm.successTips(res);
        this.loadProductList();
      }, (errMsg) => {
        _mm.errorTips(res);
      });
      
    }
  }
  onSearch(searchType, searchKeyword) {
    let listType = searchKeyword === '' ? 'list' : 'search';
    this.setState({
      listType: listType,
      pageNum: 1,
      searchType: searchType,
      searchKeyword: searchKeyword
    }, () => {
      this.loadProductList();
    });
  }
  render() {
    let tableHeads = [
      {name: '商品ID', width: '10%'},
      {name: '商品信息', width: '50%'},
      {name: '价格', width: '10%'},
      {name: '状态', width: '15%'},
      {name: '操作', width: '15%'}
    ];
    return (
      <div id="page-wrapper">
        <Title title="商品列表">
          <div className="page-header-right">
            <Link to="/product/save" className="btn btn-primary">
              <i className="fa fa-plus"></i>
              <span>添加商品</span>
            </Link>
          </div>
        </Title>
        <ListSearch onSearch={(searchType, searchKeyword) => {this.onSearch(searchType, searchKeyword)}}/>
        <TableList tableHeads={tableHeads}>
          {
            this.state.list.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>
                    <p>{product.name}</p>
                    <p>{product.subtitle}</p>
                  </td>
                  <td>￥{product.price}</td>
                  <td>
                    <p>{product.status == 1 ? '在售' : '已下架'}</p>
                    <button className="btn btn-warning btn-xs" onClick={(e) => this.onSetProductStatus(e, product.id, product.status)}>{product.status == 1 ? '下架' : '上架'}</button>
                  </td>
                  <td>
                    <Link className="operate" to={`/product/detail/${product.id}`}>查看详情</Link>
                    <Link className="operate" to={`/product/save/${product.id}`}>编辑</Link>
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

export default ProductList;