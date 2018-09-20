$(function(){
	/*$(".list-header").load("header.html")
	$(".list-footer").load("footer.html")*/
	
	//当前请求第几页的数据
	var page = 0;
	
	configPage(page)
	function configPage(p){
		$.ajax({
			type:"get",
			url:"./js/list.php",
			data: {'id':p},
			dataType: "text",
			error: function(e){
				console.log(e)
			},
			success: function(res){
				if(p == 0){
					$(".main>ul").html("");
				}
				console.log(res)
				res = JSON.parse(res.slice(1))
				var listArr = res.data.list;
				$.each(listArr,function(k,v){
					
					var temp = $("#muban").clone().removeAttr("style");
					temp.find("img").attr('src',v.coverImg);
					temp.find(".text-title").html(v.title);
					temp.find(".text-data").html(v.creatAt);
					temp.find("p").html(v.describe);
					temp.attr("sysId",v.sysId);
					$(".main>ul").append(temp);
					
					console.log(temp)
				})
			}
			
		});
	}
	
	$(".more").click(function(){
		page++;
		if(page<3){
			configPage(page);
		}else{
			$(this).html("没有更多了。。")
		}
	})
	$(".news-one img").css({
		"width":260,
		"height":168
	})
	$(".main>ul").on("click","li",function(){
		window.location.href = "01.html?type=xiaoniaoNews&id="+$(this).attr("sysId")
		console.log("曹立忠")
	})
})
