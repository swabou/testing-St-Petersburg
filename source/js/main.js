$( ".dotted" ).click(function() {
  $( ".menu-list" ).slideToggle( "slow", function() {
    // Animation complete.
  });
  $( ".menu-list" ).css("display", "flex");
});

$( ".menu-list__item--sub" ).click(function() {
  $( ".submenu" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

$( ".worker-content--ronald" ).click(function() {
  $( ".hidden-box--ronald" ).slideToggle( "slow", function() {
    // Animation complete.
  });
  $( ".information" ).css({"top":"-70px", "left":"20px", "position":"absolute"});
});

$( ".worker-content--roy" ).click(function() {
  $( ".hidden-box--roy" ).slideToggle( "slow", function() {
    // Animation complete.
  });
  $( ".information" ).css({"top":"-70px", "left":"20px", "position":"absolute"});
});

$( ".worker-content--glenn" ).click(function() {
  $( ".hidden-box--glenn" ).slideToggle( "slow", function() {
    // Animation complete.
  });
  $( ".information" ).css({"top":"-70px", "left":"20px", "position":"absolute"});
});