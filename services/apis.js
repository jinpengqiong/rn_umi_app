import request from '../utils/request';

export function getSumData(id) {
  const url = 'https://p.3.cn/prices/mgets?skuIds=100026761926';
  return request(url, {
    method: 'get',
    // params: { id },
  });
}
