$(function(){
	
	
	
	if(getHash("type")){
		var a = getHash("type"),
			b = getHash("id");
		loadDetail(a,b)
	}
	

	function loadDetail(type,id){
		$.ajax({
			type: 'get',
			url: 'js/article.php',
			data: {
				'type' : type || "",
				'id' : id || ""
			},
			dataType: 'text',
			error: function(e){
				console.log(e)
			},
			success: function(data){

				data = JSON.parse(data).data;
				
//				$(".main>p").html(data.typeTitle);
//				$(".main>p").html(data.title);
//				$("#muban .create-date").html(data.creatAt);
//				$("#muban .create-user").html(data.creatByFullName);
//				$("#muban>.box>img").attr("src",data.coverImg);
				$(".main>p").html(data.content);
				
				console.log(data)
			}
		})
	}
	

	function getHash(name){
		var data = window.location.search.slice(1);
		var reg = new RegExp("(^|&)"+name+"=([a-zA-Z0-9]*)(&|$)");
		var res = reg.exec(data)
		
		if(res){
			return res[2];
		}else{
			return "";
		}
	}
})