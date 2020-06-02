$(function() {
  
    // Toggle Nav on Click
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });

  
});

function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-nav');
    }
}

// add class checkbox
$(document).ready(function () {
  $("#check1").click(function () {
    if($(this).is(":checked")) {
      $(".order-box-1").addClass("item-select");
    }else {
      $(".order-box-1").removeClass("item-select");
    }
  });
});

$(document).ready(function () {
  $("#check2").click(function () {
    if($(this).is(":checked")) {
      $(".order-box-2").addClass("item-select");
    }else {
      $(".order-box-2").removeClass("item-select");
    }
  });
});

$(document).ready(function () {
  $("#check3").click(function () {
    if($(this).is(":checked")) {
      $(".order-box-3").addClass("item-select");
    }else {
      $(".order-box-3").removeClass("item-select");
    }
  });
});

$(document).ready(function () {
  $("#check4").click(function () {
    if($(this).is(":checked")) {
      $(".order-box-4").addClass("item-select");
    }else {
      $(".order-box-4").removeClass("item-select");
    }
  });
});

// -------------------------------scoll height
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
      $('.adver-right').addClass('fixed-right');
      $('.adver-left').addClass('fixed-left');
    }
    else {
      $('.adver-right').removeClass('fixed-right');
      $('.adver-left').removeClass('fixed-left');
    }
});




