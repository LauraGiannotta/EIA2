function Name(): void {
  var feld: string = prompt("Hallo, wie heißt du?", "");
  if (feld != null) {
    document.getElementById("Type").innerHTML =
      "Schöner Name, " + feld + ". Deine Daten wurden erfolgreich an die NSA weitergeleitet.";
  }
}

