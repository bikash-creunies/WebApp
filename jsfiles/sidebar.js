$(document).ready(function() {
    $("#cart").click(function() {
        $(".shopping-card").toggleClass("show");
    });
});
$(document).ready(function() {
    $("#notification").click(function() {
        $(".notification-card").toggleClass("show");
    });
});
$(document).ready(function() {
    $("#profile").click(function() {
        $(".profile-card").toggleClass("show");
        if ($('.notification-card.show').css('display') == 'block') {
            $('.notification-card').css('display') == 'none'
        }
    });
});

$(document).ready(function() {
    $("#sidebar-toggle-menu").click(function() {
        $("#content").toggleClass("content-full");
        $("#sidebar").toggleClass("sidebar-half");
        // $("ul.sidebar-list").css('display') == 'none';
        $("#sidebar-list-fake").toggleClass("show hide");
        $("#sidebar-list").toggleClass("hide show");
    });
});
$(document).ready(function() {
    $("ul.sidebar-list li").click(function() {
        $(this).find("ul").toggleClass("show");
        $(this).find("span").toggleClass("fa-angle-right fa-angle-down");
    });
});
$(document).ready(function() {
    $("ul.dashbord-sidemenu li").click(function() {
        $(this).find("a").addClass("active");
    });
});