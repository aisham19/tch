	/* Sub-title Animation */
$("#subTitle").typeIt({
	strings: ["The future of education within techh"], speed: 75, startDelay: 1000
}).tiPause(250).tiDelete(1).tiPause(250).tiType("!");
	/* Sub-title Animation */

	/* Bounce Button */
$(".ops").delay(4500).effect("bounce", {times: 5}, 750);
	/* Bounce Button */

	/* Hide Elements */
$("nav").hide();
$("#msg").hide();
$("#home").hide();
$("footer").hide();
$("#login").hide();
$("#thank").hide();
$("#signup").hide();
$("#attend").hide();
$("#submitHW").hide();
$(".footList").hide();
$("#schedule").hide();
$("#processing").hide();
	/* Hide Elements */

	/* Footer Submenu */
$(".fa-bars").click(function() {
	$(".footList").toggle(750);
}); 
	/* Footer Submenu */

	/* Main to Login */
$("#trigLog").click(function() {
	$("#main").fadeOut(750);
	$("#login").delay(500).fadeIn(750);
  $("#main").css("z-index", 0);
  $("#login").css("z-index", 1);
}); 
	/* Main to Login */

	/* Main to Sign Up */
$("#trigSign").click(function() {
	$("#main").fadeOut(750);
	$("#signup").delay(500).fadeIn(750);
  $("#main").css("z-index", 0);
  $("#signup").css("z-index", 1);
}); 
	/* Main to Sign Up */

	/* Sign Up to Main */
$("#sU2m").click(function() {
	$("#signup").fadeOut(750);
	$("#main").delay(500).fadeIn(750);
  $("#signup").css("z-index", 0);
  $("#main").css("z-index", 1);
}); 
	/* Sign Up to Main */

	/* Login to Main */
$("#lI2m").click(function() {
	$("#login").fadeOut(750);
	$("#main").delay(500).fadeIn(750);
  $("#login").css("z-index", 0);
  $("#main").css("z-index", 1);
}); 
	/* Login to Main */

	/* Login to Home */
$(function() {
  $("#logFull").click(function() {
	  $("#login").fadeOut(500);
	  $("#processing").delay(500).fadeIn(500).fadeOut(1500);
	  $("#home").delay(1750).fadeIn(500);
	  $("footer").delay(1750).fadeIn(500);
	  $("#login").css("z-index", 0);
	  $("#home").css("z-index", 1);
	  $("footer").css("z-index", 1);
  });
});
	/* Login to Home */

	/* Sign-In to Home */
$(function() {
  $("#signFull").click(function() {
	  $("#signup").fadeOut(500);
	  $("#processing").delay(500).fadeIn(500).fadeOut(1500);
	  $("#home").delay(1750).fadeIn(500);
	  $("footer").delay(1750).fadeIn(500);
	  $("#signup").css("z-index", 0);
	  $("#home").css("z-index", 1);
	  $("footer").css("z-index", 1);
  });
});
	/* Sign-In to Home */

	/* Home to Schedule */
$(function() {
  $(".fa-edit").click(function() {
	  $("#home").fadeOut(500);
	  $("#schedule").fadeIn(500);
	  $("#home").css("z-index", 0);
	  $("#schedule").css("z-index", 1);
	  $("footer").css("z-index", 1);
  });
});
	/* Home to Schedule */

	/* Schedule to Assignments */
$(function() {
  $("#trigAssign").click(function() {
	  $("#schedule").fadeOut(500);
	  $("#submitHW").fadeIn(500);
	  $("#home").css("z-index", 0);
	  $("#schedule").css("z-index", 1);
	  $("footer").css("z-index", 1);
  });
});
	/* Schedule to Assignments */

	/* Assignments to Thank */
$(function() {
  $("#subHW").click(function() {
	  $("#submitHW").fadeOut(500);
	  $("#thank").fadeIn(500);
	  $("#submitHW").css("z-index", 0);
	  $("#thank").css("z-index", 1);
	  $("footer").css("z-index", 1);
  });
});
	/* Assignments to Thank */

	/* Thank to Login */
$(function() {
  $("#logOut").click(function() {
	  $("#thank").fadeOut(500);
	  $("#login").fadeIn(500);
	  $("#thank").css("z-index", 0);
	  $("#login").css("z-index", 1);
  });
});
	/* Thank to Login */

	/* Thank to Login */
$(function() {
  $("#backHome").click(function() {
	  $("#thank").fadeOut(500);
	  $("#home").fadeIn(500);
	  $("#thank").css("z-index", 0);
	  $("#home").css("z-index", 1);
  });
});
	/* Thank to Login */

	/* Home to Attendance */
$(function() {
  $(".fa-calendar-o").click(function() {
	  $("#home").fadeOut(500);
	  $("#attend").fadeIn(500);
	  $("#home").css("z-index", 0);
	  $("#attend").css("z-index", 1);
	  $("footer").css("z-index", 1);
  });
});
	/* Home to Attendance */

	/* Home to Attendance */
$(function() {
  $(".fa-calendar-o").click(function() {
	  $("#home").fadeOut(500);
	  $("#attend").fadeIn(500);
	  $("#home").css("z-index", 0);
	  $("#attend").css("z-index", 1);
	  $("#a2H").css("z-index", 1);
	  $("footer").css("z-index", 1);
  });
});
	/* Home to Attendance */

	/* Attendance to Home */
$(function() {
  $("#a2H").click(function() {
	  $("#attend").fadeOut(500);
	  $("#home").fadeIn(500);
	  $("#attend").css("z-index", 0);
	  $("#home").css("z-index", 1);
  });
});
	/* Attendance to Home */

	/* Home to Messaging */
$(function() {
  $(".fa-comments").click(function() {
	  $("#home").fadeOut(500);
	  $("#msg").fadeIn(500);
	  $("#home").css("z-index", 0);
	  $("#msg").css("z-index", 1);
  });
});
	/* Home to Messaging */

	/* Messaging to Home */
$(function() {
  $("#m2H").click(function() {
	  $("#msg").fadeOut(500);
	  $("#home").fadeIn(500);
	  $("#msg").css("z-index", 0);
	  $("#home").css("z-index", 1);
  });
});
	/* Messaging to Home */

	/* Get File */
document.getElementById('get_file').onclick = function() {
  document.getElementById('my_file').click();
};
	/* Get File */