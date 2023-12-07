$(".burger").click(function() {
    $(this).toggleClass("burger-active")
    $(".menu").toggleClass("menu-active")
    $("body").toggleClass("lock")
})