const nonProRegExp = /^((?:北京|上海|天津|重庆)市){1}(.+?(?:区|自治州))?(.+?县)?(.+?(?:镇|乡))?(.+)?/;
const autoRegion = /^(内蒙古|新疆|宁夏|西藏|广西)(.+?市)?(.+?(?:区|自治州))?(.+?县)?(.+?(?:镇|乡))?(.+)?/;
const proRegExp = /^(.{2,3}省){1}(.+?市)?(.+?(?:区|自治州))?(.+?县)?(.+?(?:镇|乡))?(.+)$/;

module.exports = { nonProRegExp, autoRegion, proRegExp };
