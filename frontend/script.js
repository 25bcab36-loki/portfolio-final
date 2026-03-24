// Typing Effect
const text = ["Web Developer", "Frontend Designer", "Creative Coder"];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (charIndex < text[index].length) {
    typingElement.innerHTML += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.innerHTML = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 200);
  }
}

typeEffect();

// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Cursor Glow
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// ✅ FIXED Contact Form Submit
document.querySelector("form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.querySelector("input[type='text']").value;
  const email = document.querySelector("input[type='email']").value;
  const message = document.querySelector("textarea").value;

  try {
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();
    alert(data.message);
  } catch (error) {
    alert("Error sending message!");
  }
});