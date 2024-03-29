$((function () {
    "use strict";
    $("#mc-form").ajaxChimp({
        callback: function (e) {
            "success" === e.result ? ($(".sub-form-error").slideUp(), $(".sub-form-success").slideDown()) : "error" === e.result && ($(".sub-form-success").slideUp(), $(".sub-form-error").slideDown())
        },
        url: "http://csmthemes.us3.list-manage.com/subscribe/post?u=9666c25a337f497687875a388&id=5b881a50fb"
    }),
    $(window).load((function () {
        $("#status").fadeOut(),
        $("#preloader").delay(1e3).fadeOut("slow")
    })),
    $(window).width() > 992 && $(window).fadeThis({
        reverse: !1
    }),
    /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera) || ($(window).width() > 992 && skrollr.init({
        forceHeight: !1
    }), $(window).on("resize", (function () {
        $(window).width() <= 992 && skrollr.init().destroy()
    })), $(window).on("resize", (function () {
        $(window).width() > 992 && skrollr.init({
            forceHeight: !1
        })
    }))),
    $(".counter").waypoint((function () {
        var e = $.animateNumber.numberStepFactories.separator(",");
        $(".total-number-1").animateNumber({
            number: 100,
            numberStep: e
        }, 2e3),
        $(".total-number-2").animateNumber({
            number: 1e3,
            numberStep: e
        }, 2e3),
        $(".total-number-3").animateNumber({
            number: 1200,
            numberStep: e
        }, 2e3),
        $(".total-number-4").animateNumber({
            number: 1500,
            numberStep: e
        }, 2e3)
    }), {offset: "80%"}),
    $(".tweet").twittie({
        username: "envatomarket",
        dateFormat: "%b. %d, %Y",
        template:"{{tweet}}",
        count: 10
    }, (function () {
        var e = $(".tweet ul");
        e.children("li").first().show().siblings().hide(),
        setInterval((function () {
            e.find("li:visible").fadeOut(500, (function () {
                $(this).appendTo(e),
                e.children("li").first().fadeIn(500)
            }))
        }), 5e3)
    })),
    $("a[href*=#]:not([href=#])").click((function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) 
                return $("html,body").animate({
                    scrollTop: e.offset().top - 40
                }, 1e3),
                !1
            
        }
    })),
    $(".review-slider").slick({
        dots: !0,
        arrows: !1,
        infinite: !1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        pauseOnHover: !1
    }),
    $("#contact-form").validate({
        rules: {
            name: {
                required: !0,
                minlength: 2
            },
            email: {
                required: !0,
                email: !0
            },
            message: {
                required: !0,
                minlength: 10
            }
        },
        messages: {
            name: "<i class='fa fa-exclamation-triangle'></i>Please specify your name.",
            email: {
                required: "<i class='fa fa-exclamation-triangle'></i>We need your email address to contact you.",
                email: "<i class='fa fa-exclamation-triangle'></i>Please enter a valid email address."
            },
            message: "<i class='fa fa-exclamation-triangle'></i>Please enter your message."
        },
        submitHandler: function (e) {
            $(e).ajaxSubmit({
                type: "POST",
                data: $(e).serialize(),
                url: "php/contact-me.php",
                success: function () {
                    $("#contact-form :input").attr("disabled", "disabled"),
                    $("#contact-form").fadeTo("slow", .15, (function () {
                        $(this).find(":input").attr("disabled", "disabled"),
                        $(this).find("label").css("cursor", "default"),
                        $(".success-cf").fadeIn()
                    })),
                    $("#contact-form")[0].reset()
                },
                error: function () {
                    $("#contact-form").fadeTo("slow", .15, (function () {
                        $(".error-cf").fadeIn()
                    }))
                }
            })
        }
    }),
    $(window).scroll((function () {
        $(this).scrollTop() > 200 ? $(".scroll-top a").fadeIn(200) : $(".scroll-top a").fadeOut(200)
    })),
    $(".scroll-top a").click((function (e) {
        e.preventDefault(),
        $("html, body").animate({
            scrollTop: 0
        }, 1e3)
    }));
    var e = $(".navbar");
    e.offset().top;
    $(window).scroll((function () {
        $(window).scrollTop() > $(window).height() ? e.addClass("stick") : e.removeClass("stick")
    })),
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(".navbar-nav li a").on("click", (function () {
        $(".navbar-collapse").collapse("hide")
    }))
}));
