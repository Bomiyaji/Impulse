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