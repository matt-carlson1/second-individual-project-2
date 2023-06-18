function handleRadio(event) {
  event.preventDefault();
  const endRadioSelection = document.querySelector(
    "input[name='end']:checked"
  ).value;
  const basedRadioSelection = document.querySelector(
    "input[name='based']:checked"
  ).value;
  const difficultyRadioSelection = document.querySelector(
    "input[name='difficulty']:checked"
  ).value;
  const speedRadioSelection = document.querySelector(
    "input[name='speed']:checked"
  ).value;
  const libraryRadioSelection = document.querySelector(
    "input[name='library']:checked"
  ).value;
}

window.addEventListener("load", function () {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});

if ("endRadioSelection" == "frontEnd") {
  javascript.removeAttribute("class");
}
