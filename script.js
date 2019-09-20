const ulEl = document.getElementById('list-password'); // get DOM

const generatePassword = num => {
   let numOfList;
   if (typeof num !== "number" || num < 1) {
      numOfList = 5;
      const msg = document.getElementById('message-box');
      msg.innerHTML = "Please put only positive number (set default to 5)";
   } else {
      numOfList = Math.floor(num);
   }

   const lengthOfList = document.getElementById("length-of-list");
   lengthOfList.innerHTML = numOfList.toString();

   for (let i = 0; i < numOfList; i++) {
      const randLength = 12 + Math.floor(Math.random() * 20); // random length between 12-31
      let alphabetLength = 1 + Math.floor(Math.random() * (randLength / 2)); // there should be at least 1 digit alphabet
      let numberLength = 1 + (Math.floor(Math.random() * ((randLength - alphabetLength) / 2))); // there should be at least 1 digit alphabet
      let specialLength = randLength - alphabetLength - numberLength;

      const specialChar = "~!@#$%^&*()_+{}|?><,./:;";
      const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numeric = "0123456789";
      const arrAlphabet = alphabet.slice('');
      const arrNumeric = numeric.slice('');
      const arrSpecialChar = specialChar.slice('');
      let availableChar = ['alphabetLength', 'numberLength', 'specialLength']
      let generatedPassword = '';
      while (alphabetLength !== 0 || numberLength !== 0 || specialLength !== 0) {
         const choice = availableChar[Math.floor(Math.random() * availableChar.length)]
         switch (choice) {
            case 'alphabetLength':
               alphabetLength -= 1;
               generatedPassword += arrAlphabet[Math.floor(Math.random() * arrAlphabet.length)]
               if (alphabetLength === 0) {
                  const index = availableChar.indexOf('alphabetLength')
                  if (index > -1) {
                     availableChar.splice(index, 1)
                  }
               }
               break;
            case 'numberLength':
               numberLength -= 1;
               generatedPassword += arrNumeric[Math.floor(Math.random() * arrNumeric.length)]
               if (numberLength === 0) {
                 const index = availableChar.indexOf("numberLength");
                 if (index > -1) {
                   availableChar.splice(index, 1);
                 }
               }
               break;
            case 'specialLength':
               specialLength -= 1;
               generatedPassword += arrSpecialChar[Math.floor(Math.random() * arrSpecialChar.length)]
               if (specialLength === 0) {
                 const index = availableChar.indexOf("specialLength");
                 if (index > -1) {
                   availableChar.splice(index, 1);
                 }
               }
               break;
            default:
               console.log('fallback to false')
               alphabetLength = 0;
               numberLength = 0;
               specialLength = 0;
         }
      }

      const newList = document.createElement("li");
      newList.innerHTML = generatedPassword;
      ulEl.appendChild(newList)
   }
}

generatePassword((Math.random() * 5) + 1);
