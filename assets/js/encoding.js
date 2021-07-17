const eIn = document.querySelector('.e');
const eOut = document.querySelector('.encrypted-text');

const dIn = document.querySelector('.d');
const dOut = document.querySelector('.decrypted-text');

const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let encryptedMessage = '';
let decryptedMessage = '';

eIn.addEventListener('input', e => {
  const letter = e.data;
  if (letter === 'z') {
    encryptedMessage = encryptedMessage.concat('', 'a');
  } else if (letter === 'Z') {
    encryptedMessage = encryptedMessage.concat('', 'A');
  } else if (letter === ' ') {
    encryptedMessage = encryptedMessage.concat('', ' ');
  } else if (letter === null) {
    encryptedMessage = encryptedMessage.slice(0, -1);
  } else {
    encryptedMessage = encryptedMessage.concat('', alph[alph.indexOf(letter)+1]);
  }
  eOut.innerHTML = encryptedMessage;
})

dIn.addEventListener('input', e => {
  const letter = e.data;
  if (letter === 'a') {
    decryptedMessage = decryptedMessage.concat('', 'z');
  } else if (letter === 'A') {
    decryptedMessage = decryptedMessage.concat('', 'z');
  } else if (letter === ' ') {
    decryptedMessage = decryptedMessage.concat('', ' ');
  } else if (letter === null) {
    decryptedMessage = decryptedMessage.slice(0, -1);
  } else {
    decryptedMessage = decryptedMessage.concat('', alph[alph.indexOf(letter)-1]);
  }
  dOut.innerHTML = decryptedMessage;
})