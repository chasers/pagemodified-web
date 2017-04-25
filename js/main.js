// Main JS File Unminified 
$(function(){

  /*
   * Mobile Nav
   */
	$('.mobile-toggle').click(function(event) {
	    event.preventDefault();
		$('.nav').toggleClass('nav-open');
	});

  /*
   * Scroll to 
   */
  $('[rel="scrollTo"]').click(function() {
      event.preventDefault();
      var tag = $(this).attr('data-scrollTo');
      scrollToAnchor(tag);
  });
  function scrollToAnchor(aid){
      var aTag = $('#'+ aid +'');
      $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  /*
   * Video Player Modal
   */
  $('a[rel="videoPlayerToggle"]').click(function(event) {
    event.preventDefault();
    var videoID = $(this).attr('data-videoID');
   
    $('#videoPlayerContainer iframe').attr('src','//www.youtube.com/embed/'+videoID+'?autoplay=1&autohide=1&modestbranding=1&rel=0&showinfo=0');
    $('#videoPlayerContainer').show('slow');
    
  });
  $('#videoPlayerContainer').click(function() {
    $('#videoPlayerContainer').hide('fast');
    $('#videoPlayerContainer iframe').attr('src','');
  });
});