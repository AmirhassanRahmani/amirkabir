let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slider__container img").length;
let sliderContainer = document.querySelector(".slider__container");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".previous");
let transitionTime = 4000;
let slideSize = slider.offsetWidth;
let currentSlide = 0;
let s_shortcuts;

setEventListeners();
generateShortcuts();
setAutoPlay(transitionTime);

function moveSlides() {
  sliderContainer.style.transform = `translateX(-${currentSlide * slideSize * 1
    }px)`;

  Array.from(s_shortcuts.children).forEach((shortcut) =>
    shortcut.classList.remove("active")
  );
  s_shortcuts.children[currentSlide].classList.add("active");
}

function nextSlide() {
  currentSlide =
    currentSlide >= slides - 1 ? (currentSlide = 0) : currentSlide + 1;
  moveSlides();
}

function previousSlide() {
  currentSlide =
    currentSlide <= 0 ? (currentSlide = slides - 1) : currentSlide - 1;

  moveSlides();
}

function setEventListeners() {
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", previousSlide);
}

function generateShortcuts() {
  const shortcuts = document.createElement("div");
  shortcuts.classList.add("shortcuts");

  for (let i = 0; i < slides; i += 1) {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => {
      currentSlide = i;
      moveSlides();
    });
    dot.classList.add("shortcut");
    shortcuts.appendChild(dot);
  }

  shortcuts.firstChild.classList.add("active");
  slider.appendChild(shortcuts);
  s_shortcuts = shortcuts;
}

function setAutoPlay(transitionTime) {
  setInterval(nextSlide, transitionTime);
}

// ......................................akhbar part one.....................................

$(".news-university-container").mousedown(function () { 
  $(".news-university-container").css('cursor', 'grabbing');
});

$(".news-university-container").mouseup(function () { 
  $(".news-university-container").css('cursor', 'grab');
});

$(document).ready(function () {
  let slideCount = $("#slider #news-university li").length;
  let slideWidth = $("#slider #news-university li").width();
  // let slideHeight = $("#slider #news-university li").height();
  let slideUlWidth = slideCount * slideWidth;

  $("#slider").css({
    width: slideWidth,
    // height: slideHeight,
  });

  $("#slider #news-university").css({
    width: slideUlWidth,
    marginLeft: -slideWidth,
  });

  $("#slider #news-university li:last-child").prependTo("#slider #news-university");

  function moveLeft() {
    $("#slider #news-university").animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $("#slider #news-university li:last-child").prependTo("#slider #news-university");
        $("#slider #news-university").css("left", "0");
      }
    );
  }

  function moveRight() {
    $("#slider #news-university").animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $("#slider #news-university li:first-child").appendTo("#slider #news-university");
        $("#slider #news-university").css("left", "0");
      }
    );
  }

  $(".control-prev").click(function (e) {
    moveLeft();
  });
  $(".control-next").click(function (e) {
    moveRight();
  });

  $("#slider ul").swiperight(() => moveLeft())
  $("#slider ul").swipeleft(() => moveRight())

});

// ............. end of akhbar part one.........................

// ...............akhbar part 2.................................

$(document).ready(function () {
  let slideCount = $("#second-slider #news-university-second li").length;
  let slideWidth = $("#second-slider #news-university-second li").width();
  // let slideHeight = $("#second-slider #news-university-second li").height();
  let slideUlWidth = slideCount * slideWidth;

  $("#second-slider").css({
    width: slideWidth,
    // height: slideHeight,
  });

  $("#second-slider #news-university-second").css({
    width: slideUlWidth,
    marginLeft: -slideWidth,
  });

  $("#second-slider #news-university-second li:last-child").prependTo("#second-slider #news-university-second");

  function getLeft() {
    $("#second-slider #news-university-second").animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $("#second-slider #news-university-second li:last-child").prependTo("#second-slider #news-university-second");
        $("#second-slider #news-university-second").css("left", "0");
      }
    );
  }

  function getRight() {
    $("#second-slider #news-university-second").animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $("#second-slider #news-university-second li:first-child").appendTo("#second-slider #news-university-second");
        $("#second-slider #news-university-second").css("left", "0");
      }
    );
  }

  $(".control-prev").click(function (e) {
    getLeft();
  });
  $(".control-next").click(function (e) {
    getRight();
  });

  $("#second-slider ul").swiperight(() => getLeft())
  $("#second-slider ul").swipeleft(() => getRight())
});




// .....................................end of akhbar part 2.................................


$(".menu").click(function (e) {
  $("#navigation").toggle();

  $("#navigation").toggleClass("slidedown");
});


