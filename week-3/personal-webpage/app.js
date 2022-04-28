console.log("app.js linked.");

$(() => {
  //   $("body").hide();
  //   $("body").show(1500);

  $(".burger-svg").on("click", function () {
    $(".burger-bar-ol").toggle(150).css("display", "flex");
    $(".burger-svg").toggleClass("burger-svg-close");
  });
});
