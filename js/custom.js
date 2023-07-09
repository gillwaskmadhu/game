$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {

            $(".art").addClass("art_fx");
            $(".games").addClass("games_fx");
            $(".career").addClass("career_fx");
            $(".portfolio").addClass("portfolio_fx");
            $(".news").addClass("news_fx");
            $(".support").addClass("support_fx");
        } else {
            $(".art").removeClass("art_fx");
            $(".games").removeClass("games_fx");
            $(".career").removeClass("career_fx");
            $(".portfolio").removeClass("portfolio_fx");
            $(".news").addClass("news_fx");
            $(".support").addClass("support_fx");
        }
    });
});

