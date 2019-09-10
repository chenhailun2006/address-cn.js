const { nonProRegExp, proRegExp, autoRegion } = require('./constants');

function address(addr) {
  if (!addr) {
    return null;
  }
  if (typeof addr !== 'string') {
    throw new TypeError('address函数的参数必须是一个字符串');
  }
  const withProInfo = proRegExp.exec(addr) || autoRegion.exec(addr);
  if (withProInfo) {
    return {
      province: withProInfo[1],
      city: withProInfo[2],
      district: withProInfo[3],
      county: withProInfo[4],
      town: withProInfo[5],
      others: withProInfo[6],
    };
  }
  const nonProInfo = nonProRegExp.exec(addr);
  if (nonProInfo) {
    return {
      province: nonProInfo[1],
      city: nonProInfo[1],
      district: nonProInfo[2],
      county: nonProInfo[3],
      town: nonProInfo[4],
      others: nonProInfo[5],
    };
  }
  throw new Error('输入的地址信息无法被识别');
}

module.exports = address;
