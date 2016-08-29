$(function() {

var state = true;
    $('.drop').hover(function() {
      if ( state ) {
        $( ".submenu" ).animate({backgroundColor: "#aaa",width: 150,marginLeft: 90}, 600 );
      } else {
        $( ".submenu" ).animate({backgroundColor: "#aa0000",width: 110,marginLeft: 0}, 1 );}
      state = !state;
    });

    var st = true;
    $('.subdrop').hover(function() {
      if ( st ) {
        $( ".undersubmenu" ).animate({backgroundColor: "#aaa",width: 150,marginLeft: 90}, 600 );
      } else {
        $( ".undersubmenu" ).animate({backgroundColor:"#0CF",width: 110,marginLeft: 0}, 1 );}
      st = !st;
    });
});



// $('.drop').hover(function() {
	// 	$('.submenu').animate({marginLeft: 90, opacity: 1}, 2000)	
	// }, function() {
	// 	$('.submenu').animate({marginLeft: 0,opacity: 0}, 1)
	// });
	// $('.subdrop').hover(function() {
	// 	$('.undersubmenu').animate({marginTop: 90, opacity: 1}, 600)	
	// }, function() {
	// 	$('.undersubmenu').animate({marginTop: 0,opacity: 0}, 1)
	// });