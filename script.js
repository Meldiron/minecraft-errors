function paste() {
  navigator.clipboard
    .readText()
    .then(text => {
      const url = errorToUrl(text);

      if (url == null) {
        angry();
        showText("THIS IS NOT A VALID ERROR !");
      } else {
        window.location.replace(url);
      }
    })
    .catch(err => {
      console.log(err);
      sad();
      showText("REFRESH AND ALLOW CLIPBOARD");
    });
}

function shakeScreen(text = null) {}

function errorToUrl(err) {
  try {
    const s = err.split("at sk.meldiron");

    const ss = "sk.meldiron" + s[1].split("~")[0];

    // https://gitlab.com/realmsmp/customstack/blob/master/src/main/java/sk/meldiron/customstack/managers/InventoryManager.java#L78
    // sk/meldiron/customstack/managers/InventoryManager.java#87
    const s2 = ss.split(":")[1];
    const s3 = s2.substring(0, s2.length - 2);

    const sss = ss.split("(")[0].split(".");
    sss.pop();

    const sFinal =
      "https://gitlab.com/realmsmp/customstack/blob/master/src/main/java/" +
      sss.join("/") +
      ".java#L" +
      s3;

    return sFinal;
  } catch (exp) {
    return null;
  }
}

function showText(text) {
  document.getElementById("textBox").innerHTML = text;
  document.getElementById("textBox").classList.add("visible");
}

function angry() {
  normal();
  document.getElementById("skull").classList.remove("sad");
  document.getElementById("skull").classList.add("angry");
  document.getElementById("bone-1").classList.add("angry");
  document.getElementById("bone-2").classList.add("angry");
}

function sad() {
  normal();
  document.getElementById("skull").classList.add("sad");
}

function normal() {
  document.getElementById("skull").classList.remove("angry");
  document.getElementById("skull").classList.remove("sad");
  document.getElementById("bone-1").classList.remove("angry");
  document.getElementById("bone-2").classList.remove("angry");
}

/* --- Function for skull animation --- */

/*
function changeExpression () {
    setTimeout(function(){ 
      document.getElementById("skull").classList.remove("sad");
      document.getElementById("skull").classList.add("angry");
      document.getElementById("bone-1").classList.add("angry");
      document.getElementById("bone-2").classList.add("angry");
    }, 5000);
    setTimeout(function(){ 
      document.getElementById("skull").classList.remove("angry");
      document.getElementById("bone-1").classList.remove("angry");
      document.getElementById("bone-2").classList.remove("angry");
    }, 11000);
    setTimeout(function(){ 
      document.getElementById("skull").classList.add("sad");
    }, 15000);
}
*/
