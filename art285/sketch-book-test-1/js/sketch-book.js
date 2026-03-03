$(document).ready(function () {
  // Initialize the flipbook
  $(".magazine").turn({
    width: 922,
    height: 600,
    elevation: 50,
    gradients: true,
    autoCenter: true
  });

  // Keyboard navigation
  $(document).keydown(function (e) {
    if (e.keyCode === 37) $(".magazine").turn("previous");
    if (e.keyCode === 39) $(".magazine").turn("next");
  });

  // Button controls
  $(".prev-btn").click(function () {
    $(".magazine").turn("previous");
  });
  $(".next-btn").click(function () {
    $(".magazine").turn("next");
  });
});
