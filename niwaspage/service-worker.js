"use strict";var precacheConfig=[["/niwaspage/index.html","49c79202b9f054104ef3c02d5b0ed674"],["/niwaspage/static/css/main.35bcaa7e.css","d59520aa2cdddcec3cba5740ad15e0c7"],["/niwaspage/static/js/main.7141c0fc.js","b319f15be9b83ae69787da4501fab8e9"],["/niwaspage/static/media/MAIN SLIDER 01.e7d09087.jpg","e7d0908729aac82e3d07d4bfeb5932b6"],["/niwaspage/static/media/MAIN SLIDER 02.9b2d5161.jpg","9b2d5161884e8e594d6b2711031ba49d"],["/niwaspage/static/media/brandon-grotesque-black-58a8a3e824392.b06b21dd.woff","b06b21ddadc77852396428cd9fa4a733"],["/niwaspage/static/media/brandon-grotesque-bold-italic-58a8a48221563.a0d9e388.woff","a0d9e3883b9a037fa9ab8d498bcec5cf"],["/niwaspage/static/media/brandon-grotesque-light-58a8a4b38001d.672276aa.woff","672276aa9f825b662a0e8b4b75aeb107"],["/niwaspage/static/media/brandon-grotesque-light-italic-58a8a4ccb88be.a1194084.woff","a11940842fbcda12064f127c070369ff"],["/niwaspage/static/media/brandon-grotesque-medium-italic-58a8a3c40866a.d6a46085.woff","d6a460856cc1dead8297e7de2d472e11"],["/niwaspage/static/media/brandon-grotesque-regular-italic-58a8a456c4724.094666b3.woff","094666b396aee4ce6035d2f83a10731c"],["/niwaspage/static/media/brandon-grotesque-thin-italic-58a8a3a8861fe.74cfae73.woff","74cfae73a6a3c8c3335c5ca45831c772"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/niwaspage/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});