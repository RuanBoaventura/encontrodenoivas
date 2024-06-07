/* ===== start page index ===== */
	
	/* ===== start header ===== */
		$(function(){
			$(document).ready(function() {
				var owl = $(".page-index-header-owl-carousel");

				owl.owlCarousel({
					autoPlay : false,
					stopOnHover : true,
					mouseDrag : false,
					touchDrag : false,
					lazyLoad : true,
					lazyFollow : true,
					lazyEffect: "fade",
					singleItem : true,
					
					navigation : false,
					slideSpeed : 5000,
					paginationSpeed : 5000,
					rewindSpeed : 5000,
					transitionStyle : "fade"
				});
			});
		});
	/* ===== end header ===== */
	
	/* ===== start bottom ===== */
		$(function(){
			$(document).ready(function() {
				var owl = $(".page-index-partners-owl-carousel");
				
				owl.owlCarousel({
					autoPlay : 5000,
					stopOnHover : true,
					mouseDrag : true,
					touchDrag : true,
					lazyLoad : true,
					lazyFollow : true,
					lazyEffect: "fade",
					singleItems: true,
					items: 1,
					itemsDesktop : [1199,1],
					itemsTablet: [768,1],
					itemsMobile: [479,1],
					itemsCustom: [100, 1],
					
					navigation : false,
					pagination: false,
					slideSpeed : 2500,
					paginationSpeed : 2500,
					rewindSpeed : 2500
				});
				
				$(".partners-prev-btn").click(function(){	/* ===== nome da div/button programado para ser o "anterior" ao clicar ===== */
					$(".page-index-partners-owl-carousel").trigger('owl.prev');	/* ===== nome da div programada para ser o o slider ===== */
				});
				
				$(".partners-next-btn").click(function(){	/* ===== nome da div/button programado para ser o "anterior" ao clicar ===== */
					$(".page-index-partners-owl-carousel").trigger('owl.prev');	/* ===== nome da div programada para ser o o slider ===== */
				});
			});
		});
	/* ===== end bottom ===== */
	
/* ===== end page index ===== */
	
	/* ==================== ==================== */
	
/* ===== start page hints and news ===== */
	
	/* ===== start posts ===== */
		$(function(){
			$(document).ready(function() {
				var owl = $(".hintsnews-posts-owl-carousel");

				owl.owlCarousel({
					autoPlay : false,
					stopOnHover : true,
					mouseDrag : false,
					touchDrag : false,
					lazyLoad : true,
					lazyFollow : true,
					lazyEffect: "fade",
					singleItems: true,
					items: 1,
					itemsDesktop : [1199,1],
					itemsTablet: [768,1],
					itemsMobile: [479,1],
					itemsCustom: [100, 1],
					
					navigation : false,
					pagination: false,
					slideSpeed : 2500,
					paginationSpeed : 2500,
					rewindSpeed : 2500
				});
				
				$(".hintsnews-prev-btn").click(function(){	/* ===== nome da div/button programado para ser o "anterior" ao clicar ===== */
					$(".hintsnews-posts-owl-carousel").trigger('owl.prev');	/* ===== nome da div programada para ser o o slider ===== */
				});
				
				$(".hintsnews-next-btn").click(function(){	/* ===== nome da div/button programado para ser o "anterior" ao clicar ===== */
					$(".hintsnews-posts-owl-carousel").trigger('owl.prev');	/* ===== nome da div programada para ser o o slider ===== */
				});
			});
		});
	/* ===== end posts ===== */
	
/* ===== end page hints and news ===== */
	
	/* ==================== ==================== */
	
/* ===== start page pictures inside ===== */
	
	/* ===== start album ===== */
		$(function(){
			$(document).ready(function() {
				var owl = $(".album");

				owl.owlCarousel({
					autoPlay : false,
					stopOnHover : true,
					mouseDrag : true,
					touchDrag : true,
					lazyLoad : true,
					lazyFollow : true,
					lazyEffect: "fade",
					singleItems: true,
					items: 1,
					itemsDesktop : [1199,1],
					itemsTablet: [768,1],
					itemsMobile: [479,1],
					itemsCustom: [100, 1],
					
					navigation : false,
					pagination: false,
					slideSpeed : 2500,
					paginationSpeed : 2500,
					rewindSpeed : 2500
				});
				
				$(".pictures-prev-btn").click(function(){	/* ===== nome da div/button programado para ser o "anterior" ao clicar ===== */
					$(".album").trigger('owl.prev');	/* ===== nome da div programada para ser o o slider ===== */
				});
				
				$(".pictures-next-btn").click(function(){	/* ===== nome da div/button programado para ser o "anterior" ao clicar ===== */
					$(".album").trigger('owl.prev');	/* ===== nome da div programada para ser o o slider ===== */
				});
			});
		});
	/* ===== end album ===== */
	
/* ===== end page pictures inside ===== */
	
	/* ==================== ==================== */
	
/* ===== start page videos ===== */
	
	/* ===== start album ===== */
		$(function(){
			$(document).ready(function() {
				var owl = $(".videos-owl-carousel");

				owl.owlCarousel({
					autoPlay : false,
					stopOnHover : true,
					mouseDrag : true,
					touchDrag : true,
					lazyLoad : true,
					lazyFollow : true,
					lazyEffect: "fade",
					singleItems: true,
					items: 1,
					itemsDesktop : [1199,1],
					itemsTablet: [768,1],
					itemsMobile: [479,1],
					itemsCustom: [100, 1],
					
					navigation : false,
					pagination: false,
					slideSpeed : 2500,
					paginationSpeed : 2500,
					rewindSpeed : 2500
				});
				
				$(".videos-prev-btn").click(function(){	/* ===== nome da div/button programado para ser o "anterior" ao clicar ===== */
					$(".videos-owl-carousel").trigger('owl.prev');	/* ===== nome da div programada para ser o o slider ===== */
				});
				
				$(".videos-next-btn").click(function(){	/* ===== nome da div/button programado para ser o "anterior" ao clicar ===== */
					$(".videos-owl-carousel").trigger('owl.prev');	/* ===== nome da div programada para ser o o slider ===== */
				});
			});
		});
	/* ===== end album ===== */
	
/* ===== end page videos ===== */