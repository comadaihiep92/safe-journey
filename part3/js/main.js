$("input[type=range]").mousemove(function (e) {
  var val =
    ($(this).val() - $(this).attr("min")) /
    ($(this).attr("max") - $(this).attr("min"));
  var percent = val * 100;

  $(this).css(
    "background-image",
    "-webkit-gradient(linear, left top, right top, " +
      "color-stop(" +
      percent +
      "%, #126fb2), " +
      "color-stop(" +
      percent +
      "%, #f0f0f0)" +
      ")"
  );

  $(this).css(
    "background-image",
    "-moz-linear-gradient(left center, #126fb2 0%, #126fb2 " +
      percent +
      "%, #f0f0f0 " +
      percent +
      "%, #f0f0f0 100%)"
  );
});
