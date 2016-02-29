
// Progress
$(window).scroll(function() {
    if ($(this).scrollTop() > 1500) {

    $("#pb-html").animate({
        width: "95%"
    }, 1150);

    $("#pb-css").animate({
        width: "87%"
    }, 1150);

    $("#pb-js").animate({
        width: "71%"
    }, 1150);

    $("#pb-boot").animate({
        width: "95%"
    }, 1150);

    $("#pb-wp").animate({
        width: "40%"
    }, 1150);

    $("#pb-ps").animate({
        width: "78%"
    }, 1150);

    $("#pb-ai").animate({
        width: "95%"
    }, 1150);

  }
});

// Colors

$('#pb-html').css({'background-color': "#951029"})
$('#pb-css').css({'background-color': "#951029"})
$('#pb-js').css({'background-color': "#00A59D"})
$('#pb-boot').css({'background-color': "#951029"})
$('#pb-wp').css({'background-color': "#00A59D"})
$('#pb-ps').css({'background-color': "#951029"})
$('#pb-ai').css({'background-color': "#951029"})

// Tooltips

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Modals

$('#open-preston-modal').click(function () {
    $('#preston-modal').modal('show');
});

$('#open-kitten-modal').click(function () {
    $('#kitten-modal').modal('show');
});

$('#open-tech-modal').click(function () {
    $('#tech-modal').modal('show');
});

$('#open-trendy-modal').click(function () {
    $('#trendy-modal').modal('show');
});
