$(document).ready(function() {
    // Using default configuration
    $('.carousel').carouFredSel();

    // Using custom configuration
    $('.carousel').carouFredSel({
        items               : 3,
        direction           : "left",
        height	: 300,
        prev	: "#foo1_prev",
        next	: "#foo1_next",
        auto	: false,
        scroll : {
            items           : 1,
            easing          : "linear",
            duration        : 300,                         
            pauseOnHover    : true
        }                   
    });
});
