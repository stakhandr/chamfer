// Create the dropdown base
var nav = $("#main-nav");
$("<select class='nav-select visible-xs' />").appendTo(nav);
var select = nav.find("select");

// Populate dropdown with menu items
nav.find("a").each(function() {
	var el = $(this);
		$("<option />", {
		"value"   : el.attr("href"),
		"text"    : el.text()
	}).appendTo("nav select");
});

$("nav select").change(function() {
	window.location = $(this).find("option:selected").val();
});

$('#slider').slick({
	infinite: false,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
		{
		breakpoint: 1024,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true
			}
		},
		{
		breakpoint: 768,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		},
		{
		breakpoint: 320,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
	]
});