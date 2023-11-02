$(document).ready(function () {
    $(".test_2").waypoint(function () {
        // console.log("Top Top");
        $(".test_2").addClass("animate__animated animate__fadeInLeft");
    }, {offset: "15%"} );
    $(".btn_toggle").waypoint(
        function () {
            // console.log("Top Top");
            $(".btn_toggle").addClass("animate__animated animate__fadeInRight");
        },
        { offset: "15%" }
    );
    $(".test_3").waypoint(
        function () {
            // console.log("Top Top");
            $(".test_3").addClass("animate__animated animate__fadeInRight");
        },
        { offset: "15%" }
    );
    $(".btn_fadeout").waypoint(
        function () {
            // console.log("Top Top");
            $(".btn_fadeout").addClass(
                "animate__animated animate__fadeInRight"
            );
        },
        { offset: "15%" }
    );
    $(".btn_fadein").waypoint(
        function () {
            // console.log("Top Top");
            $(".btn_fadein").addClass(
                "animate__animated animate__fadeInRight"
            );
        },
        { offset: "15%" }
    );
});
