!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).jcommon={})}(this,(function(e){"use strict";const t=function(e,t){for(let r=0,n=t-(e+"").length;r<n;r++)e="0"+e;return e+""};const r=function(e){if(a(e)||s(e))return"";let t,n=e.constructor===Array?[]:{};if("object"==typeof e){if(JSON)t=JSON.stringify(e),n=JSON.parse(t);else for(const t in e)n[t]="object"==typeof e[t]?r(e[t]):e[t];return n}},n=function(e,t,r){for(const o in t)c(t[o])&&c(e[o])?e[o]=n(e[o],t[o],r):Object.keys(e).includes(o)&&!r.includes(o)||(e[o]=t[o]);for(const r in e)void 0===t[r]&&delete e[r];return e},o=function(e,t=!1){let r=e.replace(/(^\s+)|(\s+$)/g,"");return t&&(r=r.replace(/\s/g,"")),r},i=function(e){const t=r(e);for(const e in t)"object"==typeof t[e]?t[e]=i(t[e]):"string"==typeof t[e]&&(t[e]=o(t[e]));return t},u=function(e,t){return Object.prototype.toString.call(e)===`[object ${t}]`},s=function(e){return u(e,"Undefined")},a=function(e){return u(e,"Null")},c=function(e){return u(e,"Object")};e.addZero=t,e.arrByObj=function(e,t,r=""){if("[object Array]"!==Object.prototype.toString.call(e))return console.error("arrByObj 参数错误，请检查：",e),{};const n={};return e.forEach((function(e){n[e[t]]=r?e[r]:e})),n},e.cloneObj=r,e.dateFormat=function(e,r){return r.replace(/yyyy|YYYY/,e.getFullYear().toString()).replace(/yy|YY/,t(e.getFullYear()%100,2)).replace(/mm|MM/,t(e.getMonth()+1,2)).replace(/m|M/g,(e.getMonth()+1).toString()).replace(/dd|DD/,t(e.getDate(),2)).replace(/d|D/g,e.getDate().toString()).replace(/hh|HH/,t(e.getHours(),2)).replace(/h|H/g,e.getHours().toString()).replace(/ii|II/,t(e.getMinutes(),2)).replace(/i|I/g,e.getMinutes().toString()).replace(/ss|SS/,t(e.getSeconds(),2)).replace(/s|S/g,e.getSeconds().toString()).replace(/w/g,e.getDay().toString()).replace(/W/g,["日","一","二","三","四","五","六"][e.getDay()])},e.dateInterval=function(e,t){let r=[0,0,0,0],n="",o=t>e?parseInt(((t-e)/1e3).toString()):0;return r[0]=o>86400?parseInt((o/86400).toString()):0,o-=86400*r[0],r[1]=o>3600?parseInt((o/3600).toString()):0,o-=3600*r[1],r[2]=o>60?parseInt((o/60).toString()):0,r[3]=o-60*r[2],n=r[0]>0?r[0]+"天":"",n+=r[0]<=0&&r[1]<=0?"":r[1]+"小时",n+=r[0]<=0&&r[1]<=0&&r[2]<=0?"":r[2]+"分钟",n+=r[0]<=0&&r[1]<=0&&r[2]<=0&&r[3]<=0?"":r[3]+"秒",n},e.dateMonthDays=function(e){const t=e?new Date(e):new Date,r=t.getMonth();return t.setMonth(r+1),t.setDate(0),t.getDate()},e.doubleRanking=function(e,t){const{sortKey:r,filterRuleKey:n,rule:o,sortOrder:i}={filterRuleKey:"",rule:[],sortKey:"",sortOrder:1,...t};e=e.filter(e=>!o||-1!==o.indexOf(e[n]));const u={};for(let t=0;t<e.length;t++)u.hasOwnProperty(e[t][n])?u[e[t][n]].push(e[t]):u[e[t][n]]=[e[t]];for(const e in u)u[e]=u[e].sort((e,t)=>e[r]>t[r]?1*i:-1*i);let s=[];for(let e=0;e<o.length;e++)u.hasOwnProperty(o[e])&&(s=s.concat(u[o[e]]));return s},e.everyTrim=i,e.formatQueryParam=function(e){e=i(e);let t="";if("[object Object]"===Object.prototype.toString.call(e))for(const r in e)Array.isArray(e[r])?e[r].forEach(e=>{t+=`${r}=${e}&`}):null!==e[r]&&(t+=`${r}=${e[r]}&`);return t.length>0?(t="?"+t,t.substring(0,t.length-1)):""},e.getBirthdatByIdNo=function(e){let t="";return 15==e.length?(t=e.substring(6,12),t="19"+t,t=t.substring(0,4)+"-"+t.substring(4,6)+"-"+t.substring(6),t):(t=e.substring(6,14),t=t.substring(0,4)+"-"+t.substring(4,6)+"-"+t.substring(6),t)},e.getBrowserInfo=function(){let e,t,r,n={name:"other",version:"0"},o=navigator.userAgent.toLowerCase();for(t=[["WeiXin",/micromessenger\/([^\s]+)/],["QQ",/qq\/([^\s]+)/],["QQBrowser",/(?:qqbrowser|qqlivebrowser)\/([^\s]+)/],["JDAPP",/jdapp;/],["QIHU",/qihu|360se/],["LieBao",/(?:lbbrowser|liebaofast)\/?([\d\.]+)?/],["Sogou",/(?:metasr|sogou[\w]*)[ \/]([\d\.]+)/],["Opera",/(?:opera|opr|oupeng)\/([\d\.]+)/],["BaiduBrowser",/(?:bidubrowser|baidubrowser)[\/ ]?([\d\.\w]+)/],["BaiduBox",/baiduboxapp|baiduboxpad/],["UC",/(?:ucweb|ucbrowser)\/?([\d\.]+)/],["Maxthon",/maxthon\/([\d\.]+)/],["Samsung",/samsungbrowser\/([\d\.]+)/],["Dolphin",/aphone|apad/],["2345",/2345/],["Miui",/miuibrowser\/([\d\.]+)/],["OppoBrowser",/oppobrowser\/([\d\.]+)/],["MeiZu",/mz-/],["Weibo",/weibo/],["Youku",/youku/],["NewsApp",/newsapp/],["AliApp",/aliapp/],["Firefox",/firefox\/([\d\.\w]+)/],["Chrome",/chrome\/([\d\.]+)/],["IE",/msie[ ](\d+\.\d+)/],["Safari",/safari\/([\d\.]+)/]],e=0;e<t.length;e++)if(r=o.match(t[e][1])){n.name=t[e][0],n.version=r[1]||"0";break}return n},e.getCookie=function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=t?unescape(t[2]):null},e.getCountDays=function(e){const t=new Date(e),r=t.getMonth();return t.setMonth(r+1),t.setDate(0),t.getDate()},e.getSexByIdNO=function(e){return 18==e.length?Number(e.charAt(16))%2==0?"FEMALE":"MALE":15==e.length?Number(e.charAt(14))%2==0?"FEMALE":"MALE":""},e.getStorage=function(e){return window.localStorage.getItem(e)},e.getUrlQuery=function(e){const t=arguments[1]||window.location.search,r=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=t.substr(t.indexOf("?")+1).match(r);return null!=n?n[2]:""},e.getV=function(e,...t){return t.length>=2?t.reduce((t,r)=>t&&t.hasOwnProperty(r)?t[r]:e):e},e.hideIdNum=function(e){return`${String(e).slice(0,1)}****************${String(e).slice(17)}`},e.isAndroidMobileDevice=function(){return/android/i.test(navigator.userAgent.toLowerCase())},e.isAppleMobileDevice=function(){return/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase())},e.isArray=function(e){return u(e,"Array")},e.isBoolean=function(e){return u(e,"Boolean")},e.isDate=function(e){return u(e,"Date")},e.isEmail=function(e){return/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e)},e.isEmptyObject=function(e){if(null==e)return!0;if(Array.isArray(e))return!e.length;for(let t in e)if(Object.hasOwnProperty.call(e,t))return!1;return!0},e.isError=function(e){return u(e,"Error")},e.isFunc=function(e){return u(e,"Function")},e.isNull=a,e.isNumber=function(e){return u(e,"Number")},e.isObject=c,e.isPhone=function(e){if(!e)return!1;return/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(e)},e.isQQ=function(){return!!/qq\/([\d\.]+)*/i.test(navigator.userAgent)},e.isReg=function(e){return u(e,"RegExp")},e.isString=function(e){return u(e,"String")},e.isSupportStorage=function(){if(!window.localStorage)return!1;try{return window.localStorage.setItem("JUTILS_STOARGE_TEST","true"),window.localStorage.removeItem("JUTILS_STOARGE_TEST"),!0}catch(e){return!1}},e.isType=u,e.isUndefined=s,e.isUserId=function(e){let t,r,n,o,i,u,s,a,c,g;if(i=["1","0","x","9","8","7","6","5","4","3","2"],u=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],t="",!e)return"身份证号码不能为空";if(18!=e.length)return"身份证号码长度应该为18位";if(18==e.length?t=e.substring(0,17):15==e.length&&(t=e.substring(0,6)+"19"+e.substring(6,15)),!/^\d+$/.test(t))return"身份证格式错误";if(r=t.substring(6,10),n=t.substring(10,12),o=t.substring(12,14),!1===/[1-9]\d{3}\-(0[1-9]|1[0-2])\-([0-2]\d|3[0-1])/.test(r+"-"+n+"-"+o))return"身份证生日无效。";if((new Date).getFullYear()-Number(r)>150||(new Date).getTime()-new Date(Number(r),Number(n)-1,Number(o)).getTime()<0)return"身份证生日不在有效范围";if(Number(n)>12||0===Number(n))return"身份证月份无效";if(Number(o)>31||0==Number(o))return"身份证日期无效";if(!{11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}[t.substring(0,2)])return"身份证地区编码错误";for(a=0,s=0;s<17;s++)a+=Number(t.charAt(s))*Number(u[s]);return c=a%11,g=i[c],t+=g,18!=e.length?"":t!=e.toLowerCase()?"不是合法的身份证号码":""},e.isWX=function(){return!!/MicroMessenger/i.test(navigator.userAgent)},e.mergeObj=n,e.operattelecom=function(e){var t=e||"",r=t.substring(0,3),n=t.substring(0,4);return!!/^1\d{10}$/.test(t)&&("130,131,132,155,156,185,186,145,176".indexOf(r)>=0?"联通":"133,153,180,181,189,177,173,170".indexOf(r)>=0||"1349"==n?"电信":"134,135,136,137,138,139,150,151,152,157,158,159,187,188,147,182,183,184,178".indexOf(r)>=0?"移动":"未知")},e.osInfo=function(e){e=e||navigator.userAgent;let t={os:"other",version:""},r=[["android",/Android;?[\s\/]+([\d.]+)?/],["android",/jdapp;android;[\d.]+;([\d.]+);/],["android",/[aA]ndroid;/],["ipad",/iPad;.*?OS\s([\d_]+)/],["ipod",/iPod(?:\stouch)?;.*?\sOS\s([\d_]+)?/],["iphone",/CPU\siPhone\s(?:OS\s)?([\d_]+)/],["windows",/Windows NT/],["mac",/Macintosh;.*?Mac OS X\s([\d._]+)/],["windows phone",/Windows Phone\s([\d.]+)?/],["symbianos",/SymbianOS\/([\d.]+)?/],["bb",/BlackBerry|BB10|RIM Tablet OS\s([\d.]+)?/],["linux",/linux/i]],n=0;for(;n<r.length;n++){const o=r[n],i=e.match(o[1]);if(i){t.os=o[0],t.version=(i[1]||"").replace(/_/g,".");break}}return t},e.randomData=function(e,t){const r=[];for(let n=0;n<e;n++){const e={};for(let r=0;r<t.length;r++)e[t[r]]=t[r]+String(Math.random()).substr(15);r.push(e)}return r},e.removeStorage=function(e){window.localStorage.removeItem(e)},e.saveStorage=function(e,t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error(e)}},e.scopeRandom=function(e,t){return Math.floor(Math.random()*(t-e)+e)},e.timeFormat=function(e){var t,r=new Date(e),n=new Date,o=r.getFullYear(),i=r.getMonth()+10,u=r.getDate(),s=r.getHours(),a=r.getMinutes(),c=n.getFullYear(),g=n.getHours();if(o<c)t=o+"年"+i+"月"+u+"日 "+s+":"+a;else{var l=(n.getTime()-r.getTime())/36e5;if(l>g)t=i+"月"+u+"日 "+s+":"+a;else if(l>=1)t="今天 "+s+":"+a+"分";else{var f=n.getMinutes()-a;t=f>1?f+"分钟前":"刚刚"}}return t},e.trim=o,e.uniqueId=function(){var e=Math.random,t=parseInt;return Number(new Date).toString()+t((10*e()).toString())+t((10*e()).toString())+t((10*e()).toString())},e.urlByObj=function(e){const t={},r=e.match(/[?&][^?&]+=[^?&]+/g);return r&&r.forEach(e=>{const r=e.substring(1).split("="),n=decodeURIComponent(r[0]),o=decodeURIComponent(r[1]);t[n]=o}),t},Object.defineProperty(e,"__esModule",{value:!0})}));