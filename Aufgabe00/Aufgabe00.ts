function Name(): void {
  var feld: string = prompt("Hallo, wie hei�t du?", "");
  if (feld != null) {
    document.getElementById("GibNameEin").innerHTML =
      "Sch�ner Name, " + feld + "!";
  }
}

