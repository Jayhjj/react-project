const {Map,fromJS} = require('immutable');//不会改变 之前的对象，会生成一个新的，深拷贝
const map1 = Map({a:1,b:2,c:3})
const map2 = map1.set('b',50);
console.log(map2);