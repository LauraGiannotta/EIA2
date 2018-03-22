function Name(): void {
  var feld: string = prompt("Hallo, wie heißt du?", "");
  if (feld != null) {
    document.getElementById("GibNameEin").innerHTML =
      "Schöner Name, " + feld + "!";
  }
}

