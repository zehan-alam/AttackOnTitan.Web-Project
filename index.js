$(document).ready(function () {
    $('.header-btn').click(function () {
        $('#header').fadeOut(200);
        $(".nav").css("padding-top", "15px");
    });
});


$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $("#nav-button").toggleClass("active");
    });
});

//Responsive
function adSize(x){
    const advertisment = document.querySelector('#header div');
    if(x.matches){
        advertisment.style.fontSize="2.5em";
        $('#nav1').addClass('vanish');
        $('#nav2').removeClass('vanish');
    }else{
        advertisment.style.fontSize = "5em";
        $('#nav2').addClass('vanish');
        $('#nav1').removeClass('vanish');
    }
}
var x = window.matchMedia("(max-width: 575px)");
adSize(x);
x.addListener(adSize);