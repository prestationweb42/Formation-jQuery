/**
 * Hide - Show
 */
$(".btn_hide").click(() => {
    $(".hide_show").hide(500);
});
$(".btn_show").click(() => {
    $(".hide_show").show(1000);
});

/**
 * Toggle Hide Show
 */
$(".btn_toggle").click(() => {
    $(".toggle").toggle(500);
});

/**
 * Fade In Out
 */
$(".btn_fadein").click(() => {
    $(".fadeIn").fadeIn(500);
});
$(".btn_fadeout").click(() => {
    $(".fadeIn").fadeOut(500);
});

/**
 * Toggle Fade In Out
 */
$(".btn_fadeToggle").click(() => {
    $(".fadeToggle").fadeToggle(500);
});

/**
 * Slide Up Slide Down
 */
$(".btn_slideUp").click(() => {
    $(".slide").slideUp(500);
});
$(".btn_slideDown").click(() => {
    $(".slide").slideDown(500);
});

/**
 * Toggle Slide Up Slide Down
 */
$(".btn_slideToggle").click(() => {
    $(".slide_toggle").slideToggle(500);
});

/**
 * Animate
 */
$(".btn_animate").click(() => {
    $(".animate").animate({
        marginLeft: 100,
        marginTop: 50,
    });
});

/**
 * Animate Many Properties
 */
$(".btn_animates").click(() => {
    setTimeout(() => {
        $(".animates").animate({
            left: "100px",
            opacity: "0.5",
            height: "150px",
            width: "150px",
        });
    }, 500);
    setTimeout(() => {
        $(".test_8").animate({
            height: "250px",
        });
    }, 400);
});

/**
 * Remove
 */
$(".btn_remove").click(function () {
    setTimeout(() => {
        $(".removes").remove();
    }, 400);
});

/**
 * Empty
 */
$(".btn_empty").click(function () {
    setTimeout(() => {
        $("#div1").empty();
    }, 400);
});
