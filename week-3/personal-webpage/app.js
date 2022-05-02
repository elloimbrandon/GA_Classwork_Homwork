$(() => {
  $(".burger-svg").on("click", function () {
    $(".burger-bar-ol").toggle(150).css("display", "flex");
    $(".burger-svg").toggleClass("burger-svg-close");
  });

  // the functions for hover gif projects
  $("#minishell-project").mouseenter(function () {
    $("#minishell-project").css("content", "url(minishell-png.gif)");
  });

  $("#minishell-project").mouseleave(function () {
    $("#minishell-project").css("content", "url(minishell-png.jpg)");
  });

  $("#rps-project").mouseenter(function () {
    $("#rps-project").css("content", "url(rps1.gif)");
  });

  $("#rps-project").mouseleave(function () {
    $("#rps-project").css("content", "url(rps.jpg)");
  });

  $("#wolf3d-project").mouseenter(function () {
    $("#wolf3d-project").css("content", "url(wolf3d.gif)");
  });

  $("#wolf3d-project").mouseleave(function () {
    $("#wolf3d-project").css("content", "url(wolf3d.jpg)");
  });

  // contact form function
  $(".contact-button").on("click", function () {
    $(".resume-container").toggle(100).css("display", "none");

    $(".contact-container").toggle(100).css("display", "flex");
  });

  $(".close-button").on("click", function () {
    $(".resume-container").toggle(100).css("display", "flex");

    $(".contact-container").toggle(100).css("display", "flex");
  });
});
