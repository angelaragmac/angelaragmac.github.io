
const MY_EMAIL = "you@example.com";

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();


const navSound = document.getElementById("nav-sound");
const navLinks = document.querySelectorAll(".nav a");

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !looksLikeEmail || message.length < 5) {
    status.textContent = "Please fill in your name, a valid email, and a short message.";
    return;
  }

  const subject = "Message from " + name;
  const body = message + "\n\nReply to: " + email;
  window.location.href =
    "mailto:" + MY_EMAIL +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  status.textContent = "Opening your email app. Press send there to finish.";
});

document.getElementById("year").textContent = new Date().getFullYear();
