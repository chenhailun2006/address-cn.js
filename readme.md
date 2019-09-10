# address-cn.js

一个用来从身份证住址字符串中获取省市区县等信息的插件。

### 安装
```
npm install --save address-cn.js
```

或

```
yarn add address-cn.js
```

### 用法
```javascript
const address = require('address-cn.js');

const str = '山东省菏泽市巨野县万丰镇陈集村';
console.log(address(str)); // {province: '山东省', city: '菏泽市', district: undefined, county: '巨野县', town: '万丰镇', others: '陈集村'}

const str2 = '上海市浦东新区东方金融广场';
console.log(address(str2)); // {province: '上海市', city: '上海市', district: '浦东新区', county: undefined, town: undefined, others: '东方金融广场'}

const str3 = '新疆乌鲁木齐市沙依巴克区奇台路657号';
console.log(address(str3)); // {province: '新疆', city: '乌鲁木齐市', district: '沙依巴克区', county: undefined, town: undefined, others: '奇台路657号'}

const str4 = '新疆乌鲁木齐市昌吉回族自治州呼图壁县乌伊东路79号';
console.log(address(str4)); // {province: '新疆', city: '乌鲁木齐市', district: '昌吉回族自治州', county: '呼图壁县', town: undefined, others: '乌伊东路79号'}
```
### 特别说明

`V2.x`版本与`V1.x`版本不兼容。

### LICENSE
[MIT](./LICENSE)