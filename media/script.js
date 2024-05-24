document.getElementsByTagName("form")[0].addEventListener("submit", (evt) => {
  evt.preventDefault();

  const n1 = parseFloat(document.getElementById("n1").value);
  const n2 = parseFloat(document.getElementById("n2").value);
  const n3 = parseFloat(document.getElementById("n3").value);
  const n4 = parseFloat(document.getElementById("n4").value);

  const media = (n1 + n2 + n3 + n4) / 4;

  const entradaMedia = document.getElementById("entradaMedia");
  entradaMedia.textContent = media;
});