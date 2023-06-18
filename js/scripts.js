function handleRadio(event) {
  event.preventDefault();
  console.log("first test");
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
  console.log(endRadioSelection);
  console.log(basedRadioSelection);
  console.log(difficultyRadioSelection);
  console.log(speedRadioSelection);
  console.log(libraryRadioSelection);
}

window.addEventListener("load", function () {
  console.log("testing");
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
  console.log("this is running");
});
