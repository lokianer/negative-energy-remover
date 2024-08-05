document.addEventListener("DOMContentLoaded", function () {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  const emValue = getRandomInt(10000);
  const radiationValue = getRandomInt(100);

  document.getElementById("em-value").textContent = emValue;
  document.getElementById("radiation-value").textContent = radiationValue;

  // Lokalisierungsfunktionen
  function localizeHtmlPage() {
    const objects = document.getElementsByTagName("html");
    for (let j = 0; j < objects.length; j++) {
      const obj = objects[j];
      const valStrH = obj.innerHTML.toString();
      const valNewH = valStrH.replace(/__MSG_(\w+)__/g, function (match, v1) {
        return v1 ? chrome.i18n.getMessage(v1) : "";
      });
      if (valNewH != valStrH) {
        obj.innerHTML = valNewH;
      }
    }
  }

  localizeHtmlPage();
});
