(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1164:function(e,t,n){"use strict";n.r(t);var r=n(78),c=n(14),d=(n(53),n(146),n(29),n(98),{data:function(){return{address1:"",address2:"",msg:""}},methods:{getAddress:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=[],!window.ethereum){t.next=9;break}return t.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:n=t.sent,e.address1=n[0],t.next=18;break;case 9:if(!window.web3){t.next=16;break}return t.next=12,window.web3.eth.getAccounts();case 12:n=t.sent,e.address2=n[0],t.next=18;break;case 16:return e.msg="ERROR: ethereum- ".concat(Object(r.a)(window.ethereum)," web3- ").concat(Object(r.a)(window.web3)),t.abrupt("return");case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(0),e.msg=t.t0.toString();case 23:case"end":return t.stop()}}),t,null,[[0,20]])})))()}}}),o=n(32),component=Object(o.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-button",{attrs:{type:"info",id:"button"},on:{click:e.getAddress}},[e._v("按钮")]),e._v("\n  "+e._s(e.msg)+"\n  "),n("br"),e._v("\n  eth:\n  "),n("div",{attrs:{id:"eth"}},[e._v(e._s(e.address1))]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v("\n  web3\n  "),n("div",{attrs:{id:"web3"}},[e._v(e._s(e.address2))])],1)}),[],!1,null,null,null);t.default=component.exports}}]);