$(document).ready(function() {
  $("button#normal-background").click(function() {
    $("body").removeClass();
    $("body").addClass("normal-background");
  });

  $("button#invert-background").click(function() {
    $("body").removeClass();
    $("body").addClass("invert-background");
  });

});
