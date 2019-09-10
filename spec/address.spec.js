const address = require('../index.js');
describe('测试省', () => {
  let addr;
  beforeEach(() => {
    addr = '山东省巨野县万丰镇陈集村';
  });
  it('should return correct data', () => {
    const result = address(addr);
    expect(result).toEqual({
      province: '山东省',
      city: undefined,
      district: undefined,
      county: '巨野县',
      town: '万丰镇',
      others: '陈集村',
    });
  });
});

describe('测试直辖市', () => {
  let addr;
  beforeEach(() => {
    addr = '上海市浦东新区东方金融广场';
  });
  it('should return correct data', () => {
    const result = address(addr);
    expect(result).toEqual({
      province: '上海市',
      city: '上海市',
      district: '浦东新区',
      county: undefined,
      town: undefined,
      others: '东方金融广场',
    });
  });
});

describe('测试自治区', () => {
  let addr;
  beforeEach(() => {
    addr = '新疆乌鲁木齐市昌吉回族自治州';
  });
  it('should return correct data', () => {
    const result = address(addr);
    expect(result).toEqual({
      province: '新疆',
      city: '乌鲁木齐市',
      district: '昌吉回族自治州',
      county: undefined,
      town: undefined,
      others: undefined,
    });
  });
});
