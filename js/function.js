$drawber = new function(){
	var publicObj = {
	init : function(){
		var alatlng = new google.maps.LatLng(35.704443, 139.6375);
		var aOp = {
		  zoom: 17,
		  center: alatlng,
		  disableDefaultUI: true,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var asagayaMap = new google.maps.Map(document.getElementById("asagayaMap"), aOp);
		
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(35.704443, 139.638596), 
			map: asagayaMap
		});   
		
		
		var klatlng = new google.maps.LatLng(35.704201, 139.65105);
		var kOp = {
		  zoom: 17,
		  center: klatlng,
		  disableDefaultUI: true,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var kouenjiMap = new google.maps.Map(document.getElementById("kouenjiMap"), kOp);
		
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(35.704201, 139.65105), 
			map: kouenjiMap
		});  
	  }
	}
	
	return publicObj;
	
}

$(document).ready(function(){
	$(".gmapLink").fancybox({
		'titlePosition'		: 'inside',
		'transitionIn'		: 'none',
		'transitionOut'		: 'none'
	});
	$drawber.init();
});