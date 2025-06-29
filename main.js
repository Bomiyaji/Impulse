document.addEventListener("DOMContentLoaded", () => {
  loadQuickNote();
  loadSecureNote();
});

function saveQuickNote() {
  const note = document.getElementById("quickNote").value;
  localStorage.setItem("quickNote", note);
  alert("Quick note saved!");
}

function loadQuickNote() {
  const saved = localStorage.getItem("quickNote");
  if (saved) document.getElementById("quickNote").value = saved;
}

function unlockSecureNote() {
  const pass = document.getElementById("securePassword").value;
  if (pass === "priya57") {
    document.getElementById("secureContent").classList.remove("hidden");
  } else {
    alert("Incorrect password!");
  }
}

function saveSecureNote() {
  const note = document.getElementById("secureNote").value;
  localStorage.setItem("secureNote", note);
  alert("Secure note saved!");
}

function loadSecureNote() {
  const saved = localStorage.getItem("secureNote");
  if (saved) document.getElementById("secureNote").value = saved;
}
// Firebase existing logic (already in your file)...

// Chat message send hone ke baad ye function call hoga
function showSentMessageAnimation() {
  const sentStatus = document.createElement('div');
  sentStatus.innerText = "✅ Sent!";
  sentStatus.classList.add('sent-status');
  document.body.appendChild(sentStatus);

  setTimeout(() => {
    sentStatus.remove();
  }, 1000); // 1 second me hat jayega
}

// Message append hone pe animation lagana
function addMessageToChatbox(messageText, from) {
  const messageDiv = document.createElement('div');
  messageDiv.innerText = messageText;
  messageDiv.className = `chat-message ${from}`;
  messageDiv.classList.add('message-animate'); // animation class add
  document.querySelector('.chatbox').appendChild(messageDiv);
}
