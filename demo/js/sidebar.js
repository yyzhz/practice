if(localStorage.getItem("shop")){var jsonObj=JSON.parse(localStorage.getItem("shop"));$(".navico-cartnum").html(Object.keys(jsonObj).length)}$(document).scroll(function(t){400<=$(document).scrollTop()?$(".topnav").addClass("topnavtitle"):$(".topnav").removeClass("topnavtitle")}),localStorage.getItem("user")||$(".fixedenav .mycart .navico-cartnum").html("0"),$(".topnav").click(function(){$(document).scrollTop(0)}),$(".fixedenav .mycart").click(function(){localStorage.getItem("user")?open("./shopCart.html"):$(".lkq-login").css("display","block")});