"use strict";require(["../../../static/conf/config.js"],function(){require(["jquery","sw"],function(i,a){i(".tab-area .cate-item:gt(1)").hover(function(){i(this).addClass("active")},function(){i(this).removeClass("active")}),i(document).scroll(function(){417<i(document).scrollTop()?(i(".tab-area").addClass("fixed"),i(".fluid-left").addClass("fixed")):(i(".tab-area").removeClass("fixed"),i(".fluid-left").removeClass("fixed"))});var t=window.location.search.split("=")[1],d=1;i(function(){i.ajax({url:"http://localhost:8000/rank",type:"get",data:{cid:t,sort:"new",p:d},dataType:"json",success:function(a){for(var t="",d=0;d<a.data.length;d++)t+="<div>",t+="<div class='item'>",t+="<a  target='_black' href='../deal/index.html?goodId="+a.data[d].goods_id+"&title="+a.data[d].title+"&href="+a.data[d].click_url+"&src="+a.data[d].img_url+"&desc="+a.data[d].seo_desc+"&yishou="+a.data[d].volume+"&yuanjia="+a.data[d].org_price+"&price="+a.data[d].price+"'>",t+="<div class='img-area'>",t+="<img  src='"+a.data[d].img_url+"'></div></a>",t+="<a target='_black' href='../deal/index.html?goodId="+a.data[d].goods_id+"&title="+a.data[d].title+"&href="+a.data[d].click_url+"&src="+a.data[d].img_url+"&desc="+a.data[d].seo_desc+"&yishou="+a.data[d].volume+"&yuanjia="+a.data[d].org_price+"&price="+a.data[d].price+"'>",t+="<div class='content'>",t+="<div class='title'>"+a.data[d].title+"</div>",t+="<div claaa='desc'>"+a.data[d].rec_desc+"</div>","taobao"==a.data[d].shop_type&&(t+="<i class='i_taobao'></i>- 2小时销量"+a.data[d].volume+"件"),"tmall"==a.data[d].shop_type&&(t+="<i class='i_tmall'></i>- 2小时销量"+a.data[d].volume+"件"),t+=" <div class='price'><span class='normal'>券后价&nbsp;&nbsp;</span>"+a.data[d].price,t+="</div></div></a>",t+="<div class='right'><div class='btn'><a href='http://zshpldbz.com"+a.data[d].deal_url+"'target='_blank'>",t+=a.data[d].coup_price+"元券</a></div></div></div></div>";i("#couponList").append(t)}})}),i("#moreCoupon").on("click",function(){d+=1,i(function(){i.ajax({url:"http://localhost:8000/rank",type:"get",data:{cid:t,sort:"new",p:d},dataType:"json",success:function(a){for(var t="",d=0;d<a.data.length;d++)t+="<div>",t+="<div class='item'>",t+="<a  target='_black' href='../deal/index.html?goodId="+a.data[d].goods_id+"&title="+a.data[d].title+"&href="+a.data[d].click_url+"&src="+a.data[d].img_url+"&desc="+a.data[d].seo_desc+"&yishou="+a.data[d].volume+"&yuanjia="+a.data[d].org_price+"&price="+a.data[d].price+"'>",t+="<div class='img-area'>",t+="<img  src='"+a.data[d].img_url+"'></div></a>",t+="<a target='_black' href='../deal/index.html?goodId="+a.data[d].goods_id+"&title="+a.data[d].title+"&href="+a.data[d].click_url+"&src="+a.data[d].img_url+"&desc="+a.data[d].seo_desc+"&yishou="+a.data[d].volume+"&yuanjia="+a.data[d].org_price+"&price="+a.data[d].price+"'>",t+="<div class='content'>",t+="<div class='title'>"+a.data[d].title+"</div>",t+="<div claaa='desc'>"+a.data[d].rec_desc+"</div>","taobao"==a.data[d].shop_type&&(t+="<i class='i_taobao'></i>- 2小时销量"+a.data[d].volume+"件"),"tmall"==a.data[d].shop_type&&(t+="<i class='i_tmall'></i>- 2小时销量"+a.data[d].volume+"件"),t+=" <div class='price'><span class='normal'>券后价&nbsp;&nbsp;</span>"+a.data[d].price,t+="</div></div></a>",t+="<div class='right'><div class='btn'><a href='http://zshpldbz.com"+a.data[d].deal_url+"'target='_blank'>",t+=a.data[d].coup_price+"元券</a></div></div></div></div>";i("#couponList").append(t)}})})}),i(".search-btn").on("click",function(){var a="new",t=1,d=Array.from(i(".search-input"))[0].value;window.location="../search/index.html?k="+d+"&sort="+a+"&p="+t})})});