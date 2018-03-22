function Name(): void {
  var feld: string = prompt("Hallo, wie ist dein Name?", "");
  if (feld != null) {
    document.getElementById("GibNameEin").innerHTML =
      "Schöner Name, " + feld + "!";
  }
}

