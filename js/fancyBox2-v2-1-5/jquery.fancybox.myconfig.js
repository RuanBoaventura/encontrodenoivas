/* ===== start page pictures inside ===== */
	
	/* ===== start album ===== */
		$(function(){

			$(document).ready(function() {
				$(".pictures-album-fancybox").fancybox();
			});

		});
	/* ===== end album ===== */
	
/* ===== end page pictures inside ===== */
	
	/* ==================== ==================== */
	
/* ===== start page partners ===== */
	
	/* ===== start lightbox calling ===== */
		$(document).ready(function() { 
			$(".partners-lightbox").fancybox({
				openEffect : 'none',
				closeEffect: 'none',
				nextEffect : 'none',
				prevEffect: 'none',
				openSpeed: '10',
				closeSpeed: '10',
				'speedIn': 10,
				'speedOut': 10,
				'overlayShow' : true, 
				'overlayOpacity' : 0.7, 
				'hideOnOverlayClick' : true, 
				'hideOnContentClick' : true, 
				'type' : 'iframe',
				'iframe': {'scrolling': 'no'}
			});
		});
	/* ===== end lightbox calling ===== */
	
/* ===== end page ppartners ===== */