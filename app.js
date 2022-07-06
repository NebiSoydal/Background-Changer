const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [ "black", "yellow","green","#c7bf67", "#7b55cf","#de4747","#2963ab","red", "gray","orange"];
button.addEventListener("click", changeBackground);
let sıra = 0;
function changeBackground() {
  if (sıra == 10) sıra = 0;
  const secilenRenk = colors[sıra];
  sıra++;
  body.style.backgroundColor = secilenRenk;
}