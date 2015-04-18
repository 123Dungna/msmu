$(document).ready(function() {
    // Using default configuration
    $('.carousel2').carouFredSel();

    // Using custom configuration
    $('.carousel2').carouFredSel({
        items               : 3,
        direction           : "left",
        height	: 300,
        prev	: "#foo1_prev2",
        next	: "#foo1_next2",
        auto	: false,
        scroll : {
            items           : 1,
            easing          : "linear",
            duration        : 300,                         
            pauseOnHover    : true
        }                   
    });
});
