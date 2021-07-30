function crypting(){
    let message = document.getElementById('message').value;
    let passphrase = document.getElementById('cle').value;
    if((message != '') && (passphrase != '')){
        let encryptedAES = CryptoJS.AES.encrypt(message, passphrase);
        document.getElementById('result').innerHTML = encryptedAES;
    }
}

function decrypting(){
    let message = document.getElementById('message').value;
    let passphrase = document.getElementById('cle').value;
    if((message != '') && (passphrase != '')){
        let decryptedBytes = CryptoJS.AES.decrypt(message, passphrase);
        let plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);
        document.getElementById('result').innerHTML = plaintext;

    }
}z