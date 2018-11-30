// create sticky navbar
$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $("nav").addClass("change-nav");
    }
    else{
        $("nav").removeClass("change-nav");
    }
});

// create sticky navbar
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $(".nav").addClass("nav-change");
    }
    else {
        $(".nav").removeClass("nav-change");
    }
});
// change color a on scroll
$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $(".a").addClass("change-color");
    }
    else{
        $(".a").removeClass("change-color");
    }
});

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $(".nav-text").css({ "color": "#333" });
    }
    else {
        $(".nav-text").css({ "color": "#fff" });
    }
});

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $(".logo").css({ "color": "#ff6b6b" });
    }
    else {
        $(".logo").css({ "color": "#fff" });
    }
});
// show sidebar
$(document).ready(function () {
    $(".toggle-btn").click(function () {
        $("nav").toggleClass("active");
    })
});
