$(window).on('resize load', function() {
  var windowWidth = $(window).width();
  var aspectRatio = 1920 / 1080; // Assuming the original image size is 1920x1080

  var targetWidth = windowWidth;
  var targetHeight = windowWidth / aspectRatio;

  $('.background-image').width(targetWidth);
  $('.background-image').height(targetHeight);

  var textFontSize = windowWidth * 0.05; // Adjust the factor (0.05) as desired for the font size

  if (windowWidth >= 1900) {
    textFontSize = 1350 * 0.09; // Set a fixed font size for width <= 1350
  }

  if (windowWidth <= 750) {
    textFontSize = textFontSize * 2; // Twice the font size when width <= 750
  }

  $('.text-overlay h1').css('font-size', textFontSize);
  $('.text-overlay p').css('font-size', textFontSize * 0.5); // Adjust the factor (0.5) as desired for the sub-header font size

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
