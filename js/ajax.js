/**
 * Load Content
 */
$(".btn_ajax").click(() => {
    $(".ajax_text").load("ajax_text.txt");
});

/**
 * Get Ajax
 */
$(".btn_get_ajax").click(function () {
    $.get("ajax_text.asp", function (data, status) {
        alert("Data: " + data + status);
    });
});

/**
 * Post Ajax
 */
$(".btn_post_ajax").click(function () {
    $.post(
        "ajax_text.asp",
        {
            name: "Donald Duck",
            city: "Duckburg",
        },
        function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        }
    );
});
