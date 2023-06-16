$(window).on('resize load scroll', function() {
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var aspectRatio = 1080 / 1920; // Assuming the original image size is 1920x1080

  var targetHeight = windowWidth * aspectRatio;
  if (targetHeight > windowHeight) {
    targetHeight = windowHeight;
  }

  $('.background-image').height(targetHeight);

  var textFontSize = windowWidth * 0.05; // Adjust the factor (0.03) as desired for the font size

  if (windowWidth >= 1900) {
    textFontSize = 1350 * 0.09; // Set a fixed font size for width <= 1350
  }

  $('.text-overlay p').css('font-size', textFontSize);

  if ($(window).scrollTop() > 10) {
    $('.back-to-top').removeClass('hidden'); // Remove the 'hidden' class to show the button
  } else {
    $('.back-to-top').addClass('hidden'); // Add the 'hidden' class to hide the button
  }
});

$(document).ready(function() {
  // Scroll to top when the back-to-top button is clicked
  $('.back-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

  // Show or hide the back-to-top button based on scroll position
  $(window).on('resize load scroll', function() {
    if ($(this).scrollTop() > 10) {
      $('.back-to-top').removeClass('hidden'); // Remove the 'hidden' class to show the button
    } else {
      $('.back-to-top').addClass('hidden'); // Add the 'hidden' class to hide the button
    }
  });
});
