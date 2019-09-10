# address-cn.js

一个用来从身份证住址字符串中获取省市区县等信息的插件。

### 安装
```
npm install --save address-cn.js
```
### 用法
```javascript
const address = require('address-cn.js');

const str = '山东省菏泽市巨野县';
console.log(address(str)); // {provinceLevel: '山东省', cityLevel: '菏泽市', countyLevel: '巨野县'}

const str2 = '上海市黄浦区';
console.log(address(str2)); // {provinceLevel: '上海市', cityLevel: null, countyLevel: '黄浦区'}

const str3 = '新疆乌鲁木齐市沙依巴克区';
console.log(address(str3)); // {provinceLevel: '新疆', cityLevel: '乌鲁木齐市', countyLevel: '沙依巴克区'}
```
**address** 方法还可以接收第二个参数，该参数是一个枚举值，可选值为'default', 'show'和'hide'，用于指定是否显示级别信息，其默认值为'default'，即显示级别信息，设置为'hide'，则不显示级别信息。对于五个自治区，第二个参数的值为'default'或'show'时,会有一定的区别，当值为'show'时，对于五个自治区将会显示‘xx自治区’，而值为'default'时，对于五个自治区，只会显示名字，不会携带“自治区”字符串，对于其他的省份或直辖市，当showLevel为‘default’或‘show’时是没有任何区别的。

```javascript
const address = require('address-cn.js');

const str = '山东省菏泽市巨野县';
console.log(address(str, 'hide')); // {provinceLevel: '山东', cityLevel: '菏泽', countyLevel: '巨野'}

const str2 = '上海市黄浦区';
console.log(address(str2, 'hide')); // {provinceLevel: '上海', cityLevel: null, countyLevel: '黄埔'}

const str3 = '新疆乌鲁木齐市沙依巴克区';
console.log(address(str3, 'hide')); // {provinceLevel: '新疆', cityLevel: '乌鲁木齐', countyLevel: '沙依巴克'}
```

```javascript
const address = require('address-cn.js');

const str = '新疆乌鲁木齐市沙依巴克区';
console.log(address(str3, 'show')); // {provinceLevel: '新疆自治区', cityLevel: '乌鲁木齐市', countyLevel: '沙依巴克区'}
console.log(address(str3, 'default')); // {provinceLevel: '新疆', cityLevel: '乌鲁木齐市', countyLevel: '沙依巴克区'}
console.log(address(str3, 'hide')); // {provinceLevel: '新疆', cityLevel: '乌鲁木齐', countyLevel: '沙依巴克'}
```
