// HTML Element variables:
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// Check Button functionality:
checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }
  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});

// Regular expressions:
const helpRegex = /please help|assist me/i;
const dollarRegex = /dollars/i;
const denyList = [helpRegex, dollarRegex];

// Spam Check function:
const isSpam = (msg) => denyList.some((regex) => regex.test(msg)); // helpRegex.test(msg);
