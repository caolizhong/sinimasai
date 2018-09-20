$(function(){
	var h = $(window).innerHeight()-$(".headerCon").height();
	console.log(h)
	$(".screen").height(h).children().find("li").height(h);
	$(".screen>ul>li").css("background","#241B19")
	$(".contain img").height(h);
	$(".contain").height(h);
	$(".pppiiiccc li").css({
		"height":80,
		"width":80
	})
//轮播图
//自动轮播
	$(".contain ul li").first().clone().appendTo($(".contain ul"))
	var n = 0;
	var m = 0;
	var time = null;
	time=setInterval(function(){
			n++;
			if(n == 4){
				$(".contain ul").css({left:0});
				n = 1;
			}
			$(".first-pic").hide()
			$(".contain ul").stop().animate({
			left:-1400*n
			},1000)
			/*if(m == 5){
				m = -1;
			}
			m++;
			$("ol>li").css("background","white")
			$("ol>li").eq(m).css("background","black")*/
		},3000)
	$(".come-left").hover(function(){
		clearInterval(time)
	},function(){
		time=setInterval(function(){
			n++;
			if(n == 4){
				$(".contain ul").css({left:0});
				n = 1;
			}
			$(".first-pic").hide()
			$(".contain ul").stop().animate({
			left:-1400*n
			},1000)
			/*if(m == 5){
				m = -1;
			}
			m++;
			$("ol>li").css("background","white")
			$("ol>li").eq(m).css("background","black")*/
		},3000)
	})
	$(".come-right").hover(function(){
		clearInterval(time)
	},function(){
		time=setInterval(function(){
			n++;
			if(n == 4){
				$(".contain ul").css({left:0});
				n = 1;
			}
			$(".first-pic").hide()
			$(".contain ul").stop().animate({
			left:-1400*n
			},1000)
			/*if(m == 5){
				m = -1;
			}
			m++;
			$("ol>li").css("background","white")
			$("ol>li").eq(m).css("background","black")*/
		},3000)
	})
//左右焦点
	$(".come-right").click(function(){
		n++;
		if (n == 4){
                $(".contain ul").css({ left: 0 });
                n = 1;
            }
			$(".contain ul").animate({
			left:-1400*n
		},1000)
			/*if(m == 2){
				m = -1;
			}
			m++;
			$("ol>li").css("background","white")
			$("ol>li").eq(m).css("background","black")*/
	})
	$(".come-left").click(function(){
		n--;
		if (n == -1) {
                $(".contain ul").css({ left: -3 * 1400 });
                n = 2;
            }
		$(".contain ul").animate({
		left:-1400*n
		},1000)
			/*if(m == 0){
				m = 6;
			}
			m--;
			$("ol>li").css("background","white")
			$("ol>li").eq(m).css("background","black")*/
	})
	//关于狼人杀
	$(".s-one").click(function(){
		$(".wolf-coming").fadeIn("slow")
		$(".wolf-coming-2").fadeOut("fast")
		$(".wolf-coming-3").fadeOut("fast")
	})
	$(".s-two").click(function(){
		$(".wolf-coming-2").fadeIn("slow")
		$(".wolf-coming").fadeOut("fast")
		$(".wolf-coming-3").fadeOut("fast")
	})
	$(".s-three").click(function(){
		$(".wolf-coming-3").fadeIn("slow")
		$(".wolf-coming").fadeOut("fast")
		$(".wolf-coming-2").fadeOut("fast")
	})
	$(".s-four").click(function(){
		$(".wolf-coming-3").fadeIn("slow")
		$(".wolf-coming").fadeOut("fast")
		$(".wolf-coming-2").fadeOut("fast")
	})
	
	//饭局狼人杀
	$(".intro i").click(function(){
		$(this).toggleClass("ii")
		$(".intro .resplay").toggleClass("hideplay")
	})
	//百叶窗
	$(".pppiiiccc ul li img").each(function(i){
		$(this)[0].src = "secondimg/windows/"+i+".jpg"
		$(this).css({
			"width":80,
			"height":80,
			"opacity":0.6,
			"cursor":"pointer"
		})
	})
	$(".aaa").hover(function(){
		$(".right-nav a img").css({
			"opacity":1
		})
	},function(){
		$(".right-nav a img").css({
			"opacity":0.6
		})
	})
	$(".tuce").click(function(){
		$(".yezi").show()
	})
	$(".chacha").click(function(){
		$(".yezi").hide()
	})
	/*$(".yezi").click(function(){
		$(this).hide()
	})*/
	//小轮播
	var l = 0;
	$(".left-pic span").html((1)+"/"+28)
	$(".down").click(function(){
		l++;
		if (l <= 24){
                $(".pppiiiccc ul").stop().animate({
				top:-80*l
			},1000)
        }else{
        	l--;
        }
//      $(".left-pic span").html((l+1)+"/"+28)
		console.log(l)
	})
	$(".down-pic").click(function(){
		l+=4;
		if (n <= 20){
                $(".pppiiiccc ul").stop().animate({
				top:-80*l
			},1000)
        }else{
        	l-=4;
        }
//      $(".left-pic span").html((l+1)+"/"+28)
		console.log(l)
	})
	$(".up").click(function(){
		l--;
		if (l >= 0){
                $(".pppiiiccc ul").stop().animate({
				top:-80*l
			},1000)
        }else{
        	l++
        }
//      $(".left-pic span").html((l+1)+"/"+28)
		console.log(l)
	})
	$(".prefer-pic").click(function(){
		l-=4;
		if (l > 3){
                $(".pppiiiccc ul").stop().animate({
				top:-80*l
			},1000)
        }else{
        	l+=4
        }
//      $(".left-pic span").html((l+1)+"/"+28)
		console.log(l)
	})
	$(".pppiiiccc ul li").click(function(){
		$(this).children().css("opacity",1)
		$(this).siblings().children().css("opacity",0.6) 
		$(".left-pic img")[0].src = $(this).children()[0].src
		console.log(($(this).index()+1)+"/"+28)
		$(".left-pic span").html(($(this).index()+1)+"/"+28)
	})
	$(".pppiiiccc ul li").hover(function(){
		$(this).children().css("opacity",1)
		$(this).siblings().children().css("opacity",0.6) 
	})
	
	
	
	
	//整屏滑动
	//获取当前页面的地址栏
	var pageHash = window.location.hash.slice(1);
	console.log(pageHash)
	//如果存在哈希值，滑动到指定屏幕
	if(pageHash){
		$(".screen>ul").animate({"top":$(".screen").height()*-pageHash},2000,function(){
			flag = true;
		})
	}
	
//	多次滚动鼠标，算触发事件
	var count = 0;
	//记录当前的屏幕
	var screenIndex = 0;
	//节流阀
	var flag = true;
	MouseWheel($(document)[0],function(e,down){
		if(count > 5){
			//滚轮向上，页面向下
			if(down){
				console.log(count,screenIndex,flag)
				//如果当前屏数没到第一屏，允许滑动
				if(screenIndex > 0){
					//开关允许，执行滑动
					if(flag == true){
						flag = false;
						screenIndex--;
						var target = $(".screen").height();
						$(".screen>ul").animate({"top":-target*screenIndex},1000,function(){
							flag = true;
						})
					}
					console.log(count,screenIndex,flag)
				}
				
				count = 0;
			}else{
				console.log(count,screenIndex,flag)
				
				//如果当前屏数没到最后一屏，允许滑动
				if(screenIndex < $(".screen>ul>li").length-1){
					//开关允许，执行滑动
					if(flag == true){
						flag = false;
						screenIndex++;
						var target = $(".screen").height();
						$(".screen>ul").animate({"top":-target*screenIndex},1000,function(){
							flag = true;
						})
					}
					console.log(count,screenIndex,flag)
				}
				
				count = 0;
			}
		}
		count++;
	})

})
