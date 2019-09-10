const address = require('../index');
const str = '山东省菏泽市巨野县万丰镇陈集村';
console.log(address(str, 'default')); // { provinceLevel: '山东省', cityLevel: '菏泽市', countyLevel: '巨野县', others: '万丰镇陈集村' }

const str2 = '上海市黄浦区';
console.log(address(str2, 'default')); // { provinceLevel: '上海市', cityLevel: null, countyLevel: '黄浦区', others: '' }

const str3 = '新疆乌鲁木齐市沙依巴克区';
console.log(address(str3, 'default')); // { provinceLevel: '新疆', cityLevel: '乌鲁木齐市', countyLevel: '沙依巴克区', others: '' }
