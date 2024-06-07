/* ===== start page guide ===== */
	
	/* ===== start products ===== */
		jQuery(document).ready(function ($) {
			/* jQuery activation and setting options for second tabs, enabling multiline*/
			$(".wrapper .page-guide .container .content .posts").zozoTabs({
				position: "top-left",
				theme: "white",
				style: "clean",
				shadows: true,
				mobileNav: false,
				multiline: false,
				bordered: true,
				orientation: "vertical",
				size: "medium",
				animation: {
					easing: "css",
					duration: 300,
					effects: "slideV"
				}
			});
		});
	/* ===== end products ===== */
	
/* ===== end page guide ===== */