$(window).scroll(function () {
  if ($(window).width() <= 1020) {
    if ($(window).scrollTop() >= 0.01) {
      $(".header-bottom").css({
        "margin-top": "-1rem",
      });

      $(".header-top").slideUp(700)
    } else {
      $(".header-bottom").css({
        position: "sticky",
        "margin-top": "6.3rem",
      });
      $(".header-top").slideDown(500)
    }
  }
});




$(window).scroll(function () {

  if ($(window).width() <= 711) {
    for (let i = 0; i < $(window).width(); i++) {
      $(".header-top").css('position', 'sticky');
      $(".header-top").css({ "marginLeft": i });
      $('.header-bottom').css('marginTop', '0rem');
      $(".header-bottom").css({ "marginLeft": i });
    }
  }
});



$(window).scroll(function () {

  if ($(window).width() <= 690) {
    for (let i = 0; i < $(window).width(); i++) {
      $(".header-top").css('position', 'sticky');
      $(".header-top").css({ "marginLeft": 3.6 * i });
      $(".header-bottom").css('position', 'sticky');
      $('.header-bottom').css('marginTop', '0rem');
      $(".header-bottom").css({ "marginLeft": 3.6 * i });
      $("#navigation").css({ 'marginLeft': 3.6 * i });
    }
  }

});









// $(window).scroll(function () {
//   if ($(window).width() <= 714) {
//     for (let i = 1; i <=50 ; i++) {
//       $(".slider").css({'marginRight' : i-1});
//     }
//   }
// });



// ..............................responsive of header............................//

$(function () {
  $("ul.parent > li").click(function (e) {
    if ($(this).find("ul.child").hasClass("d-none")) {
      $("ul.child").addClass("d-none");
      $(".add").addClass("plus-line-1");
      $(this).find("ul.child").removeClass("d-none");
      $(this).find(".add").removeClass("plus-line-1");
      console.log($(this).find("ul.child"));
    } else {
      $(this).find("ul.child").addClass("d-none");
      $(this).find(".add").addClass("plus-line-1");
      console.log($(this).find("ul.child"));
    }
  });

  $("ul.parent > li").click(function (e) {
    if ($(this).find("span.s-blue").hasClass("a-green")) {
      $("span.s-blue").removeClass("a-green");
      $(this).find("span.s-blue").addClass("a-green");
    } else {
      $("span.s-blue").removeClass("a-green");
      $("section.underline-titr").removeClass("underline-titr-green");
      $(this).find("span.s-blue").addClass("a-green");
      $(this).find("section.underline-titr").addClass("underline-titr-green");
    }
  });
});

// .........................................................................................



// ....................................invention part one.................................

$(".invention-ul-container").mousedown(function () { 
  $(".invention-ul-container").css('cursor', 'grabbing');
});

$(".invention-ul-container").mouseup(function () { 
  $(".invention-ul-container").css('cursor', 'grab');
});

$(document).ready(function () {
  let slideCount = $(" #invention-second #inventions-item li").length;
  let slideWidth = $(" #invention-second  #inventions-item li").width();
  let slideHeight = $("#invention-second  #inventions-item li").height();
  let slideUlWidth = slideCount * slideWidth;

  $("#invention-second").css({
    width: slideWidth,
    height: slideHeight,
  });

  $("#invention-second  #inventions-item").css({
    width: slideUlWidth,
    marginLeft: -slideWidth,
  });

  $("#invention-second  #inventions-item li:last-child").prependTo(
    "#invention-second  #inventions-item"
  );

  function turnLeft() {
    $("#invention-second  #inventions-item").animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $("#invention-second  #inventions-item li:last-child").prependTo(
          "#invention-second  #inventions-item"
        );
        $("#invention-second  #inventions-item").css("left", "0");
      }
    );
  }

  function turnRight() {
    $("#invention-second  #inventions-item").animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $("#invention-second  #inventions-item li:first-child").appendTo(
          "#invention-second  #inventions-item"
        );
        $("#invention-second  #inventions-item").css("left", "0");
      }
    );
  }

  $(".control-prev-third").click(function (e) {
    turnLeft();
  });
  $(".control-next-third").click(function (e) {
    turnRight();
  });

  $("#invention-second ul").swiperight(() => turnLeft())
  $("#invention-second ul").swipeleft(() => turnRight())
});

// ..............invention-part two.............................

