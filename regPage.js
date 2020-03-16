function borderColorOfRegPage() {
  var inputs = new Array();
  for (var i = 1; i <= 7; i++) {
    inputs[i] = document.getElementById("inputOfRegistration" + i);
  }
  for (var i = 1; i <= 7; i++) {
    if (inputs[i].value == "") {
      inputs[i].style.border = "1px solid red";
    }
  }
}
