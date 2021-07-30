function crypting() {
  let message = document.getElementById("message").value;
  let passphrase = document.getElementById("key").value;
  // Récupération du type d'encryption sélectionné
  let type = getEncryptionType();
  // Si aucun Type n'est sélection afficher l'erreur
  if (type == null) {
    alert("Choisissez un type d'encryption!");
  }
  // Vérifier que les champs ne soient pas vide
  if (message != "" && passphrase != "") {
    let encryptedAES;
    switch (type) {
      case "aes":
        encryptedAES = CryptoJS.AES.encrypt(message, passphrase);
        document.getElementById("result").innerHTML = encryptedAES;
        break;
      case "des":
        encryptedAES = CryptoJS.TripleDES.encrypt(message, passphrase);
        document.getElementById("result").innerHTML = encryptedAES;
        break;
      case "rabbit":
        encryptedAES = CryptoJS.Rabbit.encrypt(message, passphrase);
        document.getElementById("result").innerHTML = encryptedAES;
        break;
      case "rc4":
        encryptedAES = CryptoJS.RC4Drop.encrypt(message, passphrase);
        document.getElementById("result").innerHTML = encryptedAES;
        break;
      default:
        alert("Désolé, nous ne supportons pas ce type d'encryption");
    }
  } else {
    alert("Veuillez renseigner le message ET la clé d'encryption!");
  }
}

function decrypting() {
  let message = document.getElementById("message").value;
  let passphrase = document.getElementById("key").value;
  // Récupération du type d'encryption sélectionné
  let type = getEncryptionType();
  // Si aucun Type n'est sélection afficher l'erreur
  if (type == null) {
    alert("Choisissez un type d'encryption!");
  }
  // Vérifier que les champs ne soient pas vide
  if (message != "" && passphrase != "") {
    let decryptedBytes;
    let plaintext;
    switch (type) {
      case "aes":
        decryptedBytes = CryptoJS.AES.decrypt(message, passphrase);
        plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);
        document.getElementById("result").innerHTML = plaintext;
        break;
      case "des":
        decryptedBytes = CryptoJS.TripleDES.decrypt(message, passphrase);
        plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);
        document.getElementById("result").innerHTML = plaintext;
        break;
      case "rabbit":
        decryptedBytes = CryptoJS.Rabbit.decrypt(message, passphrase);
        plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);
        document.getElementById("result").innerHTML = plaintext;
        break;
      case "rc4":
        decryptedBytes = CryptoJS.RC4Drop.decrypt(message, passphrase);
        plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);
        document.getElementById("result").innerHTML = plaintext;
        break;
      default:
        alert("Désolé, nous ne supportons pas ce type d'encryption");
    }
  } else {
    alert("Veuillez renseigner le message ET la clé d'encryption!");
  }
}

function getEncryptionType() {
  let radios = document.getElementsByName("encryption-type");
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return null;
}

// Theme colors

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "../asset/main.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "../asset/blue.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "../asset/green.css";
  }

  if (mode == "purple") {
    document.getElementById("theme-style").href = "../asset/purple.css";

    localStorage.setItem("theme", mode);
  }
}
