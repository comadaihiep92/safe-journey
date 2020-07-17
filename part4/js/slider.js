$(document).ready(function () {
  $("#continue").click(function () {
    console.log("The paragraph was clicked.");

    if ($(".seat__item")) {
      $(".tab1").removeClass("active");
      $(".tab1").addClass("hidden");

      $(".tab2").addClass("active");
      $(".tab2").removeClass("hidden");

      $(".tab").addClass("flexShow");
      $(".tab").removeClass("hidden");

      console.log("has class active");
    } else {
      $(".tab1").removeClass("hidden");
      $(".tab1").addClass("active");

      $(".tab2").addClass("hidden");
      $(".tab2").removeClass("active");

      $(".tab").addClass("hidden");
      $(".tab").removeClass("flexShow");
    }

    if ($(".search__step")) {
      $(".step3").removeClass("active");
      $(".step4").addClass("active");
    } else {
      $(".step3").addClass("active");
      $(".step4").removeClass("active");
    }
  });
});
