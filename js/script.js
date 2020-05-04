$(document).ready(function() {
  $(".cases__slider").slick({
    appendDots: $(".cases-dots"),
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".burger-menu__button").on("click", function() {
    $(".nav-menu__list").toggleClass("active");
    $(".button__element").toggleClass("active");
    return false;
  });

  $(".nav-menu__link").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: ($(_href).offset().top - $('.menu-bar').height()) + "px" });
    $(".nav-menu__list").removeClass("active");
    $(".button__element").removeClass("active");
    return false;
  });

  $(".button").click(function() {
    $(".form-container").fadeIn(500);
    $(".popup-container").css("display", "flex");
    $("body").css("overflow", "hidden");
    return false;
  });

  $(".close-button").click(function() {
    $(this)
      .parent()
      .parent()
      .fadeOut(100);
    $("body").css("overflow", "auto");
    return false;
  });

  $(".popup-container").click(function(event) {
    if (event.target == this) {
      $(this).fadeOut(100);
      $("body").css("overflow", "auto");
      return false;
    }
  });
});

let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");

function drawBottomWave() {
  let width = window.innerWidth;
  let height = 825;
  canvas.width = width;
  canvas.height = height;

  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = "#ffc508";

  ctx.beginPath();
  ctx.moveTo(0, height / 2);

  for (let x = 0, amplitude = 30; x < width; x++) {
    let y = Math.sin(((x / amplitude) * Math.PI) / 20) * amplitude;
    ctx.lineTo(x, y + height * 0.9);
  }

  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.lineTo(0, height / 2);

  ctx.fill();
}

drawBottomWave();

window.addEventListener("resize", function() {
  drawBottomWave();
});
