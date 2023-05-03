
//   ---------------------- new arrival ---------------

$(".new-arrival-image>img").on("mouseenter", function () {
    $(this).addClass("arrival_img");
})
$(".new-arrival-image>img").on("mouseleave", function () {
    $(this).removeClass("arrival_img");
})

$(".new-arrival-img>img").on("mouseenter", function () {
    $(this).addClass("arrival_img");
})
$(".new-arrival-img>img").on("mouseleave", function () {
    $(this).removeClass("arrival_img");
})
//   ---------------------- new arrival ---------------

$(".blog-image").on("mouseenter", function () {
    $(this).addClass("blog-image-overlay")
})
$(".blog-image").on("mouseleave", function () {
    $(this).removeClass("blog-image-overlay")
})

// --------- scroll up -----------

$(window).on('scroll',function () {
    if ($(this).scrollTop() > 600) {
        $('.return-to-top').fadeIn();
    } else {
        $('.return-to-top').fadeOut();
    }
});
$('.return-to-top').on('click',function(){
        $('html, body').animate({
        scrollTop: 0
    }, 1500);
    return false;
});

// ----------- scroll to each section ---------
// var container = $('div');

// function newArrival() {
//     var scrollTo = $("#new-arrival-section");
//     //calculate the new position of the scroll bar
//     var position = scrollTo.offset().top - container.offset().top + container.scrollTop();

//     // animate the scrolling effect
//     container.animate({
//         scrollTop: position
//     });
// }