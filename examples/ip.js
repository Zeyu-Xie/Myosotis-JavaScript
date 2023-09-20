const maxmind = require('maxmind');

// 加载GeoLite2数据库
const geoipDatabase = maxmind.openSync('/path/to/GeoLite2-Country.mmdb'); // 替换为你的数据库文件路径

// 查询IP地址的国家信息
const ip = '8.8.8.8'; // 替换为你要查询的IP地址
const lookup = geoipDatabase.get(ip);

if (lookup && lookup.country) {
  console.log(`IP地址 ${ip} 对应的国家是 ${lookup.country.iso_code}`);
} else {
  console.log(`无法找到IP地址 ${ip} 的国家信息`);
}
