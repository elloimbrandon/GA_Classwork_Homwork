console.log("app.js linked.");

$(() => {
  $(".burger-svg").on("click", function () {
    $(".burger-bar-ol").toggle(150).css("display", "flex");
    $(".burger-svg").toggleClass("burger-svg-close");
  });
});