$(document).ready(function () {
  let slideCount = $("#invention-first #inventions-item-second li").length;
  let slideWidth = $("#invention-first  #inventions-item-second li").width();
  // let slideHeight = $("#invention-first  #inventions-item-second li").height();
  let slideUlWidth = slideCount * slideWidth;

  $("#invention-first").css({
    width: slideWidth,
    // height: slideHeight,
  });

  $("#invention-first  #inventions-item-second").css({
    width: slideUlWidth,
    marginLeft: -slideWidth,
  });

  $("#invention-first  #inventions-item-second li:last-child").prependTo(
    "#invention-first  #inventions-item-second"
  );

  function changeLeft() {
    $("#invention-first  #inventions-item-second").animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $("#invention-first  #inventions-item-second li:last-child").prependTo(
          "#invention-first  #inventions-item-second"
        );
        $("#invention-first  #inventions-item-second").css("left", "0");
      }
    );
  }

  function changeRight() {
    $("#invention-first  #inventions-item-second").animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $("#invention-first  #inventions-item-second li:first-child").appendTo(
          "#invention-first #inventions-item-second"
        );
        $("#invention-first  #inventions-item-second").css("left", "0");
      }
    );
  }

  $(".control-prev-third").click(function (e) {
    changeLeft();
  });
  $(".control-next-third").click(function (e) {
    changeRight();
  });

  $("#invention-first ul").swiperight(() => changeLeft())
  $("#invention-first ul").swipeleft(() => changeRight())
});






// ................rail part one............................................................

$("#second-info-slider ").mousedown(function () { 
  $("#second-info-slider").css('cursor', 'grabbing');
});

$("#second-info-slider").mouseup(function () { 
  $("#second-info-slider").css('cursor', 'grab');
});

$(document).ready(function () {
  let slideCount = $("#second-info-slider ul li").length;
  let slideWidth = $("#second-info-slider ul li").width();
  // let slideHeight = $("#second-info-slider ul li").height();
  let slideUlWidth = slideCount * slideWidth;
  $("#second-info-slider").css({
    width: slideWidth,
    // height: slideHeight,
  });

  $("#second-info-slider ul").css({
    width: slideUlWidth,
    marginLeft: -slideWidth,
  });

  $("#second-info-slider ul li:last-child").prependTo("#second-info-slider ul");

  function moveeLeft() {
    $("#second-info-slider ul").animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $("#second-info-slider ul li:last-child").prependTo("#second-info-slider ul");
        $("#second-info-slider ul").css("left", "0");
      }
    );
  }

  function moveeRight() {
    $("#second-info-slider ul").animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $("#second-info-slider ul li:first-child").appendTo("#second-info-slider ul");
        $("#second-info-slider ul").css("left", "0");
      }
    );
  }

  $(".control-prev-second").click(function (e) {
    moveeLeft();
  });
  $(".control-next-second").click(function (e) {
    moveeRight();
  });

  $("#second-info-slider ul").swiperight(() => moveeLeft())
  $("#second-info-slider ul").swipeleft(() => moveeRight())
  
});

// ..................rail second part................................

$("#first-info-slider").mousedown(function () { 
  $("#first-info-slider").css('cursor', 'grabbing');
});

$("#first-info-slider").mouseup(function () { 
  $("#first-info-slider").css('cursor', 'grab');
});

$(document).ready(function () {
  let slideCount = $("#first-info-slider .fr li").length;
  let slideWidth = $("#first-info-slider .fr li").width();
  // let slideHeight = $("#first-info-slider .fr li").height();
  let slideUlWidth = slideCount * slideWidth;

  $("#first-info-slider").css({
    width: slideWidth,
    // height: slideHeight,
  });

  $("#first-info-slider .fr").css({
    width: slideUlWidth,
    marginLeft: -slideWidth,
  });

  $("#first-info-slider .fr li:last-child").prependTo("#first-info-slider .fr");

  function goLeft() {
    $("#first-info-slider .fr").animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $("#first-info-slider .fr li:last-child").prependTo("#first-info-slider .fr");
        $("#first-info-slider .fr").css("left", "0");
      }
    );
  }

  function goRight() {
    $("#first-info-slider .fr").animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $("#first-info-slider .fr li:first-child").appendTo("#first-info-slider .fr");
        $("#first-info-slider .fr").css("left", "0");
      }
    );
  }

  $(".control-prev-second").click(function (e) {
    goLeft();
  });
  $(".control-next-second").click(function (e) {
    goRight();
  });

  $("#first-info-slider ul").swiperight(() => goLeft())
  $("#first-info-slider ul").swipeleft(() => goRight())
});


// ..................end of rail second part................................







// .................start of tooltip for header........................

$(document).ready(function () {

  $('.tooltipLink').hover(function () {
    let title = $(this).attr('data-tooltip');
    $(this).data('tipText', title);
    if (title == '') { }
    else {
      $('<p class="tooltip"></p>').fadeIn(200).text(title).appendTo('body');
    }
  }, function () {
    $(this).attr('data-tooltip', $(this).data('tipText'));
    $('.tooltip').fadeOut(200);
  }).mousemove(function (e) {
    let mousex = e.pageX;
    let mousey = e.pageY;
    $('.tooltip').css({
      top: mousey,
      left: mousex
    })
  });

});