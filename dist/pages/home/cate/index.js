"use strict";require(["../../../static/conf/config.js"],function(){require(["jquery","sw"],function(e,a){e(".tab-area .cate-item:gt(0)").hover(function(){e(this).css("background-color","#584946")},function(){e(this).css("background-color","#fe6434")}),e(".sort-type li:first").addClass("active"),e(".sort-type li").on("click",function(){e(this).siblings().removeClass("active"),e(this).addClass("active")}),e(document).scroll(function(){406<e(document).scrollTop()?(e(".tab-area").addClass("fixed"),e(".hori-cate-area").addClass("fixed")):(e(".tab-area").removeClass("fixed"),e(".hori-cate-area").removeClass("fixed"))});var s=window.location.search.split("=")[1],t=1,i="new";e(function(){e.ajax({url:"http://localhost:8000/cate",type:"get",data:{cid:s,sort:i,p:t},dataType:"json",success:function(a){for(var s="",t=0;t<a.data.length;t++){s+=t%5==4?"<div class='zk-item' style='margin:0'>":"<div class='zk-item'>",s+="<a class='fl goods-item' href='../deal/index.html?goodId="+a.data[t].goods_id+"&title="+a.data[t].title+"&href="+a.data[t].click_url+"&src="+a.data[t].img_url+"&desc="+a.data[t].seo_desc+"&yishou="+a.data[t].volume+"&yuanjia="+a.data[t].org_price+"&price="+a.data[t].price+"'>",s+="<img class='img-area' src='"+a.data[t].img_url+"'>",s+="<p class='title-area'>","taobao"==a.data[t].shop_type&&(s+="<i class='i_taobao'></i>"),"tmall"==a.data[t].shop_type&&(s+="<i class='i_tmall'></i>"),s+="<span class='post-free'>包邮</span>"+a.data[t].title,s+="</p>",s+="<div class='raw-price-area'>现价:￥"+a.data[t].org_price,s+="<p class='sold fr'>已售"+a.data[t].volume,s+="</div>",s+="<div class='info'>",s+="<div class='price-area'>",s+="<span class='price'>",s+="￥";var i=a.data[t].price.split(".");s+="<em class='number-font'>"+i[0]+"</em>",s+="<em class='decimal'>."+i[1]+"</em>",s+="<i></i>",s+="</span>",s+="</div>",s+="<span class='coupon-click'>券"+parseInt(a.data[t].coup_price)+"元",s+="</span></div></a></div>"}e(".zk-list").append(s)}})}),e(".sort-type li").on("click",function(){Array.from(e(".sort-type").children()).forEach(function(a){e(a).hasClass("active")&&(i=e(a).attr("data-sort"))}),e(".zk-list").children().remove(),e.ajax({url:"http://localhost:8000/cate",type:"get",dataType:"json",data:{cid:s,sort:i,p:t},success:function(a){for(var s="",t=0;t<a.data.length;t++){s+=t%5==4?"<div class='zk-item' style='margin:0'>":"<div class='zk-item'>",s+="<a class='fl goods-item' href='../deal/index.html?goodId="+a.data[t].goods_id+"&title="+a.data[t].title+"&href="+a.data[t].click_url+"&src="+a.data[t].img_url+"&desc="+a.data[t].seo_desc+"&yishou="+a.data[t].volume+"&yuanjia="+a.data[t].org_price+"&price="+a.data[t].price+"'>",s+="<img class='img-area' src='"+a.data[t].img_url+"'>",s+="<p class='title-area'>","taobao"==a.data[t].shop_type&&(s+="<i class='i_taobao'></i>"),"tmall"==a.data[t].shop_type&&(s+="<i class='i_tmall'></i>"),s+="<span class='post-free'>包邮</span>"+a.data[t].title,s+="</p>",s+="<div class='raw-price-area'>现价:￥"+a.data[t].org_price,s+="<p class='sold fr'>已售"+a.data[t].volume,s+="</div>",s+="<div class='info'>",s+="<div class='price-area'>",s+="<span class='price'>",s+="￥";var i=a.data[t].price.split(".");s+="<em class='number-font'>"+i[0]+"</em>",s+="<em class='decimal'>"+i[1]+"</em>",s+="<i></i>",s+="</span>",s+="</div>",s+="<span class='coupon-click'>券"+parseInt(a.data[t].coup_price)+"元",s+="</span></div></a></div>"}e(".zk-list").append(s)}})}),e("#moreCoupon").on("click",function(){t+=1,e.ajax({url:"http://localhost:8000/cate",type:"get",data:{cid:s,sort:i,p:t},dataType:"json",success:function(a){for(var s="",t=0;t<a.data.length;t++){s+=t%5==4?"<div class='zk-item' style='margin:0'>":"<div class='zk-item'>",s+="<a class='fl goods-item' href='../deal/index.html?goodId="+a.data[t].goods_id+"&title="+a.data[t].title+"&href="+a.data[t].click_url+"&src="+a.data[t].img_url+"&desc="+a.data[t].seo_desc+"&yishou="+a.data[t].volume+"&yuanjia="+a.data[t].org_price+"&price="+a.data[t].price+"'>",s+="<img class='img-area' src='"+a.data[t].img_url+"'>",s+="<p class='title-area'>","taobao"==a.data[t].shop_type&&(s+="<i class='i_taobao'></i>"),"tmall"==a.data[t].shop_type&&(s+="<i class='i_tmall'></i>"),s+="<span class='post-free'>包邮</span>"+a.data[t].title,s+="</p>",s+="<div class='raw-price-area'>现价:￥"+a.data[t].org_price,s+="<p class='sold fr'>已售"+a.data[t].volume,s+="</div>",s+="<div class='info'>",s+="<div class='price-area'>",s+="<span class='price'>",s+="￥";var i=a.data[t].price.split(".");s+="<em class='number-font'>"+i[0]+"</em>",s+="<em class='decimal'>."+i[1]+"</em>",s+="<i></i>",s+="</span>",s+="</div>",s+="<span class='coupon-click'>券"+parseInt(a.data[t].coup_price)+"元",s+="</span></div></a></div>"}e(".zk-list").append(s)}})}),e(".search-btn").on("click",function(){var a="new",s=1,t=Array.from(e(".search-input"))[0].value;window.location="../search/index.html?k="+t+"&sort="+a+"&p="+s})})});