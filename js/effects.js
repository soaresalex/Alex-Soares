// JavaScript Document

/* ------- CHANGE MENU TO CLOSE ICON ------- */
$(document).ready(function () {
	$("#menu").click(function (e) {
		e.preventDefault();
		if ($("#menu").hasClass("unclicked")) {
			$(this).removeClass("unclicked");
			$(this).addClass("clicked");
			$("#first-line").addClass("top-slant");
			$("#second-line").addClass("bottom-slant");
			$("#third-line").css("background", "#171B1E");
			$("#popup-menu").css("display", "block");
			$("body").css("overflow", "hidden");
		}
		else {
			$(this).addClass("unclicked");
			$(this).removeClass("clicked");
			$("#first-line").removeClass("top-slant");
			$("#second-line").removeClass("bottom-slant");
			$("#third-line").css("background", "#FFF");
			$("#popup-menu").css("display", "none");
			$("body").css("overflow", "scroll");
		}
	});
});

/* ------- DISPLAYS EXPERIENCE ON CLICK ------- */
$(document).ready(function () {
	$('#experience-btn').click(function (e) {
		e.preventDefault();
		$("#education").addClass("display-none");
		$("#skills").addClass("display-none");
		$("#experience").removeClass("display-none");
		$(this).addClass("active");
		$('#education-btn').removeClass("active");
		$('#skills-btn').removeClass("active");
	});
});

/* ------- DISPLAYS EDUCATION ON CLICK ------- */
$(document).ready(function () {
	$('#education-btn').click(function (e) {
		e.preventDefault();
		$("#experience").addClass("display-none");
		$("#skills").addClass("display-none");
		$("#education").removeClass("display-none");
		$(this).addClass("active");
		$('#experience-btn').removeClass("active");
		$('#skills-btn').removeClass("active");
	});
});

/* ------- DISPLAYS SKILLS ON CLICK ------- */
$(document).ready(function () {
	$('#skills-btn').click(function (e) {
		e.preventDefault();
		$("#experience").addClass("display-none");
		$("#education").addClass("display-none");
		$("#skills").removeClass("display-none");
		$(this).addClass("active");
		$('#experience-btn').removeClass("active");
		$('#education-btn').removeClass("active");
	});
});

/* ------- DISPLAYS BIO ON CLICK ------- */
$(document).ready(function () {
	$("#bio-btn").click(function (e) {
		e.preventDefault();
		$("#fun-facts").addClass("display-none");
		$("#bio").removeClass("display-none");
		$(this).addClass("active");
		$("#facts-btn").removeClass("active");
	});
});

/* ------- DISPLAYS FUN FACTS ON CLICK ------- */
$(document).ready(function () {
	$("#facts-btn").click(function (e) {
		e.preventDefault();
		$("#bio").addClass("display-none");
		$("#fun-facts").removeClass("display-none");
		$(this).addClass("active");
		$("#bio-btn").removeClass("active");
	});
});