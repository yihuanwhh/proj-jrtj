"use strict";require(["../../../static/conf/config.js"],function(){require(["jquery","vali","bootstrap"],function(s,e,o){s(".regis").bind("click",function(){var e={username:s(".username").val(),password:s(".password").val(),login:!1,goodslist:{}},o=[],n=!0;if(localStorage.getItem("yonghu")){console.log(localStorage.getItem("yonghu")),o=JSON.parse(localStorage.getItem("yonghu")),console.log(o);for(var r=0;r<o.length;r++)o[r].username==e.username&&(console.log(o[r].username),console.log(e.username),n=!1,alert("用户名已存在"))}n&&o.push(e),window.localStorage.setItem("yonghu",JSON.stringify(o))})})});