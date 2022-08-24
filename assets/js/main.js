window.addEventListener('touchmove', event => {}, {
    passive: true
});
$(document).ready(function() {
    $(".testi").slick({
        dots: !1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        arrows: !0,
        slidesToShow: 1,
        prevArrow: '<p class="slick-prev" aria-label="Previous" type="button">Next</p>',
        nextArrow: '<p class="slick-next" aria-label="Next" type="button">Next</p>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    }), $(".achivements_slide_owl").owlCarousel({
        smartSpeed: 1e3,
        margin: 0,
        autoplay: !0,
        autoplayHoverPause: !0,
        nav: !1,
        dots: !1,
        responsive: {
            320: {
                items: 1,
                loop: !0,
                margin: 20
            },
            400: {
                items: 2,
                loop: !0,
                margin: 20
            },
            600: {
                items: 3,
                loop: !0,
                margin: 20
            },
            1e3: {
                items: 6,
                loop: !1
            }
        }
    }), $(".technaureus_recognized_slider").slick({
        dots: !1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        arrows: !1,
        slidesToShow: 4,
        infinite: !0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 3
            }
        }]
    })
}), $(document).ready(function() {
    $(".megamenu").on("click", function(e) {
        e.stopPropagation()
    })
}), $(document).ready(function() {
    $(window).scroll(function() {
        56 < $(window).scrollTop() ? $(".navbar").addClass("nav_scroll") : $(".navbar").removeClass("nav_scroll")
    })
}), $(document).ready(function() {
    $(".content_tesi").slice(0, 3).show(), $("#loadMore").on("click", function(e) {
        e.preventDefault(), $(".content_tesi:hidden").slice(0, 2).slideDown(), 0 == $(".content_tesi:hidden").length && $("#loadMore").hide()
    })
}), $(document).ready(function() {
    $(".content_event").slice(0, 6).show(), $("#loadMoreEvent").on("click", function(e) {
        e.preventDefault(), $(".content_event:hidden").slice(0, 3).slideDown(), 0 == $(".content_event:hidden").length && $("#loadMoreEvent").hide()
    })
}), $(document).ready(function() {
    $(".blog_content_hide").slice(0, 3).show(), $("#blog-hide-btn").on("click", function(e) {
        e.preventDefault(), $(".blog_content_hide:hidden").slice(0, 2).slideDown(), 0 == $(".blog_content_hide:hidden").length && $("#blog-hide-btn").hide()
    })
}), $(document).ready(function() {
    $(".indus_content_main").slice(0, 6).show(), $("#load_more_industries").on("click", function(e) {
        e.preventDefault(), $(".indus_content_main:hidden").slice(0, 3).slideDown(), 0 == $(".indus_content_main:hidden").length && $("#load_more_industries").hide()
    })
}), $(document).ready(function() {
    $(".case_study_content_main").slice(0, 2).show(), $("#load_more_case_study").on("click", function(e) {
        e.preventDefault(), $(".case_study_content_main:hidden").slice(0, 1).slideDown(), 0 == $(".case_study_content_main:hidden").length && $("#load_more_case_study").hide()
    })
}), $(document).ready(function() {
    $(".content_odoo_drop").slice(0, 2).show(), $("#loadMoreOdoo").on("click", function(e) {
        e.preventDefault(), $(".content_odoo_drop:hidden").slice(0, 1).slideDown(), 0 == $(".content_odoo_drop:hidden").length && $("#loadMoreOdoo").hide()
    })
}), $(document).ready(function() {
    $(".img-wrapper").hover(function() {
        $(this).find(".img-overlay").animate({
            opacity: 1
        }, 600)
    }, function() {
        $(this).find(".img-overlay").animate({
            opacity: 0
        }, 600)
    });
    var n = $('<div id="overlay"></div>'),
        o = $("<img>"),
        e = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>'),
        t = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>'),
        i = $('<div id="exitButton"><i class="fa fa-times"></i></div>');
    n.append(o).prepend(e).append(t).append(i), $("#gallery").append(n), n.hide(), $(".img-overlay").click(function(e) {
        e.preventDefault();
        e = $(this).prev().attr("href");
        o.attr("src", e), n.fadeIn("slow")
    }), n.click(function() {
        $(this).fadeOut("slow")
    }), t.click(function(e) {
        $("#overlay img").hide();
        var n = $("#overlay img").attr("src"),
            o = $('#image-gallery img[src="' + n + '"]'),
            n = $(o.closest(".image").next().find("img")),
            o = $("#image-gallery img");
        (0 < n.length ? $("#overlay img").attr("src", n.attr("src")) : $("#overlay img").attr("src", $(o[0]).attr("src"))).fadeIn(800), e.stopPropagation()
    }), e.click(function(e) {
        $("#overlay img").hide();
        var n = $("#overlay img").attr("src"),
            n = $('#image-gallery img[src="' + n + '"]'),
            n = $(n.closest(".image").prev().find("img"));
        $("#overlay img").attr("src", n.attr("src")).fadeIn(800), e.stopPropagation()
    }), i.click(function() {
        $("#overlay").fadeOut("slow")
    })
});