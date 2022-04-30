console.log("app.js linked.");

// remember to fix styling issue with vh on main container

$(() => {
  //   $("body").hide();
  //   $("body").show(1500);

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

  $(".contact-button-off").on("click", function () {
    const $text = $(".contact-button-off").text();

    if ($text == "Click Here To Contact Me") {
      $(".contact-button-off").text("Close");
    }
    if ($text == "Close") {
      $(".contact-button-off").text("Click Here To Contact Me");
    }

    // $(".resume-container-off").toggle(150).css("width", "50%");
    $(".resume-img-off").toggleClass(".resume-img");

    $(".contact-container").toggle(150).css("display", "flex");
    $("#contact-form").toggle(150).css("display", "flex");
  });

  // $(".contact-button").on("click", function () {
  //   const $text = $(".contact-button").text();

  //   if ($text == "Click Here To Contact Me") {
  //     $(".contact-button").text("Close");
  //   }
  //   if ($text == "Close") {
  //     $(".contact-button").text("Click Here To Contact Me");
  //   }

  //   // $(".resume-container-off").toggleClass("resume-container");
  //   // $("#resume-img-off").toggleClass("#resume-img");
  //   $("#contact-form").toggle(150).css("display", "flex");
  // });
});
