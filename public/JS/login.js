const register = document.querySelector(".register");
const login = document.querySelector(".login");

let newData = [];
let token = "";
let userdata = [];
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btnlogin = document.querySelector(".btn-login");

btnlogin.addEventListener("click", function (e) {
  e.preventDefault(); // 阻止按鈕預設行為
  if (email.value.trim() == "" || password.value.trim() == "") {
    alert("請正確輸入信箱、密碼");
    return;
  } else {
    login();
  }

  function login() {
    axios
      .post("http://localhost:3000/login", {
        email: email.value,
        password: password.value,
      })
      .then(function (response) {
        token = response.data.accessToken;
        console.log(response.data);
        window.location.href = "signupsuccess.html";
      })
      .catch(function (error) {
        console.log(error.response);
        alert("登入失敗，請重新登入");
      });
  }
});
