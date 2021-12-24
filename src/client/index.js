import "./styles/style.scss";

const axios = require("axios");

const checkURL = require("./js/checkURL");

const renderContent = require("./js/renderContent");

const inputField = document.querySelector("#article-url");

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!checkURL(inputField.value)) {
    alert("enter a valid URL");
  } else {
    axios({
      method: "post",
      url: "http://localhost:8081/postData",
      data: {
        url: inputField.value,
      },
    })
      .then((response) => renderContent(response.data))
      .catch((err) => console.log(err));
  }
});
