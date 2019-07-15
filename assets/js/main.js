// Preloader

$(window).on("load", function() {
  $(".page-loader")
    .delay(1300)
    .fadeOut("slow");
});

// Navigation bar animation

var header = $("header");

$(window)
  .scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
      header.addClass("header-small");
    } else {
      header.removeClass("header-small");
    }
  })
  .scroll();

// Scroll to anchor

$(window).on("load", function() {
  $(".smoothscroll").on("click", function(e) {
    var target = this.hash;
    var $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - 80
        },
        800
      );
    e.preventDefault();
  });
});

// Toggle Responsive Navbar

$(window).on("load", function() {
  $(".hamburger").on("click", function(e) {
    $("nav").toggleClass("show");
    $("header").addClass("header-small");
  });
});

// Hamburger animation

$(window).on("load", function() {
  $(".hamburger").on("click", function(e) {
    $(".hamburger").toggleClass("change");
  });
  $("nav ul li").on("click", function(e) {
    $("nav").removeClass("show");
    $(".hamburger").removeClass("change");
  });
  $("#collapse").on("click", function(e) {
    $("nav").removeClass("show");
    $(".hamburger").removeClass("change");
  });
});

// Scroll to Top

$('a[href="#top"]').on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});

// Load more button

$(document).ready(function() {
  $(".card")
    .slice(0, 10)
    .show();
  $("#loadmore").click(function(e) {
    e.preventDefault();
    $(".card:hidden")
      .slice(0, 10)
      .show();
    if ($(".card:hidden").length == 0) {
      $("#loadmore").fadeOut("slow");
    }
  });
});

// Wow

$(window).on("load", function() {
  wow = new WOW({
    offset: 100
  });
  wow.init();
});

// Twitter

twttr.widgets.createTimeline(
  {
    sourceType: "profile",
    screenName: "TwitterDev"
  },
  document.getElementById("twitter")
);
