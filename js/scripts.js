function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector(
    "input[name='flavor']:checked"
  ).value;
}

window.addEventListener("load", function () {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});
