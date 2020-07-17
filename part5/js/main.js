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

const range = document.getElementById("time"),
  rangeV = document.getElementById("rangeTime"),
  setValue = () => {
    const newValue = Number(
      ((range.value - range.min) * 100) / (range.max - range.min)
    );
    let newPosition = 10 - newValue * 0.1;
    rangeV.innerHTML = `</span> <span class="icon icon--back-label"></span>
    <label for="time">${range.value}:00</label><span class="icon icon--next-label"></span>`;

    if (newValue > 50) {
      newPosition = 10 + newValue * 1.2;
      rangeV.style.left = `calc(${newValue}% - (${newPosition}px))`;
    } else {
      rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    }
    // rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener("input", setValue);

const money = document.getElementById("money"),
  rangeMoney = document.getElementById("rangeMoney"),
  setValue2 = () => {
    const newValue2 = Number(
      ((money.value - money.min) * 100) / (money.max - money.min)
    );
    let newPosition2 = 10 - newValue2 * 0.1;
    rangeMoney.innerHTML = `</span> <span class="icon icon--back-label"></span>
    <label for="money">₦${money.value},000</label><span class="icon icon--next-label"></span>`;
    if (newValue2 > 50) {
      newPosition2 = 10 + newValue2 * 1.5;
      rangeMoney.style.left = `calc(${newValue2}% - (${newPosition2}px))`;
    } else {
      rangeMoney.style.left = `calc(${newValue2}% + (${newPosition2}px))`;
    }
  };
document.addEventListener("DOMContentLoaded", setValue2);
money.addEventListener("input", setValue2);

// time filter
