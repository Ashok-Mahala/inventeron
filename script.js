let captcha = "";

function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  captcha = "";

  for (let i = 0; i < 5; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById("captchaText").innerText = captcha;
}

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const userInput = document.getElementById("captchaInput").value;
  const message = document.getElementById("message");

  if (userInput === captcha) {
    message.style.color = "green";
    message.innerText = "Registration successful!";
  } else {
    message.style.color = "red";
    message.innerText = "Incorrect captcha. Try again.";
    generateCaptcha();
  }
});

generateCaptcha();