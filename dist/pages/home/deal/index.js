"use strict";require(["../../../static/conf/config.js"],function(){require(["jquery","sw"],function(s,t){s(".tab-area .cate-item:gt(0)").hover(function(){s(this).css("background-color","#584946")},function(){s(this).css("background-color","#fe6434")}),s(document).scroll(function(){400<s(document).scrollTop()?s(".tab-area").addClass("fixed"):s(".tab-area").removeClass("fixed")});var i=window.location.search,e=window.location.search.split("goodId=")[1].split("&")[0];s(function(){s.ajax({url:"http://localhost:8000/deal",type:"get",dataType:"json",data:{goodId:e},success:function(t){s(".picture").attr("src","http://"+i.split("src=")[1].split("&")[0].split("//")[1].split(".jpg")[0]+".jpg"),s(".zk-content .title h1").text(decodeURI(window.location.search.split("title=")[1].split("&")[0])),s(".recommend").text(decodeURI(window.location.search.split("desc=")[1].split("&")[0])),s(".small-img1").attr("src","http://"+i.split("src=")[1].split("&")[0].split("//")[1].split(".jpg")[0]+".jpg"),s(".platform .count").text(i.split("yishou=")[1].split("&")[0]),s(".oprice").text("原价 ￥"+i.split("yuanjia=")[1].split("&")[0]),s(".int").text("￥"+i.split("price=")[1].split("&")[0].split(".")[0]),s(".decimal").text("."+i.split("price=")[1].split("&")[0].split(".")[1]),s.ajax({url:t.data,type:"get",dataType:"jsonp",jsonpCallback:"mtopjsonp1",success:function(t){t.data.wdescContent.pages.length;var e="";t.data.wdescContent.pages.forEach(function(t,s){var i="";-1!=t.indexOf("https://")?(i+=t.split("https://")[1].split("<")[0],e+="<img style='margin: 1px 5px;width:98%;' src='http://"+i+"'>"):-1!=t.indexOf(">//")?(i+=t.split(">//")[1].split("<")[0],e+="<img style='margin: 1px 5px;width:98%;' src='http://"+i+"'>"):e+=""}),s(".picture-content").append(e)}})}})}),s(".item-list-top span").on("click",function(){"none"==s(".picture-content").css("display")?s(".picture-content").css("display","block"):s(".picture-content").css("display","none")})})});