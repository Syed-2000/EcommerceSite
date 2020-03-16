function borderColor() {
  // var txtbx1 = document.getElementById("txtar1");
  // var txtbx2 = document.getElementById("txtar2");
  // var txtbx3 = document.getElementById("txtar3");
  // var txtbx4 = document.getElementById("txtar4");
  // var txtbx5 = document.getElementById("txtar5");

  // if (txtbx1.Value.length == 0) {
  //   txtbx1.style.border = "1px solid red";
  // } else if (txtbx2.Value.length == 0) {
  //   txtbx2.style.border = "1px solid red";
  // } else if (txtbx3.Value.length == 0) {
  //   txtbx3.style.border = "1px solid red";
  // } else if (txtbx4.Value.length == 0) {
  //   txtbx4.style.border = "1px solid red";
  // } else if (txtbx5.Value.length == 0) {
  //   txtbx5.style.border = "1px solid red";
  // }
  var empt = document.forms["form1"]["name"].value;
  if (empt == "") {
    document.getElementById("inputOfContact1").style.border = "1px solid red";
    document.getElementById("inputOfContact2").style.border = "1px solid red";
    document.getElementById("inputOfContact3").style.border = "1px solid red";
    document.getElementById("inputOfContact4").style.border = "1px solid red";
    alert("You need to fill all the boxes");
  }
}
