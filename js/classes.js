/**
 * Add Class
 */
$(".btn_addClass").click(function () {
    $("h1, h2").addClass("blue");
    setTimeout(() => {
        $("p").addClass("bg_color");
    }, 300);
});
/**
 * Remove Class
 */
$(".btn_removeClass").click(function () {
    $("h1, h2").removeClass("blue");
    setTimeout(() => {
        $("p").removeClass("bg_color");
    }, 300);
});
/**
 * Toggle Class
 */
$(".btn_toggleClass").click(function () {
    setTimeout(() => {
        $("h1, h2").toggleClass("red");
    }, 300);
});
