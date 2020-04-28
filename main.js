$(".imagen").click(function(e){
	var enlaceImagen=e.target.src;
	var data=$(this).attr("data");
	var ligthbox='<div class="ligthbox">'+
						'<img src="'+enlaceImagen+'" alt="" id="zoom_mw" data-zoom-image="'+data+'">'+
						'<div class="btn-close"> X</div>'+
				   '</div>';
				   
	$("body").append(ligthbox);
	$("#zoom_mw").elevateZoom({scrollZoom : true});
	$(".btn-close").click(function(){
		$(".ligthbox").remove();
	})
	
	
	
})