let b = "el01";
let c = "el07";
let d = "el13";
function show(a) {
  // document.getElementById("el01").style.display = "none";
  document.getElementById(b).style.display = "none";
  document.getElementById(a).style.display = "grid";
  b = a;
}
function show1(a) {
  // document.getElementById("el01").style.display = "none";
  document.getElementById(c).style.display = "none";
  document.getElementById(a).style.display = "grid";
  c = a;
}
function show2(a) {
  // document.getElementById("el01").style.display = "none";
  document.getElementById(d).style.display = "none";
  document.getElementById(a).style.display = "grid";
  d = a;
}
