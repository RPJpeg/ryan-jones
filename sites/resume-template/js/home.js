$(document).ready(function() {

  $("#licensing").click(function(e){
      $("#content-box").hide();
      $("#licensing-box").show();
      $("#specialist-box").hide();
      $("#services-box").hide();
      e.preventDefault();
  });

  $("#content").click(function(e){
      $("#content-box").show();
      $("#licensing-box").hide();
      $("#specialist-box").hide();
      $("#services-box").hide();
      e.preventDefault();
  });

  $("#specialist").click(function(e){
      $("#content-box").hide();
      $("#licensing-box").hide();
      $("#specialist-box").show();
      $("#services-box").hide();
      e.preventDefault();
  });

  $("#services").click(function(e){
      $("#content-box").hide();
      $("#licensing-box").hide();
      $("#specialist-box").hide();
      $("#services-box").show();
      e.preventDefault();
  });

  $("#qualifications").click(function(e) {
    $("#overlay").fadeTo(300,1)
    $("#qualifications-modal").fadeTo(300,1)
    e.preventDefault();
  });

  $("#accomplishments").click(function(e) {
    $("#overlay").fadeTo(300,1)
    $("#accomplishments-modal").fadeTo(300,1)
    e.preventDefault();
  });

  $("#highlights").click(function(e) {
    $("#overlay").fadeTo(300,1)
    $("#highlights-modal").fadeTo(300,1)
    e.preventDefault();
  });

  $("#overlay").click(function(e) {
    $("#overlay").delay(300).css("display", "none");
    $("#qualifications-modal").delay(300).css("display", "none");
    $("#accomplishments-modal").delay(300).css("display", "none");
    $("#highlights-modal").delay(300).css("display", "none");
    e.preventDefault();
  });

  $("closeit").click(function(e) {
    $("#overlay").delay(300).css("display", "none");
    $("#qualifications-modal").delay(300).css("display", "none");
    $("#accomplishments-modal").delay(300).css("display", "none");
    $("#highlights-modal").delay(300).css("display", "none");
    e.preventDefault();
  });

});
