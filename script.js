$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
        $('.navbar').addClass("sticky");
        }else{
        $('.navbar').removeClass("sticky");
        }
    });

    //toggle menu using scripts
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    //this helps the x close button comes
    $('.menu-btn i').toggleClass("active");
});

});


