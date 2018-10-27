
import MUtil from 'util/mm.js';

const _mm = new MUtil();

class Statistic {
  // 首页数据统计
  getHomeCount() {
    return _mm.request({
      type: 'post',
      url: '/manage/statistic/base_count.do'
    });
  }
}

export default Statistic;