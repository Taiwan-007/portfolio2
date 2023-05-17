$(document).ready(function () {
    $(window)
        .scroll(function () {
            20 < this.scrollY ? $(".navbar")
                .addClass("sticky") : $(".navbar")
                    .removeClass("sticky"), 500 < this.scrollY ? $(".scroll-up-btn")
                        .addClass("show") : $(".scroll-up-btn")
                            .removeClass("show")
        }), $(".scroll-up-btn")
            .click(function () {
                $("html")
                    .animate({ scrollTop: 0 })
            }); new Typed(".typing", { strings: ["Desenvolvedor Desktop", "Desenvolvedor Mobile", "Desenvolvedor Web", "Designer", "Freelancer"], typeSpeed: 100, backSpeed: 60, loop: !0 }), new Typed(".typing-2", { strings: ["Desenvolvedor Desktop", "Desenvolvedor Mobile", "Desenvolvedor Web", "Designer", "Freelancer"], typeSpeed: 100, backSpeed: 60, loop: !0 }); $(".menu-btn")
                .click(function () {
                    $(".navbar .menu")
                        .toggleClass("active"), $(".menu-btn i")
                            .toggleClass("active")
                }), $(".carousel").owlCarousel({ margin: 20, loop: !0, autoplayTimeOut: 2e3, autoplayHoverPauser: !0, responsive: { 0: { items: 1, nav: !1 }, 600: { items: 2, nav: !1 }, 1e3: { items: 3, nav: !1 } } })
});