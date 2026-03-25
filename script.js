document.addEventListener("DOMContentLoaded", () => {

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
  window.scrollToSection = function(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  // Cursor Glow
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  });

  // ✅ FORM SUBMIT WITH BACKEND
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch("https://portfolio-final-1-683p.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();

      alert(data.message || "Message saved successfully!");
      form.reset();

    } catch (error) {
      console.error(error);
      alert("Error sending message!");
    }
  });

});