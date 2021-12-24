$(document).ready(function() {
    $(".std_number").click(function() {

        $(this).addClass("active");
        $(".year").removeClass("active");
        $(".class").removeClass("active");
        $("#std_nmb").show("fadein");
        $("#year").hide();
        $("#class").hide();

    });
});
$(document).ready(function() {
    $(".year").click(function() {

        $(this).addClass("active");
        $(".std_number").removeClass("active");
        $(".class").removeClass("active");
        $("#std_nmb").hide();
        $("#year").show("fadein");
        $("#class").hide();

    });
});
$(document).ready(function() {
    $(".class").click(function() {
        $(this).addClass("active");
        $(".year").removeClass("active");
        $(".std_number").removeClass("active");
        $("#std_nmb").hide();
        $("#year").hide();
        $("#class").show("fadein");

    });
});