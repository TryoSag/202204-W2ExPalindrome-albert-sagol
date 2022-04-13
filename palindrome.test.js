const { string } = require("yargs");

const isPalindrome = (text) => {
  const errorText = "Text not provided";
  if (typeof text !== String) {
    throw errorText;
  }
  if (text.trim === "") {
    throw errorText;
  }
  let formatedText = text
    .toLowerCase()
    .replace(/[.,:;()_?¿!¡-\s]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return formatedText === formatedText.split("").reverse().join("");
};
